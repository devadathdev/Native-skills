---
id: c-cpp-cmake
name: "CMake Build Generator"
version: 1.0.0
description: "Configure CMakeLists.txt targets, toolchains, and native compilation"
author: "AURA Team"
category: development
tags:
  - "cmake"
  - "cmake build"
  - "cmakelists"
  - "native build"
triggers:
  - "cmake"
  - "cmake build"
  - "cmakelists"
  - "native build"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# CMake Build Generator

Configure CMakeLists.txt targets, toolchains, and native compilation

## Metadata

- **ID:** `c-cpp-cmake`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `cmake`
- `cmake build`
- `cmakelists`
- `native build`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('c-cpp-cmake', {
  /* input parameters */
});
```
