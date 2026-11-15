---
id: clickhouse-client
name: "ClickHouse Client"
version: 1.0.0
description: "Construct high-performance analytical queries for ClickHouse MergeTree tables and materializations"
author: "AURA Team"
category: data
tags:
  - "clickhouse"
  - "olap"
  - "mergetree"
  - "columnar database"
  - "clickhouse sql"
triggers:
  - "clickhouse"
  - "olap"
  - "mergetree"
  - "columnar database"
  - "clickhouse sql"
permissions:
  - type: network
    scope: [clickhouse]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# ClickHouse Client

Construct high-performance analytical queries for ClickHouse MergeTree tables and materializations

## Metadata

- **ID:** `clickhouse-client`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `clickhouse`)

## Triggers

- `clickhouse`
- `olap`
- `mergetree`
- `columnar database`
- `clickhouse sql`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('clickhouse-client', {
  /* input parameters */
});
```
