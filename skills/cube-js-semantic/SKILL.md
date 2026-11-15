---
id: cube-js-semantic
name: "Cube.js Semantic Layer"
version: 1.0.0
description: "Inspect Cube data schemas, measures, dimensions, pre-aggregations, and APIs"
author: "AURA Team"
category: data
tags:
  - "cubejs"
  - "semantic layer"
  - "pre aggregation"
  - "cube data schema"
triggers:
  - "cubejs"
  - "semantic layer"
  - "pre aggregation"
  - "cube data schema"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Cube.js Semantic Layer

Inspect Cube data schemas, measures, dimensions, pre-aggregations, and APIs

## Metadata

- **ID:** `cube-js-semantic`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `cubejs`
- `semantic layer`
- `pre aggregation`
- `cube data schema`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('cube-js-semantic', {
  /* input parameters */
});
```
