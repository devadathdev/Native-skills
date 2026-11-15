---
id: dependabot-config
name: "Dependabot Config"
version: 1.0.0
description: "Inspect .github/dependabot.yml update schedules, package ecosystems, and commit prefixes"
author: "AURA Team"
category: security
tags:
  - "dependabot"
  - "dependabot yml"
  - "automated dependency updates"
triggers:
  - "dependabot"
  - "dependabot yml"
  - "automated dependency updates"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Dependabot Config

Inspect .github/dependabot.yml update schedules, package ecosystems, and commit prefixes

## Metadata

- **ID:** `dependabot-config`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `dependabot`
- `dependabot yml`
- `automated dependency updates`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('dependabot-config', {
  /* input parameters */
});
```
