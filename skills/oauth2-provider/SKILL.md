---
id: oauth2-provider
name: "OAuth 2.0 / OIDC Provider"
version: 1.0.0
description: "Validate OpenID Connect flows, authorization code exchange with PKCE, and token validation"
author: "AURA Team"
category: security
tags:
  - "oauth"
  - "oauth2"
  - "oidc"
  - "pkce"
  - "openid connect"
  - "authorization code"
triggers:
  - "oauth"
  - "oauth2"
  - "oidc"
  - "pkce"
  - "openid connect"
  - "authorization code"
permissions:
  - type: api
    scope: [auth]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# OAuth 2.0 / OIDC Provider

Validate OpenID Connect flows, authorization code exchange with PKCE, and token validation

## Metadata

- **ID:** `oauth2-provider`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `auth`)

## Triggers

- `oauth`
- `oauth2`
- `oidc`
- `pkce`
- `openid connect`
- `authorization code`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('oauth2-provider', {
  /* input parameters */
});
```
