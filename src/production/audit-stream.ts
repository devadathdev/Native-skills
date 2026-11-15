import crypto from 'node:crypto';
import type { AuditEvent, AuditLogLevel } from '../types.js';

export type AuditSubscriber = (event: AuditEvent) => void;

export class AuditStream {
  private events: AuditEvent[] = [];
  private lastHash = '0000000000000000000000000000000000000000000000000000000000000000';
  private subscribers = new Set<AuditSubscriber>();

  log(
    level: AuditLogLevel,
    type: string,
    skillId?: string,
    details: Record<string, unknown> = {}
  ): AuditEvent {
    const timestamp = Date.now();
    const id = `audit-${timestamp}-${Math.random().toString(36).slice(2, 7)}`;
    const previousHash = this.lastHash;

    const rawData = JSON.stringify({ id, timestamp, level, type, skillId, details, previousHash });
    const hash = crypto.createHash('sha256').update(rawData).digest('hex');

    const event: AuditEvent = {
      id,
      timestamp,
      level,
      type,
      skillId,
      details,
      previousHash,
      hash
    };

    this.lastHash = hash;
    this.events.push(event);

    for (const sub of this.subscribers) {
      try {
        sub(event);
      } catch (err) {
        console.error('Error delivering audit event to subscriber:', err);
      }
    }

    return event;
  }

  subscribe(subscriber: AuditSubscriber): () => void {
    this.subscribers.add(subscriber);
    return () => this.subscribers.delete(subscriber);
  }

  getEvents(filter: { skillId?: string; level?: AuditLogLevel; since?: number } = {}): AuditEvent[] {
    return this.events.filter(e => {
      if (filter.skillId && e.skillId !== filter.skillId) return false;
      if (filter.level && e.level !== filter.level) return false;
      if (filter.since && e.timestamp < filter.since) return false;
      return true;
    });
  }

  verifyIntegrity(): { valid: boolean; brokenAt?: string } {
    let prev = '0000000000000000000000000000000000000000000000000000000000000000';
    for (const ev of this.events) {
      if (ev.previousHash !== prev) {
        return { valid: false, brokenAt: ev.id };
      }
      const raw = JSON.stringify({
        id: ev.id,
        timestamp: ev.timestamp,
        level: ev.level,
        type: ev.type,
        skillId: ev.skillId,
        details: ev.details,
        previousHash: ev.previousHash
      });
      const recomputed = crypto.createHash('sha256').update(raw).digest('hex');
      if (recomputed !== ev.hash) {
        return { valid: false, brokenAt: ev.id };
      }
      prev = ev.hash;
    }
    return { valid: true };
  }
}
