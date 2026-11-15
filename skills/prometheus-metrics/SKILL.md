---
id: prometheus-metrics
name: "Prometheus Metrics"
version: 1.0.0
description: "Format Prometheus exposition metrics, define Counter/Gauge/Histogram collectors, and test PromQL"
author: "AURA Team"
category: devops
tags:
  - "prometheus"
  - "promql"
  - "metrics export"
  - "gauge"
  - "histogram"
  - "counter metric"
triggers:
  - "prometheus"
  - "promql"
  - "metrics export"
  - "gauge"
  - "histogram"
  - "counter metric"
permissions:
  - type: api
    scope: [metrics]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Prometheus Metrics

Format Prometheus exposition metrics, define Counter/Gauge/Histogram collectors, and test PromQL

## Metadata

- **ID:** `prometheus-metrics`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `metrics`)

## Triggers

- `prometheus`
- `promql`
- `metrics export`
- `gauge`
- `histogram`
- `counter metric`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('prometheus-metrics', {
  /* input parameters */
});
```
