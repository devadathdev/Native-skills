---
id: gcp-cloud-build
name: "Google Cloud Build"
version: 1.0.0
description: "Inspect cloudbuild.yaml step declarations, build triggers, and build substitutions"
author: "AURA Team"
category: devops
tags:
  - "cloud build"
  - "gcp build"
  - "cloudbuild yaml"
  - "build trigger"
triggers:
  - "cloud build"
  - "gcp build"
  - "cloudbuild yaml"
  - "build trigger"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Google Cloud Build

Inspect cloudbuild.yaml step declarations, build triggers, and build substitutions

## Metadata

- **ID:** `gcp-cloud-build`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `cloud build`
- `gcp build`
- `cloudbuild yaml`
- `build trigger`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('gcp-cloud-build', {
  /* input parameters */
});
```
