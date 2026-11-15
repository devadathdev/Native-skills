---
id: azure-virtual-network
name: "Azure VNet Manager"
version: 1.0.0
description: "Inspect Azure Virtual Networks, subnet delegations, NSG rules, and VNet peering"
author: "AURA Team"
category: devops
tags:
  - "azure vnet"
  - "vnet peering"
  - "network security group"
  - "nsg rule"
triggers:
  - "azure vnet"
  - "vnet peering"
  - "network security group"
  - "nsg rule"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Azure VNet Manager

Inspect Azure Virtual Networks, subnet delegations, NSG rules, and VNet peering

## Metadata

- **ID:** `azure-virtual-network`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `azure vnet`
- `vnet peering`
- `network security group`
- `nsg rule`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('azure-virtual-network', {
  /* input parameters */
});
```
