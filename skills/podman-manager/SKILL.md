---
id: podman-manager
name: "Podman Manager"
version: 1.0.0
description: "Inspect rootless Podman pods, container execution, and Quadlet systemd files"
author: "AURA Team"
category: devops
tags:
  - "podman"
  - "rootless container"
  - "podman pod"
  - "quadlet"
triggers:
  - "podman"
  - "rootless container"
  - "podman pod"
  - "quadlet"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Podman Manager

Inspect rootless Podman pods, container execution, and Quadlet systemd files

## Metadata

- **ID:** `podman-manager`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `podman`
- `rootless container`
- `podman pod`
- `quadlet`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('podman-manager', {
  /* input parameters */
});
```
