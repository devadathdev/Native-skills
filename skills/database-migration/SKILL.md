---
id: database-migration
name: "Database Migration"
version: 1.0.0
description: "Generate, validate, and plan forward/backward database schema migration scripts"
author: "AURA Team"
category: data
tags:
  - "migration"
  - "database migration"
  - "schema migration"
  - "migrate up"
  - "rollback"
  - "sql migration"
triggers:
  - "migration"
  - "database migration"
  - "schema migration"
  - "migrate up"
  - "rollback"
  - "sql migration"
permissions:
  - type: database
    scope: [write]
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# Database Migration

Generate, validate, and plan forward/backward database schema migration scripts

## Metadata

- **ID:** `database-migration`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `write`)
- `filesystem` (scope: `read, write`)

## Triggers

- `migration`
- `database migration`
- `schema migration`
- `migrate up`
- `rollback`
- `sql migration`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('database-migration', {
  /* input parameters */
});
```
