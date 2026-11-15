---
id: vault-secrets-operator
name: "Vault Secrets Operator"
version: 1.0.0
description: "Inspect Kubernetes VaultStaticSecret, VaultAuth, and secret sync CRDs"
author: "AURA Team"
category: security
tags:
  - "vault operator"
  - "vault crd"
  - "k8s vault"
  - "secret sync"
triggers:
  - "vault operator"
  - "vault crd"
  - "k8s vault"
  - "secret sync"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Vault Secrets Operator

Inspect Kubernetes VaultStaticSecret, VaultAuth, and secret sync CRDs

## Metadata

- **ID:** `vault-secrets-operator`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `vault operator`
- `vault crd`
- `k8s vault`
- `secret sync`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('vault-secrets-operator', {
  /* input parameters */
});
```
