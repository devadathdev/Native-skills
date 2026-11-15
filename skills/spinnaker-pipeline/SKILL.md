---
id: spinnaker-pipeline
name: "Spinnaker Pipeline"
version: 1.0.0
description: "Inspect Spinnaker application pipelines, bake stages, and deploy configurations"
author: "AURA Team"
category: devops
tags:
  - "spinnaker"
  - "spinnaker pipeline"
  - "continuous delivery"
  - "bake stage"
triggers:
  - "spinnaker"
  - "spinnaker pipeline"
  - "continuous delivery"
  - "bake stage"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Spinnaker Pipeline

Inspect Spinnaker application pipelines, bake stages, and deploy configurations

## Metadata

- **ID:** `spinnaker-pipeline`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `spinnaker`
- `spinnaker pipeline`
- `continuous delivery`
- `bake stage`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('spinnaker-pipeline', {
  /* input parameters */
});
```
