import type { HostAdapters, SkillContext } from '../types.js';
import type { IHostAdapter, HostAdapterMetadata } from './host-adapter.js';

export interface AuraSessionState {
  userId?: string;
  sessionId?: string;
  currentModel?: string;
  history?: Array<{ role: string; content: string }>;
  memories?: string[];
  workspace?: string;
  config?: Record<string, unknown>;
  services?: Record<string, { url: string; available: boolean } | undefined>;
}

export class AuraContextAdapter implements IHostAdapter {
  readonly name = 'aura';
  private connected = true;

  constructor(private state: AuraSessionState = {}) {}

  isAvailable(): boolean {
    return this.connected;
  }

  getMetadata(): HostAdapterMetadata {
    return {
      name: this.name,
      version: '1.0.0',
      description: 'AURA Assistant SkillContext adapter',
      connected: this.connected
    };
  }

  updateSessionState(partial: Partial<AuraSessionState>): void {
    this.state = { ...this.state, ...partial };
  }

  createSkillContext(input: string, adapters?: HostAdapters): SkillContext {
    return {
      userInput: input,
      history: this.state.history || [],
      memories: this.state.memories || [],
      currentModel: this.state.currentModel || 'default',
      timestamp: Date.now(),
      workspace: this.state.workspace || process.cwd(),
      config: this.state.config || {},
      services: this.state.services || {},
      adapters,
      metadata: {
        userId: this.state.userId,
        sessionId: this.state.sessionId
      }
    };
  }

  disconnect(): void {
    this.connected = false;
  }
}
