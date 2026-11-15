import type { NativeSkill } from '../types.js';
import { coreSkills } from './core/index.js';
import { additionalSkills } from './additional/index.js';
import { extendedSkills } from './extended/index.js';
import { advancedSkills } from './advanced/index.js';
import { ecosystemSkills } from './ecosystem/index.js';
import { expansionSkills } from './expansion/index.js';

export * from './core/index.js';
export * from './additional/index.js';
export * from './extended/index.js';
export * from './advanced/index.js';
export * from './ecosystem/index.js';
export * from './expansion/index.js';

export const allSkills: NativeSkill[] = [
  ...coreSkills,
  ...additionalSkills,
  ...extendedSkills,
  ...advancedSkills,
  ...ecosystemSkills,
  ...expansionSkills
];

export function getSkillById(id: string): NativeSkill | undefined {
  return allSkills.find(s => s.manifest.id === id);
}

export function getSkillsByCategory(category: string): NativeSkill[] {
  return allSkills.filter(s => s.manifest.category === category);
}
