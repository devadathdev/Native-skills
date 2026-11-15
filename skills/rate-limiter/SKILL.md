---
id: rate-limiter
name: "Rate Limiter"
version: 1.0.0
description: "Compute token bucket and sliding window rate limits, quotas, and retry delays"
author: "AURA Team"
category: security
tags:
  - "rate limit"
  - "throttling"
  - "token bucket"
  - "rate limiter"
  - "api limit"
  - "quota"
triggers:
  - "rate limit"
  - "throttling"
  - "token bucket"
  - "rate limiter"
  - "api limit"
  - "quota"
permissions:
  - type: api
    scope: [limiter]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# Rate Limiter

Compute token bucket and sliding window rate limits, quotas, and retry delays

## Metadata

- **ID:** `rate-limiter`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `limiter`)

## Triggers

- `rate limit`
- `throttling`
- `token bucket`
- `rate limiter`
- `api limit`
- `quota`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('rate-limiter', {
  /* input parameters */
});
```
