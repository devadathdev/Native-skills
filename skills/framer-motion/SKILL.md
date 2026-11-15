---
id: framer-motion
name: "Framer Motion"
version: 1.0.0
description: "Inspect layout animations, variants, gesture recognition, and spring physics"
author: "AURA Team"
category: development
tags:
  - "framer motion"
  - "motion div"
  - "react animation"
  - "layout animation"
triggers:
  - "framer motion"
  - "motion div"
  - "react animation"
  - "layout animation"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Framer Motion

Inspect layout animations, variants, gesture recognition, and spring physics

## Metadata

- **ID:** `framer-motion`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `framer motion`
- `motion div`
- `react animation`
- `layout animation`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('framer-motion', {
  /* input parameters */
});
```
