---
id: qdrant-client
name: "Qdrant Client"
version: 1.0.0
description: "Inspect Qdrant vector collections, payload filtering conditions, and distance metrics"
author: "AURA Team"
category: ai
tags:
  - "qdrant"
  - "qdrant collection"
  - "vector search engine"
  - "payload filter"
triggers:
  - "qdrant"
  - "qdrant collection"
  - "vector search engine"
  - "payload filter"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Qdrant Client

Inspect Qdrant vector collections, payload filtering conditions, and distance metrics

## Metadata

- **ID:** `qdrant-client`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `qdrant`
- `qdrant collection`
- `vector search engine`
- `payload filter`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('qdrant-client', {
  /* input parameters */
});
```
