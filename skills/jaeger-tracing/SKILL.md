---
id: jaeger-tracing
name: "Jaeger Tracing"
version: 1.0.0
description: "Inspect Jaeger distributed trace UI spans, service dependencies, and sampling rates"
author: "AURA Team"
category: devops
tags:
  - "jaeger"
  - "distributed trace"
  - "jaeger span"
  - "trace search"
triggers:
  - "jaeger"
  - "distributed trace"
  - "jaeger span"
  - "trace search"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Jaeger Tracing

Inspect Jaeger distributed trace UI spans, service dependencies, and sampling rates

## Metadata

- **ID:** `jaeger-tracing`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `jaeger`
- `distributed trace`
- `jaeger span`
- `trace search`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('jaeger-tracing', {
  /* input parameters */
});
```
