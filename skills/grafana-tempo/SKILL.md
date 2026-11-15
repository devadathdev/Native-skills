---
id: grafana-tempo
name: "Grafana Tempo"
version: 1.0.0
description: "Inspect Tempo distributed tracing backend, Parquet storage blocks, and TraceQL"
author: "AURA Team"
category: devops
tags:
  - "tempo"
  - "grafana tempo"
  - "traceql"
  - "object storage trace"
triggers:
  - "tempo"
  - "grafana tempo"
  - "traceql"
  - "object storage trace"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Grafana Tempo

Inspect Tempo distributed tracing backend, Parquet storage blocks, and TraceQL

## Metadata

- **ID:** `grafana-tempo`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `tempo`
- `grafana tempo`
- `traceql`
- `object storage trace`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('grafana-tempo', {
  /* input parameters */
});
```
