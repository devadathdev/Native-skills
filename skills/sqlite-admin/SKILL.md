---
id: sqlite-admin
name: "SQLite Admin"
version: 1.0.0
description: "Inspect SQLite schemas, execute PRAGMA diagnostic commands, and analyze database fragmentation"
author: "AURA Team"
category: data
tags:
  - "sqlite"
  - "sqlite3"
  - "sqlite admin"
  - "pragma"
  - "embedded database"
triggers:
  - "sqlite"
  - "sqlite3"
  - "sqlite admin"
  - "pragma"
  - "embedded database"
permissions:
  - type: database
    scope: [read]
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# SQLite Admin

Inspect SQLite schemas, execute PRAGMA diagnostic commands, and analyze database fragmentation

## Metadata

- **ID:** `sqlite-admin`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `read`)
- `filesystem` (scope: `read, write`)

## Triggers

- `sqlite`
- `sqlite3`
- `sqlite admin`
- `pragma`
- `embedded database`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('sqlite-admin', {
  /* input parameters */
});
```
