---
id: triton-inference-server
name: "NVIDIA Triton Server"
version: 1.0.0
description: "Inspect Triton model repository configs, dynamic batching, and ensemble schedulers"
author: "AURA Team"
category: ai
tags:
  - "triton"
  - "nvidia triton"
  - "triton server"
  - "model repository"
triggers:
  - "triton"
  - "nvidia triton"
  - "triton server"
  - "model repository"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# NVIDIA Triton Server

Inspect Triton model repository configs, dynamic batching, and ensemble schedulers

## Metadata

- **ID:** `triton-inference-server`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `triton`
- `nvidia triton`
- `triton server`
- `model repository`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('triton-inference-server', {
  /* input parameters */
});
```
