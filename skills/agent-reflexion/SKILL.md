---
id: agent-reflexion
name: "Agent Reflexion"
version: 1.0.0
description: "Formulate agent self-critique, failure analysis, and iterative improvement plans"
author: "AURA Team"
category: ai
tags:
  - "reflexion"
  - "self critique"
  - "agent feedback"
  - "error analysis"
  - "iterative improvement"
triggers:
  - "reflexion"
  - "self critique"
  - "agent feedback"
  - "error analysis"
  - "iterative improvement"
permissions:
  - type: model
    scope: [planning]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Agent Reflexion

Formulate agent self-critique, failure analysis, and iterative improvement plans

## Metadata

- **ID:** `agent-reflexion`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `planning`)

## Triggers

- `reflexion`
- `self critique`
- `agent feedback`
- `error analysis`
- `iterative improvement`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('agent-reflexion', {
  /* input parameters */
});
```
