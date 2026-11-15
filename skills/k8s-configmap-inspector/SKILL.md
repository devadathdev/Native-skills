---
id: k8s-configmap-inspector
name: "K8s ConfigMap Inspector"
version: 1.0.0
description: "Inspect Kubernetes ConfigMap key-value pairs, binary data, and mount paths"
author: "AURA Team"
category: devops
tags:
  - "k8s configmap"
  - "configmap"
  - "config map k8s"
  - "volume mount config"
triggers:
  - "k8s configmap"
  - "configmap"
  - "config map k8s"
  - "volume mount config"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# K8s ConfigMap Inspector

Inspect Kubernetes ConfigMap key-value pairs, binary data, and mount paths

## Metadata

- **ID:** `k8s-configmap-inspector`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `k8s configmap`
- `configmap`
- `config map k8s`
- `volume mount config`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('k8s-configmap-inspector', {
  /* input parameters */
});
```
