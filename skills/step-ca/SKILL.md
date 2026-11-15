---
id: step-ca
name: "Smallstep step-ca"
version: 1.0.0
description: "Inspect smallstep open-source private CA, ACME server configuration, and tokens"
author: "AURA Team"
category: security
tags:
  - "step ca"
  - "smallstep"
  - "private acme"
  - "internal pki"
triggers:
  - "step ca"
  - "smallstep"
  - "private acme"
  - "internal pki"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Smallstep step-ca

Inspect smallstep open-source private CA, ACME server configuration, and tokens

## Metadata

- **ID:** `step-ca`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `step ca`
- `smallstep`
- `private acme`
- `internal pki`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('step-ca', {
  /* input parameters */
});
```
