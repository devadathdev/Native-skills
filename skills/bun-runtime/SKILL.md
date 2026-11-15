---
id: bun-runtime
name: "Bun Runtime"
version: 1.0.0
description: "Inspect Bun fast package manager, bun:sqlite bindings, and native HTTP server"
author: "AURA Team"
category: development
tags:
  - "bun"
  - "bun install"
  - "bun runtime"
  - "bun test"
triggers:
  - "bun"
  - "bun install"
  - "bun runtime"
  - "bun test"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Bun Runtime

Inspect Bun fast package manager, bun:sqlite bindings, and native HTTP server

## Metadata

- **ID:** `bun-runtime`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `bun`
- `bun install`
- `bun runtime`
- `bun test`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('bun-runtime', {
  /* input parameters */
});
```
