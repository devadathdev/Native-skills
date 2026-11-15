---
id: echo-framework
name: "Echo Go Framework"
version: 1.0.0
description: "Inspect Go Echo web framework routers, binder middleware, and context objects"
author: "AURA Team"
category: development
tags:
  - "echo go"
  - "echo framework"
  - "go echo"
  - "echo router"
triggers:
  - "echo go"
  - "echo framework"
  - "go echo"
  - "echo router"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Echo Go Framework

Inspect Go Echo web framework routers, binder middleware, and context objects

## Metadata

- **ID:** `echo-framework`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `echo go`
- `echo framework`
- `go echo`
- `echo router`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('echo-framework', {
  /* input parameters */
});
```
