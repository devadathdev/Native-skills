---
id: promql-evaluator
name: "PromQL Query Evaluator"
version: 1.0.0
description: "Test and format PromQL queries (rate, irate, histogram_quantile, sum by)"
author: "AURA Team"
category: devops
tags:
  - "promql"
  - "promql query"
  - "histogram quantile"
  - "rate query"
triggers:
  - "promql"
  - "promql query"
  - "histogram quantile"
  - "rate query"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# PromQL Query Evaluator

Test and format PromQL queries (rate, irate, histogram_quantile, sum by)

## Metadata

- **ID:** `promql-evaluator`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `promql`
- `promql query`
- `histogram quantile`
- `rate query`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('promql-evaluator', {
  /* input parameters */
});
```
