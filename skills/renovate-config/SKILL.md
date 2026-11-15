---
id: renovate-config
name: "Renovate Config"
version: 1.0.0
description: "Inspect renovate.json grouping rules, automerge conditions, and scheduling"
author: "AURA Team"
category: security
tags:
  - "renovate"
  - "renovate json"
  - "dependency bot"
  - "automerge renovate"
triggers:
  - "renovate"
  - "renovate json"
  - "dependency bot"
  - "automerge renovate"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Renovate Config

Inspect renovate.json grouping rules, automerge conditions, and scheduling

## Metadata

- **ID:** `renovate-config`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `renovate`
- `renovate json`
- `dependency bot`
- `automerge renovate`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('renovate-config', {
  /* input parameters */
});
```
