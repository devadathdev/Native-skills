---
id: cortex-metrics
name: "Cortex Metrics System"
version: 1.0.0
description: "Inspect multi-tenant Cortex metric ingestion, distributors, and ingesters"
author: "AURA Team"
category: devops
tags:
  - "cortex"
  - "multitenant metrics"
  - "cortex ingester"
  - "cortex metrics"
triggers:
  - "cortex"
  - "multitenant metrics"
  - "cortex ingester"
  - "cortex metrics"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Cortex Metrics System

Inspect multi-tenant Cortex metric ingestion, distributors, and ingesters

## Metadata

- **ID:** `cortex-metrics`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `cortex`
- `multitenant metrics`
- `cortex ingester`
- `cortex metrics`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('cortex-metrics', {
  /* input parameters */
});
```
