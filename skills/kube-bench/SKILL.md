---
id: kube-bench
name: "Kube-Bench CIS Benchmark"
version: 1.0.0
description: "Inspect CIS Kubernetes benchmark audit results and node/master remediation steps"
author: "AURA Team"
category: security
tags:
  - "kube bench"
  - "cis benchmark"
  - "k8s security audit"
  - "node hardening"
triggers:
  - "kube bench"
  - "cis benchmark"
  - "k8s security audit"
  - "node hardening"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Kube-Bench CIS Benchmark

Inspect CIS Kubernetes benchmark audit results and node/master remediation steps

## Metadata

- **ID:** `kube-bench`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `kube bench`
- `cis benchmark`
- `k8s security audit`
- `node hardening`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('kube-bench', {
  /* input parameters */
});
```
