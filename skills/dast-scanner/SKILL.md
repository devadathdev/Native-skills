---
id: dast-scanner
name: "DAST Scanner"
version: 1.0.0
description: "Simulate Dynamic Application Security Testing, active fuzzing, and HTTP header audits"
author: "AURA Team"
category: security
tags:
  - "dast"
  - "dynamic security"
  - "fuzzing"
  - "http security"
  - "web security scan"
triggers:
  - "dast"
  - "dynamic security"
  - "fuzzing"
  - "http security"
  - "web security scan"
permissions:
  - type: network
    scope: [security]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# DAST Scanner

Simulate Dynamic Application Security Testing, active fuzzing, and HTTP header audits

## Metadata

- **ID:** `dast-scanner`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `security`)

## Triggers

- `dast`
- `dynamic security`
- `fuzzing`
- `http security`
- `web security scan`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('dast-scanner', {
  /* input parameters */
});
```
