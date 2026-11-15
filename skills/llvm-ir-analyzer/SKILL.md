---
id: llvm-ir-analyzer
name: "LLVM IR Analyzer"
version: 1.0.0
description: "Inspect LLVM intermediate representation, optimization passes, and bitcode"
author: "AURA Team"
category: development
tags:
  - "llvm"
  - "llvm ir"
  - "opt pass"
  - "llvm bitcode"
triggers:
  - "llvm"
  - "llvm ir"
  - "opt pass"
  - "llvm bitcode"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# LLVM IR Analyzer

Inspect LLVM intermediate representation, optimization passes, and bitcode

## Metadata

- **ID:** `llvm-ir-analyzer`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `llvm`
- `llvm ir`
- `opt pass`
- `llvm bitcode`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('llvm-ir-analyzer', {
  /* input parameters */
});
```
