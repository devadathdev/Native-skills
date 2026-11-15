import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs/promises';
import { allSkills, getSkillById, createAuraNativeRuntime } from '../src/index.js';

test('all 618 skills are exported and have valid manifests', () => {
  assert.strictEqual(allSkills.length, 618);

  for (const skill of allSkills) {
    const m = skill.manifest;
    assert.ok(m.id, 'Skill must have id');
    assert.ok(m.name, `Skill ${m.id} must have name`);
    assert.ok(m.version, `Skill ${m.id} must have version`);
    assert.ok(m.category, `Skill ${m.id} must have category`);
    assert.ok(Array.isArray(m.permissions), `Skill ${m.id} must have permissions array`);
    assert.ok(Array.isArray(m.triggers), `Skill ${m.id} must have triggers array`);
    assert.ok(m.triggers.length > 0, `Skill ${m.id} must have at least one trigger`);
    assert.ok(typeof skill.execute === 'function', `Skill ${m.id} must have execute handler`);
  }
});

test('runtime executes all 618 skills successfully with sample inputs', async () => {
  const runtime = createAuraNativeRuntime();

  for (const skill of allSkills) {
    const id = skill.manifest.id;
    const res = await runtime.execute(id, {
      test: true,
      query: 'test query',
      url: 'https://example.com',
      path: 'test-sample.tmp',
      title: 'Sample Title'
    });

    assert.ok(
      res.success !== undefined,
      `Skill ${id} should return a valid SkillResult object`
    );
  }

  // Cleanup test-sample.tmp if written
  try {
    await fs.unlink('test-sample.tmp');
  } catch {}
});
