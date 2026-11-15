---
id: lightgbm-model
name: "LightGBM Model"
version: 1.0.0
description: "Inspect LightGBM dataset descriptors, leaf-wise split settings, and categorical features"
author: "AURA Team"
category: ai
tags:
  - "lightgbm"
  - "lgb"
  - "gradient boosting tree"
  - "leaf wise"
triggers:
  - "lightgbm"
  - "lgb"
  - "gradient boosting tree"
  - "leaf wise"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# LightGBM Model

Inspect LightGBM dataset descriptors, leaf-wise split settings, and categorical features

## Metadata

- **ID:** `lightgbm-model`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `lightgbm`
- `lgb`
- `gradient boosting tree`
- `leaf wise`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('lightgbm-model', {
  /* input parameters */
});
```
