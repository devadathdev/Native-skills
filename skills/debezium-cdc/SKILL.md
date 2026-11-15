---
id: debezium-cdc
name: "Debezium CDC"
version: 1.0.0
description: "Inspect Change Data Capture (CDC) connector configs, WAL streaming, and JSON schemas"
author: "AURA Team"
category: data
tags:
  - "debezium"
  - "change data capture"
  - "cdc"
  - "wal stream"
triggers:
  - "debezium"
  - "change data capture"
  - "cdc"
  - "wal stream"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Debezium CDC

Inspect Change Data Capture (CDC) connector configs, WAL streaming, and JSON schemas

## Metadata

- **ID:** `debezium-cdc`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `debezium`
- `change data capture`
- `cdc`
- `wal stream`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('debezium-cdc', {
  /* input parameters */
});
```
