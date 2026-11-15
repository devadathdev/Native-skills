---
id: axum-framework
name: "Axum Rust Framework"
version: 1.0.0
description: "Inspect Rust Axum routers, extractors, tower service layers, and state sharing"
author: "AURA Team"
category: development
tags:
  - "axum"
  - "axum rust"
  - "tower service"
  - "tokio web"
triggers:
  - "axum"
  - "axum rust"
  - "tower service"
  - "tokio web"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Axum Rust Framework

Inspect Rust Axum routers, extractors, tower service layers, and state sharing

## Metadata

- **ID:** `axum-framework`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `axum`
- `axum rust`
- `tower service`
- `tokio web`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('axum-framework', {
  /* input parameters */
});
```
