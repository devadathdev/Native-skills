---
id: syft-sbom
name: "Syft SBOM Extractor"
version: 1.0.0
description: "Inspect Anchore Syft extraction of software packages, catalogers, and SPDX/CycloneDX"
author: "AURA Team"
category: security
tags:
  - "syft"
  - "sbom extractor"
  - "anchore syft"
  - "package catalog"
triggers:
  - "syft"
  - "sbom extractor"
  - "anchore syft"
  - "package catalog"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Syft SBOM Extractor

Inspect Anchore Syft extraction of software packages, catalogers, and SPDX/CycloneDX

## Metadata

- **ID:** `syft-sbom`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `syft`
- `sbom extractor`
- `anchore syft`
- `package catalog`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('syft-sbom', {
  /* input parameters */
});
```
