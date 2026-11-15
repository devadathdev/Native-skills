---
id: aws-ecs-manager
name: "AWS ECS Manager"
version: 1.0.0
description: "Inspect Amazon ECS task definitions, Fargate capacity providers, and service health"
author: "AURA Team"
category: devops
tags:
  - "aws ecs"
  - "ecs fargate"
  - "task definition"
  - "ecs service"
triggers:
  - "aws ecs"
  - "ecs fargate"
  - "task definition"
  - "ecs service"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# AWS ECS Manager

Inspect Amazon ECS task definitions, Fargate capacity providers, and service health

## Metadata

- **ID:** `aws-ecs-manager`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `aws ecs`
- `ecs fargate`
- `task definition`
- `ecs service`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aws-ecs-manager', {
  /* input parameters */
});
```
