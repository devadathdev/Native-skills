export interface HostAdapterMetadata {
  name: string;
  version: string;
  description: string;
  connected: boolean;
}

export interface IHostAdapter {
  readonly name: string;
  isAvailable(): boolean | Promise<boolean>;
  getMetadata(): HostAdapterMetadata;
  disconnect?(): Promise<void> | void;
}

export class HostAdapterRegistry {
  private adapters = new Map<string, IHostAdapter>();

  register(adapter: IHostAdapter): void {
    this.adapters.set(adapter.name, adapter);
  }

  get<T extends IHostAdapter = IHostAdapter>(name: string): T | undefined {
    return this.adapters.get(name) as T | undefined;
  }

  has(name: string): boolean {
    return this.adapters.has(name);
  }

  unregister(name: string): boolean {
    return this.adapters.delete(name);
  }

  list(): HostAdapterMetadata[] {
    return Array.from(this.adapters.values()).map(a => a.getMetadata());
  }

  async isAllAvailable(): Promise<boolean> {
    for (const a of this.adapters.values()) {
      if (!(await a.isAvailable())) return false;
    }
    return true;
  }
}
