---
id: kics-scanner
name: "KICS IaC Scanner"
version: 1.0.0
description: "Inspect Keeping Infrastructure as Code Secure (KICS) findings, compliance, and severity"
author: "AURA Team"
category: security
tags:
  - "kics"
  - "kics scan"
  - "iac vulnerability"
  - "infrastructure security"
triggers:
  - "kics"
  - "kics scan"
  - "iac vulnerability"
  - "infrastructure security"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# KICS IaC Scanner

Inspect Keeping Infrastructure as Code Secure (KICS) findings, compliance, and severity

## Metadata

- **ID:** `kics-scanner`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `kics`
- `kics scan`
- `iac vulnerability`
- `infrastructure security`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('kics-scanner', {
  /* input parameters */
});
```
