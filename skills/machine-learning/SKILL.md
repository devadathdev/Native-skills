---
id: machine-learning
name: "Machine Learning"
version: 1.0.0
description: "Prepare ML training pipelines, feature engineering, and evaluation specs"
author: "AURA Team"
category: ai
tags:
  - "machine learning"
  - "train model"
  - "ml model"
  - "scikit"
  - "classifier"
triggers:
  - "machine learning"
  - "train model"
  - "ml model"
  - "scikit"
  - "classifier"
permissions:
  - type: model
    scope: [ml]
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Machine Learning

Prepare ML training pipelines, feature engineering, and evaluation specs

## Metadata

- **ID:** `machine-learning`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `ml`)
- `filesystem` (scope: `read, write`)

## Triggers

- `machine learning`
- `train model`
- `ml model`
- `scikit`
- `classifier`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('machine-learning', {
  /* input parameters */
});
```
