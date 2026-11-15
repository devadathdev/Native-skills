---
id: gcp-vpc-network
name: "Google Cloud VPC"
version: 1.0.0
description: "Inspect GCP VPC networks, custom subnets, Cloud NAT, and firewall rules"
author: "AURA Team"
category: devops
tags:
  - "gcp vpc"
  - "cloud nat"
  - "gcp firewall"
  - "vpc network"
triggers:
  - "gcp vpc"
  - "cloud nat"
  - "gcp firewall"
  - "vpc network"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Google Cloud VPC

Inspect GCP VPC networks, custom subnets, Cloud NAT, and firewall rules

## Metadata

- **ID:** `gcp-vpc-network`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `gcp vpc`
- `cloud nat`
- `gcp firewall`
- `vpc network`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('gcp-vpc-network', {
  /* input parameters */
});
```
