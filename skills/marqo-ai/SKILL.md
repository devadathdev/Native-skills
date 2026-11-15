---
id: marqo-ai
name: "Marqo Vector Search"
version: 1.0.0
description: "Inspect Marqo multimodal vector search indexes, tensor fields, and document models"
author: "AURA Team"
category: ai
tags:
  - "marqo"
  - "multimodal vector"
  - "marqo search"
  - "tensor fields"
triggers:
  - "marqo"
  - "multimodal vector"
  - "marqo search"
  - "tensor fields"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Marqo Vector Search

Inspect Marqo multimodal vector search indexes, tensor fields, and document models

## Metadata

- **ID:** `marqo-ai`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `marqo`
- `multimodal vector`
- `marqo search`
- `tensor fields`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('marqo-ai', {
  /* input parameters */
});
```
