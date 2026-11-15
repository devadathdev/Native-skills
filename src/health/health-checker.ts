import type { HealthCheckReport, HealthStatus, NativeSkill, RuntimeTools, HostAdapters } from '../types.js';

export class SkillHealthChecker {
  static async checkSkill(
    skill: NativeSkill,
    options: {
      registeredSkillIds?: Set<string>;
      tools?: Partial<RuntimeTools>;
      adapters?: HostAdapters;
      workspace?: string;
    } = {}
  ): Promise<HealthCheckReport> {
    const checks: Record<string, { ok: boolean; message?: string }> = {};
    let hasFailures = false;
    let hasWarnings = false;

    // 1. Manifest structure check
    const m = skill.manifest;
    if (!m.id || !m.name || !m.version) {
      checks['manifest'] = { ok: false, message: 'Missing essential manifest fields (id, name, version)' };
      hasFailures = true;
    } else {
      checks['manifest'] = { ok: true };
    }

    // 2. Dependencies check
    if (m.dependencies && m.dependencies.length > 0) {
      const missingDeps = options.registeredSkillIds
        ? m.dependencies.filter(d => !options.registeredSkillIds!.has(d))
        : [];
      if (missingDeps.length > 0) {
        checks['dependencies'] = {
          ok: false,
          message: `Missing required dependencies: ${missingDeps.join(', ')}`
        };
        hasFailures = true;
      } else {
        checks['dependencies'] = { ok: true };
      }
    }

    // 3. Permissions & Required Adapters/Tools
    for (const perm of m.permissions || []) {
      switch (perm.type) {
        case 'filesystem':
          if (options.tools?.fs && options.workspace) {
            try {
              const exists = await options.tools.fs.exists('.');
              checks['tool:fs'] = { ok: exists, message: exists ? undefined : 'Workspace root unavailable' };
            } catch (err) {
              checks['tool:fs'] = { ok: false, message: String(err) };
              hasWarnings = true;
            }
          }
          break;
        case 'network':
          if (options.tools && !options.tools.web) {
            checks['tool:web'] = { ok: false, message: 'Web tool not provided for network permission' };
            hasWarnings = true;
          }
          break;
        case 'shell':
          if (options.tools && !options.tools.shell) {
            checks['tool:shell'] = { ok: false, message: 'Shell tool not provided' };
            hasWarnings = true;
          }
          break;
        case 'model':
          if (options.adapters && !options.adapters.model) {
            checks['adapter:model'] = { ok: false, message: 'Model host adapter not connected' };
            hasWarnings = true;
          }
          break;
        case 'memory':
          if (options.adapters && !options.adapters.memory) {
            checks['adapter:memory'] = { ok: false, message: 'Memory host adapter not connected' };
            hasWarnings = true;
          }
          break;
        case 'api':
          // API check passed
          checks['permission:api'] = { ok: true };
          break;
        case 'database':
          if (options.adapters && !(options.adapters as any).database) {
            checks['adapter:database'] = { ok: false, message: 'Database host adapter not connected' };
            hasWarnings = true;
          }
          break;
      }
    }

    let status: HealthStatus = 'healthy';
    if (hasFailures) {
      status = 'unhealthy';
    } else if (hasWarnings) {
      status = 'degraded';
    }

    return {
      skillId: m.id,
      status,
      timestamp: Date.now(),
      checks,
      message:
        status === 'healthy'
          ? 'Skill is fully operational'
          : status === 'degraded'
          ? 'Skill has degraded capabilities or missing optional adapters'
          : 'Skill has missing dependencies or broken requirements'
    };
  }

  static async checkAll(
    skills: NativeSkill[],
    options: {
      tools?: Partial<RuntimeTools>;
      adapters?: HostAdapters;
      workspace?: string;
    } = {}
  ): Promise<Record<string, HealthCheckReport>> {
    const registeredIds = new Set(skills.map(s => s.manifest.id));
    const reports: Record<string, HealthCheckReport> = {};

    for (const skill of skills) {
      reports[skill.manifest.id] = await SkillHealthChecker.checkSkill(skill, {
        ...options,
        registeredSkillIds: registeredIds
      });
    }

    return reports;
  }
}
