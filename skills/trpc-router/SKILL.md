---
id: trpc-router
name: "tRPC Router"
version: 1.0.0
description: "Inspect end-to-end typesafe tRPC router procedures, queries, and mutations"
author: "AURA Team"
category: development
tags:
  - "trpc"
  - "trpc router"
  - "procedure"
  - "typesafe rpc"
triggers:
  - "trpc"
  - "trpc router"
  - "procedure"
  - "typesafe rpc"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# tRPC Router

Inspect end-to-end typesafe tRPC router procedures, queries, and mutations

## Metadata

- **ID:** `trpc-router`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `trpc`
- `trpc router`
- `procedure`
- `typesafe rpc`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('trpc-router', {
  /* input parameters */
});
```
