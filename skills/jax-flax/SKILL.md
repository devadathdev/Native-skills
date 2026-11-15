---
id: jax-flax
name: "JAX / Flax Engine"
version: 1.0.0
description: "Inspect JAX functional transformations (jit, grad, vmap) and Flax linen modules"
author: "AURA Team"
category: ai
tags:
  - "jax"
  - "flax"
  - "jax jit"
  - "vmap"
  - "autodiff"
triggers:
  - "jax"
  - "flax"
  - "jax jit"
  - "vmap"
  - "autodiff"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# JAX / Flax Engine

Inspect JAX functional transformations (jit, grad, vmap) and Flax linen modules

## Metadata

- **ID:** `jax-flax`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `jax`
- `flax`
- `jax jit`
- `vmap`
- `autodiff`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('jax-flax', {
  /* input parameters */
});
```
