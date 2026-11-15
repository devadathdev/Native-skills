---
id: auth0-manager
name: "Auth0 Manager"
version: 1.0.0
description: "Inspect Auth0 tenants, applications, rules, actions, and custom database connections"
author: "AURA Team"
category: security
tags:
  - "auth0"
  - "auth0 tenant"
  - "auth0 action"
  - "jwt auth0"
triggers:
  - "auth0"
  - "auth0 tenant"
  - "auth0 action"
  - "jwt auth0"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Auth0 Manager

Inspect Auth0 tenants, applications, rules, actions, and custom database connections

## Metadata

- **ID:** `auth0-manager`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `auth0`
- `auth0 tenant`
- `auth0 action`
- `jwt auth0`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('auth0-manager', {
  /* input parameters */
});
```
