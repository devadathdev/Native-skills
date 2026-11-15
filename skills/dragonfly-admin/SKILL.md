---
id: dragonfly-admin
name: "Dragonfly DB Admin"
version: 1.0.0
description: "Inspect Dragonfly in-memory datastore memory efficiency, throughput, and snapshots"
author: "AURA Team"
category: data
tags:
  - "dragonfly"
  - "dragonflydb"
  - "in memory datastore"
  - "redis compatible"
triggers:
  - "dragonfly"
  - "dragonflydb"
  - "in memory datastore"
  - "redis compatible"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Dragonfly DB Admin

Inspect Dragonfly in-memory datastore memory efficiency, throughput, and snapshots

## Metadata

- **ID:** `dragonfly-admin`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `dragonfly`
- `dragonflydb`
- `in memory datastore`
- `redis compatible`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('dragonfly-admin', {
  /* input parameters */
});
```
