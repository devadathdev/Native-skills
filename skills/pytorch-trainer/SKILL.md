---
id: pytorch-trainer
name: "PyTorch Trainer"
version: 1.0.0
description: "Inspect PyTorch nn.Module architectures, optimizers, loss functions, and CUDA tensors"
author: "AURA Team"
category: ai
tags:
  - "pytorch"
  - "torch"
  - "nn module"
  - "cuda tensor"
  - "loss function"
triggers:
  - "pytorch"
  - "torch"
  - "nn module"
  - "cuda tensor"
  - "loss function"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# PyTorch Trainer

Inspect PyTorch nn.Module architectures, optimizers, loss functions, and CUDA tensors

## Metadata

- **ID:** `pytorch-trainer`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `pytorch`
- `torch`
- `nn module`
- `cuda tensor`
- `loss function`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('pytorch-trainer', {
  /* input parameters */
});
```
