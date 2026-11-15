import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import type {
  NativeSkill,
  SkillContext,
  SkillManifest,
  SkillResult,
  PermissionType,
  RuntimeTools,
  SkillExecuteParams,
  ExecutionPolicy,
  HostAdapters
} from './types.js';
import { NativeSkillRouter } from './router/skill-router.js';
import { SkillLifecycleManager } from './lifecycle/lifecycle-events.js';
import { SkillDependencyGraph } from './graph/dependency-graph.js';
import { SchemaValidator } from './validation/schema-validator.js';
import { AuditStream } from './production/audit-stream.js';
import { ObservabilityManager } from './production/observability.js';
import { ApprovalPolicyEngine } from './production/approval-policy.js';
import { WorkerSandbox } from './production/worker-sandbox.js';
import { ExecutionPolicyManager } from './production/execution-policy.js';
import { HostAdapterRegistry } from './adapters/host-adapter.js';

const execFileAsync = promisify(execFile);

export class PermissionGate {
  constructor(private readonly allow = new Map<PermissionType, Set<string>>()) {}

  allowPermission(type: PermissionType, scope = '*'): void {
    if (!this.allow.has(type)) {
      this.allow.set(type, new Set());
    }
    this.allow.get(type)!.add(scope);
  }

  check(skill: SkillManifest, requested: PermissionType, scope: string): boolean {
    const declared = skill.permissions?.find(p => p.type === requested);
    if (!declared || !declared.scope.some(s => s === '*' || s === scope)) {
      return false;
    }
    const allowed = this.allow.get(requested);
    if (!allowed) return true; // If no explicit runtime restriction map, declared is allowed
    return allowed.has('*') || allowed.has(scope);
  }
}

export interface RuntimeOptions {
  workspace?: string;
  fetchImpl?: typeof globalThis.fetch;
  allowedCommands?: string[];
  permissions?: PermissionGate;
  adapters?: HostAdapterRegistry;
  autoApproveLowRisk?: boolean;
}

export class NativeSkillRuntime {
  public readonly workspace: string;
  public readonly permissions: PermissionGate;
  public readonly router: NativeSkillRouter;
  public readonly lifecycle: SkillLifecycleManager;
  public readonly graph: SkillDependencyGraph;
  public readonly audit: AuditStream;
  public readonly observability: ObservabilityManager;
  public readonly approval: ApprovalPolicyEngine;
  public readonly adapters: HostAdapterRegistry;

  private skills = new Map<string, NativeSkill>();
  private context?: SkillContext;
  private fetchImpl: typeof globalThis.fetch;
  private allowedCommands: Set<string>;
  private sandbox: WorkerSandbox;

  constructor(options: RuntimeOptions = {}) {
    this.workspace = path.resolve(options.workspace || process.cwd());
    this.fetchImpl = options.fetchImpl || globalThis.fetch;
    this.permissions = options.permissions || new PermissionGate();
    this.allowedCommands = new Set(
      options.allowedCommands || [
        'git',
        'node',
        'npm',
        'npx',
        'python',
        'python3',
        'pytest',
        'docker',
        'tsc'
      ]
    );

    this.router = new NativeSkillRouter();
    this.lifecycle = new SkillLifecycleManager();
    this.graph = new SkillDependencyGraph();
    this.audit = new AuditStream();
    this.observability = new ObservabilityManager();
    this.approval = new ApprovalPolicyEngine({ autoApproveLowRisk: options.autoApproveLowRisk !== false });
    this.adapters = options.adapters || new HostAdapterRegistry();
    this.sandbox = new WorkerSandbox();
  }

  register(skill: NativeSkill): void {
    if (!skill?.manifest?.id) {
      throw new Error('Invalid skill: missing manifest.id');
    }
    const id = skill.manifest.id;
    if (this.skills.has(id)) {
      throw new Error(`Skill already registered: ${id}`);
    }

    this.skills.set(id, skill);
    this.router.register(skill);
    this.graph.addSkill(skill);

    this.audit.log('info', 'skill_registered', id, { name: skill.manifest.name, version: skill.manifest.version });
    void this.lifecycle.emit('skill:registered', { skill });

    if (this.context && skill.manifest.enabled !== false) {
      void this.lifecycle.emit('skill:beforeInit', { skill, context: this.context });
      void skill.hooks.onInit?.(this.context);
      void this.lifecycle.emit('skill:init', { skill, context: this.context });
    }
  }

  registerMany(skills: NativeSkill[]): void {
    for (const skill of skills) {
      this.register(skill);
    }
  }

  unregister(id: string): boolean {
    const deleted = this.skills.delete(id);
    if (deleted) {
      this.router.unregister(id);
      this.graph.removeSkill(id);
      this.audit.log('info', 'skill_unregistered', id);
      void this.lifecycle.emit('skill:unregistered', { skillId: id });
    }
    return deleted;
  }

