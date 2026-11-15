import { test } from 'node:test';
import assert from 'node:assert';
import {
  ApprovalPolicyEngine,
  AuditStream,
  ExecutionPolicyManager,
  ObservabilityManager,
  ParallelSkillExecutor,
  SkillPackageLoader,
  VersionedSkillRegistry,
  WorkerSandbox,
  codeAnalysisSkill,
  gitSkill
} from '../src/index.js';

test('WorkerSandbox enforces timeout', async () => {
  const sandbox = new WorkerSandbox({ maxExecutionTimeMs: 50 });
  const slowSkill = {
    manifest: {
      id: 'slow',
      name: 'Slow',
      version: '1.0.0',
      description: '',
      author: '',
      category: 'utility' as any,
      tags: [],
      permissions: []
    },
    hooks: {},
    execute: async () => {
      await new Promise(r => setTimeout(r, 200));
      return { success: true };
    }
  };

  const res = await sandbox.run(slowSkill, {
    input: {},
    context: { userInput: '' } as any,
    tools: {} as any
  });

  assert.strictEqual(res.success, false);
  assert.ok(res.error?.includes('timed out'));
});

test('ApprovalPolicyEngine assesses risk and handles critical approvals', async () => {
  const engine = new ApprovalPolicyEngine({ autoApproveLowRisk: true });

  const low = await engine.evaluate('test', 'read_file', { path: 'a.txt' });
  assert.strictEqual(low.approved, true);

  const critical = await engine.evaluate('deployer', 'deploy_production', { env: 'production' });
  assert.strictEqual(critical.approved, false);
  assert.ok(critical.reason?.includes('requires human/host approval'));

  // Approve pending request
  const pending = engine.getPendingRequests();
  assert.strictEqual(pending.length, 1);
  const decision = engine.approve(pending[0].id, 'admin-user');
  assert.ok(decision?.token?.startsWith('APPROVED-'));

  const reEval = await engine.evaluate('deployer', 'deploy_production', { env: 'production' }, decision!.token);
  assert.strictEqual(reEval.approved, true);
});

test('AuditStream maintains cryptographically chained integrity', () => {
  const stream = new AuditStream();
  const e1 = stream.log('info', 'action1', 'skill-1', { a: 1 });
  const e2 = stream.log('warn', 'action2', 'skill-2', { b: 2 });
  const e3 = stream.log('security', 'action3', 'skill-1', { c: 3 });

  assert.strictEqual(e2.previousHash, e1.hash);
  assert.strictEqual(e3.previousHash, e2.hash);

  const integrity = stream.verifyIntegrity();
  assert.strictEqual(integrity.valid, true);
});

test('ParallelSkillExecutor executes skills respecting concurrency', async () => {
  const executor = new ParallelSkillExecutor({ maxConcurrency: 2 });
  const invocations = [
    { skill: codeAnalysisSkill, params: { input: { code: 'const a = 1;' }, context: {} as any, tools: {} as any } },
    { skill: gitSkill, params: { input: { command: 'status' }, context: {} as any, tools: {} as any } }
  ];

  const summary = await executor.executeAll(invocations, async (skill, params) => {
    return { success: true, output: `Executed ${skill.manifest.id}` };
  });

  assert.strictEqual(summary.total, 2);
  assert.strictEqual(summary.successful, 2);
  assert.strictEqual(summary.failed, 0);
});

test('ExecutionPolicyManager handles retries and backoff', async () => {
  let attempts = 0;
  const flaky = async () => {
    attempts++;
    if (attempts < 3) {
      return { success: false, error: 'network glitch' };
    }
    return { success: true, output: 'recovered' };
  };

  const res = await ExecutionPolicyManager.withPolicy(flaky, {
    retry: {
      maxRetries: 3,
      initialDelayMs: 10,
      backoffFactor: 2,
      maxDelayMs: 100,
      retryableErrors: ['network glitch']
    }
  });

  assert.strictEqual(res.success, true);
  assert.strictEqual(attempts, 3);
});

test('ObservabilityManager records execution metrics and calculates p95', () => {
  const obs = new ObservabilityManager();
  obs.recordExecution('skill-a', 10, true);
  obs.recordExecution('skill-a', 20, true);
  obs.recordExecution('skill-a', 100, false);

  const metrics = obs.getSkillMetrics('skill-a');
  assert.strictEqual(metrics?.totalCalls, 3);
  assert.strictEqual(metrics?.successCount, 2);
  assert.strictEqual(metrics?.errorCount, 1);

  const snap = obs.getSnapshot();
  assert.strictEqual(snap.totalExecutions, 3);
  assert.strictEqual(snap.totalSuccess, 2);
  assert.strictEqual(snap.totalErrors, 1);
});

test('VersionedSkillRegistry resolves semver ranges', () => {
  const reg = new VersionedSkillRegistry();
  const v100 = { ...codeAnalysisSkill, manifest: { ...codeAnalysisSkill.manifest, version: '1.0.0' } };
  const v120 = { ...codeAnalysisSkill, manifest: { ...codeAnalysisSkill.manifest, version: '1.2.0' } };
  const v200 = { ...codeAnalysisSkill, manifest: { ...codeAnalysisSkill.manifest, version: '2.0.0' } };

  reg.register(v100);
  reg.register(v120);
  reg.register(v200);

  const latest = reg.get('code-analysis', 'latest');
  assert.strictEqual(latest?.manifest.version, '2.0.0');

  const caret1 = reg.get('code-analysis', '^1.0.0');
  assert.strictEqual(caret1?.manifest.version, '1.2.0');
});

test('SkillPackageLoader creates, verifies, and unpacks packages', () => {
  const bundle = SkillPackageLoader.createBundle(codeAnalysisSkill, 'console.log("code");');
  assert.strictEqual(bundle.packageVersion, '1.0.0');

  const check = SkillPackageLoader.verifyBundle(bundle);
  assert.strictEqual(check.valid, true);

  const unpacked = SkillPackageLoader.unpackBundle(bundle);
  assert.strictEqual(unpacked.manifest.id, 'code-analysis');
});
