---
id: aws-secrets-manager
name: "AWS Secrets Manager"
version: 1.0.0
description: "Inspect Secrets Manager secret metadata, automatic rotation schedules, and access"
author: "AURA Team"
category: security
tags:
  - "secrets manager"
  - "aws secrets"
  - "secret rotation"
  - "aws vault"
triggers:
  - "secrets manager"
  - "aws secrets"
  - "secret rotation"
  - "aws vault"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# AWS Secrets Manager

Inspect Secrets Manager secret metadata, automatic rotation schedules, and access

## Metadata

- **ID:** `aws-secrets-manager`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `secrets manager`
- `aws secrets`
- `secret rotation`
- `aws vault`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aws-secrets-manager', {
  /* input parameters */
});
```
