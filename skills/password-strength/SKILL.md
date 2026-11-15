---
id: password-strength
name: "Password Strength Meter"
version: 1.0.0
description: "Inspect password entropy (zxcvbn), dictionary matches, and common breach lookups"
author: "AURA Team"
category: security
tags:
  - "password strength"
  - "zxcvbn"
  - "password entropy"
  - "breach check"
triggers:
  - "password strength"
  - "zxcvbn"
  - "password entropy"
  - "breach check"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Password Strength Meter

Inspect password entropy (zxcvbn), dictionary matches, and common breach lookups

## Metadata

- **ID:** `password-strength`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `password strength`
- `zxcvbn`
- `password entropy`
- `breach check`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('password-strength', {
  /* input parameters */
});
```
