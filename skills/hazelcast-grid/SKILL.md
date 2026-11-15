---
id: hazelcast-grid
name: "Hazelcast In-Memory Grid"
version: 1.0.0
description: "Inspect Hazelcast distributed maps, partitioned data structures, and cluster members"
author: "AURA Team"
category: data
tags:
  - "hazelcast"
  - "imdg"
  - "in memory grid"
  - "distributed map"
triggers:
  - "hazelcast"
  - "imdg"
  - "in memory grid"
  - "distributed map"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Hazelcast In-Memory Grid

Inspect Hazelcast distributed maps, partitioned data structures, and cluster members

## Metadata

- **ID:** `hazelcast-grid`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `hazelcast`
- `imdg`
- `in memory grid`
- `distributed map`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('hazelcast-grid', {
  /* input parameters */
});
```
