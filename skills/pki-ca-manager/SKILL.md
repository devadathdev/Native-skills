---
id: pki-ca-manager
name: "PKI Certificate Authority"
version: 1.0.0
description: "Inspect X.509 Certificate Authorities, CRL revocation lists, and CSR signing"
author: "AURA Team"
category: security
tags:
  - "pki"
  - "x509 ca"
  - "certificate authority"
  - "csr sign"
triggers:
  - "pki"
  - "x509 ca"
  - "certificate authority"
  - "csr sign"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# PKI Certificate Authority

Inspect X.509 Certificate Authorities, CRL revocation lists, and CSR signing

## Metadata

- **ID:** `pki-ca-manager`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `pki`
- `x509 ca`
- `certificate authority`
- `csr sign`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('pki-ca-manager', {
  /* input parameters */
});
```
