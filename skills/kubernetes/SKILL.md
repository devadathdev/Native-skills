---
id: kubernetes
name: "Kubernetes"
version: 1.0.0
description: "Inspect Kubernetes manifests, pods, deployments, and cluster resources"
author: "AURA Team"
category: devops
tags:
  - "kubernetes"
  - "k8s"
  - "pod"
  - "deployment"
  - "kubectl"
triggers:
  - "kubernetes"
  - "k8s"
  - "pod"
  - "deployment"
  - "kubectl"
permissions:
  - type: shell
    scope: [kubectl, node]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Kubernetes

Inspect Kubernetes manifests, pods, deployments, and cluster resources

## Metadata

- **ID:** `kubernetes`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `kubectl, node`)

## Triggers

- `kubernetes`
- `k8s`
- `pod`
- `deployment`
- `kubectl`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('kubernetes', {
  /* input parameters */
});
```
