---
id: memory
name: "Memory"
version: 1.0.0
description: "Store, retrieve, and search conversational and semantic memories"
author: "AURA Team"
category: ai
tags:
  - "memory"
  - "remember"
  - "forget"
  - "recall memory"
  - "search memory"
triggers:
  - "memory"
  - "remember"
  - "forget"
  - "recall memory"
  - "search memory"
permissions:
  - type: memory
    scope: [read, write]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Memory

Store, retrieve, and search conversational and semantic memories

## Metadata

- **ID:** `memory`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `memory` (scope: `read, write`)

## Triggers

- `memory`
- `remember`
- `forget`
- `recall memory`
- `search memory`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('memory', {
  /* input parameters */
});
```
