---
id: trivy-scanner
name: "Trivy Vulnerability Scanner"
version: 1.0.0
description: "Scan container images, file systems, and Git repos for OS packages and CVEs"
author: "AURA Team"
category: security
tags:
  - "trivy"
  - "trivy scan"
  - "cve vulnerability"
  - "security scan image"
triggers:
  - "trivy"
  - "trivy scan"
  - "cve vulnerability"
  - "security scan image"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Trivy Vulnerability Scanner

Scan container images, file systems, and Git repos for OS packages and CVEs

## Metadata

- **ID:** `trivy-scanner`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `trivy`
- `trivy scan`
- `cve vulnerability`
- `security scan image`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('trivy-scanner', {
  /* input parameters */
});
```
