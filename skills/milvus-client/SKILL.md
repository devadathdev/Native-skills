---
id: milvus-client
name: "Milvus Vector DB"
version: 1.0.0
description: "Inspect Milvus distributed collections, partitions, IVF_FLAT/HNSW index types"
author: "AURA Team"
category: ai
tags:
  - "milvus"
  - "milvus collection"
  - "vector partition"
  - "zilliz"
triggers:
  - "milvus"
  - "milvus collection"
  - "vector partition"
  - "zilliz"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Milvus Vector DB

Inspect Milvus distributed collections, partitions, IVF_FLAT/HNSW index types

## Metadata

- **ID:** `milvus-client`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `milvus`
- `milvus collection`
- `vector partition`
- `zilliz`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('milvus-client', {
  /* input parameters */
});
```
