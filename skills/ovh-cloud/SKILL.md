---
id: ovh-cloud
name: "OVHcloud Manager"
version: 1.0.0
description: "Inspect OVHcloud public cloud instances, dedicated servers, and OpenStack projects"
author: "AURA Team"
category: devops
tags:
  - "ovh"
  - "ovhcloud"
  - "dedicated server"
  - "openstack ovh"
triggers:
  - "ovh"
  - "ovhcloud"
  - "dedicated server"
  - "openstack ovh"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# OVHcloud Manager

Inspect OVHcloud public cloud instances, dedicated servers, and OpenStack projects

## Metadata

- **ID:** `ovh-cloud`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `ovh`
- `ovhcloud`
- `dedicated server`
- `openstack ovh`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('ovh-cloud', {
  /* input parameters */
});
```
