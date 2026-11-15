---
id: drone-ci
name: "Drone CI Inspector"
version: 1.0.0
description: "Inspect .drone.yml container pipeline steps, volume mounts, and secret bindings"
author: "AURA Team"
category: devops
tags:
  - "drone ci"
  - "drone pipeline"
  - "drone yml"
  - "container pipeline"
triggers:
  - "drone ci"
  - "drone pipeline"
  - "drone yml"
  - "container pipeline"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Drone CI Inspector

Inspect .drone.yml container pipeline steps, volume mounts, and secret bindings

## Metadata

- **ID:** `drone-ci`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `drone ci`
- `drone pipeline`
- `drone yml`
- `container pipeline`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('drone-ci', {
  /* input parameters */
});
```
