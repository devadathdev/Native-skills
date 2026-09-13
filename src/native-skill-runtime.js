import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

export class NativeSkillRuntime {
  constructor({ workspace = process.cwd(), fetchImpl = globalThis.fetch } = {}) {
    this.workspace = path.resolve(workspace);
    this.fetchImpl = fetchImpl;
    this.skills = new Map();
  }

  register(skill) { if (!skill?.id || typeof skill.execute !== 'function') throw new Error('Invalid skill'); this.skills.set(skill.id, skill); return skill; }
  registerMany(skills) { skills.forEach(s => this.register(s)); return this; }
  get(id) { return this.skills.get(id); }
  list() { return [...this.skills.values()].map(({ execute, ...meta }) => meta); }

  async execute(id, input = {}, context = {}) {
    const skill = this.get(id);
    if (!skill) throw new Error(`Unknown native skill: ${id}`);
    const permissions = new Set(skill.permissions || []);
    const requirePermission = p => { if (!permissions.has(p)) throw new Error(`Skill ${id} requires permission: ${p}`); };
    return skill.execute({ input, context: { ...context, workspace: this.workspace }, tools: {
      fs: { read: async p => { requirePermission('filesystem'); return fs.readFile(this.safePath(p), 'utf8'); }, write: async (p, data) => { requirePermission('filesystem'); const f=this.safePath(p); await fs.mkdir(path.dirname(f), {recursive:true}); await fs.writeFile(f,data); return f; } },
      shell: async (cmd, args=[]) => { requirePermission('shell'); const allowed=['git','node','npm','npx','python','python3','pytest','docker']; if(!allowed.includes(cmd)) throw new Error(`Command not allowed: ${cmd}`); return execFileAsync(cmd,args,{cwd:this.workspace,maxBuffer:5*1024*1024}); },
      web: async (url, options={}) => { requirePermission('network'); const response=await this.fetchImpl(url,options); return {status:response.status, headers:Object.fromEntries(response.headers), text:await response.text()}; }
    }});
  }
  safePath(p) { const resolved=path.resolve(this.workspace,p); if(resolved!==this.workspace && !resolved.startsWith(this.workspace+path.sep)) throw new Error('Path escapes workspace'); return resolved; }
}

export function createSkill(id, name, description, permissions, execute) { return {id,name,description,permissions,execute}; }
