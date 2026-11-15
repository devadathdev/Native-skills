---
id: secrets-scanner
name: "Secrets Scanner"
version: 1.0.0
description: "Scan repositories and text files for leaked credentials, private keys, and API tokens"
author: "AURA Team"
category: security
tags:
  - "leaked secrets"
  - "scan secrets"
  - "gitleaks"
  - "trufflehog"
  - "find api keys"
triggers:
  - "leaked secrets"
  - "scan secrets"
  - "gitleaks"
  - "trufflehog"
  - "find api keys"
permissions:
  - type: filesystem
    scope: [read]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Secrets Scanner

Scan repositories and text files for leaked credentials, private keys, and API tokens

## Metadata

- **ID:** `secrets-scanner`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read`)

## Triggers

- `leaked secrets`
- `scan secrets`
- `gitleaks`
- `trufflehog`
- `find api keys`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('secrets-scanner', {
  /* input parameters */
});
```
