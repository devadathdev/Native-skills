---
id: k8s-daemonset-inspector
name: "K8s DaemonSet Inspector"
version: 1.0.0
description: "Inspect DaemonSet nodeSelector, tolerations, and updateStrategy"
author: "AURA Team"
category: devops
tags:
  - "daemonset"
  - "k8s daemonset"
  - "node tolerations"
  - "system pod"
triggers:
  - "daemonset"
  - "k8s daemonset"
  - "node tolerations"
  - "system pod"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# K8s DaemonSet Inspector

Inspect DaemonSet nodeSelector, tolerations, and updateStrategy

## Metadata

- **ID:** `k8s-daemonset-inspector`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `daemonset`
- `k8s daemonset`
- `node tolerations`
- `system pod`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('k8s-daemonset-inspector', {
  /* input parameters */
});
```
