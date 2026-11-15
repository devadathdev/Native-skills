---
id: scipy-scientific
name: "SciPy Scientific"
version: 1.0.0
description: "Inspect scientific optimization, signal processing filters, and statistical tests"
author: "AURA Team"
category: analysis
tags:
  - "scipy"
  - "scientific compute"
  - "curve fit"
  - "scipy optimize"
triggers:
  - "scipy"
  - "scientific compute"
  - "curve fit"
  - "scipy optimize"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# SciPy Scientific

Inspect scientific optimization, signal processing filters, and statistical tests

## Metadata

- **ID:** `scipy-scientific`
- **Category:** `analysis`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `scipy`
- `scientific compute`
- `curve fit`
- `scipy optimize`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('scipy-scientific', {
  /* input parameters */
});
```
