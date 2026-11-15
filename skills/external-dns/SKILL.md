---
id: external-dns
name: "ExternalDNS Operator"
version: 1.0.0
description: "Inspect ExternalDNS ingress annotations, DNS provider synchronization, and TXT registry"
author: "AURA Team"
category: devops
tags:
  - "external dns"
  - "k8s dns sync"
  - "ingress dns"
  - "dns record sync"
triggers:
  - "external dns"
  - "k8s dns sync"
  - "ingress dns"
  - "dns record sync"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# ExternalDNS Operator

Inspect ExternalDNS ingress annotations, DNS provider synchronization, and TXT registry

## Metadata

- **ID:** `external-dns`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `external dns`
- `k8s dns sync`
- `ingress dns`
- `dns record sync`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('external-dns', {
  /* input parameters */
});
```
