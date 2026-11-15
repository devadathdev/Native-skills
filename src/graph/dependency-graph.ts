import type { NativeSkill } from '../types.js';

export class SkillDependencyGraph {
  private adjacency = new Map<string, Set<string>>();
  private skills = new Map<string, NativeSkill>();

  addSkill(skill: NativeSkill): void {
    const id = skill.manifest.id;
    this.skills.set(id, skill);
    if (!this.adjacency.has(id)) {
      this.adjacency.set(id, new Set());
    }
    const deps = skill.manifest.dependencies || [];
    for (const dep of deps) {
      this.adjacency.get(id)!.add(dep);
    }
  }

  removeSkill(id: string): void {
    this.skills.delete(id);
    this.adjacency.delete(id);
    for (const deps of this.adjacency.values()) {
      deps.delete(id);
    }
  }

  getDependencies(id: string): string[] {
    return Array.from(this.adjacency.get(id) || []);
  }

  validateDependencies(): { valid: boolean; missing: Record<string, string[]>; cycles: string[][] } {
    const missing: Record<string, string[]> = {};
    for (const [id, deps] of this.adjacency.entries()) {
      const missingDeps: string[] = [];
      for (const dep of deps) {
        if (!this.skills.has(dep)) {
          missingDeps.push(dep);
        }
      }
      if (missingDeps.length > 0) {
        missing[id] = missingDeps;
      }
    }

    const cycles = this.detectCycles();
    return {
      valid: Object.keys(missing).length === 0 && cycles.length === 0,
      missing,
      cycles
    };
  }

  detectCycles(): string[][] {
    const cycles: string[][] = [];
    const visited = new Map<string, number>(); // 0: unvisited, 1: visiting, 2: visited
    const parent = new Map<string, string | null>();

    const dfs = (node: string, path: string[]) => {
      visited.set(node, 1);
      const deps = this.adjacency.get(node) || new Set();

      for (const dep of deps) {
        if (!this.adjacency.has(dep)) continue; // external/missing
        const state = visited.get(dep) || 0;
        if (state === 1) {
          // cycle found
          const cyclePath = [...path, node, dep];
          const startIdx = cyclePath.indexOf(dep);
          cycles.push(cyclePath.slice(startIdx));
        } else if (state === 0) {
          dfs(dep, [...path, node]);
        }
      }
      visited.set(node, 2);
    };

    for (const node of this.adjacency.keys()) {
      if ((visited.get(node) || 0) === 0) {
        dfs(node, []);
      }
    }

    return cycles;
  }

  getExecutionOrder(skillIds?: string[]): string[] {
    const targetNodes = new Set(skillIds || Array.from(this.adjacency.keys()));
    const visited = new Set<string>();
    const order: string[] = [];

    const visit = (node: string, ancestry = new Set<string>()) => {
      if (ancestry.has(node)) {
        throw new Error(`Circular dependency detected involving skill: ${node}`);
      }
      if (visited.has(node)) return;

      ancestry.add(node);
      const deps = this.adjacency.get(node) || new Set();
      for (const dep of deps) {
        if (this.skills.has(dep)) {
          visit(dep, new Set(ancestry));
        }
      }
      ancestry.delete(node);
      visited.add(node);
      order.push(node);
    };

    for (const node of targetNodes) {
      if (!visited.has(node) && this.skills.has(node)) {
        visit(node);
      }
    }

    return order;
  }
}
