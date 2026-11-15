---
id: cilium-ebpf-network
name: "Cilium eBPF Network"
version: 1.0.0
description: "Inspect Cilium eBPF network routing, CiliumNetworkPolicy, and Hubble observability"
author: "AURA Team"
category: devops
tags:
  - "cilium"
  - "ebpf network"
  - "hubble"
  - "cilium network policy"
triggers:
  - "cilium"
  - "ebpf network"
  - "hubble"
  - "cilium network policy"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Cilium eBPF Network

Inspect Cilium eBPF network routing, CiliumNetworkPolicy, and Hubble observability

## Metadata

- **ID:** `cilium-ebpf-network`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `cilium`
- `ebpf network`
- `hubble`
- `cilium network policy`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('cilium-ebpf-network', {
  /* input parameters */
});
```
