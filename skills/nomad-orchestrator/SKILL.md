---
id: nomad-orchestrator
name: "HashiCorp Nomad"
version: 1.0.0
description: "Inspect Nomad job specifications (HCL), task groups, and allocations"
author: "AURA Team"
category: devops
tags:
  - "nomad"
  - "hashicorp nomad"
  - "nomad job"
  - "nomad allocation"
triggers:
  - "nomad"
  - "hashicorp nomad"
  - "nomad job"
  - "nomad allocation"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# HashiCorp Nomad

Inspect Nomad job specifications (HCL), task groups, and allocations

## Metadata

- **ID:** `nomad-orchestrator`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `nomad`
- `hashicorp nomad`
- `nomad job`
- `nomad allocation`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('nomad-orchestrator', {
  /* input parameters */
});
```
