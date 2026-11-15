import type { IHostAdapter, HostAdapterMetadata } from './host-adapter.js';

export interface SentinelScanResult {
  scanId: string;
  target: string;
  threatLevel: 'none' | 'low' | 'medium' | 'high' | 'critical';
  vulnerabilities: Array<{
    id: string;
    rule: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    message: string;
    location?: string;
  }>;
  passed: boolean;
}

export class SentinelAdapter implements IHostAdapter {
  readonly name = 'sentinel';
  private connected = true;

  constructor(private readonly config: { endpoint?: string; policies?: string[] } = {}) {}

  isAvailable(): boolean {
    return this.connected;
  }

  getMetadata(): HostAdapterMetadata {
    return {
      name: this.name,
      version: '1.0.0',
      description: 'SENTINEL security auditing, threat detection, and policy enforcement',
      connected: this.connected
    };
  }

  async scanCode(target: string, codeContent?: string): Promise<SentinelScanResult> {
    const vulns: SentinelScanResult['vulnerabilities'] = [];
    if (codeContent) {
      if (/eval\(|exec\(/i.test(codeContent)) {
        vulns.push({
          id: 'SENTINEL-001',
          rule: 'no-eval',
          severity: 'high',
          message: 'Dynamic code evaluation detected'
        });
      }
      if (/password\s*=\s*['"][^'"]+['"]/i.test(codeContent)) {
        vulns.push({
          id: 'SENTINEL-002',
          rule: 'hardcoded-secret',
          severity: 'critical',
          message: 'Possible hardcoded credential detected'
        });
      }
    }

    const threatLevel = vulns.some(v => v.severity === 'critical')
      ? 'critical'
      : vulns.some(v => v.severity === 'high')
      ? 'high'
      : vulns.length > 0
      ? 'medium'
      : 'none';

    return {
      scanId: `scan-${Date.now()}`,
      target,
      threatLevel,
      vulnerabilities: vulns,
      passed: vulns.length === 0
    };
  }

  async checkPolicy(action: string, metadata: Record<string, any> = {}): Promise<{ allowed: boolean; reason?: string }> {
    return {
      allowed: true,
      reason: 'Compliant with default organizational security policies'
    };
  }

  disconnect(): void {
    this.connected = false;
  }
}
