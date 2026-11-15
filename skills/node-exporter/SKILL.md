---
id: node-exporter
name: "Node Exporter"
version: 1.0.0
description: "Inspect Prometheus Node Exporter metric collectors (cpu, disk, filesystem, memory)"
author: "AURA Team"
category: devops
tags:
  - "node exporter"
  - "system metrics"
  - "node cpu"
  - "node memory"
triggers:
  - "node exporter"
  - "system metrics"
  - "node cpu"
  - "node memory"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Node Exporter

Inspect Prometheus Node Exporter metric collectors (cpu, disk, filesystem, memory)

## Metadata

- **ID:** `node-exporter`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `node exporter`
- `system metrics`
- `node cpu`
- `node memory`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('node-exporter', {
  /* input parameters */
});
```
