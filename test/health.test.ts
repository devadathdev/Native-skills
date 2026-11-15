import { test } from 'node:test';
import assert from 'node:assert';
import { SkillHealthChecker } from '../src/index.js';
import { filesystemSkill, sqlSkill } from '../src/skills/index.js';

test('SkillHealthChecker assesses healthy skill', async () => {
  const report = await SkillHealthChecker.checkSkill(filesystemSkill, {
    tools: {
      fs: {
        read: async () => '',
        write: async () => '',
        exists: async () => true,
        list: async () => [],
        safePath: (p: string) => p
      }
    },
    workspace: process.cwd()
  });

  assert.strictEqual(report.status, 'healthy');
  assert.strictEqual(report.checks['manifest'].ok, true);
});

test('SkillHealthChecker detects missing adapters as degraded', async () => {
  const report = await SkillHealthChecker.checkSkill(sqlSkill, {
    adapters: {} // no database adapter
  });

  assert.strictEqual(report.status, 'degraded');
  assert.strictEqual(report.checks['adapter:database'].ok, false);
});
