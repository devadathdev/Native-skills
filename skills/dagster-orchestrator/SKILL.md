---
id: dagster-orchestrator
name: "Dagster Orchestrator"
version: 1.0.0
description: "Inspect Dagster software-defined assets, ops, jobs, and IO managers"
author: "AURA Team"
category: data
tags:
  - "dagster"
  - "dagster asset"
  - "software defined assets"
  - "dagster job"
triggers:
  - "dagster"
  - "dagster asset"
  - "software defined assets"
  - "dagster job"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Dagster Orchestrator

Inspect Dagster software-defined assets, ops, jobs, and IO managers

## Metadata

- **ID:** `dagster-orchestrator`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `dagster`
- `dagster asset`
- `software defined assets`
- `dagster job`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('dagster-orchestrator', {
  /* input parameters */
});
```
