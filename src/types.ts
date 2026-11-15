export type SkillCategory =
  | 'productivity'
  | 'development'
  | 'security'
  | 'analysis'
  | 'utility'
  | 'ai'
  | 'custom'
  | 'system'
  | 'web'
  | 'documents'
  | 'data'
  | 'integration'
  | 'devops';

export type PermissionType =
  | 'filesystem'
  | 'network'
  | 'shell'
  | 'api'
  | 'database'
  | 'model'
  | 'memory';

export type ActionType =
  | 'message'
  | 'tool_call'
  | 'navigation'
  | 'notification'
  | 'memory'
  | 'task';

export interface SkillPermission {
  type: PermissionType;
  scope: string[];
  description?: string;
}

export interface JSONSchemaDefinition {
  type?: 'object' | 'string' | 'number' | 'boolean' | 'array';
  properties?: Record<string, JSONSchemaDefinition>;
  required?: string[];
  items?: JSONSchemaDefinition;
  description?: string;
  default?: unknown;
  enum?: unknown[];
  additionalProperties?: boolean;
}

export interface SkillManifest {
  id: string;
  name: string;
  version: string;
  description: string;
  author: string;
  category: SkillCategory;
  tags: string[];
  permissions: SkillPermission[];
  triggers?: string[];
  priority?: number;
  dependencies?: string[];
  enabled?: boolean;
  inputSchema?: JSONSchemaDefinition;
  outputSchema?: JSONSchemaDefinition;
  configSchema?: Record<string, unknown>;
  defaultConfig?: Record<string, unknown>;
  entryPoint?: string;
  metadata?: Record<string, unknown>;
}

export interface FileSystemTool {
  read(relativePath: string): Promise<string>;
  write(relativePath: string, content: string): Promise<string>;
  exists(relativePath: string): Promise<boolean>;
  list(relativePath?: string): Promise<string[]>;
  safePath(relativePath: string): string;
}

export interface ShellTool {
  exec(
    command: string,
    args?: string[],
    options?: { timeoutMs?: number; env?: Record<string, string> }
  ): Promise<{ stdout: string; stderr: string; exitCode: number }>;
}

export interface WebTool {
  fetch(
    url: string,
    options?: RequestInit
  ): Promise<{ status: number; headers: Record<string, string>; text: string; data?: unknown }>;
}

export interface RuntimeTools {
  fs: FileSystemTool;
  shell: ShellTool;
  web: WebTool;
}

export interface HostAdapters {
  forge?: unknown;
  sentinel?: unknown;
  github?: unknown;
  model?: unknown;
  memory?: unknown;
  browser?: unknown;
  aura?: unknown;
  [key: string]: unknown;
}

export interface SkillContext {
  userInput: string;
  history: Array<{ role: string; content: string }>;
  memories: string[];
  currentModel: string;
  timestamp: number;
  workspace: string;
  config: Record<string, unknown>;
  services: Record<string, { url: string; available: boolean } | undefined>;
  adapters?: HostAdapters;
  metadata?: Record<string, unknown>;
}

export interface SkillAction {
  type: ActionType;
  payload: unknown;
}

export interface SkillResult {
  success: boolean;
  output?: string;
  data?: unknown;
  actions?: SkillAction[];
  error?: string;
  metadata?: Record<string, unknown>;
  executionTimeMs?: number;
}

export interface SkillExecuteParams {
  input: Record<string, any>;
  context: SkillContext;
  tools: RuntimeTools;
}

export type SkillExecutionHandler = (params: SkillExecuteParams) => Promise<SkillResult> | SkillResult;

export interface SkillHooks {
  onInit?: (context: SkillContext) => Promise<void> | void;
  onUserMessage?: (input: string, context: SkillContext) => Promise<SkillResult | null> | SkillResult | null;
  onAssistantResponse?: (response: string, context: SkillContext) => Promise<SkillResult | null> | SkillResult | null;
  onCommand?: (command: string, args: string[], context: SkillContext) => Promise<SkillResult | null> | SkillResult | null;
  onInterval?: (context: SkillContext) => Promise<SkillResult | null> | SkillResult | null;
  onShutdown?: (context: SkillContext) => Promise<void> | void;
  onConfigChange?: (config: Record<string, unknown>, context: SkillContext) => Promise<void> | void;
}

export interface NativeSkill {
  manifest: SkillManifest;
  hooks: SkillHooks;
  execute?: SkillExecutionHandler;
}

export type HealthStatus = 'healthy' | 'degraded' | 'unhealthy';

export interface HealthCheckReport {
  skillId: string;
  status: HealthStatus;
  message?: string;
  timestamp: number;
  checks: Record<string, { ok: boolean; message?: string }>;
}

export interface ApprovalRequest {
  id: string;
  skillId: string;
  action: string;
  description: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  details: Record<string, unknown>;
  timestamp: number;
}

export interface ApprovalDecision {
  approved: boolean;
  approvedBy?: string;
  reason?: string;
  token?: string;
}

export type AuditLogLevel = 'info' | 'warn' | 'error' | 'security';

export interface AuditEvent {
  id: string;
  timestamp: number;
  level: AuditLogLevel;
  type: string;
  skillId?: string;
  details: Record<string, unknown>;
  previousHash?: string;
  hash: string;
}

export interface RetryPolicy {
  maxRetries: number;
  initialDelayMs: number;
  backoffFactor: number;
  maxDelayMs: number;
  retryableErrors?: string[];
}

export interface ExecutionPolicy {
  timeoutMs?: number;
  retry?: RetryPolicy;
  approvalRequired?: boolean;
}

export interface SkillMetrics {
  totalCalls: number;
  successCount: number;
  errorCount: number;
  totalDurationMs: number;
  avgDurationMs: number;
  lastExecuted?: number;
  p95DurationMs?: number;
}
