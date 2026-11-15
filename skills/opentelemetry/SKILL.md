---
id: opentelemetry
name: "OpenTelemetry Tracing"
version: 1.0.0
description: "Generate OpenTelemetry span payloads, configure W3C tracecontext propagation, and baggage"
author: "AURA Team"
category: devops
tags:
  - "opentelemetry"
  - "otel"
  - "distributed tracing"
  - "trace span"
  - "w3c tracecontext"
triggers:
  - "opentelemetry"
  - "otel"
  - "distributed tracing"
  - "trace span"
  - "w3c tracecontext"
permissions:
  - type: api
    scope: [trace]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# OpenTelemetry Tracing

Generate OpenTelemetry span payloads, configure W3C tracecontext propagation, and baggage

## Metadata

- **ID:** `opentelemetry`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `trace`)

## Triggers

- `opentelemetry`
- `otel`
- `distributed tracing`
- `trace span`
- `w3c tracecontext`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('opentelemetry', {
  /* input parameters */
});
```
