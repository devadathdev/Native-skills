---
id: elysia-router
name: "Elysia Router"
version: 1.0.0
description: "Inspect Bun Elysia routes, TypeBox schema validation, and Eden treaty RPCs"
author: "AURA Team"
category: development
tags:
  - "elysia"
  - "bun elysia"
  - "typebox"
  - "eden treaty"
triggers:
  - "elysia"
  - "bun elysia"
  - "typebox"
  - "eden treaty"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Elysia Router

Inspect Bun Elysia routes, TypeBox schema validation, and Eden treaty RPCs

## Metadata

- **ID:** `elysia-router`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `elysia`
- `bun elysia`
- `typebox`
- `eden treaty`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('elysia-router', {
  /* input parameters */
});
```
