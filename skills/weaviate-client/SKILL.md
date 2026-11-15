---
id: weaviate-client
name: "Weaviate Client"
version: 1.0.0
description: "Inspect Weaviate vector classes, generative search modules, and HNSW indexes"
author: "AURA Team"
category: ai
tags:
  - "weaviate"
  - "weaviate class"
  - "hnsw index"
  - "generative search"
triggers:
  - "weaviate"
  - "weaviate class"
  - "hnsw index"
  - "generative search"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Weaviate Client

Inspect Weaviate vector classes, generative search modules, and HNSW indexes

## Metadata

- **ID:** `weaviate-client`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `weaviate`
- `weaviate class`
- `hnsw index`
- `generative search`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('weaviate-client', {
  /* input parameters */
});
```