  get(id: string): NativeSkill | undefined {
    return this.skills.get(id);
  }

  list(enabledOnly = false): SkillManifest[] {
    return [...this.skills.values()]
      .filter(s => !enabledOnly || s.manifest.enabled !== false)
      .map(s => s.manifest);
  }

  initialize(context: SkillContext): void {
    this.context = {
      ...context,
      workspace: this.workspace
    };

    for (const s of this.skills.values()) {
      if (s.manifest.enabled !== false) {
        void this.lifecycle.emit('skill:beforeInit', { skill: s, context: this.context });
        void s.hooks.onInit?.(this.context);
        void this.lifecycle.emit('skill:init', { skill: s, context: this.context });
      }
    }
  }

  safePath(relativePath: string): string {
    const resolved = path.resolve(this.workspace, relativePath);
    if (resolved !== this.workspace && !resolved.startsWith(this.workspace + path.sep)) {
      throw new Error(`Path escapes workspace boundary: ${relativePath}`);
    }
    return resolved;
  }

  createRuntimeTools(skill: NativeSkill): RuntimeTools {
    const requirePermission = (p: PermissionType, scope = '*') => {
      if (!this.permissions.check(skill.manifest, p, scope)) {
        this.audit.log('security', 'permission_denied', skill.manifest.id, { permission: p, scope });
        throw new Error(`Skill '${skill.manifest.id}' requires permission '${p}' with scope '${scope}'`);
      }
    };

    return {
      fs: {
        safePath: (p: string) => this.safePath(p),
        read: async (p: string) => {
          requirePermission('filesystem', 'read');
          const file = this.safePath(p);
          return fs.readFile(file, 'utf8');
        },
        write: async (p: string, content: string) => {
          requirePermission('filesystem', 'write');
          const file = this.safePath(p);
          await fs.mkdir(path.dirname(file), { recursive: true });
          await fs.writeFile(file, content);
          return file;
        },
        exists: async (p: string) => {
          try {
            await fs.access(this.safePath(p));
            return true;
          } catch {
            return false;
          }
        },
        list: async (p = '.') => {
          requirePermission('filesystem', 'read');
          return fs.readdir(this.safePath(p));
        }
      },
      shell: {
        exec: async (cmd: string, args: string[] = [], options = {}) => {
          requirePermission('shell', 'execute');
          if (!this.allowedCommands.has(cmd)) {
            this.audit.log('security', 'shell_command_blocked', skill.manifest.id, { command: cmd });
            throw new Error(`Command not allowed: ${cmd}`);
          }

          // Audit shell command execution
          this.audit.log('info', 'shell_command_executed', skill.manifest.id, { command: cmd, args });
          const { stdout, stderr } = await execFileAsync(cmd, args, {
            cwd: this.workspace,
            maxBuffer: 10 * 1024 * 1024,
            timeout: options.timeoutMs || 30000,
            env: { ...process.env, ...options.env }
          });
          return { stdout, stderr, exitCode: 0 };
        }
      },
      web: {
        fetch: async (url: string, options: RequestInit = {}) => {
          requirePermission('network', '*');
          this.audit.log('info', 'network_fetch', skill.manifest.id, { url, method: options.method || 'GET' });
          const response = await this.fetchImpl(url, options);
          const text = await response.text();
          let data: unknown;
          try {
            data = JSON.parse(text);
          } catch {
            data = undefined;
          }
          const headers: Record<string, string> = {};
          response.headers?.forEach((val, key) => {
            headers[key] = val;
          });
          return {
            status: response.status,
            headers,
            text,
            data
          };
        }
      }
    };
  }

