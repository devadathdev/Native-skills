---
id: rancher-manager
name: "Rancher Manager"
version: 1.0.0
description: "Inspect Rancher cluster provisioning, multi-cluster management, and fleet GitOps"
author: "AURA Team"
category: devops
tags:
  - "rancher"
  - "rancher cluster"
  - "multi cluster"
  - "fleet gitops"
triggers:
  - "rancher"
  - "rancher cluster"
  - "multi cluster"
  - "fleet gitops"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Rancher Manager

Inspect Rancher cluster provisioning, multi-cluster management, and fleet GitOps

## Metadata

- **ID:** `rancher-manager`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `rancher`
- `rancher cluster`
- `multi cluster`
- `fleet gitops`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('rancher-manager', {
  /* input parameters */
});
```
