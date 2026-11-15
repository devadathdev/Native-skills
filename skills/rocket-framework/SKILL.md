---
id: rocket-framework
name: "Rocket Rust Framework"
version: 1.0.0
description: "Inspect Rust Rocket launch attributes, request guards, and managed state"
author: "AURA Team"
category: development
tags:
  - "rocket rust"
  - "rocket framework"
  - "request guard"
  - "rocket routes"
triggers:
  - "rocket rust"
  - "rocket framework"
  - "request guard"
  - "rocket routes"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Rocket Rust Framework

Inspect Rust Rocket launch attributes, request guards, and managed state

## Metadata

- **ID:** `rocket-framework`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `rocket rust`
- `rocket framework`
- `request guard`
- `rocket routes`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('rocket-framework', {
  /* input parameters */
});
```
