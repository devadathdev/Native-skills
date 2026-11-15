---
id: fiber-framework
name: "Fiber Go Framework"
version: 1.0.0
description: "Inspect Go Fiber FastHTTP-based router, prefork configuration, and cookies"
author: "AURA Team"
category: development
tags:
  - "fiber go"
  - "go fiber"
  - "fasthttp"
  - "fiber app"
triggers:
  - "fiber go"
  - "go fiber"
  - "fasthttp"
  - "fiber app"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Fiber Go Framework

Inspect Go Fiber FastHTTP-based router, prefork configuration, and cookies

## Metadata

- **ID:** `fiber-framework`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `fiber go`
- `go fiber`
- `fasthttp`
- `fiber app`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('fiber-framework', {
  /* input parameters */
});
```
