---
id: grafana-dashboards
name: "Grafana Dashboards"
version: 1.0.0
description: "Generate Grafana dashboard JSON models, panel layouts, time-series graphs, and threshold alerts"
author: "AURA Team"
category: devops
tags:
  - "grafana"
  - "grafana dashboard"
  - "dashboard json"
  - "grafana panel"
  - "grafana alert"
triggers:
  - "grafana"
  - "grafana dashboard"
  - "dashboard json"
  - "grafana panel"
  - "grafana alert"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Grafana Dashboards

Generate Grafana dashboard JSON models, panel layouts, time-series graphs, and threshold alerts

## Metadata

- **ID:** `grafana-dashboards`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `grafana`
- `grafana dashboard`
- `dashboard json`
- `grafana panel`
- `grafana alert`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('grafana-dashboards', {
  /* input parameters */
});
```
