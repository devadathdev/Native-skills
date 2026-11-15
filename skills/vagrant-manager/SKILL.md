---
id: vagrant-manager
name: "Vagrant Manager"
version: 1.0.0
description: "Inspect Vagrantfile machine configurations, virtualbox providers, and synced folders"
author: "AURA Team"
category: devops
tags:
  - "vagrant"
  - "vagrantfile"
  - "virtualbox dev"
  - "vm provision"
triggers:
  - "vagrant"
  - "vagrantfile"
  - "virtualbox dev"
  - "vm provision"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Vagrant Manager

Inspect Vagrantfile machine configurations, virtualbox providers, and synced folders

## Metadata

- **ID:** `vagrant-manager`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `vagrant`
- `vagrantfile`
- `virtualbox dev`
- `vm provision`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('vagrant-manager', {
  /* input parameters */
});
```
