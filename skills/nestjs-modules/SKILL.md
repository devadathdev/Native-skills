---
id: nestjs-modules
name: "NestJS Modules"
version: 1.0.0
description: "Inspect NestJS dependency injection containers, decorators, and guards"
author: "AURA Team"
category: development
tags:
  - "nestjs"
  - "nest module"
  - "nest controller"
  - "nest injectable"
triggers:
  - "nestjs"
  - "nest module"
  - "nest controller"
  - "nest injectable"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# NestJS Modules

Inspect NestJS dependency injection containers, decorators, and guards

## Metadata

- **ID:** `nestjs-modules`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `nestjs`
- `nest module`
- `nest controller`
- `nest injectable`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('nestjs-modules', {
  /* input parameters */
});
```
