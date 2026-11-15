---
id: helmfile-deployer
name: "Helmfile Deployer"
version: 1.0.0
description: "Inspect helmfile.yaml release dependencies, environment values, and hooks"
author: "AURA Team"
category: devops
tags:
  - "helmfile"
  - "helmfile yaml"
  - "multi helm"
  - "helmfile diff"
triggers:
  - "helmfile"
  - "helmfile yaml"
  - "multi helm"
  - "helmfile diff"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Helmfile Deployer

Inspect helmfile.yaml release dependencies, environment values, and hooks

## Metadata

- **ID:** `helmfile-deployer`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `helmfile`
- `helmfile yaml`
- `multi helm`
- `helmfile diff`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('helmfile-deployer', {
  /* input parameters */
});
```
