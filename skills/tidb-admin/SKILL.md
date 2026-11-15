---
id: tidb-admin
name: "TiDB Admin"
version: 1.0.0
description: "Inspect TiDB HTAP analytical engine, TiKV storage peers, and placement rules"
author: "AURA Team"
category: data
tags:
  - "tidb"
  - "tikv"
  - "htap"
  - "distributed tidb"
triggers:
  - "tidb"
  - "tikv"
  - "htap"
  - "distributed tidb"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# TiDB Admin

Inspect TiDB HTAP analytical engine, TiKV storage peers, and placement rules

## Metadata

- **ID:** `tidb-admin`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `tidb`
- `tikv`
- `htap`
- `distributed tidb`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('tidb-admin', {
  /* input parameters */
});
```
