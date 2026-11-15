---
id: presto-sql
name: "Presto Distributed SQL"
version: 1.0.0
description: "Inspect Presto query execution stages, coordinators, workers, and catalogs"
author: "AURA Team"
category: data
tags:
  - "prestosql"
  - "presto query"
  - "presto catalog"
  - "federated query"
triggers:
  - "prestosql"
  - "presto query"
  - "presto catalog"
  - "federated query"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Presto Distributed SQL

Inspect Presto query execution stages, coordinators, workers, and catalogs

## Metadata

- **ID:** `presto-sql`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `prestosql`
- `presto query`
- `presto catalog`
- `federated query`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('presto-sql', {
  /* input parameters */
});
```
