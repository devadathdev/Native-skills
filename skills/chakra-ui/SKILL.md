---
id: chakra-ui
name: "Chakra UI Inspector"
version: 1.0.0
description: "Inspect Chakra UI styled system tokens, color modes, and polymorphic components"
author: "AURA Team"
category: development
tags:
  - "chakra"
  - "chakra ui"
  - "styled system"
  - "chakra component"
triggers:
  - "chakra"
  - "chakra ui"
  - "styled system"
  - "chakra component"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Chakra UI Inspector

Inspect Chakra UI styled system tokens, color modes, and polymorphic components

## Metadata

- **ID:** `chakra-ui`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `chakra`
- `chakra ui`
- `styled system`
- `chakra component`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('chakra-ui', {
  /* input parameters */
});
```
