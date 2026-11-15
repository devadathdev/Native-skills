---
id: ssh-ca-manager
name: "SSH Certificate Authority"
version: 1.0.0
description: "Generate and sign short-lived user and host SSH certificates with principals"
author: "AURA Team"
category: security
tags:
  - "ssh ca"
  - "ssh certificate"
  - "signed ssh key"
  - "short lived cert"
triggers:
  - "ssh ca"
  - "ssh certificate"
  - "signed ssh key"
  - "short lived cert"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# SSH Certificate Authority

Generate and sign short-lived user and host SSH certificates with principals

## Metadata

- **ID:** `ssh-ca-manager`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `ssh ca`
- `ssh certificate`
- `signed ssh key`
- `short lived cert`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('ssh-ca-manager', {
  /* input parameters */
});
```
