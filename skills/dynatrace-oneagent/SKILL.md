---
id: dynatrace-oneagent
name: "Dynatrace OneAgent"
version: 1.0.0
description: "Inspect Dynatrace OneAgent auto-discovery, Smartscape topology, and Davis AI alerts"
author: "AURA Team"
category: devops
tags:
  - "dynatrace"
  - "oneagent"
  - "smartscape"
  - "davis ai"
triggers:
  - "dynatrace"
  - "oneagent"
  - "smartscape"
  - "davis ai"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Dynatrace OneAgent

Inspect Dynatrace OneAgent auto-discovery, Smartscape topology, and Davis AI alerts

## Metadata

- **ID:** `dynatrace-oneagent`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `dynatrace`
- `oneagent`
- `smartscape`
- `davis ai`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('dynatrace-oneagent', {
  /* input parameters */
});
```
