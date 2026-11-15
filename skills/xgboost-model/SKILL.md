---
id: xgboost-model
name: "XGBoost Model"
version: 1.0.0
description: "Inspect XGBoost booster parameters, tree depths, learning rates, and feature importances"
author: "AURA Team"
category: ai
tags:
  - "xgboost"
  - "gradient boosting"
  - "feature importance"
  - "tree booster"
triggers:
  - "xgboost"
  - "gradient boosting"
  - "feature importance"
  - "tree booster"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# XGBoost Model

Inspect XGBoost booster parameters, tree depths, learning rates, and feature importances

## Metadata

- **ID:** `xgboost-model`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `xgboost`
- `gradient boosting`
- `feature importance`
- `tree booster`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('xgboost-model', {
  /* input parameters */
});
```
