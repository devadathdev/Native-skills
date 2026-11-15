---
id: wandb-tracking
name: "Weights & Biases"
version: 1.0.0
description: "Inspect W&B run configs, loss curves, sweep configurations, and artifact versions"
author: "AURA Team"
category: ai
tags:
  - "wandb"
  - "weights and biases"
  - "hyperparameter sweep"
  - "run logs"
triggers:
  - "wandb"
  - "weights and biases"
  - "hyperparameter sweep"
  - "run logs"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Weights & Biases

Inspect W&B run configs, loss curves, sweep configurations, and artifact versions

## Metadata

- **ID:** `wandb-tracking`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `wandb`
- `weights and biases`
- `hyperparameter sweep`
- `run logs`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('wandb-tracking', {
  /* input parameters */
});
```
