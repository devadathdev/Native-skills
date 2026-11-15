---
id: cors-checker
name: "CORS Policy Checker"
version: 1.0.0
description: "Audit HTTP CORS configurations, preflight handling, and wildcard origin vulnerabilities"
author: "AURA Team"
category: security
tags:
  - "cors"
  - "cross origin"
  - "cors policy"
  - "preflight"
  - "access-control-allow-origin"
  - "cors check"
triggers:
  - "cors"
  - "cross origin"
  - "cors policy"
  - "preflight"
  - "access-control-allow-origin"
  - "cors check"
permissions:
  - type: network
    scope: [cors]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# CORS Policy Checker

Audit HTTP CORS configurations, preflight handling, and wildcard origin vulnerabilities

## Metadata

- **ID:** `cors-checker`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `cors`)

## Triggers

- `cors`
- `cross origin`
- `cors policy`
- `preflight`
- `access-control-allow-origin`
- `cors check`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('cors-checker', {
  /* input parameters */
});
```
