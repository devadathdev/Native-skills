---
id: tailwind-v4
name: "Tailwind CSS v4 Engine"
version: 1.0.0
description: "Inspect Tailwind CSS v4 CSS-first configuration, theme variables, and imports"
author: "AURA Team"
category: development
tags:
  - "tailwind v4"
  - "css theme"
  - "tailwind engine"
  - "modern tailwind"
triggers:
  - "tailwind v4"
  - "css theme"
  - "tailwind engine"
  - "modern tailwind"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Tailwind CSS v4 Engine

Inspect Tailwind CSS v4 CSS-first configuration, theme variables, and imports

## Metadata

- **ID:** `tailwind-v4`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `tailwind v4`
- `css theme`
- `tailwind engine`
- `modern tailwind`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('tailwind-v4', {
  /* input parameters */
});
```
