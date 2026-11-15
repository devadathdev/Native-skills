---
id: audit-reporter
name: "Compliance Audit Reporter"
version: 1.0.0
description: "Evaluate infrastructure and operational controls against SOC 2, ISO 27001, and HIPAA benchmarks"
author: "AURA Team"
category: security
tags:
  - "soc2"
  - "iso27001"
  - "hipaa"
  - "security audit report"
  - "compliance controls"
triggers:
  - "soc2"
  - "iso27001"
  - "hipaa"
  - "security audit report"
  - "compliance controls"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Compliance Audit Reporter

Evaluate infrastructure and operational controls against SOC 2, ISO 27001, and HIPAA benchmarks

## Metadata

- **ID:** `audit-reporter`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `soc2`
- `iso27001`
- `hipaa`
- `security audit report`
- `compliance controls`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('audit-reporter', {
  /* input parameters */
});
```
