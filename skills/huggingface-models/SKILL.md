---
id: huggingface-models
name: "Hugging Face Models"
version: 1.0.0
description: "Inspect Hugging Face model cards, pipeline architectures, weights, and tokenizer files"
author: "AURA Team"
category: ai
tags:
  - "huggingface"
  - "transformers"
  - "model card"
  - "hf pipeline"
triggers:
  - "huggingface"
  - "transformers"
  - "model card"
  - "hf pipeline"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Hugging Face Models

Inspect Hugging Face model cards, pipeline architectures, weights, and tokenizer files

## Metadata

- **ID:** `huggingface-models`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `huggingface`
- `transformers`
- `model card`
- `hf pipeline`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('huggingface-models', {
  /* input parameters */
});
```
