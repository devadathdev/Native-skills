---
id: prefect-orchestrator
name: "Prefect Orchestrator"
version: 1.0.0
description: "Inspect Prefect flows, tasks, deployments, work pools, and parameter validations"
author: "AURA Team"
category: data
tags:
  - "prefect"
  - "prefect flow"
  - "prefect task"
  - "work pool"
triggers:
  - "prefect"
  - "prefect flow"
  - "prefect task"
  - "work pool"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Prefect Orchestrator

Inspect Prefect flows, tasks, deployments, work pools, and parameter validations

## Metadata

- **ID:** `prefect-orchestrator`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `prefect`
- `prefect flow`
- `prefect task`
- `work pool`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('prefect-orchestrator', {
  /* input parameters */
});
```
