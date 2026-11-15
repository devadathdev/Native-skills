---
id: sbom-generator
name: "SBOM Generator"
version: 1.0.0
description: "Generate Software Bill of Materials (SBOM) in standard CycloneDX and SPDX formats"
author: "AURA Team"
category: security
tags:
  - "sbom"
  - "cyclonedx"
  - "spdx"
  - "software bill of materials"
  - "dependency inventory"
triggers:
  - "sbom"
  - "cyclonedx"
  - "spdx"
  - "software bill of materials"
  - "dependency inventory"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# SBOM Generator

Generate Software Bill of Materials (SBOM) in standard CycloneDX and SPDX formats

## Metadata

- **ID:** `sbom-generator`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `sbom`
- `cyclonedx`
- `spdx`
- `software bill of materials`
- `dependency inventory`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('sbom-generator', {
  /* input parameters */
});
```
