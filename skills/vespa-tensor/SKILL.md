---
id: vespa-tensor
name: "Vespa Tensor Computations"
version: 1.0.0
description: "Inspect Vespa tensor algebra expressions, dot products, and multi-stage ranking"
author: "AURA Team"
category: ai
tags:
  - "vespa tensor"
  - "tensor ranking"
  - "dot product"
  - "ranking pipeline"
triggers:
  - "vespa tensor"
  - "tensor ranking"
  - "dot product"
  - "ranking pipeline"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Vespa Tensor Computations

Inspect Vespa tensor algebra expressions, dot products, and multi-stage ranking

## Metadata

- **ID:** `vespa-tensor`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `vespa tensor`
- `tensor ranking`
- `dot product`
- `ranking pipeline`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('vespa-tensor', {
  /* input parameters */
});
```
