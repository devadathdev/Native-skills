---
id: api-client
name: "API Client"
version: 1.0.0
description: "Send parameterized REST API requests with auth headers and payloads"
author: "AURA Team"
category: integration
tags:
  - "api request"
  - "rest api"
  - "endpoint"
  - "call api"
  - "http request"
triggers:
  - "api request"
  - "rest api"
  - "endpoint"
  - "call api"
  - "http request"
permissions:
  - type: network
    scope: [api]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# API Client

Send parameterized REST API requests with auth headers and payloads

## Metadata

- **ID:** `api-client`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `api`)

## Triggers

- `api request`
- `rest api`
- `endpoint`
- `call api`
- `http request`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('api-client', {
  /* input parameters */
});
```
