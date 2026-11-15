---
id: tgi-server
name: "Text Generation Inference"
version: 1.0.0
description: "Inspect Hugging Face TGI server parameters, flash-attention flags, and token streams"
author: "AURA Team"
category: ai
tags:
  - "tgi"
  - "text generation inference"
  - "flash attention"
  - "hf tgi"
triggers:
  - "tgi"
  - "text generation inference"
  - "flash attention"
  - "hf tgi"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Text Generation Inference

Inspect Hugging Face TGI server parameters, flash-attention flags, and token streams

## Metadata

- **ID:** `tgi-server`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `tgi`
- `text generation inference`
- `flash attention`
- `hf tgi`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('tgi-server', {
  /* input parameters */
});
```
