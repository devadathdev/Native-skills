---
id: k8s-service-inspector
name: "K8s Service Inspector"
version: 1.0.0
description: "Inspect Kubernetes Services (ClusterIP, NodePort, LoadBalancer), ports, and selectors"
author: "AURA Team"
category: devops
tags:
  - "k8s service"
  - "clusterip"
  - "nodeport"
  - "loadbalancer service"
triggers:
  - "k8s service"
  - "clusterip"
  - "nodeport"
  - "loadbalancer service"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# K8s Service Inspector

Inspect Kubernetes Services (ClusterIP, NodePort, LoadBalancer), ports, and selectors

## Metadata

- **ID:** `k8s-service-inspector`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `k8s service`
- `clusterip`
- `nodeport`
- `loadbalancer service`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('k8s-service-inspector', {
  /* input parameters */
});
```
