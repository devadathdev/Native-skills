---
id: tensorrt-optimizer
name: "TensorRT Optimizer"
version: 1.0.0
description: "Inspect NVIDIA TensorRT engine building, FP16/INT8 precision calibration, and CUDA layers"
author: "AURA Team"
category: ai
tags:
  - "tensorrt"
  - "nvidia tensorrt"
  - "int8 quantization"
  - "cuda engine"
triggers:
  - "tensorrt"
  - "nvidia tensorrt"
  - "int8 quantization"
  - "cuda engine"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# TensorRT Optimizer

Inspect NVIDIA TensorRT engine building, FP16/INT8 precision calibration, and CUDA layers

## Metadata

- **ID:** `tensorrt-optimizer`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `tensorrt`
- `nvidia tensorrt`
- `int8 quantization`
- `cuda engine`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('tensorrt-optimizer', {
  /* input parameters */
});
```
