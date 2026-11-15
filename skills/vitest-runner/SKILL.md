---
id: vitest-runner
name: "Vitest Test Runner"
version: 1.0.0
description: "Inspect vitest.config.ts test suites, concurrent runs, mocks, and snapshots"
author: "AURA Team"
category: development
tags:
  - "vitest"
  - "vitest config"
  - "vite test"
  - "unit test vite"
triggers:
  - "vitest"
  - "vitest config"
  - "vite test"
  - "unit test vite"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Vitest Test Runner

Inspect vitest.config.ts test suites, concurrent runs, mocks, and snapshots

## Metadata

- **ID:** `vitest-runner`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `vitest`
- `vitest config`
- `vite test`
- `unit test vite`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('vitest-runner', {
  /* input parameters */
});
```
