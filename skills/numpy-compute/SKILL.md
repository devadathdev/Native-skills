---
id: numpy-compute
name: "NumPy Matrix Computations"
version: 1.0.0
description: "Inspect multi-dimensional ndarray operations, broadcasting shapes, and linear algebra"
author: "AURA Team"
category: data
tags:
  - "numpy"
  - "ndarray"
  - "matrix algebra"
  - "broadcasting"
triggers:
  - "numpy"
  - "ndarray"
  - "matrix algebra"
  - "broadcasting"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# NumPy Matrix Computations

Inspect multi-dimensional ndarray operations, broadcasting shapes, and linear algebra

## Metadata

- **ID:** `numpy-compute`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `numpy`
- `ndarray`
- `matrix algebra`
- `broadcasting`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('numpy-compute', {
  /* input parameters */
});
```
