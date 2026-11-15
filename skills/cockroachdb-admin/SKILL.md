---
id: cockroachdb-admin
name: "CockroachDB Admin"
version: 1.0.0
description: "Inspect multi-region distributed SQL ranges, Raft leases, and survivability goals"
author: "AURA Team"
category: data
tags:
  - "cockroachdb"
  - "distributed sql"
  - "raft range"
  - "cockroach sql"
triggers:
  - "cockroachdb"
  - "distributed sql"
  - "raft range"
  - "cockroach sql"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# CockroachDB Admin

Inspect multi-region distributed SQL ranges, Raft leases, and survivability goals

## Metadata

- **ID:** `cockroachdb-admin`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `cockroachdb`
- `distributed sql`
- `raft range`
- `cockroach sql`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('cockroachdb-admin', {
  /* input parameters */
});
```
