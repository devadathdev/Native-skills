import { test } from 'node:test';
import assert from 'node:assert';
import path from 'node:path';
import { createAuraNativeRuntime, NativeSkillRuntime, PermissionGate } from '../src/index.js';

test('createAuraNativeRuntime registers all cataloged skills and default adapters', async () => {
  const runtime = createAuraNativeRuntime();
  const list = runtime.list();

  assert.strictEqual(list.length, 618, `Expected 618 skills, found ${list.length}`);
  assert.ok(runtime.adapters.has('aura'), 'Aura adapter should be registered');
  assert.ok(runtime.adapters.has('forge'), 'Forge adapter should be registered');
  assert.ok(runtime.adapters.has('sentinel'), 'Sentinel adapter should be registered');
  assert.ok(runtime.adapters.has('github'), 'GitHub adapter should be registered');
  assert.ok(runtime.adapters.has('model'), 'Model adapter should be registered');
  assert.ok(runtime.adapters.has('memory'), 'Memory adapter should be registered');
  assert.ok(runtime.adapters.has('browser'), 'Browser adapter should be registered');
});

test('runtime safePath prevents escaping workspace boundary', () => {
  const runtime = new NativeSkillRuntime({ workspace: process.cwd() });

  const safe = runtime.safePath('package.json');
  assert.strictEqual(safe, path.resolve(process.cwd(), 'package.json'));

  assert.throws(() => {
    runtime.safePath('../../../sensitive.txt');
  }, /Path escapes workspace boundary/);
});

test('runtime executes core code-analysis skill', async () => {
  const runtime = createAuraNativeRuntime();
  const res = await runtime.execute('code-analysis', {
    code: 'const x = 1;\nconsole.log(x);\neval("2 + 2");'
  });

  assert.strictEqual(res.success, true);
  assert.ok(res.output?.includes('Code analysis completed'));
  const data = res.data as any;
  assert.strictEqual(data.linesCount, 3);
  assert.ok(data.issues.length >= 2);
  assert.strictEqual(data.passed, false, 'Should fail because eval is critical');
});

test('runtime executes filesystem skill securely', async () => {
  const runtime = createAuraNativeRuntime();
  const res = await runtime.execute('filesystem', {
    action: 'read',
    path: 'package.json'
  });

  assert.strictEqual(res.success, true);
  assert.ok(res.output?.includes('@aura/native-skills'));
});

test('runtime processUserMessage routes conversational requests', async () => {
  const runtime = createAuraNativeRuntime();
  const results = await runtime.processUserMessage('please review code in my project');

  assert.ok(results.length > 0, 'Should route to at least one skill');
  assert.strictEqual(results[0].success, true);
});

test('runtime processCommand routes slash commands', async () => {
  const runtime = createAuraNativeRuntime();
  const results = await runtime.processCommand('git', ['status']);

  assert.ok(results.length > 0);
  assert.ok(results[0].data);
});

test('permission gate rejects unauthorized operations', async () => {
  const gate = new PermissionGate();
  // Restrict filesystem to read only
  gate.allowPermission('filesystem', 'read');

  const runtime = createAuraNativeRuntime({ permissions: gate });
  // notes requires filesystem write
  const res = await runtime.execute('notes', {
    path: 'test-note.txt',
    content: 'hello'
  });

  assert.strictEqual(res.success, false);
  assert.ok(res.error?.includes('requires permission'));
});