  async execute(
    skillId: string,
    input: Record<string, any> = {},
    options: {
      policy?: ExecutionPolicy;
      approvalToken?: string;
      contextOverride?: Partial<SkillContext>;
    } = {}
  ): Promise<SkillResult> {
    const startTime = Date.now();
    const skill = this.get(skillId);
    if (!skill) {
      const errRes: SkillResult = {
        success: false,
        error: `Unknown native skill: ${skillId}`,
        executionTimeMs: 0
      };
      return errRes;
    }

    if (skill.manifest.enabled === false) {
      return {
        success: false,
        error: `Skill '${skillId}' is currently disabled`,
        executionTimeMs: 0
      };
    }

    // Input schema validation
    if (skill.manifest.inputSchema) {
      const val = SchemaValidator.validate(skill.manifest.inputSchema, input);
      if (!val.valid) {
        return {
          success: false,
          error: `Input schema validation failed: ${val.errors.join('; ')}`,
          metadata: { validationErrors: val.errors },
          executionTimeMs: Date.now() - startTime
        };
      }
      input = val.data as Record<string, any>;
    }

    // Approval check
    const action = input.action || 'execute';
    const approval = await this.approval.evaluate(skillId, action, input, options.approvalToken);
    if (!approval.approved) {
      this.audit.log('security', 'execution_rejected_by_policy', skillId, { action, reason: approval.reason });
      return {
        success: false,
        error: `Action blocked by policy: ${approval.reason}`,
        metadata: { approvalRequired: true },
        executionTimeMs: Date.now() - startTime
      };
    }

    const effectiveContext: SkillContext = {
      ...(this.context || {
        userInput: '',
        history: [],
        memories: [],
        currentModel: 'default',
        timestamp: Date.now(),
        workspace: this.workspace,
        config: {},
        services: {}
      }),
      ...options.contextOverride,
      workspace: this.workspace
    };

    const tools = this.createRuntimeTools(skill);
    const params: SkillExecuteParams = {
      input,
      context: effectiveContext,
      tools
    };

    const executeCore = async (): Promise<SkillResult> => {
      return this.lifecycle.runWithInterceptors(skillId, params, async () => {
        await this.lifecycle.emit('skill:beforeExecute', { skillId, params });

        let result: SkillResult;
        try {
          result = await this.sandbox.run(skill, params);
        } catch (err: any) {
          result = {
            success: false,
            error: err.message || String(err),
            metadata: { skillId }
          };
        }

        // Output schema validation
        if (result.success && skill.manifest.outputSchema && result.data !== undefined) {
          const outVal = SchemaValidator.validate(skill.manifest.outputSchema, result.data);
          if (!outVal.valid) {
            result.metadata = { ...result.metadata, outputSchemaWarnings: outVal.errors };
          }
        }

        await this.lifecycle.emit('skill:afterExecute', { skillId, params, result });
        return result;
      });
    };

    try {
      const finalResult = await ExecutionPolicyManager.withPolicy(executeCore, options.policy);
      const duration = Date.now() - startTime;
      finalResult.executionTimeMs = duration;

      this.observability.recordExecution(skillId, duration, finalResult.success);
      this.audit.log(
        finalResult.success ? 'info' : 'error',
        'skill_executed',
        skillId,
        { durationMs: duration, success: finalResult.success, error: finalResult.error }
      );

      return finalResult;
    } catch (err: any) {
      const duration = Date.now() - startTime;
      this.observability.recordExecution(skillId, duration, false);
      this.audit.log('error', 'skill_execution_failure', skillId, { durationMs: duration, error: String(err) });
      await this.lifecycle.emit('skill:error', { skillId, error: err, context: effectiveContext });

      return {
        success: false,
        error: err.message || String(err),
        metadata: { skillId },
        executionTimeMs: duration
      };
    }
  }

  async processUserMessage(input: string): Promise<SkillResult[]> {
    const matches = this.router.routeMessage(input);
    const results: SkillResult[] = [];

    for (const match of matches) {
      const res = await this.execute(match.skill.manifest.id, {
        userInput: input,
        matchedTrigger: match.matchedTrigger
      });
      results.push(res);
    }

    return results;
  }

  async processCommand(command: string, args: string[]): Promise<SkillResult[]> {
    const matches = this.router.routeCommand(command, args);
    const results: SkillResult[] = [];

    for (const match of matches) {
      const res = await this.execute(match.skill.manifest.id, {
        command,
        args
      });
      results.push(res);
    }

    return results;
  }

  async shutdown(): Promise<void> {
    if (!this.context) return;
    for (const s of this.skills.values()) {
      await s.hooks.onShutdown?.(this.context);
    }
    await this.lifecycle.emit('skill:shutdown', { context: this.context });
    this.context = undefined;
  }

  canUse(skillId: string, type: PermissionType, scope: string): boolean {
    const s = this.skills.get(skillId);
    return !!s && this.permissions.check(s.manifest, type, scope);
  }
}

export function createSkill(
  id: string,
  name: string,
  description: string,
  permissions: string[] | any[],
  execute: (params: SkillExecuteParams) => Promise<SkillResult> | SkillResult
): NativeSkill {
  const normPermissions = permissions.map(p =>
    typeof p === 'string'
      ? { type: p as PermissionType, scope: ['*'] }
      : p
  );

  return {
    manifest: {
      id,
      name,
      version: '1.0.0',
      description,
      author: 'AURA Team',
      category: 'custom',
      tags: [id],
      permissions: normPermissions,
      enabled: true
    },
    hooks: {
      onUserMessage: async (input, ctx) => execute({ input: { input }, context: ctx, tools: (ctx as any).tools })
    },
    execute
  };
}
