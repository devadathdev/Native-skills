---
id: feast-feature-store
name: "Feast Feature Store"
version: 1.0.0
description: "Inspect Feast feature views, entity definitions, offline/online store sync, and schemas"
author: "AURA Team"
category: data
tags:
  - "feast"
  - "feature store"
  - "feature view"
  - "online store"
triggers:
  - "feast"
  - "feature store"
  - "feature view"
  - "online store"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Feast Feature Store

Inspect Feast feature views, entity definitions, offline/online store sync, and schemas

## Metadata

- **ID:** `feast-feature-store`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `feast`
- `feature store`
- `feature view`
- `online store`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('feast-feature-store', {
  /* input parameters */
});
```
