---
id: k8s-secret-inspector
name: "K8s Secret Inspector"
version: 1.0.0
description: "Inspect Kubernetes Secret metadata, types (Opaque, tls, dockerconfig), and mount paths"
author: "AURA Team"
category: security
tags:
  - "k8s secret"
  - "opaque secret"
  - "tls secret"
  - "k8s secret type"
triggers:
  - "k8s secret"
  - "opaque secret"
  - "tls secret"
  - "k8s secret type"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# K8s Secret Inspector

Inspect Kubernetes Secret metadata, types (Opaque, tls, dockerconfig), and mount paths

## Metadata

- **ID:** `k8s-secret-inspector`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `k8s secret`
- `opaque secret`
- `tls secret`
- `k8s secret type`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('k8s-secret-inspector', {
  /* input parameters */
});
```
