---
id: minikube-manager
name: "Minikube Manager"
version: 1.0.0
description: "Inspect Minikube local cluster profile, addons, driver configurations, and IP"
author: "AURA Team"
category: devops
tags:
  - "minikube"
  - "minikube cluster"
  - "local k8s"
  - "minikube addon"
triggers:
  - "minikube"
  - "minikube cluster"
  - "local k8s"
  - "minikube addon"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Minikube Manager

Inspect Minikube local cluster profile, addons, driver configurations, and IP

## Metadata

- **ID:** `minikube-manager`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `minikube`
- `minikube cluster`
- `local k8s`
- `minikube addon`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('minikube-manager', {
  /* input parameters */
});
```
