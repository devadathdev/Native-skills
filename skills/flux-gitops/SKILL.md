---
id: flux-gitops
name: "Flux GitOps Controller"
version: 1.0.0
description: "Inspect Flux Kustomization and HelmRelease sources, reconciliation, and status"
author: "AURA Team"
category: devops
tags:
  - "flux"
  - "fluxcd"
  - "kustomization flux"
  - "gitops controller"
triggers:
  - "flux"
  - "fluxcd"
  - "kustomization flux"
  - "gitops controller"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Flux GitOps Controller

Inspect Flux Kustomization and HelmRelease sources, reconciliation, and status

## Metadata

- **ID:** `flux-gitops`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `flux`
- `fluxcd`
- `kustomization flux`
- `gitops controller`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('flux-gitops', {
  /* input parameters */
});
```
