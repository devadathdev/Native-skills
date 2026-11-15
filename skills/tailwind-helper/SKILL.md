---
id: tailwind-helper
name: "Tailwind CSS Helper"
version: 1.0.0
description: "Inspect, validate, and optimize Tailwind CSS utility classes and design tokens"
author: "AURA Team"
category: development
tags:
  - "tailwind"
  - "tailwind css"
  - "utility classes"
  - "css purge"
  - "tailwind config"
triggers:
  - "tailwind"
  - "tailwind css"
  - "utility classes"
  - "css purge"
  - "tailwind config"
permissions:
  - type: filesystem
    scope: [read]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Tailwind CSS Helper

Inspect, validate, and optimize Tailwind CSS utility classes and design tokens

## Metadata

- **ID:** `tailwind-helper`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read`)

## Triggers

- `tailwind`
- `tailwind css`
- `utility classes`
- `css purge`
- `tailwind config`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('tailwind-helper', {
  /* input parameters */
});
```
