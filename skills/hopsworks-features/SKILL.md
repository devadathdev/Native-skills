---
id: hopsworks-features
name: "Hopsworks Feature Store"
version: 1.0.0
description: "Inspect Hopsworks feature groups, training dataset generation, and feature validations"
author: "AURA Team"
category: data
tags:
  - "hopsworks"
  - "feature group"
  - "feature store ml"
  - "training dataset"
triggers:
  - "hopsworks"
  - "feature group"
  - "feature store ml"
  - "training dataset"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Hopsworks Feature Store

Inspect Hopsworks feature groups, training dataset generation, and feature validations

## Metadata

- **ID:** `hopsworks-features`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `hopsworks`
- `feature group`
- `feature store ml`
- `training dataset`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('hopsworks-features', {
  /* input parameters */
});
```
