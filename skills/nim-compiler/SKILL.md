---
id: nim-compiler
name: "Nim Compiler"
version: 1.0.0
description: "Inspect nim.cfg, nimble package files, and C code generation pipelines"
author: "AURA Team"
category: development
tags:
  - "nim compile"
  - "nimble"
  - "nim compiler"
  - "nim lang"
triggers:
  - "nim compile"
  - "nimble"
  - "nim compiler"
  - "nim lang"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Nim Compiler

Inspect nim.cfg, nimble package files, and C code generation pipelines

## Metadata

- **ID:** `nim-compiler`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `nim compile`
- `nimble`
- `nim compiler`
- `nim lang`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('nim-compiler', {
  /* input parameters */
});
```
