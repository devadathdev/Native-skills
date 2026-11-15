---
id: kotlin-compiler
name: "Kotlin Compiler"
version: 1.0.0
description: "Inspect Kotlin Multiplatform (KMP) configurations and kotlinc compilation"
author: "AURA Team"
category: development
tags:
  - "kotlinc"
  - "kotlin compile"
  - "kmp"
  - "kotlin build"
triggers:
  - "kotlinc"
  - "kotlin compile"
  - "kmp"
  - "kotlin build"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Kotlin Compiler

Inspect Kotlin Multiplatform (KMP) configurations and kotlinc compilation

## Metadata

- **ID:** `kotlin-compiler`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `kotlinc`
- `kotlin compile`
- `kmp`
- `kotlin build`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('kotlin-compiler', {
  /* input parameters */
});
```
