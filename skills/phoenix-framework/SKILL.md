---
id: phoenix-framework
name: "Elixir Phoenix"
version: 1.0.0
description: "Inspect Phoenix LiveView components, channels, pubsub, and Ecto schemas"
author: "AURA Team"
category: development
tags:
  - "phoenix"
  - "liveview"
  - "elixir phoenix"
  - "ecto schema"
triggers:
  - "phoenix"
  - "liveview"
  - "elixir phoenix"
  - "ecto schema"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Elixir Phoenix

Inspect Phoenix LiveView components, channels, pubsub, and Ecto schemas

## Metadata

- **ID:** `phoenix-framework`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `phoenix`
- `liveview`
- `elixir phoenix`
- `ecto schema`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('phoenix-framework', {
  /* input parameters */
});
```
