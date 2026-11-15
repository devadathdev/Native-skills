---
id: deno-runtime
name: "Deno Runtime"
version: 1.0.0
description: "Inspect Deno permissions, import maps, deno.json configurations, and tasks"
author: "AURA Team"
category: development
tags:
  - "deno"
  - "deno json"
  - "import map"
  - "deno task"
triggers:
  - "deno"
  - "deno json"
  - "import map"
  - "deno task"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Deno Runtime

Inspect Deno permissions, import maps, deno.json configurations, and tasks

## Metadata

- **ID:** `deno-runtime`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `deno`
- `deno json`
- `import map`
- `deno task`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('deno-runtime', {
  /* input parameters */
});
```
