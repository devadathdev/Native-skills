---
id: canary-release
name: "Canary Release Manager"
version: 1.0.0
description: "Calculate traffic weight shifts, monitor error rate thresholds, and model automated rollbacks"
author: "AURA Team"
category: devops
tags:
  - "canary release"
  - "traffic shift"
  - "blue green"
  - "canary deploy"
  - "progressive rollout"
triggers:
  - "canary release"
  - "traffic shift"
  - "blue green"
  - "canary deploy"
  - "progressive rollout"
permissions:
  - type: api
    scope: [deploy]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Canary Release Manager

Calculate traffic weight shifts, monitor error rate thresholds, and model automated rollbacks

## Metadata

- **ID:** `canary-release`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `deploy`)

## Triggers

- `canary release`
- `traffic shift`
- `blue green`
- `canary deploy`
- `progressive rollout`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('canary-release', {
  /* input parameters */
});
```
