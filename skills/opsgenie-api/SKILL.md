---
id: opsgenie-api
name: "Opsgenie API"
version: 1.0.0
description: "Inspect Opsgenie alert creation, routing rules, and on-call rotation schedules"
author: "AURA Team"
category: productivity
tags:
  - "opsgenie"
  - "oncall opsgenie"
  - "opsgenie alert"
  - "rotation schedule"
triggers:
  - "opsgenie"
  - "oncall opsgenie"
  - "opsgenie alert"
  - "rotation schedule"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Opsgenie API

Inspect Opsgenie alert creation, routing rules, and on-call rotation schedules

## Metadata

- **ID:** `opsgenie-api`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `opsgenie`
- `oncall opsgenie`
- `opsgenie alert`
- `rotation schedule`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('opsgenie-api', {
  /* input parameters */
});
```
