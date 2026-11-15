---
id: redux-toolkit
name: "Redux Toolkit Inspector"
version: 1.0.0
description: "Inspect createSlice reducers, RTK Query endpoints, and immer state mutations"
author: "AURA Team"
category: development
tags:
  - "redux toolkit"
  - "rtk query"
  - "create slice"
  - "redux store"
triggers:
  - "redux toolkit"
  - "rtk query"
  - "create slice"
  - "redux store"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Redux Toolkit Inspector

Inspect createSlice reducers, RTK Query endpoints, and immer state mutations

## Metadata

- **ID:** `redux-toolkit`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `redux toolkit`
- `rtk query`
- `create slice`
- `redux store`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('redux-toolkit', {
  /* input parameters */
});
```
