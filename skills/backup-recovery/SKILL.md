---
id: backup-recovery
name: "Backup & Recovery"
version: 1.0.0
description: "Verify snapshot integrity, plan database dump rotations, and model disaster recovery RTO/RPO"
author: "AURA Team"
category: data
tags:
  - "backup"
  - "disaster recovery"
  - "db dump"
  - "rto"
  - "rpo"
  - "snapshot backup"
triggers:
  - "backup"
  - "disaster recovery"
  - "db dump"
  - "rto"
  - "rpo"
  - "snapshot backup"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Backup & Recovery

Verify snapshot integrity, plan database dump rotations, and model disaster recovery RTO/RPO

## Metadata

- **ID:** `backup-recovery`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `backup`
- `disaster recovery`
- `db dump`
- `rto`
- `rpo`
- `snapshot backup`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('backup-recovery', {
  /* input parameters */
});
```
