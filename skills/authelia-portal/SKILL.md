---
id: authelia-portal
name: "Authelia Portal"
version: 1.0.0
description: "Inspect Authelia 2FA authentication portal configurations, access control rules, and Duo"
author: "AURA Team"
category: security
tags:
  - "authelia"
  - "two factor auth"
  - "portal 2fa"
  - "authelia rules"
triggers:
  - "authelia"
  - "two factor auth"
  - "portal 2fa"
  - "authelia rules"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Authelia Portal

Inspect Authelia 2FA authentication portal configurations, access control rules, and Duo

## Metadata

- **ID:** `authelia-portal`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `authelia`
- `two factor auth`
- `portal 2fa`
- `authelia rules`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('authelia-portal', {
  /* input parameters */
});
```
