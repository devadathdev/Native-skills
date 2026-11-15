---
id: victorops-splunk
name: "Splunk On-Call"
version: 1.0.0
description: "Inspect Splunk On-Call (VictorOps) routing keys, teams, and active alerts"
author: "AURA Team"
category: productivity
tags:
  - "splunk oncall"
  - "victorops"
  - "routing key"
  - "oncall team"
triggers:
  - "splunk oncall"
  - "victorops"
  - "routing key"
  - "oncall team"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Splunk On-Call

Inspect Splunk On-Call (VictorOps) routing keys, teams, and active alerts

## Metadata

- **ID:** `victorops-splunk`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `splunk oncall`
- `victorops`
- `routing key`
- `oncall team`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('victorops-splunk', {
  /* input parameters */
});
```
