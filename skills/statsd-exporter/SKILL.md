---
id: statsd-exporter
name: "StatsD Exporter"
version: 1.0.0
description: "Inspect StatsD metric mapping rules, regex matches, and Prometheus conversions"
author: "AURA Team"
category: devops
tags:
  - "statsd"
  - "statsd exporter"
  - "metric mapping"
  - "statsd to prometheus"
triggers:
  - "statsd"
  - "statsd exporter"
  - "metric mapping"
  - "statsd to prometheus"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# StatsD Exporter

Inspect StatsD metric mapping rules, regex matches, and Prometheus conversions

## Metadata

- **ID:** `statsd-exporter`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `statsd`
- `statsd exporter`
- `metric mapping`
- `statsd to prometheus`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('statsd-exporter', {
  /* input parameters */
});
```
