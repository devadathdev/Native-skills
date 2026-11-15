---
id: lit-components
name: "Lit Web Components"
version: 1.0.0
description: "Inspect LitElement reactive properties, shadow DOM templates, and custom elements"
author: "AURA Team"
category: development
tags:
  - "lit"
  - "lit element"
  - "web components"
  - "shadow dom"
triggers:
  - "lit"
  - "lit element"
  - "web components"
  - "shadow dom"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Lit Web Components

Inspect LitElement reactive properties, shadow DOM templates, and custom elements

## Metadata

- **ID:** `lit-components`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `lit`
- `lit element`
- `web components`
- `shadow dom`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('lit-components', {
  /* input parameters */
});
```
