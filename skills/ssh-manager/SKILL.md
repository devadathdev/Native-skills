---
id: ssh-manager
name: "SSH Manager"
version: 1.0.0
description: "Inspect SSH client configurations, bastion jump hosts, and validate public key fingerprints"
author: "AURA Team"
category: integration
tags:
  - "ssh"
  - "ssh config"
  - "bastion host"
  - "ssh key"
  - "authorized keys"
triggers:
  - "ssh"
  - "ssh config"
  - "bastion host"
  - "ssh key"
  - "authorized keys"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# SSH Manager

Inspect SSH client configurations, bastion jump hosts, and validate public key fingerprints

## Metadata

- **ID:** `ssh-manager`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `ssh`
- `ssh config`
- `bastion host`
- `ssh key`
- `authorized keys`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('ssh-manager', {
  /* input parameters */
});
```
