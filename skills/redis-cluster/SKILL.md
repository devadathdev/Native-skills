---
id: redis-cluster
name: "Redis Cluster Manager"
version: 1.0.0
description: "Inspect Redis hash slots, replication failover, sentinel nodes, and pubsub"
author: "AURA Team"
category: data
tags:
  - "redis cluster"
  - "hash slot"
  - "redis sentinel"
  - "redis replication"
triggers:
  - "redis cluster"
  - "hash slot"
  - "redis sentinel"
  - "redis replication"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Redis Cluster Manager

Inspect Redis hash slots, replication failover, sentinel nodes, and pubsub

## Metadata

- **ID:** `redis-cluster`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `redis cluster`
- `hash slot`
- `redis sentinel`
- `redis replication`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('redis-cluster', {
  /* input parameters */
});
```
