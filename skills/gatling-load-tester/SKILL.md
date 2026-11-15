---
id: gatling-load-tester
name: "Gatling Load Tester"
version: 1.0.0
description: "Inspect Gatling Scala/Java simulations, injection profiles, and response assertions"
author: "AURA Team"
category: development
tags:
  - "gatling"
  - "gatling simulation"
  - "injection profile"
  - "performance test"
triggers:
  - "gatling"
  - "gatling simulation"
  - "injection profile"
  - "performance test"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Gatling Load Tester

Inspect Gatling Scala/Java simulations, injection profiles, and response assertions

## Metadata

- **ID:** `gatling-load-tester`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `gatling`
- `gatling simulation`
- `injection profile`
- `performance test`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('gatling-load-tester', {
  /* input parameters */
});
```
