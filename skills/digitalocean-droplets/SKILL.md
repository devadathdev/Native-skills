---
id: digitalocean-droplets
name: "DigitalOcean Manager"
version: 1.0.0
description: "Inspect Droplets, managed Kubernetes (DOKS), Spaces object storage, and firewalls"
author: "AURA Team"
category: devops
tags:
  - "digitalocean"
  - "droplet"
  - "doks"
  - "do spaces"
triggers:
  - "digitalocean"
  - "droplet"
  - "doks"
  - "do spaces"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# DigitalOcean Manager

Inspect Droplets, managed Kubernetes (DOKS), Spaces object storage, and firewalls

## Metadata

- **ID:** `digitalocean-droplets`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `digitalocean`
- `droplet`
- `doks`
- `do spaces`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('digitalocean-droplets', {
  /* input parameters */
});
```
