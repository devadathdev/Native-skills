---
id: argo-cd-manager
name: "Argo CD GitOps"
version: 1.0.0
description: "Inspect Argo CD Application manifests, sync policies, automated prune, and health"
author: "AURA Team"
category: devops
tags:
  - "argocd"
  - "argo cd"
  - "gitops"
  - "argo application"
  - "gitops sync"
triggers:
  - "argocd"
  - "argo cd"
  - "gitops"
  - "argo application"
  - "gitops sync"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Argo CD GitOps

Inspect Argo CD Application manifests, sync policies, automated prune, and health

## Metadata

- **ID:** `argo-cd-manager`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `argocd`
- `argo cd`
- `gitops`
- `argo application`
- `gitops sync`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('argo-cd-manager', {
  /* input parameters */
});
```
