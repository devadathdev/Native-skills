---
id: rethinkdb-queries
name: "RethinkDB Realtime"
version: 1.0.0
description: "Inspect RethinkDB real-time changefeeds, ReQL expressions, and table shards"
author: "AURA Team"
category: data
tags:
  - "rethinkdb"
  - "reql"
  - "changefeed"
  - "realtime db"
triggers:
  - "rethinkdb"
  - "reql"
  - "changefeed"
  - "realtime db"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# RethinkDB Realtime

Inspect RethinkDB real-time changefeeds, ReQL expressions, and table shards

## Metadata

- **ID:** `rethinkdb-queries`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `rethinkdb`
- `reql`
- `changefeed`
- `realtime db`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('rethinkdb-queries', {
  /* input parameters */
});
```
