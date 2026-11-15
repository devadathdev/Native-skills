---
id: grype-scanner
name: "Grype Vulnerability Scanner"
version: 1.0.0
description: "Inspect Anchore Grype vulnerability matches against SBOMs and container layers"
author: "AURA Team"
category: security
tags:
  - "grype"
  - "anchore grype"
  - "sbom scan"
  - "vulnerability matcher"
triggers:
  - "grype"
  - "anchore grype"
  - "sbom scan"
  - "vulnerability matcher"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Grype Vulnerability Scanner

Inspect Anchore Grype vulnerability matches against SBOMs and container layers

## Metadata

- **ID:** `grype-scanner`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `grype`
- `anchore grype`
- `sbom scan`
- `vulnerability matcher`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('grype-scanner', {
  /* input parameters */
});
```
