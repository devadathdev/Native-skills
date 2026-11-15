---
id: keydb-admin
name: "KeyDB Admin"
version: 1.0.0
description: "Inspect multi-threaded KeyDB performance, active replication, and flash storage"
author: "AURA Team"
category: data
tags:
  - "keydb"
  - "multithreaded redis"
  - "active replication"
  - "keydb conf"
triggers:
  - "keydb"
  - "multithreaded redis"
  - "active replication"
  - "keydb conf"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# KeyDB Admin

Inspect multi-threaded KeyDB performance, active replication, and flash storage

## Metadata

- **ID:** `keydb-admin`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `keydb`
- `multithreaded redis`
- `active replication`
- `keydb conf`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('keydb-admin', {
  /* input parameters */
});
```
