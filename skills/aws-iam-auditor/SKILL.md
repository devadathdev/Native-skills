---
id: aws-iam-auditor
name: "AWS IAM Auditor"
version: 1.0.0
description: "Audit IAM roles, assume-role policies, permission boundaries, and credentials"
author: "AURA Team"
category: security
tags:
  - "aws iam"
  - "iam role"
  - "iam audit"
  - "assume role"
triggers:
  - "aws iam"
  - "iam role"
  - "iam audit"
  - "assume role"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# AWS IAM Auditor

Audit IAM roles, assume-role policies, permission boundaries, and credentials

## Metadata

- **ID:** `aws-iam-auditor`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `aws iam`
- `iam role`
- `iam audit`
- `assume role`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aws-iam-auditor', {
  /* input parameters */
});
```
