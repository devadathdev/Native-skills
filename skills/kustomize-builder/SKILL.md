---
id: kustomize-builder
name: "Kustomize Builder"
version: 1.0.0
description: "Inspect kustomization.yaml overlays, patches, resource bases, and configMapGenerators"
author: "AURA Team"
category: devops
tags:
  - "kustomize"
  - "kustomization yaml"
  - "overlay patch"
  - "k8s kustomize"
triggers:
  - "kustomize"
  - "kustomization yaml"
  - "overlay patch"
  - "k8s kustomize"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Kustomize Builder

Inspect kustomization.yaml overlays, patches, resource bases, and configMapGenerators

## Metadata

- **ID:** `kustomize-builder`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `kustomize`
- `kustomization yaml`
- `overlay patch`
- `k8s kustomize`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('kustomize-builder', {
  /* input parameters */
});
```
