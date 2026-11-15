---
id: serverless
name: "Serverless Function Manager"
version: 1.0.0
description: "Inspect, validate, package, and invoke serverless functions (AWS Lambda, Cloud Functions)"
author: "AURA Team"
category: devops
tags:
  - "serverless"
  - "lambda"
  - "cloud function"
  - "serverless yaml"
  - "invoke function"
  - "faas"
triggers:
  - "serverless"
  - "lambda"
  - "cloud function"
  - "serverless yaml"
  - "invoke function"
  - "faas"
permissions:
  - type: api
    scope: [cloud]
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# Serverless Function Manager

Inspect, validate, package, and invoke serverless functions (AWS Lambda, Cloud Functions)

## Metadata

- **ID:** `serverless`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `cloud`)
- `filesystem` (scope: `read, write`)

## Triggers

- `serverless`
- `lambda`
- `cloud function`
- `serverless yaml`
- `invoke function`
- `faas`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('serverless', {
  /* input parameters */
});
```
