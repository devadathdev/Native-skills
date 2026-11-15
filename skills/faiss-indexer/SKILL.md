---
id: faiss-indexer
name: "FAISS Indexer"
version: 1.0.0
description: "Inspect Facebook AI Similarity Search index types, quantization, and search batches"
author: "AURA Team"
category: ai
tags:
  - "faiss"
  - "similarity search"
  - "vector quantization"
  - "faiss index"
triggers:
  - "faiss"
  - "similarity search"
  - "vector quantization"
  - "faiss index"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# FAISS Indexer

Inspect Facebook AI Similarity Search index types, quantization, and search batches

## Metadata

- **ID:** `faiss-indexer`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `faiss`
- `similarity search`
- `vector quantization`
- `faiss index`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('faiss-indexer', {
  /* input parameters */
});
```
