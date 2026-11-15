---
id: elastic-apm
name: "Elastic APM"
version: 1.0.0
description: "Inspect Elastic APM server endpoints, transaction sampling rates, and span compression"
author: "AURA Team"
category: devops
tags:
  - "elastic apm"
  - "apm server"
  - "kibana apm"
  - "transaction sampling"
triggers:
  - "elastic apm"
  - "apm server"
  - "kibana apm"
  - "transaction sampling"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Elastic APM

Inspect Elastic APM server endpoints, transaction sampling rates, and span compression

## Metadata

- **ID:** `elastic-apm`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `elastic apm`
- `apm server`
- `kibana apm`
- `transaction sampling`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('elastic-apm', {
  /* input parameters */
});
```
