---
id: supertest-api
name: "Supertest API Tester"
version: 1.0.0
description: "Inspect Supertest HTTP assertions against Express/Fastify apps with status/body checks"
author: "AURA Team"
category: development
tags:
  - "supertest"
  - "api test node"
  - "request app"
  - "expect status"
triggers:
  - "supertest"
  - "api test node"
  - "request app"
  - "expect status"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Supertest API Tester

Inspect Supertest HTTP assertions against Express/Fastify apps with status/body checks

## Metadata

- **ID:** `supertest-api`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `supertest`
- `api test node`
- `request app`
- `expect status`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('supertest-api', {
  /* input parameters */
});
```
