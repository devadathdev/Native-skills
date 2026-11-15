---
id: ollama-manager
name: "Ollama Manager"
version: 1.0.0
description: "Inspect local Ollama Modelfile configurations, model parameters, and quantized GGUF weights"
author: "AURA Team"
category: ai
tags:
  - "ollama"
  - "modelfile"
  - "local llm"
  - "gguf model"
triggers:
  - "ollama"
  - "modelfile"
  - "local llm"
  - "gguf model"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Ollama Manager

Inspect local Ollama Modelfile configurations, model parameters, and quantized GGUF weights

## Metadata

- **ID:** `ollama-manager`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `ollama`
- `modelfile`
- `local llm`
- `gguf model`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('ollama-manager', {
  /* input parameters */
});
```
