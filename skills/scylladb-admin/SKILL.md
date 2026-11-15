---
id: scylladb-admin
name: "ScyllaDB Admin"
version: 1.0.0
description: "Inspect C++ powered ScyllaDB shard architectures, latency histograms, and nodes"
author: "AURA Team"
category: data
tags:
  - "scylladb"
  - "scylla"
  - "cql fast"
  - "scylla cluster"
triggers:
  - "scylladb"
  - "scylla"
  - "cql fast"
  - "scylla cluster"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# ScyllaDB Admin

Inspect C++ powered ScyllaDB shard architectures, latency histograms, and nodes

## Metadata

- **ID:** `scylladb-admin`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `scylladb`
- `scylla`
- `cql fast`
- `scylla cluster`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('scylladb-admin', {
  /* input parameters */
});
```
