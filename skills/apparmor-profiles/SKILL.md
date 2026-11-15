---
id: apparmor-profiles
name: "AppArmor Profiles"
version: 1.0.0
description: "Inspect AppArmor security profile paths, capabilities, and enforce/complain modes"
author: "AURA Team"
category: security
tags:
  - "apparmor"
  - "security profile"
  - "linux capability"
  - "enforce mode"
triggers:
  - "apparmor"
  - "security profile"
  - "linux capability"
  - "enforce mode"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# AppArmor Profiles

Inspect AppArmor security profile paths, capabilities, and enforce/complain modes

## Metadata

- **ID:** `apparmor-profiles`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `apparmor`
- `security profile`
- `linux capability`
- `enforce mode`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('apparmor-profiles', {
  /* input parameters */
});
```
