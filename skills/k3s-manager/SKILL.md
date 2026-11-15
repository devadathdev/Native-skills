---
id: k3s-manager
name: "K3s Lightweight K8s"
version: 1.0.0
description: "Inspect K3s lightweight Kubernetes server/agent arguments and single-binary state"
author: "AURA Team"
category: devops
tags:
  - "k3s"
  - "lightweight k8s"
  - "k3s cluster"
  - "rancher k3s"
triggers:
  - "k3s"
  - "lightweight k8s"
  - "k3s cluster"
  - "rancher k3s"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# K3s Lightweight K8s

Inspect K3s lightweight Kubernetes server/agent arguments and single-binary state

## Metadata

- **ID:** `k3s-manager`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `k3s`
- `lightweight k8s`
- `k3s cluster`
- `rancher k3s`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('k3s-manager', {
  /* input parameters */
});
```
