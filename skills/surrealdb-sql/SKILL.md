---
id: surrealdb-sql
name: "SurrealDB SQL"
version: 1.0.0
description: "Inspect SurrealQL record links, live queries, graph connections, and schemas"
author: "AURA Team"
category: data
tags:
  - "surrealdb"
  - "surrealql"
  - "live query"
  - "multi model database"
triggers:
  - "surrealdb"
  - "surrealql"
  - "live query"
  - "multi model database"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# SurrealDB SQL

Inspect SurrealQL record links, live queries, graph connections, and schemas

## Metadata

- **ID:** `surrealdb-sql`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `surrealdb`
- `surrealql`
- `live query`
- `multi model database`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('surrealdb-sql', {
  /* input parameters */
});
```
