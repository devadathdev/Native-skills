---
id: codecov-inspector
name: "Codecov Inspector"
version: 1.0.0
description: "Inspect code coverage reports, diff coverage thresholds, and .codecov.yml flags"
author: "AURA Team"
category: development
tags:
  - "codecov"
  - "coverage report"
  - "diff coverage"
  - "lcov report"
triggers:
  - "codecov"
  - "coverage report"
  - "diff coverage"
  - "lcov report"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Codecov Inspector

Inspect code coverage reports, diff coverage thresholds, and .codecov.yml flags

## Metadata

- **ID:** `codecov-inspector`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `codecov`
- `coverage report`
- `diff coverage`
- `lcov report`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('codecov-inspector', {
  /* input parameters */
});
```
