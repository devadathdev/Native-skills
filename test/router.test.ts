import { test } from 'node:test';
import assert from 'node:assert';
import { NativeSkillRouter } from '../src/index.js';
import { codeAnalysisSkill, gitSkill } from '../src/skills/core/index.js';

test('router matches exact trigger', () => {
  const router = new NativeSkillRouter();
  router.registerMany([codeAnalysisSkill, gitSkill]);

  const matches = router.routeMessage('git status');
  assert.ok(matches.length > 0);
  assert.strictEqual(matches[0].skill.manifest.id, 'git');
  assert.strictEqual(matches[0].matchedTrigger, 'git status');
  assert.strictEqual(matches[0].score, 1.0);
});

test('router matches substring trigger with ranking', () => {
  const router = new NativeSkillRouter();
  router.registerMany([codeAnalysisSkill, gitSkill]);

  const matches = router.routeMessage('can you please review code here');
  assert.ok(matches.length > 0);
  assert.strictEqual(matches[0].skill.manifest.id, 'code-analysis');
  assert.strictEqual(matches[0].matchedTrigger, 'review code');
});

test('router routes commands', () => {
  const router = new NativeSkillRouter();
  router.registerMany([codeAnalysisSkill, gitSkill]);

  const matches = router.routeCommand('/git', ['commit', '-m', 'test']);
  assert.strictEqual(matches.length, 1);
  assert.strictEqual(matches[0].skill.manifest.id, 'git');
  assert.deepStrictEqual(matches[0].params?.args, ['commit', '-m', 'test']);
});
