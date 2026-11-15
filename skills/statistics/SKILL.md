---
id: statistics
name: "Statistics"
version: 1.0.0
description: "Calculate comprehensive descriptive statistics, distributions, and variance"
author: "AURA Team"
category: data
tags:
  - "statistics"
  - "statistical"
  - "correlation"
  - "regression"
  - "mean"
  - "median"
triggers:
  - "statistics"
  - "statistical"
  - "correlation"
  - "regression"
  - "mean"
  - "median"
permissions:
  - type: api
    scope: [compute]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Statistics

Calculate comprehensive descriptive statistics, distributions, and variance

## Metadata

- **ID:** `statistics`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `compute`)

## Triggers

- `statistics`
- `statistical`
- `correlation`
- `regression`
- `mean`
- `median`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('statistics', {
  /* input parameters */
});
```
