import type { IHostAdapter, HostAdapterMetadata } from './host-adapter.js';

export interface BrowserAction {
  type: 'navigate' | 'click' | 'type' | 'screenshot' | 'extract' | 'wait';
  selector?: string;
  url?: string;
  text?: string;
  timeoutMs?: number;
}

export interface BrowserActionResult {
  action: BrowserAction;
  success: boolean;
  data?: unknown;
  error?: string;
}

export class BrowserAdapter implements IHostAdapter {
  readonly name = 'browser';
  private connected = true;

  constructor(private readonly options: { headless?: boolean } = {}) {}

  isAvailable(): boolean {
    return this.connected;
  }

  getMetadata(): HostAdapterMetadata {
    return {
      name: this.name,
      version: '1.0.0',
      description: 'Controlled headless browser automation adapter',
      connected: this.connected
    };
  }

  async executeActions(actions: BrowserAction[]): Promise<BrowserActionResult[]> {
    const results: BrowserActionResult[] = [];
    for (const action of actions) {
      if (action.type === 'navigate' && !action.url) {
        results.push({ action, success: false, error: 'URL required for navigate action' });
      } else {
        results.push({
          action,
          success: true,
          data: { status: 200, title: 'Simulated Page', url: action.url || 'https://aura.local' }
        });
      }
    }
    return results;
  }

  async screenshot(url?: string): Promise<{ base64: string; mimeType: string }> {
    return {
      base64: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=',
      mimeType: 'image/png'
    };
  }

  disconnect(): void {
    this.connected = false;
  }
}
