---
id: cri-o-inspector
name: "CRI-O Runtime Inspector"
version: 1.0.0
description: "Inspect OCI-compliant CRI-O container runtime configuration and cgroups v2"
author: "AURA Team"
category: devops
tags:
  - "crio"
  - "cri-o"
  - "cgroups v2"
  - "kubernetes cri"
triggers:
  - "crio"
  - "cri-o"
  - "cgroups v2"
  - "kubernetes cri"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# CRI-O Runtime Inspector

Inspect OCI-compliant CRI-O container runtime configuration and cgroups v2

## Metadata

- **ID:** `cri-o-inspector`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `crio`
- `cri-o`
- `cgroups v2`
- `kubernetes cri`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('cri-o-inspector', {
  /* input parameters */
});
```
