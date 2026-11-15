---
id: spiffe-spire
name: "SPIFFE / SPIRE"
version: 1.0.0
description: "Inspect SPIFFE IDs, SVID cryptographic identities, and SPIRE agent attestation"
author: "AURA Team"
category: security
tags:
  - "spiffe"
  - "spire"
  - "spiffe id"
  - "svid"
triggers:
  - "spiffe"
  - "spire"
  - "spiffe id"
  - "svid"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# SPIFFE / SPIRE

Inspect SPIFFE IDs, SVID cryptographic identities, and SPIRE agent attestation

## Metadata

- **ID:** `spiffe-spire`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `spiffe`
- `spire`
- `spiffe id`
- `svid`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('spiffe-spire', {
  /* input parameters */
});
```
