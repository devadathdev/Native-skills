---
id: azure-sql-database
name: "Azure SQL Database"
version: 1.0.0
description: "Inspect Azure SQL Database DTU/vCore tiers, elastic pools, and failover groups"
author: "AURA Team"
category: data
tags:
  - "azure sql"
  - "sql database azure"
  - "elastic pool"
  - "vcore tier"
triggers:
  - "azure sql"
  - "sql database azure"
  - "elastic pool"
  - "vcore tier"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Azure SQL Database

Inspect Azure SQL Database DTU/vCore tiers, elastic pools, and failover groups

## Metadata

- **ID:** `azure-sql-database`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `azure sql`
- `sql database azure`
- `elastic pool`
- `vcore tier`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('azure-sql-database', {
  /* input parameters */
});
```
