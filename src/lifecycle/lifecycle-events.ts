import type { NativeSkill, SkillContext, SkillExecuteParams, SkillResult } from '../types.js';

export type LifecycleEventName =
  | 'skill:registered'
  | 'skill:unregistered'
  | 'skill:beforeInit'
  | 'skill:init'
  | 'skill:beforeExecute'
  | 'skill:afterExecute'
  | 'skill:error'
  | 'skill:shutdown'
  | 'skill:configChange';

export interface LifecycleEventPayloads {
  'skill:registered': { skill: NativeSkill };
  'skill:unregistered': { skillId: string };
  'skill:beforeInit': { skill: NativeSkill; context: SkillContext };
  'skill:init': { skill: NativeSkill; context: SkillContext };
  'skill:beforeExecute': { skillId: string; params: SkillExecuteParams };
  'skill:afterExecute': { skillId: string; params: SkillExecuteParams; result: SkillResult };
  'skill:error': { skillId: string; error: Error; context?: SkillContext };
  'skill:shutdown': { context?: SkillContext };
  'skill:configChange': { skillId: string; config: Record<string, unknown> };
}

export type LifecycleListener<T extends LifecycleEventName> = (
  payload: LifecycleEventPayloads[T]
) => Promise<void> | void;

export type ExecutionInterceptor = (
  skillId: string,
  params: SkillExecuteParams,
  next: () => Promise<SkillResult>
) => Promise<SkillResult>;

export class SkillLifecycleManager {
  private listeners = new Map<LifecycleEventName, Set<LifecycleListener<any>>>();
  private interceptors: ExecutionInterceptor[] = [];

  on<T extends LifecycleEventName>(event: T, listener: LifecycleListener<T>): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(listener);
    return () => this.off(event, listener);
  }

  off<T extends LifecycleEventName>(event: T, listener: LifecycleListener<T>): void {
    this.listeners.get(event)?.delete(listener);
  }

  use(interceptor: ExecutionInterceptor): void {
    this.interceptors.push(interceptor);
  }

  async emit<T extends LifecycleEventName>(
    event: T,
    payload: LifecycleEventPayloads[T]
  ): Promise<void> {
    const list = this.listeners.get(event);
    if (!list || list.size === 0) return;
    for (const listener of list) {
      try {
        await listener(payload);
      } catch (err) {
        console.error(`Error in lifecycle listener for event '${event}':`, err);
      }
    }
  }

  async runWithInterceptors(
    skillId: string,
    params: SkillExecuteParams,
    coreExecute: () => Promise<SkillResult>
  ): Promise<SkillResult> {
    let index = 0;
    const next = async (): Promise<SkillResult> => {
      if (index < this.interceptors.length) {
        const interceptor = this.interceptors[index++];
        return interceptor(skillId, params, next);
      }
      return coreExecute();
    };
    return next();
  }
}
