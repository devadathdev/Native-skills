---
id: pinecone-client
name: "Pinecone Vector DB"
version: 1.0.0
description: "Inspect Pinecone serverless vector indexes, namespaces, and top-K similarity search"
author: "AURA Team"
category: ai
tags:
  - "pinecone"
  - "pinecone index"
  - "vector database"
  - "upsert vector"
triggers:
  - "pinecone"
  - "pinecone index"
  - "vector database"
  - "upsert vector"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Pinecone Vector DB

Inspect Pinecone serverless vector indexes, namespaces, and top-K similarity search

## Metadata

- **ID:** `pinecone-client`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `pinecone`
- `pinecone index`
- `vector database`
- `upsert vector`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('pinecone-client', {
  /* input parameters */
});
```
