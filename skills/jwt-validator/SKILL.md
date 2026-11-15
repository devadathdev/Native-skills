---
id: jwt-validator
name: "JWT Validator"
version: 1.0.0
description: "Decode, inspect, and validate JSON Web Tokens, expiry timestamps, claims, and headers"
author: "AURA Team"
category: security
tags:
  - "jwt"
  - "token validate"
  - "decode jwt"
  - "jwt expiry"
  - "bearer token"
  - "jwt claims"
triggers:
  - "jwt"
  - "token validate"
  - "decode jwt"
  - "jwt expiry"
  - "bearer token"
  - "jwt claims"
permissions:
  - type: api
    scope: [auth]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# JWT Validator

Decode, inspect, and validate JSON Web Tokens, expiry timestamps, claims, and headers

## Metadata

- **ID:** `jwt-validator`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `auth`)

## Triggers

- `jwt`
- `token validate`
- `decode jwt`
- `jwt expiry`
- `bearer token`
- `jwt claims`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('jwt-validator', {
  /* input parameters */
});
```
