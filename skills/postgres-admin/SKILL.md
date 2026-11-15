---
id: postgres-admin
name: "PostgreSQL Admin"
version: 1.0.0
description: "Analyze PostgreSQL queries with EXPLAIN ANALYZE, index usage, connection pooling, and vacuuming"
author: "AURA Team"
category: data
tags:
  - "postgres"
  - "postgresql"
  - "explain analyze"
  - "pg index"
  - "pg admin"
  - "vacuum"
triggers:
  - "postgres"
  - "postgresql"
  - "explain analyze"
  - "pg index"
  - "pg admin"
  - "vacuum"
permissions:
  - type: database
    scope: [read]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# PostgreSQL Admin

Analyze PostgreSQL queries with EXPLAIN ANALYZE, index usage, connection pooling, and vacuuming

## Metadata

- **ID:** `postgres-admin`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `read`)

## Triggers

- `postgres`
- `postgresql`
- `explain analyze`
- `pg index`
- `pg admin`
- `vacuum`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('postgres-admin', {
  /* input parameters */
});
```
