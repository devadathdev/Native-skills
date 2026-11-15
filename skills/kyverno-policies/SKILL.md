---
id: kyverno-policies
name: "Kyverno Policy Engine"
version: 1.0.0
description: "Inspect Kubernetes-native Kyverno validation, mutation, and generation policy CRDs"
author: "AURA Team"
category: security
tags:
  - "kyverno"
  - "k8s policy"
  - "validate policy"
  - "mutate policy"
triggers:
  - "kyverno"
  - "k8s policy"
  - "validate policy"
  - "mutate policy"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Kyverno Policy Engine

Inspect Kubernetes-native Kyverno validation, mutation, and generation policy CRDs

## Metadata

- **ID:** `kyverno-policies`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `kyverno`
- `k8s policy`
- `validate policy`
- `mutate policy`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('kyverno-policies', {
  /* input parameters */
});
```
