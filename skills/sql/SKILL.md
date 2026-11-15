---
id: sql
name: "SQL"
version: 1.0.0
description: "Validate, format, and execute SQL queries against relational databases"
author: "AURA Team"
category: data
tags:
  - "sql"
  - "query database"
  - "database query"
  - "select from"
  - "sql query"
triggers:
  - "sql"
  - "query database"
  - "database query"
  - "select from"
  - "sql query"
permissions:
  - type: database
    scope: [read]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# SQL

Validate, format, and execute SQL queries against relational databases

## Metadata

- **ID:** `sql`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `read`)

## Triggers

- `sql`
- `query database`
- `database query`
- `select from`
- `sql query`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('sql', {
  /* input parameters */
});
```
