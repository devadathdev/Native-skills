---
id: remix-run
name: "Remix Framework"
version: 1.0.0
description: "Inspect Remix loaders, action functions, optimistic UI, and nested routes"
author: "AURA Team"
category: development
tags:
  - "remix"
  - "remix loader"
  - "remix action"
  - "nested routes"
triggers:
  - "remix"
  - "remix loader"
  - "remix action"
  - "nested routes"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Remix Framework

Inspect Remix loaders, action functions, optimistic UI, and nested routes

## Metadata

- **ID:** `remix-run`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `remix`
- `remix loader`
- `remix action`
- `nested routes`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('remix-run', {
  /* input parameters */
});
```
