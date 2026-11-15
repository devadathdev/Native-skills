---
id: luigi-pipelines
name: "Spotify Luigi"
version: 1.0.0
description: "Inspect Luigi pipeline tasks, target requirements, and output completion checks"
author: "AURA Team"
category: data
tags:
  - "luigi"
  - "spotify luigi"
  - "luigi task"
  - "pipeline dependency"
triggers:
  - "luigi"
  - "spotify luigi"
  - "luigi task"
  - "pipeline dependency"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Spotify Luigi

Inspect Luigi pipeline tasks, target requirements, and output completion checks

## Metadata

- **ID:** `luigi-pipelines`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `luigi`
- `spotify luigi`
- `luigi task`
- `pipeline dependency`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('luigi-pipelines', {
  /* input parameters */
});
```
