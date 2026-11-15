import fs from 'node:fs/promises';
import path from 'node:path';
import {
  allSkills,
  coreSkills,
  additionalSkills,
  extendedSkills,
  advancedSkills,
  ecosystemSkills,
  expansionSkills
} from '../dist/skills/index.js';

async function main() {
  const skillsDir = path.resolve(process.cwd(), 'skills');
  await fs.mkdir(skillsDir, { recursive: true });

  console.log(`Generating portable skill directories for ${allSkills.length} skills...`);

  // 1. Update skills/catalog.json
  const catalogPath = path.join(skillsDir, 'catalog.json');
  const catalogData = {
    version: '1.0.0',
    totalSkills: allSkills.length,
    coreSkills: coreSkills.map(s => ({
      id: s.manifest.id,
      name: s.manifest.name,
      category: s.manifest.category,
      triggers: s.manifest.triggers || []
    })),
    additionalSkills: additionalSkills.map(s => ({
      id: s.manifest.id,
      name: s.manifest.name,
      category: s.manifest.category,
      triggers: s.manifest.triggers || []
    })),
    extendedSkills: extendedSkills.map(s => ({
      id: s.manifest.id,
      name: s.manifest.name,
      category: s.manifest.category,
      triggers: s.manifest.triggers || []
    })),
    advancedSkills: advancedSkills.map(s => ({
      id: s.manifest.id,
      name: s.manifest.name,
      category: s.manifest.category,
      triggers: s.manifest.triggers || []
    })),
    ecosystemSkills: ecosystemSkills.map(s => ({
      id: s.manifest.id,
      name: s.manifest.name,
      category: s.manifest.category,
      triggers: s.manifest.triggers || []
    })),
    expansionSkills: expansionSkills.map(s => ({
      id: s.manifest.id,
      name: s.manifest.name,
      category: s.manifest.category,
      triggers: s.manifest.triggers || []
    })),
    skills: allSkills.map(s => ({
      id: s.manifest.id,
      name: s.manifest.name,
      version: s.manifest.version,
      category: s.manifest.category,
      description: s.manifest.description,
      triggers: s.manifest.triggers || [],
      permissions: s.manifest.permissions || []
    }))
  };

  await fs.writeFile(catalogPath, JSON.stringify(catalogData, null, 2), 'utf8');
  console.log(`Updated catalog.json at ${catalogPath}`);

  // 2. Generate skills/<id>/SKILL.md for each skill
  for (const skill of allSkills) {
    const m = skill.manifest;
    const skillFolder = path.join(skillsDir, m.id);
    await fs.mkdir(skillFolder, { recursive: true });

    const permsYaml = (m.permissions || []).map(p => {
      const scopeStr = p.scope && p.scope.length > 0 ? `[${p.scope.join(', ')}]` : '[]';
      return `  - type: ${p.type}\n    scope: ${scopeStr}`;
    }).join('\n');

    const triggersYaml = (m.triggers || []).map(t => `  - "${t}"`).join('\n');
    const tagsYaml = (m.tags || []).map(t => `  - "${t}"`).join('\n');

    const entryDir = coreSkills.some(c => c.manifest.id === m.id)
      ? 'core'
      : additionalSkills.some(a => a.manifest.id === m.id)
      ? 'additional'
      : extendedSkills.some(e => e.manifest.id === m.id)
      ? 'extended'
      : advancedSkills.some(ad => ad.manifest.id === m.id)
      ? 'advanced'
      : ecosystemSkills.some(ec => ec.manifest.id === m.id)
      ? 'ecosystem'
      : 'expansion';

    const skillMdContent = `---
id: ${m.id}
name: "${m.name}"
version: ${m.version || '1.0.0'}
description: "${m.description}"
author: "${m.author || 'AURA Team'}"
category: ${m.category}
tags:
${tagsYaml}
triggers:
${triggersYaml}
permissions:
${permsYaml || '  []'}
enabled: true
entryPoint: src/skills/${entryDir}/index.ts
---

# ${m.name}

${m.description}

## Metadata

- **ID:** \`${m.id}\`
- **Category:** \`${m.category}\`
- **Version:** \`${m.version || '1.0.0'}\`
- **Author:** ${m.author || 'AURA Team'}

## Permissions

${(m.permissions || []).map(p => `- \`${p.type}\` (scope: \`${(p.scope || []).join(', ')}\`)${p.description ? ` — ${p.description}` : ''}`).join('\n') || '- None'}

## Triggers

${(m.triggers || []).map(t => `- \`${t}\``).join('\n')}

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

\`\`\`javascript
const result = await runtime.execute('${m.id}', {
  /* input parameters */
});
\`\`\`
`;

    const skillMdPath = path.join(skillFolder, 'SKILL.md');
    await fs.writeFile(skillMdPath, skillMdContent, 'utf8');
  }

  console.log(`Successfully generated ${allSkills.length} SKILL.md manifests in ${skillsDir}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
