---
id: containerd-inspector
name: "Containerd Inspector"
version: 1.0.0
description: "Inspect containerd namespaces, images, tasks, and ctr/nerdctl commands"
author: "AURA Team"
category: devops
tags:
  - "containerd"
  - "ctr"
  - "nerdctl"
  - "container runtime"
triggers:
  - "containerd"
  - "ctr"
  - "nerdctl"
  - "container runtime"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Containerd Inspector

Inspect containerd namespaces, images, tasks, and ctr/nerdctl commands

## Metadata

- **ID:** `containerd-inspector`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `containerd`
- `ctr`
- `nerdctl`
- `container runtime`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('containerd-inspector', {
  /* input parameters */
});
```
