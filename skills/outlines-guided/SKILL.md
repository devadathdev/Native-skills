---
id: outlines-guided
name: "Outlines Guided Generation"
version: 1.0.0
description: "Inspect Outlines structured CFG grammars, regex-guided sampling, and JSON constraints"
author: "AURA Team"
category: ai
tags:
  - "outlines"
  - "guided generation"
  - "json schema llm"
  - "cfg grammar"
triggers:
  - "outlines"
  - "guided generation"
  - "json schema llm"
  - "cfg grammar"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Outlines Guided Generation

Inspect Outlines structured CFG grammars, regex-guided sampling, and JSON constraints

## Metadata

- **ID:** `outlines-guided`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `outlines`
- `guided generation`
- `json schema llm`
- `cfg grammar`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('outlines-guided', {
  /* input parameters */
});
```
