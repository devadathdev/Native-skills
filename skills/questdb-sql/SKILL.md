---
id: questdb-sql
name: "QuestDB SQL"
version: 1.0.0
description: "Inspect high-throughput SQL time-series ingestion, SAMPLE BY aggregations, and ILP"
author: "AURA Team"
category: data
tags:
  - "questdb"
  - "time series sql"
  - "sample by"
  - "influx line protocol"
triggers:
  - "questdb"
  - "time series sql"
  - "sample by"
  - "influx line protocol"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# QuestDB SQL

Inspect high-throughput SQL time-series ingestion, SAMPLE BY aggregations, and ILP

## Metadata

- **ID:** `questdb-sql`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `questdb`
- `time series sql`
- `sample by`
- `influx line protocol`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('questdb-sql', {
  /* input parameters */
});
```
