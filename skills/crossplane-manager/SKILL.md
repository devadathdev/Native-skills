---
id: crossplane-manager
name: "Crossplane Manager"
version: 1.0.0
description: "Inspect Crossplane Composite Resource Definitions (XRDs) and Compositions"
author: "AURA Team"
category: devops
tags:
  - "crossplane"
  - "universal control plane"
  - "xrd"
  - "composition crd"
triggers:
  - "crossplane"
  - "universal control plane"
  - "xrd"
  - "composition crd"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Crossplane Manager

Inspect Crossplane Composite Resource Definitions (XRDs) and Compositions

## Metadata

- **ID:** `crossplane-manager`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `crossplane`
- `universal control plane`
- `xrd`
- `composition crd`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('crossplane-manager', {
  /* input parameters */
});
```
