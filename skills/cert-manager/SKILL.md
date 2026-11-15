---
id: cert-manager
name: "Cert-Manager"
version: 1.0.0
description: "Inspect Kubernetes ClusterIssuer, Certificate CRDs, and Let's Encrypt ACME challenges"
author: "AURA Team"
category: security
tags:
  - "cert manager"
  - "clusterissuer"
  - "k8s certificate"
  - "lets encrypt cert"
triggers:
  - "cert manager"
  - "clusterissuer"
  - "k8s certificate"
  - "lets encrypt cert"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Cert-Manager

Inspect Kubernetes ClusterIssuer, Certificate CRDs, and Let's Encrypt ACME challenges

## Metadata

- **ID:** `cert-manager`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `cert manager`
- `clusterissuer`
- `k8s certificate`
- `lets encrypt cert`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('cert-manager', {
  /* input parameters */
});
```
