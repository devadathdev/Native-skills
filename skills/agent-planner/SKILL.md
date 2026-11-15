---
id: agent-planner
name: "Agent Planner"
version: 1.0.0
description: "Decompose complex multi-step goals into sequential executable action plans"
author: "AURA Team"
category: ai
tags:
  - "plan this"
  - "multi step"
  - "agent plan"
  - "goal breakdown"
  - "plan actions"
triggers:
  - "plan this"
  - "multi step"
  - "agent plan"
  - "goal breakdown"
  - "plan actions"
permissions:
  - type: model
    scope: [planning]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Agent Planner

Decompose complex multi-step goals into sequential executable action plans

## Metadata

- **ID:** `agent-planner`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `planning`)

## Triggers

- `plan this`
- `multi step`
- `agent plan`
- `goal breakdown`
- `plan actions`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('agent-planner', {
  /* input parameters */
});
```
