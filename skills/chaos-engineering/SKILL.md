---
id: chaos-engineering
name: "Chaos Engineering"
version: 1.0.0
description: "Model failure scenarios, inject network packet drops, latency delays, and verify system resilience"
author: "AURA Team"
category: devops
tags:
  - "chaos engineering"
  - "fault injection"
  - "chaos mesh"
  - "latency injection"
  - "resilience test"
triggers:
  - "chaos engineering"
  - "fault injection"
  - "chaos mesh"
  - "latency injection"
  - "resilience test"
permissions:
  - type: api
    scope: [chaos]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Chaos Engineering

Model failure scenarios, inject network packet drops, latency delays, and verify system resilience

## Metadata

- **ID:** `chaos-engineering`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `chaos`)

## Triggers

- `chaos engineering`
- `fault injection`
- `chaos mesh`
- `latency injection`
- `resilience test`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('chaos-engineering', {
  /* input parameters */
});
```
