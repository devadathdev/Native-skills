---
id: cost-optimizer
name: "Cost Optimizer"
version: 1.0.0
description: "Identify idle cloud resources, suggest right-sizing opportunities, and forecast spending"
author: "AURA Team"
category: devops
tags:
  - "cloud cost"
  - "cost optimizer"
  - "finops"
  - "idle resources"
  - "cloud spend"
  - "rightsizing"
triggers:
  - "cloud cost"
  - "cost optimizer"
  - "finops"
  - "idle resources"
  - "cloud spend"
  - "rightsizing"
permissions:
  - type: api
    scope: [cloud]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Cost Optimizer

Identify idle cloud resources, suggest right-sizing opportunities, and forecast spending

## Metadata

- **ID:** `cost-optimizer`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `cloud`)

## Triggers

- `cloud cost`
- `cost optimizer`
- `finops`
- `idle resources`
- `cloud spend`
- `rightsizing`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('cost-optimizer', {
  /* input parameters */
});
```
