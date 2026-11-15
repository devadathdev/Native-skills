---
id: zipkin-tracing
name: "Zipkin Tracing"
version: 1.0.0
description: "Inspect Zipkin B3 propagation, span annotations, and binary annotations"
author: "AURA Team"
category: devops
tags:
  - "zipkin"
  - "b3 propagation"
  - "trace dependency"
  - "zipkin span"
triggers:
  - "zipkin"
  - "b3 propagation"
  - "trace dependency"
  - "zipkin span"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Zipkin Tracing

Inspect Zipkin B3 propagation, span annotations, and binary annotations

## Metadata

- **ID:** `zipkin-tracing`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `zipkin`
- `b3 propagation`
- `trace dependency`
- `zipkin span`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('zipkin-tracing', {
  /* input parameters */
});
```
