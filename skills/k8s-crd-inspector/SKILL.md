---
id: k8s-crd-inspector
name: "K8s CRD Inspector"
version: 1.0.0
description: "Inspect CustomResourceDefinitions, OpenAPI v3 schema validation, and versions"
author: "AURA Team"
category: devops
tags:
  - "crd"
  - "custom resource definition"
  - "k8s crd"
  - "crd schema"
triggers:
  - "crd"
  - "custom resource definition"
  - "k8s crd"
  - "crd schema"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# K8s CRD Inspector

Inspect CustomResourceDefinitions, OpenAPI v3 schema validation, and versions

## Metadata

- **ID:** `k8s-crd-inspector`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `crd`
- `custom resource definition`
- `k8s crd`
- `crd schema`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('k8s-crd-inspector', {
  /* input parameters */
});
```
