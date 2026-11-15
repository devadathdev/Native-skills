---
id: responsive-preview
name: "Responsive Viewport Preview"
version: 1.0.0
description: "Audit CSS breakpoints and layout behaviors across mobile, tablet, and desktop form factors"
author: "AURA Team"
category: development
tags:
  - "responsive"
  - "viewport"
  - "mobile preview"
  - "tablet preview"
  - "media query"
triggers:
  - "responsive"
  - "viewport"
  - "mobile preview"
  - "tablet preview"
  - "media query"
permissions:
  - type: api
    scope: [viewport]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Responsive Viewport Preview

Audit CSS breakpoints and layout behaviors across mobile, tablet, and desktop form factors

## Metadata

- **ID:** `responsive-preview`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `viewport`)

## Triggers

- `responsive`
- `viewport`
- `mobile preview`
- `tablet preview`
- `media query`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('responsive-preview', {
  /* input parameters */
});
```
