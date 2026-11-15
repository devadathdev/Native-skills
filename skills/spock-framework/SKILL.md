---
id: spock-framework
name: "Spock Framework"
version: 1.0.0
description: "Inspect Groovy Spock Specification blocks (given, when, then, where), and mocks"
author: "AURA Team"
category: development
tags:
  - "spock"
  - "spock framework"
  - "groovy test"
  - "data driven test"
triggers:
  - "spock"
  - "spock framework"
  - "groovy test"
  - "data driven test"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Spock Framework

Inspect Groovy Spock Specification blocks (given, when, then, where), and mocks

## Metadata

- **ID:** `spock-framework`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `spock`
- `spock framework`
- `groovy test`
- `data driven test`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('spock-framework', {
  /* input parameters */
});
```
