---
id: cache-manager
name: "Cache Manager"
version: 1.0.0
description: "Inspect cache statistics, formulate TTL policies, and model Redis/Memcached keyspaces"
author: "AURA Team"
category: data
tags:
  - "cache"
  - "redis"
  - "memcached"
  - "cache invalidation"
  - "ttl"
  - "set cache"
  - "evict cache"
triggers:
  - "cache"
  - "redis"
  - "memcached"
  - "cache invalidation"
  - "ttl"
  - "set cache"
  - "evict cache"
permissions:
  - type: database
    scope: [cache]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# Cache Manager

Inspect cache statistics, formulate TTL policies, and model Redis/Memcached keyspaces

## Metadata

- **ID:** `cache-manager`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `cache`)

## Triggers

- `cache`
- `redis`
- `memcached`
- `cache invalidation`
- `ttl`
- `set cache`
- `evict cache`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('cache-manager', {
  /* input parameters */
});
```
