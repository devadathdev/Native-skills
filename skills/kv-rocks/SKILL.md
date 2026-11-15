---
id: kv-rocks
name: "Apache Kvrocks"
version: 1.0.0
description: "Inspect RocksDB-backed Redis protocol storage, disk usage, and compaction"
author: "AURA Team"
category: data
tags:
  - "kvrocks"
  - "rocksdb redis"
  - "disk backed redis"
  - "kvrocks conf"
triggers:
  - "kvrocks"
  - "rocksdb redis"
  - "disk backed redis"
  - "kvrocks conf"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Apache Kvrocks

Inspect RocksDB-backed Redis protocol storage, disk usage, and compaction

## Metadata

- **ID:** `kv-rocks`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `kvrocks`
- `rocksdb redis`
- `disk backed redis`
- `kvrocks conf`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('kv-rocks', {
  /* input parameters */
});
```
