---
id: ingress-controller
name: "Ingress Controller"
version: 1.0.0
description: "Inspect Kubernetes Ingress resource rules, TLS hosts, and annotations (Nginx/Traefik)"
author: "AURA Team"
category: devops
tags:
  - "ingress"
  - "k8s ingress"
  - "ingress rule"
  - "ingress tls"
triggers:
  - "ingress"
  - "k8s ingress"
  - "ingress rule"
  - "ingress tls"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Ingress Controller

Inspect Kubernetes Ingress resource rules, TLS hosts, and annotations (Nginx/Traefik)

## Metadata

- **ID:** `ingress-controller`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `ingress`
- `k8s ingress`
- `ingress rule`
- `ingress tls`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('ingress-controller', {
  /* input parameters */
});
```
