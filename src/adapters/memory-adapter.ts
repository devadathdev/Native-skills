import type { IHostAdapter, HostAdapterMetadata } from './host-adapter.js';

export interface MemoryEntry {
  key: string;
  value: unknown;
  tags?: string[];
  updatedAt: number;
}

export class MemoryAdapter implements IHostAdapter {
  readonly name = 'memory';
  private connected = true;
  private store = new Map<string, MemoryEntry>();

  isAvailable(): boolean {
    return this.connected;
  }

  getMetadata(): HostAdapterMetadata {
    return {
      name: this.name,
      version: '1.0.0',
      description: 'AURA persistent, episodic, and semantic memory adapter',
      connected: this.connected
    };
  }

  async set(key: string, value: unknown, tags: string[] = []): Promise<void> {
    this.store.set(key, {
      key,
      value,
      tags,
      updatedAt: Date.now()
    });
  }

  async get<T = unknown>(key: string): Promise<T | null> {
    const entry = this.store.get(key);
    return entry ? (entry.value as T) : null;
  }

  async delete(key: string): Promise<boolean> {
    return this.store.delete(key);
  }

  async search(query: string): Promise<MemoryEntry[]> {
    const q = query.toLowerCase();
    const results: MemoryEntry[] = [];
    for (const entry of this.store.values()) {
      if (
        entry.key.toLowerCase().includes(q) ||
        (entry.tags && entry.tags.some(t => t.toLowerCase().includes(q))) ||
        (typeof entry.value === 'string' && entry.value.toLowerCase().includes(q))
      ) {
        results.push(entry);
      }
    }
    return results;
  }

  async clear(): Promise<void> {
    this.store.clear();
  }

  disconnect(): void {
    this.connected = false;
  }
}
