---
id: ory-kratos
name: "Ory Kratos Identity"
version: 1.0.0
description: "Inspect Ory Kratos identity schemas, self-service registration, login, and recovery flows"
author: "AURA Team"
category: security
tags:
  - "ory"
  - "ory kratos"
  - "self service auth"
  - "identity schema"
triggers:
  - "ory"
  - "ory kratos"
  - "self service auth"
  - "identity schema"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Ory Kratos Identity

Inspect Ory Kratos identity schemas, self-service registration, login, and recovery flows

## Metadata

- **ID:** `ory-kratos`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `ory`
- `ory kratos`
- `self service auth`
- `identity schema`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('ory-kratos', {
  /* input parameters */
});
```
