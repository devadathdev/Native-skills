---
id: aws-api-gateway
name: "AWS API Gateway"
version: 1.0.0
description: "Inspect REST and HTTP API Gateway routes, authorizers, throttling, and CORS"
author: "AURA Team"
category: integration
tags:
  - "api gateway"
  - "aws api gateway"
  - "gateway authorizer"
  - "rest api aws"
triggers:
  - "api gateway"
  - "aws api gateway"
  - "gateway authorizer"
  - "rest api aws"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# AWS API Gateway

Inspect REST and HTTP API Gateway routes, authorizers, throttling, and CORS

## Metadata

- **ID:** `aws-api-gateway`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `api gateway`
- `aws api gateway`
- `gateway authorizer`
- `rest api aws`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aws-api-gateway', {
  /* input parameters */
});
```
