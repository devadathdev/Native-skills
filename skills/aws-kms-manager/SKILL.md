---
id: aws-kms-manager
name: "AWS KMS Manager"
version: 1.0.0
description: "Inspect AWS Key Management Service (KMS) customer keys, key policies, and grants"
author: "AURA Team"
category: security
tags:
  - "aws kms"
  - "kms key"
  - "encryption key"
  - "envelope encryption"
triggers:
  - "aws kms"
  - "kms key"
  - "encryption key"
  - "envelope encryption"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# AWS KMS Manager

Inspect AWS Key Management Service (KMS) customer keys, key policies, and grants

## Metadata

- **ID:** `aws-kms-manager`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `aws kms`
- `kms key`
- `encryption key`
- `envelope encryption`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aws-kms-manager', {
  /* input parameters */
});
```
