---
id: azure-aks-cluster
name: "Azure AKS Cluster"
version: 1.0.0
description: "Inspect Azure Kubernetes Service (AKS) node pools, network policies, and identity"
author: "AURA Team"
category: devops
tags:
  - "azure aks"
  - "aks cluster"
  - "azure kubernetes"
  - "aks node pool"
triggers:
  - "azure aks"
  - "aks cluster"
  - "azure kubernetes"
  - "aks node pool"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Azure AKS Cluster

Inspect Azure Kubernetes Service (AKS) node pools, network policies, and identity

## Metadata

- **ID:** `azure-aks-cluster`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `azure aks`
- `aks cluster`
- `azure kubernetes`
- `aks node pool`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('azure-aks-cluster', {
  /* input parameters */
});
```
