---
id: locust-load-tester
name: "Locust Load Tester"
version: 1.0.0
description: "Inspect Locustfile HttpUser classes, task weights, wait_time, and user spawn rates"
author: "AURA Team"
category: development
tags:
  - "locust"
  - "locustfile"
  - "python load test"
  - "user spawn rate"
triggers:
  - "locust"
  - "locustfile"
  - "python load test"
  - "user spawn rate"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Locust Load Tester

Inspect Locustfile HttpUser classes, task weights, wait_time, and user spawn rates

## Metadata

- **ID:** `locust-load-tester`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `locust`
- `locustfile`
- `python load test`
- `user spawn rate`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('locust-load-tester', {
  /* input parameters */
});
```
