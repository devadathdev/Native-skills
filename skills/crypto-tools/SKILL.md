---
id: crypto-tools
name: "Cryptographic Tools"
version: 1.0.0
description: "Generate SHA hashes, HMAC authentication codes, AES keys, and asymmetric keypairs"
author: "AURA Team"
category: security
tags:
  - "crypto"
  - "hash"
  - "hmac"
  - "sha256"
  - "encrypt"
  - "decrypt"
  - "keypair"
  - "signature"
triggers:
  - "crypto"
  - "hash"
  - "hmac"
  - "sha256"
  - "encrypt"
  - "decrypt"
  - "keypair"
  - "signature"
permissions:
  - type: api
    scope: [crypto]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# Cryptographic Tools

Generate SHA hashes, HMAC authentication codes, AES keys, and asymmetric keypairs

## Metadata

- **ID:** `crypto-tools`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `crypto`)

## Triggers

- `crypto`
- `hash`
- `hmac`
- `sha256`
- `encrypt`
- `decrypt`
- `keypair`
- `signature`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('crypto-tools', {
  /* input parameters */
});
```
