---
id: azure-devops-pipeline
name: "Azure DevOps Pipelines"
version: 1.0.0
description: "Inspect azure-pipelines.yml syntax, agent pools, and multi-stage release gates"
author: "AURA Team"
category: devops
tags:
  - "azure devops"
  - "azure pipelines"
  - "ado pipeline"
  - "build agent"
triggers:
  - "azure devops"
  - "azure pipelines"
  - "ado pipeline"
  - "build agent"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Azure DevOps Pipelines

Inspect azure-pipelines.yml syntax, agent pools, and multi-stage release gates

## Metadata

- **ID:** `azure-devops-pipeline`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `azure devops`
- `azure pipelines`
- `ado pipeline`
- `build agent`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('azure-devops-pipeline', {
  /* input parameters */
});
```
