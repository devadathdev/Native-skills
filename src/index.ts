export * from './types.js';
export * from './runtime.js';
export * from './builtins.js';

import {NativeSkillRuntime} from './runtime.js';
import {builtInSkills} from './builtins.js';

export function createAuraNativeRuntime():NativeSkillRuntime {
  const runtime=new NativeSkillRuntime();
  runtime.registerMany(builtInSkills);
  return runtime;
}
