---
id: firebase-auth-admin
name: "Firebase Auth Admin"
version: 1.0.0
description: "Inspect Firebase Authentication user records, custom claims, and email/phone providers"
author: "AURA Team"
category: security
tags:
  - "firebase auth"
  - "custom claims"
  - "firebase user"
  - "id token verify"
triggers:
  - "firebase auth"
  - "custom claims"
  - "firebase user"
  - "id token verify"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Firebase Auth Admin

Inspect Firebase Authentication user records, custom claims, and email/phone providers

## Metadata

- **ID:** `firebase-auth-admin`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `firebase auth`
- `custom claims`
- `firebase user`
- `id token verify`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('firebase-auth-admin', {
  /* input parameters */
});
```
