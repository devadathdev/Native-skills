---
id: selinux-contexts
name: "SELinux Contexts"
version: 1.0.0
description: "Inspect SELinux user, role, type, and level context labels on files and processes"
author: "AURA Team"
category: security
tags:
  - "selinux"
  - "semanage"
  - "chcon"
  - "security context label"
triggers:
  - "selinux"
  - "semanage"
  - "chcon"
  - "security context label"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# SELinux Contexts

Inspect SELinux user, role, type, and level context labels on files and processes

## Metadata

- **ID:** `selinux-contexts`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `selinux`
- `semanage`
- `chcon`
- `security context label`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('selinux-contexts', {
  /* input parameters */
});
```
