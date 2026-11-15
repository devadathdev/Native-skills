---
id: kube-hunter
name: "Kube-Hunter"
version: 1.0.0
description: "Inspect kube-hunter Kubernetes cluster penetration testing probes and passive scans"
author: "AURA Team"
category: security
tags:
  - "kube hunter"
  - "k8s penetration test"
  - "cluster hunter"
  - "k8s exploit"
triggers:
  - "kube hunter"
  - "k8s penetration test"
  - "cluster hunter"
  - "k8s exploit"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Kube-Hunter

Inspect kube-hunter Kubernetes cluster penetration testing probes and passive scans

## Metadata

- **ID:** `kube-hunter`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `kube hunter`
- `k8s penetration test`
- `cluster hunter`
- `k8s exploit`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('kube-hunter', {
  /* input parameters */
});
```
