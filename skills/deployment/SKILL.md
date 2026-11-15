---
id: deployment
name: "Deployment"
version: 1.0.0
description: "Plan and orchestrate multi-environment release deployments"
author: "AURA Team"
category: devops
tags:
  - "deploy"
  - "release"
  - "production"
  - "staging"
  - "deployment"
triggers:
  - "deploy"
  - "release"
  - "production"
  - "staging"
  - "deployment"
permissions:
  - type: api
    scope: [deploy]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Deployment

Plan and orchestrate multi-environment release deployments

## Metadata

- **ID:** `deployment`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `deploy`)

## Triggers

- `deploy`
- `release`
- `production`
- `staging`
- `deployment`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('deployment', {
  /* input parameters */
});
```
