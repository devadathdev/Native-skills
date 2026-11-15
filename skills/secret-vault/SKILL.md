---
id: secret-vault
name: "Secret Vault"
version: 1.0.0
description: "Securely store, mask, rotate, and access sensitive API credentials and keys"
author: "AURA Team"
category: security
tags:
  - "secret"
  - "vault"
  - "api key store"
  - "credentials"
  - "mask secret"
  - "secret vault"
triggers:
  - "secret"
  - "vault"
  - "api key store"
  - "credentials"
  - "mask secret"
  - "secret vault"
permissions:
  - type: memory
    scope: [secure]
enabled: true
entryPoint: src/skills/extended/index.ts
---

# Secret Vault

Securely store, mask, rotate, and access sensitive API credentials and keys

## Metadata

- **ID:** `secret-vault`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `memory` (scope: `secure`)

## Triggers

- `secret`
- `vault`
- `api key store`
- `credentials`
- `mask secret`
- `secret vault`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('secret-vault', {
  /* input parameters */
});
```
