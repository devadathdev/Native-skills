---
id: reloader-operator
name: "Reloader Operator"
version: 1.0.0
description: "Inspect Reloader configmap/secret change watch annotations and rolling restart triggers"
author: "AURA Team"
category: devops
tags:
  - "reloader"
  - "configmap reload"
  - "rolling restart"
  - "secret reload"
triggers:
  - "reloader"
  - "configmap reload"
  - "rolling restart"
  - "secret reload"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Reloader Operator

Inspect Reloader configmap/secret change watch annotations and rolling restart triggers

## Metadata

- **ID:** `reloader-operator`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `reloader`
- `configmap reload`
- `rolling restart`
- `secret reload`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('reloader-operator', {
  /* input parameters */
});
```
