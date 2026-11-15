---
id: pitest-mutation
name: "PIT Mutation Testing"
version: 1.0.0
description: "Inspect Java PITest mutation coverage reports, mutator sets, and bytecode changes"
author: "AURA Team"
category: development
tags:
  - "pitest"
  - "java mutation"
  - "bytecode mutator"
  - "pit test"
triggers:
  - "pitest"
  - "java mutation"
  - "bytecode mutator"
  - "pit test"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# PIT Mutation Testing

Inspect Java PITest mutation coverage reports, mutator sets, and bytecode changes

## Metadata

- **ID:** `pitest-mutation`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `pitest`
- `java mutation`
- `bytecode mutator`
- `pit test`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('pitest-mutation', {
  /* input parameters */
});
```
