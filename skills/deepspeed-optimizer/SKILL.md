---
id: deepspeed-optimizer
name: "DeepSpeed Optimizer"
version: 1.0.0
description: "Inspect DeepSpeed ZeRO stage 1/2/3 memory partitioning, offloading, and config JSON"
author: "AURA Team"
category: ai
tags:
  - "deepspeed"
  - "zero stage"
  - "model parallel"
  - "distributed training"
triggers:
  - "deepspeed"
  - "zero stage"
  - "model parallel"
  - "distributed training"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# DeepSpeed Optimizer

Inspect DeepSpeed ZeRO stage 1/2/3 memory partitioning, offloading, and config JSON

## Metadata

- **ID:** `deepspeed-optimizer`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `deepspeed`
- `zero stage`
- `model parallel`
- `distributed training`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('deepspeed-optimizer', {
  /* input parameters */
});
```
