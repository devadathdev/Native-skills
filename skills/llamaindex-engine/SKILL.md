---
id: llamaindex-engine
name: "LlamaIndex Engine"
version: 1.0.0
description: "Inspect LlamaIndex query engines, vector store index definitions, and node parsers"
author: "AURA Team"
category: ai
tags:
  - "llamaindex"
  - "query engine"
  - "index nodes"
  - "document index"
triggers:
  - "llamaindex"
  - "query engine"
  - "index nodes"
  - "document index"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# LlamaIndex Engine

Inspect LlamaIndex query engines, vector store index definitions, and node parsers

## Metadata

- **ID:** `llamaindex-engine`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `llamaindex`
- `query engine`
- `index nodes`
- `document index`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('llamaindex-engine', {
  /* input parameters */
});
```
