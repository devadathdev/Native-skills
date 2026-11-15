---
id: sql-server-admin
name: "SQL Server Admin"
version: 1.0.0
description: "Inspect Microsoft SQL Server filegroups, DMV performance stats, and T-SQL triggers"
author: "AURA Team"
category: data
tags:
  - "sql server"
  - "tsql"
  - "mssql"
  - "sql dmv"
triggers:
  - "sql server"
  - "tsql"
  - "mssql"
  - "sql dmv"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# SQL Server Admin

Inspect Microsoft SQL Server filegroups, DMV performance stats, and T-SQL triggers

## Metadata

- **ID:** `sql-server-admin`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `sql server`
- `tsql`
- `mssql`
- `sql dmv`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('sql-server-admin', {
  /* input parameters */
});
```
