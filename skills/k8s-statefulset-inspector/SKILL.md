---
id: k8s-statefulset-inspector
name: "K8s StatefulSet Inspector"
version: 1.0.0
description: "Inspect StatefulSet ordinal indices, volumeClaimTemplates, and headless service"
author: "AURA Team"
category: devops
tags:
  - "statefulset"
  - "volumeclaimtemplate"
  - "headless service"
  - "stateful pod"
triggers:
  - "statefulset"
  - "volumeclaimtemplate"
  - "headless service"
  - "stateful pod"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# K8s StatefulSet Inspector

Inspect StatefulSet ordinal indices, volumeClaimTemplates, and headless service

## Metadata

- **ID:** `k8s-statefulset-inspector`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `statefulset`
- `volumeclaimtemplate`
- `headless service`
- `stateful pod`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('k8s-statefulset-inspector', {
  /* input parameters */
});
```
