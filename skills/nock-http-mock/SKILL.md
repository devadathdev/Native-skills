---
id: nock-http-mock
name: "Nock HTTP Mock"
version: 1.0.0
description: "Inspect Nock HTTP request interception scopes, reply mocks, and pending mock checks"
author: "AURA Team"
category: development
tags:
  - "nock"
  - "http mock"
  - "mock scope"
  - "intercept http"
triggers:
  - "nock"
  - "http mock"
  - "mock scope"
  - "intercept http"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Nock HTTP Mock

Inspect Nock HTTP request interception scopes, reply mocks, and pending mock checks

## Metadata

- **ID:** `nock-http-mock`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `nock`
- `http mock`
- `mock scope`
- `intercept http`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('nock-http-mock', {
  /* input parameters */
});
```
