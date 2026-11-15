---
id: security-audit
name: "Security Audit"
version: 1.0.0
description: "Security vulnerability scanning, secrets detection, and threat analysis"
author: "AURA Team"
category: security
tags:
  - "security"
  - "vulnerability"
  - "audit"
  - "secret scan"
  - "cve"
triggers:
  - "security audit"
  - "vulnerability"
  - "security scan"
  - "threat model"
  - "audit security"
permissions:
  - type: shell
    scope: [security]
  - type: filesystem
    scope: [read]
  - type: api
    scope: [sentinel]
enabled: true
entryPoint: src/skills/core/index.ts
---

# Security Audit

Security vulnerability scanning, secrets detection, and threat analysis

## Metadata

- **ID:** `security-audit`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `security`)
- `filesystem` (scope: `read`)
- `api` (scope: `sentinel`)

## Triggers

- `security audit`
- `vulnerability`
- `security scan`
- `threat model`
- `audit security`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('security-audit', {
  /* input parameters */
});
```
