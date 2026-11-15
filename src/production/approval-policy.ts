import type { ApprovalDecision, ApprovalRequest } from '../types.js';

export type RiskLevel = 'low' | 'medium' | 'high' | 'critical';

export interface ApprovalRule {
  id: string;
  name: string;
  match: (request: ApprovalRequest) => boolean;
  action: 'allow' | 'deny' | 'require_approval';
}

export type ApprovalHandler = (request: ApprovalRequest) => Promise<ApprovalDecision> | ApprovalDecision;

export class ApprovalPolicyEngine {
  private rules: ApprovalRule[] = [];
  private pendingApprovals = new Map<string, ApprovalRequest>();
  private defaultHandler?: ApprovalHandler;

  constructor(options: { autoApproveLowRisk?: boolean; defaultHandler?: ApprovalHandler } = {}) {
    this.defaultHandler = options.defaultHandler;

    if (options.autoApproveLowRisk !== false) {
      this.addRule({
        id: 'auto-approve-low',
        name: 'Auto-approve low risk actions',
        match: req => req.riskLevel === 'low',
        action: 'allow'
      });
    }

    // Default deny for critical actions without explicit approval token
    this.addRule({
      id: 'require-critical',
      name: 'Require explicit approval for critical operations',
      match: req => req.riskLevel === 'critical',
      action: 'require_approval'
    });
  }

  addRule(rule: ApprovalRule): void {
    this.rules.push(rule);
  }

  assessRisk(skillId: string, action: string, details: Record<string, unknown> = {}): RiskLevel {
    const act = action.toLowerCase();
    const detailsStr = JSON.stringify(details).toLowerCase();

    if (
      act.includes('delete') ||
      act.includes('drop') ||
      act.includes('deploy') ||
      detailsStr.includes('rm -rf') ||
      detailsStr.includes('production')
    ) {
      return 'critical';
    }

    if (
      act.includes('write') ||
      act.includes('modify') ||
      act.includes('shell') ||
      act.includes('mutate')
    ) {
      return 'medium';
    }

    return 'low';
  }

  async evaluate(
    skillId: string,
    action: string,
    details: Record<string, unknown> = {},
    token?: string
  ): Promise<ApprovalDecision> {
    const riskLevel = this.assessRisk(skillId, action, details);
    const request: ApprovalRequest = {
      id: `req-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      skillId,
      action,
      description: `Execution of ${action} by skill ${skillId}`,
      riskLevel,
      details,
      timestamp: Date.now()
    };

    // Check pre-approved token
    if (token && token.startsWith('APPROVED-')) {
      return {
        approved: true,
        approvedBy: 'pre-approved-token',
        reason: 'Token valid',
        token
      };
    }

    for (const rule of this.rules) {
      if (rule.match(request)) {
        if (rule.action === 'allow') {
          return { approved: true, reason: `Matched rule: ${rule.name}` };
        }
        if (rule.action === 'deny') {
          return { approved: false, reason: `Blocked by rule: ${rule.name}` };
        }
        if (rule.action === 'require_approval') {
          if (this.defaultHandler) {
            return await this.defaultHandler(request);
          }
          this.pendingApprovals.set(request.id, request);
          return {
            approved: false,
            reason: `Action requires human/host approval (Request ID: ${request.id})`
          };
        }
      }
    }

    return { approved: true, reason: 'Default allow' };
  }

  approve(requestId: string, approvedBy = 'admin'): ApprovalDecision | null {
    const req = this.pendingApprovals.get(requestId);
    if (!req) return null;
    this.pendingApprovals.delete(requestId);
    return {
      approved: true,
      approvedBy,
      token: `APPROVED-${requestId}`
    };
  }

  getPendingRequests(): ApprovalRequest[] {
    return Array.from(this.pendingApprovals.values());
  }
}
