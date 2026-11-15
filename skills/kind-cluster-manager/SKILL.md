---
id: kind-cluster-manager
name: "Kind Cluster Manager"
version: 1.0.0
description: "Inspect Kubernetes-in-Docker (kind) cluster configs, node mappings, and kubeconfig"
author: "AURA Team"
category: devops
tags:
  - "kind"
  - "kind cluster"
  - "k8s in docker"
  - "kind config"
triggers:
  - "kind"
  - "kind cluster"
  - "k8s in docker"
  - "kind config"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Kind Cluster Manager

Inspect Kubernetes-in-Docker (kind) cluster configs, node mappings, and kubeconfig

## Metadata

- **ID:** `kind-cluster-manager`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `kind`
- `kind cluster`
- `k8s in docker`
- `kind config`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('kind-cluster-manager', {
  /* input parameters */
});
```
