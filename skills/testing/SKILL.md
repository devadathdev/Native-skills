---
id: testing
name: "Testing"
version: 1.0.0
description: "Execute and interpret automated test suites and code coverage"
author: "AURA Team"
category: development
tags:
  - "test"
  - "unit test"
  - "coverage"
  - "jest"
  - "pytest"
triggers:
  - "test"
  - "tests"
  - "testing"
  - "run tests"
  - "coverage"
permissions:
  - type: shell
    scope: [test]
  - type: filesystem
    scope: [read]
enabled: true
entryPoint: src/skills/core/index.ts
---

# Testing

Execute and interpret automated test suites and code coverage

## Metadata

- **ID:** `testing`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `test`)
- `filesystem` (scope: `read`)

## Triggers

- `test`
- `tests`
- `testing`
- `run tests`
- `coverage`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('testing', {
  /* input parameters */
});
```
