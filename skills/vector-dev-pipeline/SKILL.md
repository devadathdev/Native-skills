---
id: vector-dev-pipeline
name: "Vector Log Agent"
version: 1.0.0
description: "Inspect Vector.dev sources, transforms (VRL - Vector Remap Language), and sinks"
author: "AURA Team"
category: devops
tags:
  - "vector dev"
  - "vrl"
  - "vector remap"
  - "log transform"
triggers:
  - "vector dev"
  - "vrl"
  - "vector remap"
  - "log transform"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Vector Log Agent

Inspect Vector.dev sources, transforms (VRL - Vector Remap Language), and sinks

## Metadata

- **ID:** `vector-dev-pipeline`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `vector dev`
- `vrl`
- `vector remap`
- `log transform`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('vector-dev-pipeline', {
  /* input parameters */
});
```
