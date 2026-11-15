---
id: dvc-versioning
name: "Data Version Control (DVC)"
version: 1.0.0
description: "Inspect dvc.yaml pipeline stages, .dvc tracking pointers, and remote data remotes"
author: "AURA Team"
category: data
tags:
  - "dvc"
  - "data version control"
  - "dvc pipeline"
  - "dvc repro"
triggers:
  - "dvc"
  - "data version control"
  - "dvc pipeline"
  - "dvc repro"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Data Version Control (DVC)

Inspect dvc.yaml pipeline stages, .dvc tracking pointers, and remote data remotes

## Metadata

- **ID:** `dvc-versioning`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `dvc`
- `data version control`
- `dvc pipeline`
- `dvc repro`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('dvc-versioning', {
  /* input parameters */
});
```
