---
id: localization
name: "Localization"
version: 1.0.0
description: "Extract, manage, and translate localization strings across target locales"
author: "AURA Team"
category: development
tags:
  - "translate app"
  - "localization"
  - "i18n"
  - "l10n"
  - "locale"
triggers:
  - "translate app"
  - "localization"
  - "i18n"
  - "l10n"
  - "locale"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Localization

Extract, manage, and translate localization strings across target locales

## Metadata

- **ID:** `localization`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `translate app`
- `localization`
- `i18n`
- `l10n`
- `locale`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('localization', {
  /* input parameters */
});
```
