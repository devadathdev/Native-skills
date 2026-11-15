---
id: aws-manager
name: "AWS Manager"
version: 1.0.0
description: "Inspect AWS services, validate IAM policies, S3 buckets, EC2 instances, and CloudWatch metrics"
author: "AURA Team"
category: devops
tags:
  - "aws"
  - "amazon web services"
  - "s3"
  - "ec2"
  - "cloudwatch"
  - "iam policy"
triggers:
  - "aws"
  - "amazon web services"
  - "s3"
  - "ec2"
  - "cloudwatch"
  - "iam policy"
permissions:
  - type: api
    scope: [aws]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# AWS Manager

Inspect AWS services, validate IAM policies, S3 buckets, EC2 instances, and CloudWatch metrics

## Metadata

- **ID:** `aws-manager`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `aws`)

## Triggers

- `aws`
- `amazon web services`
- `s3`
- `ec2`
- `cloudwatch`
- `iam policy`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aws-manager', {
  /* input parameters */
});
```
