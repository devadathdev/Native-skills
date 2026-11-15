---
id: htmx-inspector
name: "HTMX Inspector"
version: 1.0.0
description: "Inspect hx-get, hx-post, hx-target, and hx-swap AJAX attribute declarations"
author: "AURA Team"
category: development
tags:
  - "htmx"
  - "hx-get"
  - "hx-post"
  - "hx-swap"
  - "html over wire"
triggers:
  - "htmx"
  - "hx-get"
  - "hx-post"
  - "hx-swap"
  - "html over wire"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# HTMX Inspector

Inspect hx-get, hx-post, hx-target, and hx-swap AJAX attribute declarations

## Metadata

- **ID:** `htmx-inspector`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `htmx`
- `hx-get`
- `hx-post`
- `hx-swap`
- `html over wire`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('htmx-inspector', {
  /* input parameters */
});
```
