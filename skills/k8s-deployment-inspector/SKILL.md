---
id: k8s-deployment-inspector
name: "K8s Deployment Inspector"
version: 1.0.0
description: "Inspect Kubernetes Deployment replicas, rolling update strategy, and revision history"
author: "AURA Team"
category: devops
tags:
  - "k8s deployment"
  - "replicas"
  - "rolling update"
  - "deployment strategy"
triggers:
  - "k8s deployment"
  - "replicas"
  - "rolling update"
  - "deployment strategy"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# K8s Deployment Inspector

Inspect Kubernetes Deployment replicas, rolling update strategy, and revision history

## Metadata

- **ID:** `k8s-deployment-inspector`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `k8s deployment`
- `replicas`
- `rolling update`
- `deployment strategy`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('k8s-deployment-inspector', {
  /* input parameters */
});
```
