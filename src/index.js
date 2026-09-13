export { NativeSkillRuntime, createSkill } from './native-skill-runtime.js';
export { additionalSkills } from './skills/additional.js';

export function createAuraNativeRuntime(options = {}) {
  const runtime = new NativeSkillRuntime(options);
  runtime.registerMany(additionalSkills);
  return runtime;
}
