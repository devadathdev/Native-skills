---
id: dex-idp
name: "Dex Identity Provider"
version: 1.0.0
description: "Inspect Dex federated OIDC provider connectors (LDAP, GitHub, SAML) and clients"
author: "AURA Team"
category: security
tags:
  - "dex idp"
  - "federated oidc"
  - "dex connector"
  - "ldap auth"
triggers:
  - "dex idp"
  - "federated oidc"
  - "dex connector"
  - "ldap auth"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Dex Identity Provider

Inspect Dex federated OIDC provider connectors (LDAP, GitHub, SAML) and clients

## Metadata

- **ID:** `dex-idp`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `dex idp`
- `federated oidc`
- `dex connector`
- `ldap auth`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('dex-idp', {
  /* input parameters */
});
```
