---
id: scikit-learn-pipeline
name: "Scikit-Learn Pipeline"
version: 1.0.0
description: "Inspect sklearn estimators, transformers, cross-validation splits, and grid search"
author: "AURA Team"
category: ai
tags:
  - "scikit learn"
  - "sklearn"
  - "ml pipeline"
  - "cross validation"
triggers:
  - "scikit learn"
  - "sklearn"
  - "ml pipeline"
  - "cross validation"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Scikit-Learn Pipeline

Inspect sklearn estimators, transformers, cross-validation splits, and grid search

## Metadata

- **ID:** `scikit-learn-pipeline`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `scikit learn`
- `sklearn`
- `ml pipeline`
- `cross validation`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('scikit-learn-pipeline', {
  /* input parameters */
});
```
