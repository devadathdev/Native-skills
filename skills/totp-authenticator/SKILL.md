---
id: totp-authenticator
name: "TOTP Authenticator"
version: 1.0.0
description: "Generate and verify RFC 6238 Time-Based One-Time Passwords with SHA-1/SHA-256"
author: "AURA Team"
category: security
tags:
  - "totp"
  - "otp"
  - "google authenticator"
  - "rfc 6238"
triggers:
  - "totp"
  - "otp"
  - "google authenticator"
  - "rfc 6238"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# TOTP Authenticator

Generate and verify RFC 6238 Time-Based One-Time Passwords with SHA-1/SHA-256

## Metadata

- **ID:** `totp-authenticator`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `totp`
- `otp`
- `google authenticator`
- `rfc 6238`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('totp-authenticator', {
  /* input parameters */
});
```
