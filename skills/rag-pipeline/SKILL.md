---
id: rag-pipeline
name: "RAG Pipeline"
version: 1.0.0
description: "Chunk documents recursively, rank semantic passages, and construct grounded context prompts"
author: "AURA Team"
category: ai
tags:
  - "rag"
  - "retrieval augmented generation"
  - "document chunking"
  - "context ranking"
  - "rag pipeline"
triggers:
  - "rag"
  - "retrieval augmented generation"
  - "document chunking"
  - "context ranking"
  - "rag pipeline"
permissions:
  - type: model
    scope: [rag]
  - type: api
    scope: [vector]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# RAG Pipeline

Chunk documents recursively, rank semantic passages, and construct grounded context prompts

## Metadata

- **ID:** `rag-pipeline`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `rag`)
- `api` (scope: `vector`)

## Triggers

- `rag`
- `retrieval augmented generation`
- `document chunking`
- `context ranking`
- `rag pipeline`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('rag-pipeline', {
  /* input parameters */
});
```
