import type { NativeSkill, SkillManifest } from '../types.js';

export interface SkillVersionMetadata {
  skill: NativeSkill;
  version: string;
  deprecated?: boolean;
  deprecationReason?: string;
  registeredAt: number;
}

export class VersionedSkillRegistry {
  private registry = new Map<string, Map<string, SkillVersionMetadata>>();

  register(skill: NativeSkill, options: { deprecated?: boolean; deprecationReason?: string } = {}): void {
    const id = skill.manifest.id;
    const version = skill.manifest.version || '1.0.0';

    if (!this.registry.has(id)) {
      this.registry.set(id, new Map());
    }

    this.registry.get(id)!.set(version, {
      skill,
      version,
      deprecated: options.deprecated,
      deprecationReason: options.deprecationReason,
      registeredAt: Date.now()
    });
  }

  get(id: string, versionRange = 'latest'): NativeSkill | undefined {
    const versions = this.registry.get(id);
    if (!versions || versions.size === 0) return undefined;

    if (versionRange === 'latest') {
      const sorted = Array.from(versions.keys()).sort(VersionedSkillRegistry.compareSemver);
      const latestVer = sorted[sorted.length - 1];
      return versions.get(latestVer)?.skill;
    }

    if (versions.has(versionRange)) {
      return versions.get(versionRange)?.skill;
    }

    // Caret matching: ^1.2.0 matches highest 1.x.x >= 1.2.0
    if (versionRange.startsWith('^')) {
      const base = versionRange.slice(1);
      const [bMajor, bMinor] = base.split('.').map(Number);
      const matches = Array.from(versions.keys())
        .filter(v => {
          const [vMaj, vMin] = v.split('.').map(Number);
          return vMaj === bMajor && (vMin > bMinor || (vMin === bMinor && VersionedSkillRegistry.compareSemver(v, base) >= 0));
        })
        .sort(VersionedSkillRegistry.compareSemver);

      if (matches.length > 0) {
        return versions.get(matches[matches.length - 1])?.skill;
      }
    }

    // Tilde matching: ~1.2.0 matches highest 1.2.x >= 1.2.0
    if (versionRange.startsWith('~')) {
      const base = versionRange.slice(1);
      const [bMajor, bMinor] = base.split('.').map(Number);
      const matches = Array.from(versions.keys())
        .filter(v => {
          const [vMaj, vMin] = v.split('.').map(Number);
          return vMaj === bMajor && vMin === bMinor && VersionedSkillRegistry.compareSemver(v, base) >= 0;
        })
        .sort(VersionedSkillRegistry.compareSemver);

      if (matches.length > 0) {
        return versions.get(matches[matches.length - 1])?.skill;
      }
    }

    return undefined;
  }

  listVersions(id: string): string[] {
    const versions = this.registry.get(id);
    if (!versions) return [];
    return Array.from(versions.keys()).sort(VersionedSkillRegistry.compareSemver);
  }

  listAll(): SkillManifest[] {
    const list: SkillManifest[] = [];
    for (const [id, versions] of this.registry.entries()) {
      const latest = this.get(id, 'latest');
      if (latest) list.push(latest.manifest);
    }
    return list;
  }

  static compareSemver(a: string, b: string): number {
    const pa = a.replace(/[^0-9.]/g, '').split('.').map(Number);
    const pb = b.replace(/[^0-9.]/g, '').split('.').map(Number);
    for (let i = 0; i < 3; i++) {
      const na = pa[i] || 0;
      const nb = pb[i] || 0;
      if (na > nb) return 1;
      if (na < nb) return -1;
    }
    return 0;
  }
}
