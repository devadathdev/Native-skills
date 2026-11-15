---
id: tanstack-query
name: "TanStack Query"
version: 1.0.0
description: "Inspect query keys, cache invalidation policies, stale time, and mutations"
author: "AURA Team"
category: development
tags:
  - "tanstack query"
  - "react query"
  - "query keys"
  - "stale time"
triggers:
  - "tanstack query"
  - "react query"
  - "query keys"
  - "stale time"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# TanStack Query

Inspect query keys, cache invalidation policies, stale time, and mutations

## Metadata

- **ID:** `tanstack-query`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `tanstack query`
- `react query`
- `query keys`
- `stale time`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('tanstack-query', {
  /* input parameters */
});
```
