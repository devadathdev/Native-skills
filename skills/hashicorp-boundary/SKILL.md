---
id: hashicorp-boundary
name: "HashiCorp Boundary"
version: 1.0.0
description: "Inspect Boundary identity-based secure remote access sessions, targets, and grants"
author: "AURA Team"
category: security
tags:
  - "boundary"
  - "hashicorp boundary"
  - "zero trust access"
  - "session target"
triggers:
  - "boundary"
  - "hashicorp boundary"
  - "zero trust access"
  - "session target"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# HashiCorp Boundary

Inspect Boundary identity-based secure remote access sessions, targets, and grants

## Metadata

- **ID:** `hashicorp-boundary`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `boundary`
- `hashicorp boundary`
- `zero trust access`
- `session target`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('hashicorp-boundary', {
  /* input parameters */
});
```
