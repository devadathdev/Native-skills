---
id: timescaledb-hypertables
name: "TimescaleDB Hypertables"
version: 1.0.0
description: "Inspect Timescale hypertables, automatic space-time chunking, and compression"
author: "AURA Team"
category: data
tags:
  - "timescale"
  - "timescaledb"
  - "hypertable"
  - "continuous aggregate"
triggers:
  - "timescale"
  - "timescaledb"
  - "hypertable"
  - "continuous aggregate"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# TimescaleDB Hypertables

Inspect Timescale hypertables, automatic space-time chunking, and compression

## Metadata

- **ID:** `timescaledb-hypertables`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `timescale`
- `timescaledb`
- `hypertable`
- `continuous aggregate`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('timescaledb-hypertables', {
  /* input parameters */
});
```
