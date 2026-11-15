---
id: hnswlib-index
name: "HNSWLib Indexer"
version: 1.0.0
description: "Inspect Hierarchical Navigable Small World graph construction and search parameters"
author: "AURA Team"
category: ai
tags:
  - "hnsw"
  - "hnswlib"
  - "small world graph"
  - "vector graph"
triggers:
  - "hnsw"
  - "hnswlib"
  - "small world graph"
  - "vector graph"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# HNSWLib Indexer

Inspect Hierarchical Navigable Small World graph construction and search parameters

## Metadata

- **ID:** `hnswlib-index`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `hnsw`
- `hnswlib`
- `small world graph`
- `vector graph`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('hnswlib-index', {
  /* input parameters */
});
```
