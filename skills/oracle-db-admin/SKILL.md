---
id: oracle-db-admin
name: "Oracle DB Admin"
version: 1.0.0
description: "Inspect Oracle tablespaces, datafiles, PL/SQL package definitions, and execution plans"
author: "AURA Team"
category: data
tags:
  - "oracle db"
  - "plsql"
  - "tablespace"
  - "oracle sql"
triggers:
  - "oracle db"
  - "plsql"
  - "tablespace"
  - "oracle sql"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Oracle DB Admin

Inspect Oracle tablespaces, datafiles, PL/SQL package definitions, and execution plans

## Metadata

- **ID:** `oracle-db-admin`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `oracle db`
- `plsql`
- `tablespace`
- `oracle sql`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('oracle-db-admin', {
  /* input parameters */
});
```
