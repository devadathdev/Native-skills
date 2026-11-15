---
id: open-policy-agent
name: "Open Policy Agent (OPA)"
version: 1.0.0
description: "Inspect Rego policy definitions, input evaluations, and data document queries"
author: "AURA Team"
category: security
tags:
  - "opa"
  - "open policy agent"
  - "rego"
  - "policy as code"
triggers:
  - "opa"
  - "open policy agent"
  - "rego"
  - "policy as code"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Open Policy Agent (OPA)

Inspect Rego policy definitions, input evaluations, and data document queries

## Metadata

- **ID:** `open-policy-agent`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `opa`
- `open policy agent`
- `rego`
- `policy as code`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('open-policy-agent', {
  /* input parameters */
});
```
