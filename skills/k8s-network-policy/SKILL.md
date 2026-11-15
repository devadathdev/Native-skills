---
id: k8s-network-policy
name: "K8s NetworkPolicy"
version: 1.0.0
description: "Inspect Kubernetes NetworkPolicy ingress/egress CIDR blocks, podSelectors, and ports"
author: "AURA Team"
category: security
tags:
  - "networkpolicy"
  - "k8s network policy"
  - "pod isolation"
  - "egress policy"
triggers:
  - "networkpolicy"
  - "k8s network policy"
  - "pod isolation"
  - "egress policy"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# K8s NetworkPolicy

Inspect Kubernetes NetworkPolicy ingress/egress CIDR blocks, podSelectors, and ports

## Metadata

- **ID:** `k8s-network-policy`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `networkpolicy`
- `k8s network policy`
- `pod isolation`
- `egress policy`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('k8s-network-policy', {
  /* input parameters */
});
```
