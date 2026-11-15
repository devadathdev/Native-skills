---
id: skaffold-dev
name: "Skaffold Dev"
version: 1.0.0
description: "Inspect skaffold.yaml build artifacts, file sync rules, and deployment pipelines"
author: "AURA Team"
category: devops
tags:
  - "skaffold"
  - "skaffold yaml"
  - "kubernetes dev loop"
  - "skaffold sync"
triggers:
  - "skaffold"
  - "skaffold yaml"
  - "kubernetes dev loop"
  - "skaffold sync"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Skaffold Dev

Inspect skaffold.yaml build artifacts, file sync rules, and deployment pipelines

## Metadata

- **ID:** `skaffold-dev`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `skaffold`
- `skaffold yaml`
- `kubernetes dev loop`
- `skaffold sync`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('skaffold-dev', {
  /* input parameters */
});
```
