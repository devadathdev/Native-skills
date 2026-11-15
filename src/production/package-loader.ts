import crypto from 'node:crypto';
import type { NativeSkill, SkillManifest } from '../types.js';

export interface SkillPackageBundle {
  packageVersion: '1.0.0';
  manifest: SkillManifest;
  sourceCode?: string;
  checksum: string;
  packagedAt: number;
  publisher?: string;
}

export class SkillPackageLoader {
  static createBundle(skill: NativeSkill, sourceCode = '', publisher = 'aura-registry'): SkillPackageBundle {
    const manifest = skill.manifest;
    const packagedAt = Date.now();
    const rawContent = JSON.stringify({ manifest, sourceCode, packagedAt });
    const checksum = crypto.createHash('sha256').update(rawContent).digest('hex');

    return {
      packageVersion: '1.0.0',
      manifest,
      sourceCode,
      checksum,
      packagedAt,
      publisher
    };
  }

  static verifyBundle(bundle: SkillPackageBundle): { valid: boolean; reason?: string } {
    if (bundle.packageVersion !== '1.0.0') {
      return { valid: false, reason: `Unsupported package version: ${bundle.packageVersion}` };
    }
    if (!bundle.manifest || !bundle.manifest.id) {
      return { valid: false, reason: 'Missing skill manifest or id' };
    }

    const rawContent = JSON.stringify({
      manifest: bundle.manifest,
      sourceCode: bundle.sourceCode || '',
      packagedAt: bundle.packagedAt
    });
    const expectedChecksum = crypto.createHash('sha256').update(rawContent).digest('hex');

    if (expectedChecksum !== bundle.checksum) {
      return { valid: false, reason: 'Checksum mismatch: package has been tampered with or corrupted' };
    }

    return { valid: true };
  }

  static unpackBundle(bundle: SkillPackageBundle): NativeSkill {
    const verification = SkillPackageLoader.verifyBundle(bundle);
    if (!verification.valid) {
      throw new Error(`Failed to unpack skill package: ${verification.reason}`);
    }

    const manifest = bundle.manifest;
    return {
      manifest,
      hooks: {
        onUserMessage: async input => ({
          success: true,
          output: `Packaged skill ${manifest.name} executed for input.`,
          data: { input }
        }),
        onCommand: async (cmd, args) => ({
          success: true,
          output: `Packaged skill ${manifest.name} executed command: ${cmd} ${args.join(' ')}`
        })
      },
      execute: async ({ input }) => ({
        success: true,
        output: `Executed packaged skill ${manifest.name}`,
        data: { input, manifest }
      })
    };
  }
}
