---
id: vllm-server
name: "vLLM High-Throughput"
version: 1.0.0
description: "Inspect vLLM PagedAttention cache usage, continuous batching, and model serving configs"
author: "AURA Team"
category: ai
tags:
  - "vllm"
  - "pagedattention"
  - "continuous batching"
  - "llm serving"
triggers:
  - "vllm"
  - "pagedattention"
  - "continuous batching"
  - "llm serving"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# vLLM High-Throughput

Inspect vLLM PagedAttention cache usage, continuous batching, and model serving configs

## Metadata

- **ID:** `vllm-server`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `vllm`
- `pagedattention`
- `continuous batching`
- `llm serving`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('vllm-server', {
  /* input parameters */
});
```
