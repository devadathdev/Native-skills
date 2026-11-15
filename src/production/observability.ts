import type { SkillMetrics } from '../types.js';

export interface ObservabilitySnapshot {
  timestamp: number;
  uptimeSeconds: number;
  totalExecutions: number;
  totalSuccess: number;
  totalErrors: number;
  globalAvgDurationMs: number;
  skills: Record<string, SkillMetrics>;
}

export class ObservabilityManager {
  private startTime = Date.now();
  private metrics = new Map<string, { durations: number[]; successCount: number; errorCount: number; lastExecuted?: number }>();

  recordExecution(skillId: string, durationMs: number, success: boolean): void {
    let entry = this.metrics.get(skillId);
    if (!entry) {
      entry = { durations: [], successCount: 0, errorCount: 0 };
      this.metrics.set(skillId, entry);
    }

    entry.durations.push(durationMs);
    if (entry.durations.length > 500) {
      entry.durations.shift(); // keep sliding window
    }

    if (success) entry.successCount++;
    else entry.errorCount++;

    entry.lastExecuted = Date.now();
  }

  getSkillMetrics(skillId: string): SkillMetrics | undefined {
    const entry = this.metrics.get(skillId);
    if (!entry) return undefined;

    const totalCalls = entry.successCount + entry.errorCount;
    const totalDurationMs = entry.durations.reduce((a, b) => a + b, 0);
    const avgDurationMs = totalCalls > 0 ? Math.round(totalDurationMs / entry.durations.length) : 0;

    const sorted = [...entry.durations].sort((a, b) => a - b);
    const p95Index = Math.floor(sorted.length * 0.95);
    const p95DurationMs = sorted[p95Index] || 0;

    return {
      totalCalls,
      successCount: entry.successCount,
      errorCount: entry.errorCount,
      totalDurationMs,
      avgDurationMs,
      lastExecuted: entry.lastExecuted,
      p95DurationMs
    };
  }

  getSnapshot(): ObservabilitySnapshot {
    let totalExecutions = 0;
    let totalSuccess = 0;
    let totalErrors = 0;
    let totalDurationAll = 0;
    let durationCount = 0;

    const skillsMap: Record<string, SkillMetrics> = {};

    for (const [id, entry] of this.metrics.entries()) {
      const metric = this.getSkillMetrics(id)!;
      skillsMap[id] = metric;
      totalSuccess += entry.successCount;
      totalErrors += entry.errorCount;
      totalExecutions += entry.successCount + entry.errorCount;
      totalDurationAll += entry.durations.reduce((a, b) => a + b, 0);
      durationCount += entry.durations.length;
    }

    return {
      timestamp: Date.now(),
      uptimeSeconds: Math.floor((Date.now() - this.startTime) / 1000),
      totalExecutions,
      totalSuccess,
      totalErrors,
      globalAvgDurationMs: durationCount > 0 ? Math.round(totalDurationAll / durationCount) : 0,
      skills: skillsMap
    };
  }

  reset(): void {
    this.metrics.clear();
    this.startTime = Date.now();
  }
}
