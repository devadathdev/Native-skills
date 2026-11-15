---
id: influxdb-flux
name: "InfluxDB Flux"
version: 1.0.0
description: "Inspect time-series buckets, downsampling retention policies, and Flux queries"
author: "AURA Team"
category: data
tags:
  - "influxdb"
  - "flux query"
  - "time series"
  - "retention policy"
triggers:
  - "influxdb"
  - "flux query"
  - "time series"
  - "retention policy"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# InfluxDB Flux

Inspect time-series buckets, downsampling retention policies, and Flux queries

## Metadata

- **ID:** `influxdb-flux`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `influxdb`
- `flux query`
- `time series`
- `retention policy`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('influxdb-flux', {
  /* input parameters */
});
```
