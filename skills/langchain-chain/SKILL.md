---
id: langchain-chain
name: "LangChain Chain Inspector"
version: 1.0.0
description: "Inspect LangChain runnable sequences, prompt templates, output parsers, and memory"
author: "AURA Team"
category: ai
tags:
  - "langchain"
  - "lcel"
  - "runnable sequence"
  - "prompt template"
triggers:
  - "langchain"
  - "lcel"
  - "runnable sequence"
  - "prompt template"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# LangChain Chain Inspector

Inspect LangChain runnable sequences, prompt templates, output parsers, and memory

## Metadata

- **ID:** `langchain-chain`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `langchain`
- `lcel`
- `runnable sequence`
- `prompt template`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('langchain-chain', {
  /* input parameters */
});
```
