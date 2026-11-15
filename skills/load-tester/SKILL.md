---
id: load-tester
name: "Load Tester"
version: 1.0.0
description: "Generate and validate k6 and Locust load-testing scenarios with virtual user ramp-up schedules"
author: "AURA Team"
category: devops
tags:
  - "load testing"
  - "k6"
  - "locust"
  - "stress test"
  - "load test script"
  - "virtual users"
triggers:
  - "load testing"
  - "k6"
  - "locust"
  - "stress test"
  - "load test script"
  - "virtual users"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Load Tester

Generate and validate k6 and Locust load-testing scenarios with virtual user ramp-up schedules

## Metadata

- **ID:** `load-tester`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `load testing`
- `k6`
- `locust`
- `stress test`
- `load test script`
- `virtual users`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('load-tester', {
  /* input parameters */
});
```
