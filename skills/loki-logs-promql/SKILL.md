---
id: loki-logs-promql
name: "Grafana Loki LogQL"
version: 1.0.0
description: "Formulate and inspect LogQL stream filters, log line parsers, and metric queries"
author: "AURA Team"
category: devops
tags:
  - "loki"
  - "logql"
  - "grafana loki"
  - "log stream filter"
triggers:
  - "loki"
  - "logql"
  - "grafana loki"
  - "log stream filter"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Grafana Loki LogQL

Formulate and inspect LogQL stream filters, log line parsers, and metric queries

## Metadata

- **ID:** `loki-logs-promql`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `loki`
- `logql`
- `grafana loki`
- `log stream filter`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('loki-logs-promql', {
  /* input parameters */
});
```
