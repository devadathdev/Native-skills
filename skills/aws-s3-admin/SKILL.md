---
id: aws-s3-admin
name: "AWS S3 Administrator"
version: 1.0.0
description: "Inspect S3 lifecycle rules, bucket policies, encryption (KMS), and versioning"
author: "AURA Team"
category: devops
tags:
  - "aws s3"
  - "s3 bucket policy"
  - "s3 lifecycle"
  - "s3 versioning"
triggers:
  - "aws s3"
  - "s3 bucket policy"
  - "s3 lifecycle"
  - "s3 versioning"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# AWS S3 Administrator

Inspect S3 lifecycle rules, bucket policies, encryption (KMS), and versioning

## Metadata

- **ID:** `aws-s3-admin`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `aws s3`
- `s3 bucket policy`
- `s3 lifecycle`
- `s3 versioning`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aws-s3-admin', {
  /* input parameters */
});
```
