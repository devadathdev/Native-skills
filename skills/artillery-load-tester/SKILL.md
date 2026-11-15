---
id: artillery-load-tester
name: "Artillery Load Tester"
version: 1.0.0
description: "Inspect artillery.yml scenario flows, arrival rates, phases, and HTTP benchmarks"
author: "AURA Team"
category: development
tags:
  - "artillery"
  - "load testing artillery"
  - "arrival rate"
  - "http stress"
triggers:
  - "artillery"
  - "load testing artillery"
  - "arrival rate"
  - "http stress"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Artillery Load Tester

Inspect artillery.yml scenario flows, arrival rates, phases, and HTTP benchmarks

## Metadata

- **ID:** `artillery-load-tester`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `artillery`
- `load testing artillery`
- `arrival rate`
- `http stress`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('artillery-load-tester', {
  /* input parameters */
});
```
