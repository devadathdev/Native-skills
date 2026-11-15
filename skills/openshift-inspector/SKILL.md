---
id: openshift-inspector
name: "Red Hat OpenShift"
version: 1.0.0
description: "Inspect OpenShift Route objects, SecurityContextConstraints (SCC), and BuildConfig"
author: "AURA Team"
category: devops
tags:
  - "openshift"
  - "oc route"
  - "scc openshift"
  - "buildconfig"
triggers:
  - "openshift"
  - "oc route"
  - "scc openshift"
  - "buildconfig"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Red Hat OpenShift

Inspect OpenShift Route objects, SecurityContextConstraints (SCC), and BuildConfig

## Metadata

- **ID:** `openshift-inspector`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `openshift`
- `oc route`
- `scc openshift`
- `buildconfig`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('openshift-inspector', {
  /* input parameters */
});
```
