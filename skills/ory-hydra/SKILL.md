---
id: ory-hydra
name: "Ory Hydra OAuth2"
version: 1.0.0
description: "Inspect Ory Hydra OAuth 2.0 / OpenID Connect certified engine and consent flows"
author: "AURA Team"
category: security
tags:
  - "ory hydra"
  - "hydra oauth"
  - "consent flow"
  - "openid engine"
triggers:
  - "ory hydra"
  - "hydra oauth"
  - "consent flow"
  - "openid engine"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Ory Hydra OAuth2

Inspect Ory Hydra OAuth 2.0 / OpenID Connect certified engine and consent flows

## Metadata

- **ID:** `ory-hydra`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `ory hydra`
- `hydra oauth`
- `consent flow`
- `openid engine`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('ory-hydra', {
  /* input parameters */
});
```
