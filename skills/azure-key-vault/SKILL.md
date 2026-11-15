---
id: azure-key-vault
name: "Azure Key Vault"
version: 1.0.0
description: "Inspect Key Vault secrets, cryptographic keys, certificates, and access policies"
author: "AURA Team"
category: security
tags:
  - "key vault"
  - "azure key vault"
  - "azure secret"
  - "vault certificate"
triggers:
  - "key vault"
  - "azure key vault"
  - "azure secret"
  - "vault certificate"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Azure Key Vault

Inspect Key Vault secrets, cryptographic keys, certificates, and access policies

## Metadata

- **ID:** `azure-key-vault`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `key vault`
- `azure key vault`
- `azure secret`
- `vault certificate`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('azure-key-vault', {
  /* input parameters */
});
```
