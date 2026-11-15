import type { NativeSkill, SkillExecuteParams, SkillResult } from '../types.js';

export interface SandboxConfig {
  maxExecutionTimeMs?: number;
  isolateGlobal?: boolean;
}

export class WorkerSandbox {
  constructor(private config: SandboxConfig = {}) {}

  async run(
    skill: NativeSkill,
    params: SkillExecuteParams
  ): Promise<SkillResult> {
    const timeoutMs = this.config.maxExecutionTimeMs || 30000;
    const startTime = Date.now();

    const executionPromise = (async () => {
      if (typeof skill.execute === 'function') {
        return await skill.execute(params);
      }
      if (skill.hooks.onUserMessage) {
        const res = await skill.hooks.onUserMessage(params.context.userInput, params.context);
        if (res) return res;
      }
      return {
        success: true,
        output: `Skill ${skill.manifest.id} processed successfully.`,
        data: params.input
      };
    })();

    const timeoutPromise = new Promise<SkillResult>((_, reject) => {
      const timer = setTimeout(() => {
        reject(new Error(`Worker execution timed out after ${timeoutMs}ms for skill ${skill.manifest.id}`));
      }, timeoutMs);
      timer.unref?.();
    });

    try {
      const result = await Promise.race([executionPromise, timeoutPromise]);
      return {
        ...result,
        executionTimeMs: Date.now() - startTime
      };
    } catch (err: any) {
      return {
        success: false,
        error: err.message || String(err),
        metadata: {
          skillId: skill.manifest.id,
          timedOut: String(err.message).includes('timed out')
        },
        executionTimeMs: Date.now() - startTime
      };
    }
  }
}
