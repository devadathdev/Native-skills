---
id: svg-optimizer
name: "SVG Optimizer"
version: 1.0.0
description: "Minify SVG vector graphics, strip editor metadata, cleanup paths, and normalize viewBox"
author: "AURA Team"
category: documents
tags:
  - "svg"
  - "optimize svg"
  - "svgo"
  - "vector graphics"
  - "clean svg"
  - "minify svg"
triggers:
  - "svg"
  - "optimize svg"
  - "svgo"
  - "vector graphics"
  - "clean svg"
  - "minify svg"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# SVG Optimizer

Minify SVG vector graphics, strip editor metadata, cleanup paths, and normalize viewBox

## Metadata

- **ID:** `svg-optimizer`
- **Category:** `documents`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `svg`
- `optimize svg`
- `svgo`
- `vector graphics`
- `clean svg`
- `minify svg`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('svg-optimizer', {
  /* input parameters */
});
```
