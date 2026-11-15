---
id: state-inspector
name: "Frontend State Inspector"
version: 1.0.0
description: "Inspect application state trees, actions, and immutability (Redux, Zustand, Vuex, Pinia)"
author: "AURA Team"
category: development
tags:
  - "state management"
  - "redux"
  - "zustand"
  - "pinia"
  - "state inspector"
  - "app state"
triggers:
  - "state management"
  - "redux"
  - "zustand"
  - "pinia"
  - "state inspector"
  - "app state"
permissions:
  - type: api
    scope: [state]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Frontend State Inspector

Inspect application state trees, actions, and immutability (Redux, Zustand, Vuex, Pinia)

## Metadata

- **ID:** `state-inspector`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `state`)

## Triggers

- `state management`
- `redux`
- `zustand`
- `pinia`
- `state inspector`
- `app state`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('state-inspector', {
  /* input parameters */
});
```
