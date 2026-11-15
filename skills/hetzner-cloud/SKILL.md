---
id: hetzner-cloud
name: "Hetzner Cloud Manager"
version: 1.0.0
description: "Inspect Hetzner cloud servers, networks, volumes, and placement groups"
author: "AURA Team"
category: devops
tags:
  - "hetzner"
  - "hcloud"
  - "hetzner server"
  - "hetzner cloud"
triggers:
  - "hetzner"
  - "hcloud"
  - "hetzner server"
  - "hetzner cloud"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Hetzner Cloud Manager

Inspect Hetzner cloud servers, networks, volumes, and placement groups

## Metadata

- **ID:** `hetzner-cloud`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `hetzner`
- `hcloud`
- `hetzner server`
- `hetzner cloud`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('hetzner-cloud', {
  /* input parameters */
});
```
