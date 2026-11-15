---
id: keycloak-admin
name: "Keycloak IAM Admin"
version: 1.0.0
description: "Inspect Keycloak realms, clients, roles, identity providers, and token mappers"
author: "AURA Team"
category: security
tags:
  - "keycloak"
  - "keycloak realm"
  - "identity provider"
  - "sso keycloak"
triggers:
  - "keycloak"
  - "keycloak realm"
  - "identity provider"
  - "sso keycloak"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Keycloak IAM Admin

Inspect Keycloak realms, clients, roles, identity providers, and token mappers

## Metadata

- **ID:** `keycloak-admin`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `keycloak`
- `keycloak realm`
- `identity provider`
- `sso keycloak`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('keycloak-admin', {
  /* input parameters */
});
```
