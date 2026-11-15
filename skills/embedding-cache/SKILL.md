---
id: embedding-cache
name: "Embedding Cache"
version: 1.0.0
description: "Manage semantic caching for AI prompts to reduce API roundtrip costs and response latencies"
author: "AURA Team"
category: ai
tags:
  - "embedding cache"
  - "semantic cache"
  - "cache prompt"
  - "llm cache"
  - "prompt cache"
triggers:
  - "embedding cache"
  - "semantic cache"
  - "cache prompt"
  - "llm cache"
  - "prompt cache"
permissions:
  - type: database
    scope: [cache]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Embedding Cache

Manage semantic caching for AI prompts to reduce API roundtrip costs and response latencies

## Metadata

- **ID:** `embedding-cache`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `cache`)

## Triggers

- `embedding cache`
- `semantic cache`
- `cache prompt`
- `llm cache`
- `prompt cache`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('embedding-cache', {
  /* input parameters */
});
```
