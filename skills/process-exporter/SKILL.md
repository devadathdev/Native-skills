---
id: process-exporter
name: "Process Exporter"
version: 1.0.0
description: "Inspect process-exporter group definitions, thread counts, and process memory maps"
author: "AURA Team"
category: devops
tags:
  - "process exporter"
  - "process metrics"
  - "process memory"
  - "thread count"
triggers:
  - "process exporter"
  - "process metrics"
  - "process memory"
  - "thread count"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Process Exporter

Inspect process-exporter group definitions, thread counts, and process memory maps

## Metadata

- **ID:** `process-exporter`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `process exporter`
- `process metrics`
- `process memory`
- `thread count`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('process-exporter', {
  /* input parameters */
});
```
