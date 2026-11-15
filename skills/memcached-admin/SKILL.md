---
id: memcached-admin
name: "Memcached Admin"
version: 1.0.0
description: "Inspect slab allocation classes, item eviction metrics, and multi-server pools"
author: "AURA Team"
category: data
tags:
  - "memcached"
  - "slab allocator"
  - "memcached pool"
  - "cache slabs"
triggers:
  - "memcached"
  - "slab allocator"
  - "memcached pool"
  - "cache slabs"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Memcached Admin

Inspect slab allocation classes, item eviction metrics, and multi-server pools

## Metadata

- **ID:** `memcached-admin`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `memcached`
- `slab allocator`
- `memcached pool`
- `cache slabs`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('memcached-admin', {
  /* input parameters */
});
```
