---
id: k8s-pdb-inspector
name: "K8s PodDisruptionBudget"
version: 1.0.0
description: "Inspect PodDisruptionBudget minAvailable and maxUnavailable safety parameters"
author: "AURA Team"
category: devops
tags:
  - "pdb"
  - "pod disruption budget"
  - "minavailable"
  - "node drain safety"
triggers:
  - "pdb"
  - "pod disruption budget"
  - "minavailable"
  - "node drain safety"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# K8s PodDisruptionBudget

Inspect PodDisruptionBudget minAvailable and maxUnavailable safety parameters

## Metadata

- **ID:** `k8s-pdb-inspector`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `pdb`
- `pod disruption budget`
- `minavailable`
- `node drain safety`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('k8s-pdb-inspector', {
  /* input parameters */
});
```
