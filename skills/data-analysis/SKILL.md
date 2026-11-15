---
id: data-analysis
name: "Data Analysis"
version: 1.0.0
description: "Analyze tabular datasets, calculate metrics, and extract insights"
author: "AURA Team"
category: analysis
tags:
  - "data"
  - "csv"
  - "dataset"
  - "statistics"
  - "metrics"
triggers:
  - "data analysis"
  - "csv"
  - "dataset"
  - "analyze data"
  - "calculate metrics"
permissions:
  - type: filesystem
    scope: [read, write]
  - type: model
    scope: [analysis]
enabled: true
entryPoint: src/skills/core/index.ts
---

# Data Analysis

Analyze tabular datasets, calculate metrics, and extract insights

## Metadata

- **ID:** `data-analysis`
- **Category:** `analysis`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)
- `model` (scope: `analysis`)

## Triggers

- `data analysis`
- `csv`
- `dataset`
- `analyze data`
- `calculate metrics`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('data-analysis', {
  /* input parameters */
});
```
