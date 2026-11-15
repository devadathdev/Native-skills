import type { IHostAdapter, HostAdapterMetadata } from './host-adapter.js';

export interface ModelPromptOptions {
  model?: string;
  system?: string;
  temperature?: number;
  maxTokens?: number;
  responseFormat?: 'text' | 'json';
}

export interface ModelCompletionResponse {
  content: string;
  model: string;
  usage: { promptTokens: number; completionTokens: number; totalTokens: number };
}

export class ModelAdapter implements IHostAdapter {
  readonly name = 'model';
  private connected = true;
  private defaultModel: string;

  constructor(options: { defaultModel?: string } = {}) {
    this.defaultModel = options.defaultModel || 'gemini-2.5-pro';
  }

  isAvailable(): boolean {
    return this.connected;
  }

  getMetadata(): HostAdapterMetadata {
    return {
      name: this.name,
      version: '1.0.0',
      description: 'Model routing and AI inference adapter',
      connected: this.connected
    };
  }

  selectModel(taskHint: string): string {
    const hint = taskHint.toLowerCase();
    if (hint.includes('code') || hint.includes('refactor') || hint.includes('architecture')) {
      return 'gemini-2.5-pro';
    }
    if (hint.includes('fast') || hint.includes('summary') || hint.includes('classify')) {
      return 'gemini-2.5-flash';
    }
    return this.defaultModel;
  }

  async complete(prompt: string, options: ModelPromptOptions = {}): Promise<ModelCompletionResponse> {
    const model = options.model || this.selectModel(prompt);
    return {
      content: `[AI generated response using ${model}]: Synthesis completed for prompt.`,
      model,
      usage: {
        promptTokens: Math.ceil(prompt.length / 4),
        completionTokens: 25,
        totalTokens: Math.ceil(prompt.length / 4) + 25
      }
    };
  }

  async embed(text: string): Promise<number[]> {
    // Generate deterministic pseudo-embedding vector of 16 dims for testing/mocking
    const vec: number[] = [];
    for (let i = 0; i < 16; i++) {
      vec.push(Math.sin(text.length * (i + 1)));
    }
    return vec;
  }

  disconnect(): void {
    this.connected = false;
  }
}
