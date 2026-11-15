---
id: ktor-framework
name: "Ktor Kotlin Framework"
version: 1.0.0
description: "Inspect Kotlin Ktor application routing, call pipelines, and serialization"
author: "AURA Team"
category: development
tags:
  - "ktor"
  - "kotlin web"
  - "ktor router"
  - "ktor server"
triggers:
  - "ktor"
  - "kotlin web"
  - "ktor router"
  - "ktor server"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Ktor Kotlin Framework

Inspect Kotlin Ktor application routing, call pipelines, and serialization

## Metadata

- **ID:** `ktor-framework`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `ktor`
- `kotlin web`
- `ktor router`
- `ktor server`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('ktor-framework', {
  /* input parameters */
});
```
