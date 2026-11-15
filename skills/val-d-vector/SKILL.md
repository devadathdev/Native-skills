---
id: val-d-vector
name: "Vald Distributed Vector"
version: 1.0.0
description: "Inspect Cloud-native distributed Vald vector search engine agents and gateways"
author: "AURA Team"
category: ai
tags:
  - "vald"
  - "cloud native vector"
  - "distributed vald"
  - "vector agent"
triggers:
  - "vald"
  - "cloud native vector"
  - "distributed vald"
  - "vector agent"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Vald Distributed Vector

Inspect Cloud-native distributed Vald vector search engine agents and gateways

## Metadata

- **ID:** `val-d-vector`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `vald`
- `cloud native vector`
- `distributed vald`
- `vector agent`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('val-d-vector', {
  /* input parameters */
});
```
