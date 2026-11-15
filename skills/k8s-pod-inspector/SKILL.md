---
id: k8s-pod-inspector
name: "K8s Pod Inspector"
version: 1.0.0
description: "Inspect Kubernetes Pod specs, container status, readiness probes, and restart counts"
author: "AURA Team"
category: devops
tags:
  - "k8s pod"
  - "pod spec"
  - "readiness probe"
  - "liveness probe"
triggers:
  - "k8s pod"
  - "pod spec"
  - "readiness probe"
  - "liveness probe"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# K8s Pod Inspector

Inspect Kubernetes Pod specs, container status, readiness probes, and restart counts

## Metadata

- **ID:** `k8s-pod-inspector`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `k8s pod`
- `pod spec`
- `readiness probe`
- `liveness probe`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('k8s-pod-inspector', {
  /* input parameters */
});
```
