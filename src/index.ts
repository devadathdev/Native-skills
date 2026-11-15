export * from './types.js';
export * from './runtime.js';
export * from './builtins.js';
export * from './skills/index.js';
export * from './router/skill-router.js';
export * from './loader/skill-md-loader.js';
export * from './graph/dependency-graph.js';
export * from './validation/schema-validator.js';
export * from './lifecycle/lifecycle-events.js';
export * from './health/health-checker.js';

// Adapters
export * from './adapters/host-adapter.js';
export * from './adapters/aura-context-adapter.js';
export * from './adapters/forge-adapter.js';
export * from './adapters/sentinel-adapter.js';
export * from './adapters/github-adapter.js';
export * from './adapters/model-adapter.js';
export * from './adapters/memory-adapter.js';
export * from './adapters/browser-adapter.js';

// Production V1.0
export * from './production/worker-sandbox.js';
export * from './production/approval-policy.js';
export * from './production/audit-stream.js';
export * from './production/parallel-executor.js';
export * from './production/execution-policy.js';
export * from './production/observability.js';
export * from './production/versioned-registry.js';
export * from './production/package-loader.js';

import { NativeSkillRuntime, RuntimeOptions } from './runtime.js';
import { builtInSkills } from './builtins.js';
import { AuraContextAdapter } from './adapters/aura-context-adapter.js';
import { ForgeAdapter } from './adapters/forge-adapter.js';
import { SentinelAdapter } from './adapters/sentinel-adapter.js';
import { GitHubAdapter } from './adapters/github-adapter.js';
import { ModelAdapter } from './adapters/model-adapter.js';
import { MemoryAdapter } from './adapters/memory-adapter.js';
import { BrowserAdapter } from './adapters/browser-adapter.js';

export function createAuraNativeRuntime(options: RuntimeOptions = {}): NativeSkillRuntime {
  const runtime = new NativeSkillRuntime(options);

  // Register default host adapters
  runtime.adapters.register(new AuraContextAdapter({ workspace: runtime.workspace }));
  runtime.adapters.register(new ForgeAdapter());
  runtime.adapters.register(new SentinelAdapter());
  runtime.adapters.register(new GitHubAdapter());
  runtime.adapters.register(new ModelAdapter());
  runtime.adapters.register(new MemoryAdapter());
  runtime.adapters.register(new BrowserAdapter());

  // Register all 43 cataloged built-in skills
  runtime.registerMany(builtInSkills);

  return runtime;
}
