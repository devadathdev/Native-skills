---
id: aerospike-client
name: "Aerospike Client"
version: 1.0.0
description: "Inspect Aerospike hybrid memory architecture, namespaces, sets, and secondary indexes"
author: "AURA Team"
category: data
tags:
  - "aerospike"
  - "hybrid memory"
  - "aerospike namespace"
  - "ultra low latency db"
triggers:
  - "aerospike"
  - "hybrid memory"
  - "aerospike namespace"
  - "ultra low latency db"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Aerospike Client

Inspect Aerospike hybrid memory architecture, namespaces, sets, and secondary indexes

## Metadata

- **ID:** `aerospike-client`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `aerospike`
- `hybrid memory`
- `aerospike namespace`
- `ultra low latency db`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aerospike-client', {
  /* input parameters */
});
```
