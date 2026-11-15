---
id: calico-cni
name: "Calico CNI Manager"
version: 1.0.0
description: "Inspect Project Calico BGP peering, IPAM pools, and global network policies"
author: "AURA Team"
category: devops
tags:
  - "calico"
  - "calico cni"
  - "bgp peering"
  - "k8s ipam"
triggers:
  - "calico"
  - "calico cni"
  - "bgp peering"
  - "k8s ipam"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Calico CNI Manager

Inspect Project Calico BGP peering, IPAM pools, and global network policies

## Metadata

- **ID:** `calico-cni`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `calico`
- `calico cni`
- `bgp peering`
- `k8s ipam`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('calico-cni', {
  /* input parameters */
});
```
