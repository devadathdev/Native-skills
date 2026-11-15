---
id: autoscaling-rules
name: "Autoscaling Rules"
version: 1.0.0
description: "Formulate Kubernetes Horizontal Pod Autoscaler (HPA) and cloud auto-scaling metric thresholds"
author: "AURA Team"
category: devops
tags:
  - "autoscaling"
  - "hpa"
  - "horizontal pod autoscaler"
  - "scale out"
  - "scale in"
  - "cpu threshold"
triggers:
  - "autoscaling"
  - "hpa"
  - "horizontal pod autoscaler"
  - "scale out"
  - "scale in"
  - "cpu threshold"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Autoscaling Rules

Formulate Kubernetes Horizontal Pod Autoscaler (HPA) and cloud auto-scaling metric thresholds

## Metadata

- **ID:** `autoscaling-rules`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `autoscaling`
- `hpa`
- `horizontal pod autoscaler`
- `scale out`
- `scale in`
- `cpu threshold`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('autoscaling-rules', {
  /* input parameters */
});
```
