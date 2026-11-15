---
id: tilt-dev
name: "Tilt Local Dev"
version: 1.0.0
description: "Inspect Tiltfile live reload configurations, port forwards, and container rebuilds"
author: "AURA Team"
category: devops
tags:
  - "tilt"
  - "tiltfile"
  - "local kubernetes dev"
  - "live reload k8s"
triggers:
  - "tilt"
  - "tiltfile"
  - "local kubernetes dev"
  - "live reload k8s"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Tilt Local Dev

Inspect Tiltfile live reload configurations, port forwards, and container rebuilds

## Metadata

- **ID:** `tilt-dev`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `tilt`
- `tiltfile`
- `local kubernetes dev`
- `live reload k8s`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('tilt-dev', {
  /* input parameters */
});
```
