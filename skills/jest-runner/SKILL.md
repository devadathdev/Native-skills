---
id: jest-runner
name: "Jest Test Runner"
version: 1.0.0
description: "Inspect jest.config.js test regex patterns, moduleNameMapper, and coverage thresholds"
author: "AURA Team"
category: development
tags:
  - "jest"
  - "jest config"
  - "mock fn"
  - "coverage threshold"
triggers:
  - "jest"
  - "jest config"
  - "mock fn"
  - "coverage threshold"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Jest Test Runner

Inspect jest.config.js test regex patterns, moduleNameMapper, and coverage thresholds

## Metadata

- **ID:** `jest-runner`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `jest`
- `jest config`
- `mock fn`
- `coverage threshold`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('jest-runner', {
  /* input parameters */
});
```
