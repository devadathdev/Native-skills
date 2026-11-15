import { test } from 'node:test';
import assert from 'node:assert';
import { SkillMdLoader } from '../src/index.js';

test('SkillMdLoader parses frontmatter correctly', () => {
  const md = `---
id: custom-math
name: Custom Math
version: 1.2.0
description: Math utilities
category: utility
triggers:
  - calculate
  - add
permissions:
  - type: api
    scope: ["*"]
---
# Custom Math Skill
Documentation goes here.
`;

  const manifest = SkillMdLoader.parseManifest(md);
  assert.strictEqual(manifest.id, 'custom-math');
  assert.strictEqual(manifest.name, 'Custom Math');
  assert.strictEqual(manifest.version, '1.2.0');
  assert.strictEqual(manifest.category, 'utility');
  assert.deepStrictEqual(manifest.triggers, ['calculate', 'add']);
  assert.strictEqual(manifest.permissions.length, 1);
  assert.strictEqual(manifest.permissions[0].type, 'api');
});

test('SkillMdLoader parses markdown code-block yaml', () => {
  const md = `\`\`\`yaml
id: block-skill
name: Block Skill
version: 2.0.0
\`\`\`
Body
`;

  const manifest = SkillMdLoader.parseManifest(md);
  assert.strictEqual(manifest.id, 'block-skill');
  assert.strictEqual(manifest.name, 'Block Skill');
  assert.strictEqual(manifest.version, '2.0.0');
});

test('SkillMdLoader loads all portable skills from skills directory', async () => {
  const skills = await SkillMdLoader.loadFromDirectory('skills');
  assert.strictEqual(skills.length, 618, `Expected 618 skills loaded from skills directory, found ${skills.length}`);

  for (const s of skills) {
    assert.ok(s.manifest.id, 'Loaded skill must have an ID');
    assert.ok(s.manifest.name, 'Loaded skill must have a name');
    assert.ok(s.manifest.category, 'Loaded skill must have a category');
    assert.ok(s.manifest.triggers && s.manifest.triggers.length > 0, 'Loaded skill must have triggers');
  }
});
