---
id: yubikey-fido2
name: "YubiKey & FIDO2"
version: 1.0.0
description: "Inspect WebAuthn/FIDO2 credential registration, attestation statements, and user presence"
author: "AURA Team"
category: security
tags:
  - "fido2"
  - "webauthn"
  - "yubikey"
  - "hardware security key"
triggers:
  - "fido2"
  - "webauthn"
  - "yubikey"
  - "hardware security key"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# YubiKey & FIDO2

Inspect WebAuthn/FIDO2 credential registration, attestation statements, and user presence

## Metadata

- **ID:** `yubikey-fido2`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `fido2`
- `webauthn`
- `yubikey`
- `hardware security key`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('yubikey-fido2', {
  /* input parameters */
});
```
