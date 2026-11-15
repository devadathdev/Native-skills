import type { NativeSkill, SkillExecuteParams, SkillResult } from '../types.js';
import { SkillDependencyGraph } from '../graph/dependency-graph.js';

export interface ParallelExecutionOptions {
  maxConcurrency?: number;
  failFast?: boolean;
}

export interface SkillInvocation {
  skill: NativeSkill;
  params: SkillExecuteParams;
}

export interface ParallelExecutionSummary {
  total: number;
  successful: number;
  failed: number;
  durationMs: number;
  results: Map<string, SkillResult>;
}

export class ParallelSkillExecutor {
  constructor(private options: ParallelExecutionOptions = {}) {}

  async executeAll(
    invocations: SkillInvocation[],
    runner: (skill: NativeSkill, params: SkillExecuteParams) => Promise<SkillResult>
  ): Promise<ParallelExecutionSummary> {
    const startTime = Date.now();
    const maxConcurrency = this.options.maxConcurrency || 5;
    const results = new Map<string, SkillResult>();

    // Build dependency graph if any
    const graph = new SkillDependencyGraph();
    for (const inv of invocations) {
      graph.addSkill(inv.skill);
    }

    const order = graph.getExecutionOrder(invocations.map(i => i.skill.manifest.id));
    const invMap = new Map<string, SkillInvocation>();
    for (const inv of invocations) {
      invMap.set(inv.skill.manifest.id, inv);
    }

    // Execute in batches respecting concurrency and order
    const executing = new Set<Promise<void>>();
    let hasFailure = false;

    for (const id of order) {
      if (this.options.failFast && hasFailure) break;
      const inv = invMap.get(id);
      if (!inv) continue;

      if (executing.size >= maxConcurrency) {
        await Promise.race(executing);
      }

      const p: Promise<void> = (async () => {
        try {
          const res = await runner(inv.skill, inv.params);
          results.set(id, res);
          if (!res.success) hasFailure = true;
        } catch (err: any) {
          hasFailure = true;
          results.set(id, {
            success: false,
            error: err.message || String(err),
            metadata: { skillId: id }
          });
        }
      })().finally(() => {
        executing.delete(p);
      });

      executing.add(p);
    }

    await Promise.all(executing);

    let successful = 0;
    let failed = 0;
    for (const res of results.values()) {
      if (res.success) successful++;
      else failed++;
    }

    return {
      total: invocations.length,
      successful,
      failed,
      durationMs: Date.now() - startTime,
      results
    };
  }
}
