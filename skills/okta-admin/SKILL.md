---
id: okta-admin
name: "Okta Identity Admin"
version: 1.0.0
description: "Inspect Okta applications, sign-on policies, MFA factors, and user group assignments"
author: "AURA Team"
category: security
tags:
  - "okta"
  - "okta identity"
  - "okta sso"
  - "sign on policy"
triggers:
  - "okta"
  - "okta identity"
  - "okta sso"
  - "sign on policy"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Okta Identity Admin

Inspect Okta applications, sign-on policies, MFA factors, and user group assignments

## Metadata

- **ID:** `okta-admin`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `okta`
- `okta identity`
- `okta sso`
- `sign on policy`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('okta-admin', {
  /* input parameters */
});
```
