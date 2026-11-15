---
id: typescript-compiler
name: "TypeScript Compiler"
version: 1.0.0
description: "Compile TypeScript projects, emit declarations, and verify type safety"
author: "AURA Team"
category: development
tags:
  - "tsc"
  - "typescript build"
  - "typecheck"
  - "ts compile"
triggers:
  - "tsc"
  - "typescript build"
  - "typecheck"
  - "ts compile"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# TypeScript Compiler

Compile TypeScript projects, emit declarations, and verify type safety

## Metadata

- **ID:** `typescript-compiler`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `tsc`
- `typescript build`
- `typecheck`
- `ts compile`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('typescript-compiler', {
  /* input parameters */
});
```
