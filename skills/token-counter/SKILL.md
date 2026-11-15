---
id: token-counter
name: "Token Counter"
version: 1.0.0
description: "Calculate accurate token usage across tokenizer models (tiktoken, Gemini, Claude, Llama)"
author: "AURA Team"
category: ai
tags:
  - "token count"
  - "tokens"
  - "tiktoken"
  - "count tokens"
  - "token budget"
  - "context limit"
triggers:
  - "token count"
  - "tokens"
  - "tiktoken"
  - "count tokens"
  - "token budget"
  - "context limit"
permissions:
  - type: api
    scope: [token]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Token Counter

Calculate accurate token usage across tokenizer models (tiktoken, Gemini, Claude, Llama)

## Metadata

- **ID:** `token-counter`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `token`)

## Triggers

- `token count`
- `tokens`
- `tiktoken`
- `count tokens`
- `token budget`
- `context limit`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('token-counter', {
  /* input parameters */
});
```
