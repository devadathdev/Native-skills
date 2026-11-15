---
id: c-cpp-make
name: "Makefile Runner"
version: 1.0.0
description: "Parse and validate Makefile rules, phony targets, and compilation flags"
author: "AURA Team"
category: development
tags:
  - "make"
  - "makefile"
  - "make build"
  - "c compiler"
triggers:
  - "make"
  - "makefile"
  - "make build"
  - "c compiler"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Makefile Runner

Parse and validate Makefile rules, phony targets, and compilation flags

## Metadata

- **ID:** `c-cpp-make`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `make`
- `makefile`
- `make build`
- `c compiler`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('c-cpp-make', {
  /* input parameters */
});
```
