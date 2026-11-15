---
id: compliance-checker
name: "Compliance Checker"
version: 1.0.0
description: "Audit software dependencies for license compliance and supply chain integrity"
author: "AURA Team"
category: security
tags:
  - "compliance"
  - "license check"
  - "spdx"
  - "audit licenses"
  - "legal compliance"
  - "license audit"
triggers:
  - "compliance"
  - "license check"
  - "spdx"
  - "audit licenses"
  - "legal compliance"
  - "license audit"
permissions:
  - type: filesystem
    scope: [read]
enabled: true
entryPoint: src/skills/extended/index.ts
---

# Compliance Checker

Audit software dependencies for license compliance and supply chain integrity

## Metadata

- **ID:** `compliance-checker`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read`)

## Triggers

- `compliance`
- `license check`
- `spdx`
- `audit licenses`
- `legal compliance`
- `license audit`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('compliance-checker', {
  /* input parameters */
});
```
