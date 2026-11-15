---
id: model-routing
name: "Model Routing"
version: 1.0.0
description: "Intelligently route AI tasks to the most cost-effective and capable foundation model"
author: "AURA Team"
category: ai
tags:
  - "choose model"
  - "route model"
  - "model routing"
  - "select model"
triggers:
  - "choose model"
  - "route model"
  - "model routing"
  - "select model"
permissions:
  - type: model
    scope: [routing]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Model Routing

Intelligently route AI tasks to the most cost-effective and capable foundation model

## Metadata

- **ID:** `model-routing`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `routing`)

## Triggers

- `choose model`
- `route model`
- `model routing`
- `select model`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('model-routing', {
  /* input parameters */
});
```
