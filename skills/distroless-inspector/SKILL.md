---
id: distroless-inspector
name: "Distroless Image Inspector"
version: 1.0.0
description: "Inspect Google Distroless base images, runtime dependencies, and non-root execution"
author: "AURA Team"
category: security
tags:
  - "distroless"
  - "minimal container"
  - "gcr distroless"
  - "no shell image"
triggers:
  - "distroless"
  - "minimal container"
  - "gcr distroless"
  - "no shell image"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Distroless Image Inspector

Inspect Google Distroless base images, runtime dependencies, and non-root execution

## Metadata

- **ID:** `distroless-inspector`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `distroless`
- `minimal container`
- `gcr distroless`
- `no shell image`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('distroless-inspector', {
  /* input parameters */
});
```
