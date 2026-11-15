---
id: sast-scanner
name: "SAST Scanner"
version: 1.0.0
description: "Perform Static Application Security Testing against OWASP Top 10 vulnerabilities and taint flows"
author: "AURA Team"
category: security
tags:
  - "sast"
  - "static security"
  - "owasp"
  - "vulnerability scan"
  - "source code security"
triggers:
  - "sast"
  - "static security"
  - "owasp"
  - "vulnerability scan"
  - "source code security"
permissions:
  - type: filesystem
    scope: [read]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# SAST Scanner

Perform Static Application Security Testing against OWASP Top 10 vulnerabilities and taint flows

## Metadata

- **ID:** `sast-scanner`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read`)

## Triggers

- `sast`
- `static security`
- `owasp`
- `vulnerability scan`
- `source code security`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('sast-scanner', {
  /* input parameters */
});
```
