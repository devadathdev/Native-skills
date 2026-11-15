---
id: signoz-observability
name: "SigNoz Observability"
version: 1.0.0
description: "Inspect SigNoz open-source APM, ClickHouse metrics storage, and traces"
author: "AURA Team"
category: devops
tags:
  - "signoz"
  - "signoz apm"
  - "opentelemetry signoz"
  - "traces and metrics"
triggers:
  - "signoz"
  - "signoz apm"
  - "opentelemetry signoz"
  - "traces and metrics"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# SigNoz Observability

Inspect SigNoz open-source APM, ClickHouse metrics storage, and traces

## Metadata

- **ID:** `signoz-observability`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `signoz`
- `signoz apm`
- `opentelemetry signoz`
- `traces and metrics`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('signoz-observability', {
  /* input parameters */
});
```
