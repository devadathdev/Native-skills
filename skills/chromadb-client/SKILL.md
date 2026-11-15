---
id: chromadb-client
name: "ChromaDB Client"
version: 1.0.0
description: "Inspect Chroma collections, metadata filters, embeddings storage, and queries"
author: "AURA Team"
category: ai
tags:
  - "chromadb"
  - "chroma"
  - "embeddings database"
  - "chroma collection"
triggers:
  - "chromadb"
  - "chroma"
  - "embeddings database"
  - "chroma collection"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# ChromaDB Client

Inspect Chroma collections, metadata filters, embeddings storage, and queries

## Metadata

- **ID:** `chromadb-client`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `chromadb`
- `chroma`
- `embeddings database`
- `chroma collection`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('chromadb-client', {
  /* input parameters */
});
```
