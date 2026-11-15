---
id: zig-build
name: "Zig Build System"
version: 1.0.0
description: "Inspect build.zig configurations, cross-compilation targets, and Zig modules"
author: "AURA Team"
category: development
tags:
  - "zig build"
  - "zig compiler"
  - "zig c"
  - "build zig"
triggers:
  - "zig build"
  - "zig compiler"
  - "zig c"
  - "build zig"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Zig Build System

Inspect build.zig configurations, cross-compilation targets, and Zig modules

## Metadata

- **ID:** `zig-build`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `zig build`
- `zig compiler`
- `zig c`
- `build zig`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('zig-build', {
  /* input parameters */
});
```
