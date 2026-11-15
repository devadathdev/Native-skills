---
id: research
name: "Web Research"
version: 1.0.0
description: "Structured web research, factual lookup, and source synthesis"
author: "AURA Team"
category: web
tags:
  - "research"
  - "web search"
  - "lookup"
  - "facts"
triggers:
  - "research"
  - "search web"
  - "find online"
  - "look up"
  - "web research"
permissions:
  - type: network
    scope: [web]
  - type: model
    scope: [research]
enabled: true
entryPoint: src/skills/core/index.ts
---

# Web Research

Structured web research, factual lookup, and source synthesis

## Metadata

- **ID:** `research`
- **Category:** `web`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `web`)
- `model` (scope: `research`)

## Triggers

- `research`
- `search web`
- `find online`
- `look up`
- `web research`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('research', {
  /* input parameters */
});
```
