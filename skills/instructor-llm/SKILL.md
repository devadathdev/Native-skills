---
id: instructor-llm
name: "Instructor Structured LLM"
version: 1.0.0
description: "Inspect Instructor typed response models, retry validation loops, and schema extraction"
author: "AURA Team"
category: ai
tags:
  - "instructor"
  - "structured outputs"
  - "instructor llm"
  - "typed extraction"
triggers:
  - "instructor"
  - "structured outputs"
  - "instructor llm"
  - "typed extraction"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Instructor Structured LLM

Inspect Instructor typed response models, retry validation loops, and schema extraction

## Metadata

- **ID:** `instructor-llm`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `instructor`
- `structured outputs`
- `instructor llm`
- `typed extraction`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('instructor-llm', {
  /* input parameters */
});
```
