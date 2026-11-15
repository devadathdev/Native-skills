---
id: coredns-config
name: "CoreDNS Config"
version: 1.0.0
description: "Inspect Corefile plugins (kubernetes, forward, cache, rewrite) and error policies"
author: "AURA Team"
category: devops
tags:
  - "coredns"
  - "corefile"
  - "k8s dns"
  - "dns plugin"
triggers:
  - "coredns"
  - "corefile"
  - "k8s dns"
  - "dns plugin"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# CoreDNS Config

Inspect Corefile plugins (kubernetes, forward, cache, rewrite) and error policies

## Metadata

- **ID:** `coredns-config`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `coredns`
- `corefile`
- `k8s dns`
- `dns plugin`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('coredns-config', {
  /* input parameters */
});
```
