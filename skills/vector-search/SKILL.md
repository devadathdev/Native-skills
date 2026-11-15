---
id: vector-search
name: "Vector Search"
version: 1.0.0
description: "Perform semantic k-nearest neighbors (kNN) search and cosine similarity rankings"
author: "AURA Team"
category: data
tags:
  - "vector search"
  - "similarity search"
  - "embeddings search"
  - "nearest neighbor"
  - "knn"
triggers:
  - "vector search"
  - "similarity search"
  - "embeddings search"
  - "nearest neighbor"
  - "knn"
permissions:
  - type: model
    scope: [embedding]
  - type: api
    scope: [vector]
enabled: true
entryPoint: src/skills/extended/index.ts
---

# Vector Search

Perform semantic k-nearest neighbors (kNN) search and cosine similarity rankings

## Metadata

- **ID:** `vector-search`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `embedding`)
- `api` (scope: `vector`)

## Triggers

- `vector search`
- `similarity search`
- `embeddings search`
- `nearest neighbor`
- `knn`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('vector-search', {
  /* input parameters */
});
```
