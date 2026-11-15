---
id: tensorflow-keras
name: "TensorFlow Keras"
version: 1.0.0
description: "Inspect TensorFlow Keras models, layer configs, callbacks, and compile options"
author: "AURA Team"
category: ai
tags:
  - "tensorflow"
  - "keras"
  - "tf model"
  - "keras sequential"
triggers:
  - "tensorflow"
  - "keras"
  - "tf model"
  - "keras sequential"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# TensorFlow Keras

Inspect TensorFlow Keras models, layer configs, callbacks, and compile options

## Metadata

- **ID:** `tensorflow-keras`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `tensorflow`
- `keras`
- `tf model`
- `keras sequential`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('tensorflow-keras', {
  /* input parameters */
});
```
