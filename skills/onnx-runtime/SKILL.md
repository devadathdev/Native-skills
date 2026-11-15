---
id: onnx-runtime
name: "ONNX Runtime"
version: 1.0.0
description: "Inspect Open Neural Network Exchange models, graph nodes, inputs, and inference sessions"
author: "AURA Team"
category: ai
tags:
  - "onnx"
  - "onnx runtime"
  - "model graph"
  - "onnx model"
triggers:
  - "onnx"
  - "onnx runtime"
  - "model graph"
  - "onnx model"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# ONNX Runtime

Inspect Open Neural Network Exchange models, graph nodes, inputs, and inference sessions

## Metadata

- **ID:** `onnx-runtime`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `onnx`
- `onnx runtime`
- `model graph`
- `onnx model`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('onnx-runtime', {
  /* input parameters */
});
```
