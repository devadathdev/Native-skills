---
id: biometric-auth
name: "Biometric Authentication"
version: 1.0.0
description: "Inspect Face ID, Touch ID, and Android BiometricPrompt prompt configurations"
author: "AURA Team"
category: security
tags:
  - "biometric"
  - "face id"
  - "touch id"
  - "fingerprint"
  - "biometric prompt"
triggers:
  - "biometric"
  - "face id"
  - "touch id"
  - "fingerprint"
  - "biometric prompt"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Biometric Authentication

Inspect Face ID, Touch ID, and Android BiometricPrompt prompt configurations

## Metadata

- **ID:** `biometric-auth`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `biometric`
- `face id`
- `touch id`
- `fingerprint`
- `biometric prompt`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('biometric-auth', {
  /* input parameters */
});
```
