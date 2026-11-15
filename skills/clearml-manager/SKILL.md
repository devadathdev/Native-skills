---
id: clearml-manager
name: "ClearML Manager"
version: 1.0.0
description: "Inspect ClearML task parameters, hyperparameter tuning, and remote execution queues"
author: "AURA Team"
category: ai
tags:
  - "clearml"
  - "ml tracking"
  - "experiment manager"
  - "hyperparameter"
triggers:
  - "clearml"
  - "ml tracking"
  - "experiment manager"
  - "hyperparameter"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# ClearML Manager

Inspect ClearML task parameters, hyperparameter tuning, and remote execution queues

## Metadata

- **ID:** `clearml-manager`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `clearml`
- `ml tracking`
- `experiment manager`
- `hyperparameter`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('clearml-manager', {
  /* input parameters */
});
```
