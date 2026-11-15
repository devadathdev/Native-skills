---
id: mlflow-tracking
name: "MLflow Tracking"
version: 1.0.0
description: "Inspect MLflow experiment runs, logged parameters, metrics histories, and model artifacts"
author: "AURA Team"
category: ai
tags:
  - "mlflow"
  - "mlflow tracking"
  - "experiment run"
  - "artifact store"
triggers:
  - "mlflow"
  - "mlflow tracking"
  - "experiment run"
  - "artifact store"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# MLflow Tracking

Inspect MLflow experiment runs, logged parameters, metrics histories, and model artifacts

## Metadata

- **ID:** `mlflow-tracking`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `mlflow`
- `mlflow tracking`
- `experiment run`
- `artifact store`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('mlflow-tracking', {
  /* input parameters */
});
```
