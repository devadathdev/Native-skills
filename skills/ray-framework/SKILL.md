---
id: ray-framework
name: "Ray Distributed AI"
version: 1.0.0
description: "Inspect Ray actors, remote tasks, Ray Train workers, and cluster head nodes"
author: "AURA Team"
category: ai
tags:
  - "ray"
  - "ray actor"
  - "ray train"
  - "distributed ray"
triggers:
  - "ray"
  - "ray actor"
  - "ray train"
  - "distributed ray"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Ray Distributed AI

Inspect Ray actors, remote tasks, Ray Train workers, and cluster head nodes

## Metadata

- **ID:** `ray-framework`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `ray`
- `ray actor`
- `ray train`
- `distributed ray`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('ray-framework', {
  /* input parameters */
});
```
