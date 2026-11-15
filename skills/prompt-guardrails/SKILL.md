---
id: prompt-guardrails
name: "Prompt Guardrails"
version: 1.0.0
description: "Detect prompt injection attacks, jailbreaks, and enforce content safety policies on AI inputs"
author: "AURA Team"
category: ai
tags:
  - "guardrails"
  - "prompt injection"
  - "jailbreak"
  - "content safety"
  - "moderation filter"
triggers:
  - "guardrails"
  - "prompt injection"
  - "jailbreak"
  - "content safety"
  - "moderation filter"
permissions:
  - type: model
    scope: [safety]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Prompt Guardrails

Detect prompt injection attacks, jailbreaks, and enforce content safety policies on AI inputs

## Metadata

- **ID:** `prompt-guardrails`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `safety`)

## Triggers

- `guardrails`
- `prompt injection`
- `jailbreak`
- `content safety`
- `moderation filter`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('prompt-guardrails', {
  /* input parameters */
});
```
