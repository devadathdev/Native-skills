---
id: k8s-hpa-inspector
name: "K8s HPA Inspector"
version: 1.0.0
description: "Inspect HorizontalPodAutoscaler target CPU/Memory metrics and scaling behaviors"
author: "AURA Team"
category: devops
tags:
  - "k8s hpa"
  - "pod autoscaler"
  - "cpu metric"
  - "scaling behavior"
triggers:
  - "k8s hpa"
  - "pod autoscaler"
  - "cpu metric"
  - "scaling behavior"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# K8s HPA Inspector

Inspect HorizontalPodAutoscaler target CPU/Memory metrics and scaling behaviors

## Metadata

- **ID:** `k8s-hpa-inspector`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `k8s hpa`
- `pod autoscaler`
- `cpu metric`
- `scaling behavior`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('k8s-hpa-inspector', {
  /* input parameters */
});
```
