---
id: datadog-agent
name: "Datadog Agent Inspector"
version: 1.0.0
description: "Inspect datadog.yaml configuration, APM trace collection, and dogstatsd metrics"
author: "AURA Team"
category: devops
tags:
  - "datadog"
  - "datadog agent"
  - "dogstatsd"
  - "datadog apm"
triggers:
  - "datadog"
  - "datadog agent"
  - "dogstatsd"
  - "datadog apm"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Datadog Agent Inspector

Inspect datadog.yaml configuration, APM trace collection, and dogstatsd metrics

## Metadata

- **ID:** `datadog-agent`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `datadog`
- `datadog agent`
- `dogstatsd`
- `datadog apm`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('datadog-agent', {
  /* input parameters */
});
```
