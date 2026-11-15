import type { ExecutionPolicy, RetryPolicy, SkillResult } from '../types.js';

export class ExecutionPolicyManager {
  static async withPolicy<T extends SkillResult>(
    fn: () => Promise<T>,
    policy: ExecutionPolicy = {}
  ): Promise<T> {
    const timeoutMs = policy.timeoutMs;
    const retry = policy.retry;

    if (!retry || retry.maxRetries <= 0) {
      return ExecutionPolicyManager.withTimeout(fn, timeoutMs);
    }

    return ExecutionPolicyManager.withRetry(fn, retry, timeoutMs);
  }

  static async withTimeout<T extends SkillResult>(
    fn: () => Promise<T>,
    timeoutMs?: number
  ): Promise<T> {
    if (!timeoutMs || timeoutMs <= 0) return fn();

    let timer: NodeJS.Timeout;
    const timeoutPromise = new Promise<never>((_, reject) => {
      timer = setTimeout(() => {
        reject(new Error(`Execution timed out after ${timeoutMs}ms`));
      }, timeoutMs);
      timer.unref?.();
    });

    try {
      const result = await Promise.race([fn(), timeoutPromise]);
      clearTimeout(timer!);
      return result;
    } catch (err) {
      clearTimeout(timer!);
      throw err;
    }
  }

  static async withRetry<T extends SkillResult>(
    fn: () => Promise<T>,
    retry: RetryPolicy,
    timeoutMs?: number
  ): Promise<T> {
    let attempt = 0;
    let delay = retry.initialDelayMs || 100;
    const maxDelay = retry.maxDelayMs || 5000;
    const factor = retry.backoffFactor || 2;

    while (true) {
      try {
        const result = await ExecutionPolicyManager.withTimeout(fn, timeoutMs);
        if (result.success || attempt >= retry.maxRetries) {
          return result;
        }

        if (
          retry.retryableErrors &&
          retry.retryableErrors.length > 0 &&
          result.error &&
          !retry.retryableErrors.some(e => result.error!.includes(e))
        ) {
          return result; // Not retryable
        }
      } catch (err: any) {
        if (attempt >= retry.maxRetries) {
          throw err;
        }
        if (
          retry.retryableErrors &&
          retry.retryableErrors.length > 0 &&
          !retry.retryableErrors.some(e => String(err).includes(e))
        ) {
          throw err;
        }
      }

      attempt++;
      const jitter = Math.random() * 50;
      await new Promise(r => setTimeout(r, Math.min(delay + jitter, maxDelay)));
      delay *= factor;
    }
  }
}
