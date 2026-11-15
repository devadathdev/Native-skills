---
id: scann-indexer
name: "ScaNN Vector Search"
version: 1.0.0
description: "Inspect Google ScaNN anisotropic vector quantization, pruning, and indexing"
author: "AURA Team"
category: ai
tags:
  - "scann"
  - "anisotropic quantization"
  - "vector search google"
  - "fast search"
triggers:
  - "scann"
  - "anisotropic quantization"
  - "vector search google"
  - "fast search"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# ScaNN Vector Search

Inspect Google ScaNN anisotropic vector quantization, pruning, and indexing

## Metadata

- **ID:** `scann-indexer`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `scann`
- `anisotropic quantization`
- `vector search google`
- `fast search`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('scann-indexer', {
  /* input parameters */
});
```
