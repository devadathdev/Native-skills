---
id: unittest-python
name: "Python unittest"
version: 1.0.0
description: "Inspect Python standard unittest TestCase classes, test loaders, and assertion suites"
author: "AURA Team"
category: development
tags:
  - "unittest"
  - "testcase"
  - "python unit test"
  - "assert equal"
triggers:
  - "unittest"
  - "testcase"
  - "python unit test"
  - "assert equal"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Python unittest

Inspect Python standard unittest TestCase classes, test loaders, and assertion suites

## Metadata

- **ID:** `unittest-python`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `unittest`
- `testcase`
- `python unit test`
- `assert equal`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('unittest-python', {
  /* input parameters */
});
```
