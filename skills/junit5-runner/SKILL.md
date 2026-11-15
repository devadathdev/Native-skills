---
id: junit5-runner
name: "JUnit 5 Runner"
version: 1.0.0
description: "Inspect JUnit Jupiter @Test annotations, @ParameterizedTest, and lifecycle hooks"
author: "AURA Team"
category: development
tags:
  - "junit"
  - "junit5"
  - "jupiter test"
  - "java unit test"
triggers:
  - "junit"
  - "junit5"
  - "jupiter test"
  - "java unit test"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# JUnit 5 Runner

Inspect JUnit Jupiter @Test annotations, @ParameterizedTest, and lifecycle hooks

## Metadata

- **ID:** `junit5-runner`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `junit`
- `junit5`
- `jupiter test`
- `java unit test`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('junit5-runner', {
  /* input parameters */
});
```
