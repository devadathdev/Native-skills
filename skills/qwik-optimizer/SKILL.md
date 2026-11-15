---
id: qwik-optimizer
name: "Qwik Optimizer"
version: 1.0.0
description: "Inspect Qwik resumability boundaries, optimizer chunks, and dollar closures"
author: "AURA Team"
category: development
tags:
  - "qwik"
  - "resumability"
  - "qwik city"
  - "qwik component"
triggers:
  - "qwik"
  - "resumability"
  - "qwik city"
  - "qwik component"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Qwik Optimizer

Inspect Qwik resumability boundaries, optimizer chunks, and dollar closures

## Metadata

- **ID:** `qwik-optimizer`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `qwik`
- `resumability`
- `qwik city`
- `qwik component`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('qwik-optimizer', {
  /* input parameters */
});
```
