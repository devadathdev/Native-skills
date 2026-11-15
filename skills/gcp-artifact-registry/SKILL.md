---
id: gcp-artifact-registry
name: "GCP Artifact Registry"
version: 1.0.0
description: "Inspect Docker/npm/maven repositories, image tags, and vulnerability scanning"
author: "AURA Team"
category: devops
tags:
  - "artifact registry"
  - "gcp registry"
  - "container registry gcp"
  - "image repo"
triggers:
  - "artifact registry"
  - "gcp registry"
  - "container registry gcp"
  - "image repo"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# GCP Artifact Registry

Inspect Docker/npm/maven repositories, image tags, and vulnerability scanning

## Metadata

- **ID:** `gcp-artifact-registry`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `artifact registry`
- `gcp registry`
- `container registry gcp`
- `image repo`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('gcp-artifact-registry', {
  /* input parameters */
});
```
