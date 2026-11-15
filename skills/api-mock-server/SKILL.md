---
id: api-mock-server
name: "API Mock Server"
version: 1.0.0
description: "Generate mock HTTP responses, status codes, latency delays, and dynamic JSON templates"
author: "AURA Team"
category: integration
tags:
  - "mock api"
  - "mock server"
  - "fake endpoint"
  - "stub response"
triggers:
  - "mock api"
  - "mock server"
  - "fake endpoint"
  - "stub response"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# API Mock Server

Generate mock HTTP responses, status codes, latency delays, and dynamic JSON templates

## Metadata

- **ID:** `api-mock-server`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `mock api`
- `mock server`
- `fake endpoint`
- `stub response`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('api-mock-server', {
  /* input parameters */
});
```
