---
id: k8s-pvc-inspector
name: "K8s PVC Inspector"
version: 1.0.0
description: "Inspect PersistentVolumeClaims, storageClasses, accessModes, and capacity"
author: "AURA Team"
category: devops
tags:
  - "pvc"
  - "persistent volume claim"
  - "storageclass"
  - "pvc storage"
triggers:
  - "pvc"
  - "persistent volume claim"
  - "storageclass"
  - "pvc storage"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# K8s PVC Inspector

Inspect PersistentVolumeClaims, storageClasses, accessModes, and capacity

## Metadata

- **ID:** `k8s-pvc-inspector`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `pvc`
- `persistent volume claim`
- `storageclass`
- `pvc storage`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('k8s-pvc-inspector', {
  /* input parameters */
});
```
