import fs from 'node:fs/promises';
import path from 'node:path';
import type { NativeSkill, SkillCategory, SkillManifest, SkillPermission } from '../types.js';

export interface ParsedSkillMd {
  manifest: SkillManifest;
  content: string;
}

export class SkillMdLoader {
  static parseFrontmatter(markdown: string): { frontmatter: Record<string, any>; body: string } {
    const trimmed = markdown.trim();
    if (!trimmed.startsWith('---')) {
      // Check for code fence with yaml or json
      const yamlFenceMatch = trimmed.match(/^```(?:ya?ml|json)?\s*\n([\s\S]*?)\n```/i);
      if (yamlFenceMatch) {
        return {
          frontmatter: SkillMdLoader.parseSimpleYaml(yamlFenceMatch[1]),
          body: trimmed.slice(yamlFenceMatch[0].length).trim()
        };
      }
      return { frontmatter: {}, body: trimmed };
    }

    const endIdx = trimmed.indexOf('---', 3);
    if (endIdx === -1) {
      return { frontmatter: {}, body: trimmed };
    }

    const frontmatterBlock = trimmed.slice(3, endIdx).trim();
    const body = trimmed.slice(endIdx + 3).trim();
    return {
      frontmatter: SkillMdLoader.parseSimpleYaml(frontmatterBlock),
      body
    };
  }

  static parseSimpleYaml(yamlStr: string): Record<string, any> {
    const result: Record<string, any> = {};
    const lines = yamlStr.split('\n');
    let currentKey = '';
    let currentList: any[] | null = null;
    let inPermissions = false;
    let currentPermission: Partial<SkillPermission> | null = null;

    for (let rawLine of lines) {
      const line = rawLine.trimEnd();
      if (!line || line.trim().startsWith('#')) continue;

      const trimmed = line.trim();

      // List item
      if (trimmed.startsWith('- ')) {
        const itemVal = trimmed.slice(2).trim();
        if (inPermissions && currentKey === 'permissions') {
          if (itemVal.startsWith('type:')) {
            currentPermission = { type: itemVal.replace('type:', '').trim() as any, scope: [] };
            if (!result.permissions) result.permissions = [];
            result.permissions.push(currentPermission);
          } else if (currentPermission) {
            // handle simple list item inside permission
            currentPermission.scope = currentPermission.scope || [];
            currentPermission.scope.push(itemVal.replace(/['"]/g, ''));
          }
        } else if (currentList) {
          currentList.push(SkillMdLoader.parseValue(itemVal));
        }
        continue;
      }

      // Key-value pair
      const colonIdx = line.indexOf(':');
      if (colonIdx !== -1) {
        const key = line.slice(0, colonIdx).trim();
        const value = line.slice(colonIdx + 1).trim();

        if (key === 'permissions') {
          inPermissions = true;
          currentKey = 'permissions';
          result.permissions = result.permissions || [];
          continue;
        } else if (inPermissions && key === 'scope' && currentPermission) {
          if (value.startsWith('[') && value.endsWith(']')) {
            const inner = value.slice(1, -1).trim();
            currentPermission.scope = inner ? inner.split(',').map(s => String(SkillMdLoader.parseValue(s.trim()))) : [];
          } else if (value) {
            currentPermission.scope = [String(SkillMdLoader.parseValue(value))];
          }
          continue;
        } else {
          inPermissions = false;
          currentPermission = null;
        }

        if (value === '' || value === '[]') {
          currentKey = key;
          currentList = [];
          result[key] = currentList;
        } else if (value.startsWith('[') && value.endsWith(']')) {
          const inner = value.slice(1, -1).trim();
          result[key] = inner
            ? inner.split(',').map(s => SkillMdLoader.parseValue(s.trim()))
            : [];
          currentKey = key;
          currentList = null;
        } else {
          result[key] = SkillMdLoader.parseValue(value);
          currentKey = key;
          currentList = null;
        }
      }
    }

    return result;
  }

  private static parseValue(val: string): any {
    if (val === 'true') return true;
    if (val === 'false') return false;
    if (val === 'null') return null;
    if (!isNaN(Number(val)) && val !== '') return Number(val);
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      return val.slice(1, -1);
    }
    return val;
  }

  static parseManifest(markdown: string, fallbackId?: string): SkillManifest {
    const { frontmatter } = SkillMdLoader.parseFrontmatter(markdown);
    const id = frontmatter.id || fallbackId || 'unknown-skill';
    const name = frontmatter.name || id;
    const version = frontmatter.version || '1.0.0';
    const description = frontmatter.description || '';
    const author = frontmatter.author || 'AURA Contributor';
    const category = (frontmatter.category as SkillCategory) || 'custom';
    const tags = Array.isArray(frontmatter.tags) ? frontmatter.tags : [];
    const triggers = Array.isArray(frontmatter.triggers) ? frontmatter.triggers : [];
    const permissions: SkillPermission[] = Array.isArray(frontmatter.permissions)
      ? frontmatter.permissions.map((p: any) =>
          typeof p === 'string'
            ? { type: p as any, scope: ['*'] }
            : { type: p.type, scope: p.scope || ['*'], description: p.description }
        )
      : [];

    return {
      id,
      name,
      version,
      description,
      author,
      category,
      tags,
      triggers,
      permissions,
      priority: typeof frontmatter.priority === 'number' ? frontmatter.priority : 0,
      dependencies: Array.isArray(frontmatter.dependencies) ? frontmatter.dependencies : [],
      enabled: frontmatter.enabled !== false,
      entryPoint: frontmatter.entryPoint,
      metadata: frontmatter.metadata || {}
    };
  }

  static async loadFromFile(filePath: string): Promise<NativeSkill> {
    const content = await fs.readFile(filePath, 'utf8');
    const fallbackId = path.basename(path.dirname(filePath));
    const manifest = SkillMdLoader.parseManifest(content, fallbackId);

    return {
      manifest,
      hooks: {
        onUserMessage: async input => ({
          success: true,
          output: `Skill ${manifest.name} processed user input.`,
          data: { input }
        }),
        onCommand: async (cmd, args) => ({
          success: true,
          output: `Skill ${manifest.name} executed command: ${cmd} ${args.join(' ')}`
        })
      },
      execute: async ({ input }) => ({
        success: true,
        output: `Executed dynamic skill ${manifest.name}`,
        data: { input, manifest }
      })
    };
  }

  static async loadFromDirectory(dirPath: string): Promise<NativeSkill[]> {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const skills: NativeSkill[] = [];

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        const skillMd = path.join(fullPath, 'SKILL.md');
        try {
          const stat = await fs.stat(skillMd);
          if (stat.isFile()) {
            skills.push(await SkillMdLoader.loadFromFile(skillMd));
          }
        } catch {
          // No SKILL.md in this directory
        }
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.skill.md')) {
        skills.push(await SkillMdLoader.loadFromFile(fullPath));
      }
    }

    return skills;
  }
}
