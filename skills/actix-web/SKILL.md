---
id: actix-web
name: "Actix Web Framework"
version: 1.0.0
description: "Inspect Rust Actix-web App builders, resource routes, extractors, and responders"
author: "AURA Team"
category: development
tags:
  - "actix"
  - "actix web"
  - "rust web"
  - "actix responder"
triggers:
  - "actix"
  - "actix web"
  - "rust web"
  - "actix responder"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Actix Web Framework

Inspect Rust Actix-web App builders, resource routes, extractors, and responders

## Metadata

- **ID:** `actix-web`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `actix`
- `actix web`
- `rust web`
- `actix responder`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('actix-web', {
  /* input parameters */
});
```
