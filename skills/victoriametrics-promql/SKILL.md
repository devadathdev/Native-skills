---
id: victoriametrics-promql
name: "VictoriaMetrics"
version: 1.0.0
description: "Inspect VictoriaMetrics deduplication, retention periods, and MetricsQL queries"
author: "AURA Team"
category: data
tags:
  - "victoriametrics"
  - "metricsql"
  - "time series storage"
  - "promql storage"
triggers:
  - "victoriametrics"
  - "metricsql"
  - "time series storage"
  - "promql storage"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# VictoriaMetrics

Inspect VictoriaMetrics deduplication, retention periods, and MetricsQL queries

## Metadata

- **ID:** `victoriametrics-promql`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `victoriametrics`
- `metricsql`
- `time series storage`
- `promql storage`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('victoriametrics-promql', {
  /* input parameters */
});
```
