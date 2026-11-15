---
id: pytest-runner
name: "Pytest Test Runner"
version: 1.0.0
description: "Inspect pytest test fixtures, parametrize decorators, conftest.py, and coverage"
author: "AURA Team"
category: development
tags:
  - "pytest"
  - "conftest"
  - "pytest fixture"
  - "python test"
triggers:
  - "pytest"
  - "conftest"
  - "pytest fixture"
  - "python test"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Pytest Test Runner

Inspect pytest test fixtures, parametrize decorators, conftest.py, and coverage

## Metadata

- **ID:** `pytest-runner`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `pytest`
- `conftest`
- `pytest fixture`
- `python test`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('pytest-runner', {
  /* input parameters */
});
```
