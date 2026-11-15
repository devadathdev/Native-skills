---
id: robot-framework
name: "Robot Framework"
version: 1.0.0
description: "Inspect Robot Framework keyword-driven test tables, settings, and library bindings"
author: "AURA Team"
category: development
tags:
  - "robot framework"
  - "keyword test"
  - "acceptance test"
  - "robot test"
triggers:
  - "robot framework"
  - "keyword test"
  - "acceptance test"
  - "robot test"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Robot Framework

Inspect Robot Framework keyword-driven test tables, settings, and library bindings

## Metadata

- **ID:** `robot-framework`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `robot framework`
- `keyword test`
- `acceptance test`
- `robot test`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('robot-framework', {
  /* input parameters */
});
```
