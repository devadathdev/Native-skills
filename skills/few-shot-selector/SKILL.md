---
id: few-shot-selector
name: "Few-Shot Selector"
version: 1.0.0
description: "Retrieve and format the most semantically relevant few-shot exemplars for contextual prompts"
author: "AURA Team"
category: ai
tags:
  - "few shot"
  - "few shot examples"
  - "exemplars"
  - "in context learning"
  - "prompt examples"
triggers:
  - "few shot"
  - "few shot examples"
  - "exemplars"
  - "in context learning"
  - "prompt examples"
permissions:
  - type: model
    scope: [prompt]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Few-Shot Selector

Retrieve and format the most semantically relevant few-shot exemplars for contextual prompts

## Metadata

- **ID:** `few-shot-selector`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `prompt`)

## Triggers

- `few shot`
- `few shot examples`
- `exemplars`
- `in context learning`
- `prompt examples`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('few-shot-selector', {
  /* input parameters */
});
```
