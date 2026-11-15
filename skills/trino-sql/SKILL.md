---
id: trino-sql
name: "Trino Distributed SQL"
version: 1.0.0
description: "Inspect Trino (formerly PrestoSQL) query plans, connectors, and split assignments"
author: "AURA Team"
category: data
tags:
  - "trino"
  - "presto"
  - "distributed sql trino"
  - "trino query"
triggers:
  - "trino"
  - "presto"
  - "distributed sql trino"
  - "trino query"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Trino Distributed SQL

Inspect Trino (formerly PrestoSQL) query plans, connectors, and split assignments

## Metadata

- **ID:** `trino-sql`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `trino`
- `presto`
- `distributed sql trino`
- `trino query`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('trino-sql', {
  /* input parameters */
});
```
