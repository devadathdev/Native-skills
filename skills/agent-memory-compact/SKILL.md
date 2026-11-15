---
id: agent-memory-compact
name: "Agent Memory Compact"
version: 1.0.0
description: "Compress multi-turn conversational context to prevent token overflows while preserving facts"
author: "AURA Team"
category: ai
tags:
  - "compact memory"
  - "summarize context"
  - "token budget"
  - "compress history"
  - "memory compaction"
triggers:
  - "compact memory"
  - "summarize context"
  - "token budget"
  - "compress history"
  - "memory compaction"
permissions:
  - type: model
    scope: [memory]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# Agent Memory Compact

Compress multi-turn conversational context to prevent token overflows while preserving facts

## Metadata

- **ID:** `agent-memory-compact`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `memory`)

## Triggers

- `compact memory`
- `summarize context`
- `token budget`
- `compress history`
- `memory compaction`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('agent-memory-compact', {
  /* input parameters */
});
```
