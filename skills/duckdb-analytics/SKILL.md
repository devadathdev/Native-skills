---
id: duckdb-analytics
name: "DuckDB Analytics"
version: 1.0.0
description: "Inspect embedded in-process analytical SQL queries, Parquet scans, and Arrow IPC"
author: "AURA Team"
category: data
tags:
  - "duckdb"
  - "in process sql"
  - "duckdb parquet"
  - "arrow ipc"
triggers:
  - "duckdb"
  - "in process sql"
  - "duckdb parquet"
  - "arrow ipc"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# DuckDB Analytics

Inspect embedded in-process analytical SQL queries, Parquet scans, and Arrow IPC

## Metadata

- **ID:** `duckdb-analytics`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `duckdb`
- `in process sql`
- `duckdb parquet`
- `arrow ipc`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('duckdb-analytics', {
  /* input parameters */
});
```
