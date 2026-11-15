---
id: newrelic-agent
name: "New Relic APM"
version: 1.0.0
description: "Inspect New Relic agent configuration, transaction tracing, and error collector settings"
author: "AURA Team"
category: devops
tags:
  - "new relic"
  - "newrelic"
  - "nr apm"
  - "transaction trace"
triggers:
  - "new relic"
  - "newrelic"
  - "nr apm"
  - "transaction trace"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# New Relic APM

Inspect New Relic agent configuration, transaction tracing, and error collector settings

## Metadata

- **ID:** `newrelic-agent`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `new relic`
- `newrelic`
- `nr apm`
- `transaction trace`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('newrelic-agent', {
  /* input parameters */
});
```
