import type { NativeSkill, SkillCategory, SkillManifest } from '../types.js';

export interface RouteMatch {
  skill: NativeSkill;
  score: number;
  matchedTrigger?: string;
  matchType: 'exact-trigger' | 'contains-trigger' | 'tag' | 'name' | 'command';
  params?: Record<string, any>;
}

export interface RouteOptions {
  category?: SkillCategory;
  requiredPermissions?: string[];
  minScore?: number;
}

export class NativeSkillRouter {
  private skills = new Map<string, NativeSkill>();

  register(skill: NativeSkill): void {
    this.skills.set(skill.manifest.id, skill);
  }

  registerMany(skills: NativeSkill[]): void {
    for (const skill of skills) {
      this.register(skill);
    }
  }

  unregister(skillId: string): boolean {
    return this.skills.delete(skillId);
  }

  getSkill(skillId: string): NativeSkill | undefined {
    return this.skills.get(skillId);
  }

  listSkills(): SkillManifest[] {
    return Array.from(this.skills.values()).map(s => s.manifest);
  }

  routeMessage(input: string, options: RouteOptions = {}): RouteMatch[] {
    const query = input.trim().toLowerCase();
    if (!query) return [];

    const matches: RouteMatch[] = [];

    for (const skill of this.skills.values()) {
      if (skill.manifest.enabled === false) continue;
      if (options.category && skill.manifest.category !== options.category) continue;

      let bestScore = 0;
      let matchedTrigger: string | undefined;
      let matchType: RouteMatch['matchType'] = 'name';

      // 1. Check exact trigger match
      const triggers = (skill.manifest.triggers || []).map(t => t.toLowerCase());
      for (const trigger of triggers) {
        if (query === trigger) {
          bestScore = 1.0;
          matchedTrigger = trigger;
          matchType = 'exact-trigger';
          break;
        } else if (query.includes(trigger)) {
          const score = 0.7 + (trigger.length / Math.max(query.length, 1)) * 0.2;
          if (score > bestScore) {
            bestScore = score;
            matchedTrigger = trigger;
            matchType = 'contains-trigger';
          }
        }
      }

      // 2. Check skill name match
      const name = skill.manifest.name.toLowerCase();
      if (query === name) {
        if (1.0 > bestScore) {
          bestScore = 1.0;
          matchType = 'name';
        }
      } else if (query.includes(name)) {
        const score = 0.65;
        if (score > bestScore) {
          bestScore = score;
          matchType = 'name';
        }
      }

      // 3. Check tags
      for (const tag of skill.manifest.tags || []) {
        const t = tag.toLowerCase();
        if (query.includes(t)) {
          const score = 0.5;
          if (score > bestScore) {
            bestScore = score;
            matchType = 'tag';
          }
        }
      }

      // Adjust with priority bonus (up to +0.09)
      const priorityBonus = Math.min((skill.manifest.priority || 0) * 0.01, 0.09);
      const finalScore = Math.min(bestScore + priorityBonus, 1.0);

      const minScore = options.minScore ?? 0.4;
      if (finalScore >= minScore) {
        matches.push({
          skill,
          score: Math.round(finalScore * 100) / 100,
          matchedTrigger,
          matchType
        });
      }
    }

    // Sort by score descending, then priority descending
    return matches.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return (b.skill.manifest.priority || 0) - (a.skill.manifest.priority || 0);
    });
  }

  routeCommand(command: string, args: string[]): RouteMatch[] {
    const cmd = command.toLowerCase().replace(/^\//, '');
    const matches: RouteMatch[] = [];

    for (const skill of this.skills.values()) {
      if (skill.manifest.enabled === false) continue;

      const id = skill.manifest.id.toLowerCase();
      const triggers = (skill.manifest.triggers || []).map(t => t.toLowerCase());

      if (id === cmd || triggers.includes(cmd)) {
        matches.push({
          skill,
          score: 1.0,
          matchedTrigger: cmd,
          matchType: 'command',
          params: { command: cmd, args }
        });
      }
    }

    return matches;
  }
}
