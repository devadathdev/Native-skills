---
id: tool-router
name: "Tool Router"
version: 1.0.0
description: "Format function calling schemas, parse model tool calls, and execute structured dispatch"
author: "AURA Team"
category: ai
tags:
  - "tool router"
  - "function calling"
  - "tool call"
  - "function dispatch"
  - "tool definition"
triggers:
  - "tool router"
  - "function calling"
  - "tool call"
  - "function dispatch"
  - "tool definition"
permissions:
  - type: api
    scope: [tool]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Tool Router

Format function calling schemas, parse model tool calls, and execute structured dispatch

## Metadata

- **ID:** `tool-router`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `tool`)

## Triggers

- `tool router`
- `function calling`
- `tool call`
- `function dispatch`
- `tool definition`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('tool-router', {
  /* input parameters */
});
```
