---
id: accessibility
name: "Accessibility"
version: 1.0.0
description: "Audit HTML documents and components against WCAG accessibility rules"
author: "AURA Team"
category: development
tags:
  - "accessibility"
  - "a11y"
  - "wcag"
  - "screen reader"
  - "aria"
triggers:
  - "accessibility"
  - "a11y"
  - "wcag"
  - "screen reader"
  - "aria"
permissions:
  - type: filesystem
    scope: [read]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Accessibility

Audit HTML documents and components against WCAG accessibility rules

## Metadata

- **ID:** `accessibility`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read`)

## Triggers

- `accessibility`
- `a11y`
- `wcag`
- `screen reader`
- `aria`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('accessibility', {
  /* input parameters */
});
```
