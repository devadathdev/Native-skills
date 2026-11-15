---
id: gin-gonic
name: "Gin Web Framework"
version: 1.0.0
description: "Inspect Go Gin HTTP route groups, middleware handlers, and binding JSON"
author: "AURA Team"
category: development
tags:
  - "gin"
  - "gin gonic"
  - "go web"
  - "gin context"
triggers:
  - "gin"
  - "gin gonic"
  - "go web"
  - "gin context"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Gin Web Framework

Inspect Go Gin HTTP route groups, middleware handlers, and binding JSON

## Metadata

- **ID:** `gin-gonic`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `gin`
- `gin gonic`
- `go web`
- `gin context`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('gin-gonic', {
  /* input parameters */
});
```
