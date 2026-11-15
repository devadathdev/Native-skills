---
id: aws-lambda
name: "AWS Lambda Manager"
version: 1.0.0
description: "Inspect AWS Lambda execution environments, layers, provisioned concurrency, and dead letters"
author: "AURA Team"
category: devops
tags:
  - "aws lambda"
  - "serverless lambda"
  - "lambda layers"
  - "provisioned concurrency"
triggers:
  - "aws lambda"
  - "serverless lambda"
  - "lambda layers"
  - "provisioned concurrency"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# AWS Lambda Manager

Inspect AWS Lambda execution environments, layers, provisioned concurrency, and dead letters

## Metadata

- **ID:** `aws-lambda`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `aws lambda`
- `serverless lambda`
- `lambda layers`
- `provisioned concurrency`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aws-lambda', {
  /* input parameters */
});
```
