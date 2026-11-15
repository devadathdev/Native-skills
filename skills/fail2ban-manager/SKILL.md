---
id: fail2ban-manager
name: "Fail2ban Manager"
version: 1.0.0
description: "Inspect fail2ban jail configurations, regex filter definitions, and banned IP lists"
author: "AURA Team"
category: security
tags:
  - "fail2ban"
  - "jail conf"
  - "ban ip"
  - "ssh brute force"
triggers:
  - "fail2ban"
  - "jail conf"
  - "ban ip"
  - "ssh brute force"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Fail2ban Manager

Inspect fail2ban jail configurations, regex filter definitions, and banned IP lists

## Metadata

- **ID:** `fail2ban-manager`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `fail2ban`
- `jail conf`
- `ban ip`
- `ssh brute force`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('fail2ban-manager', {
  /* input parameters */
});
```
