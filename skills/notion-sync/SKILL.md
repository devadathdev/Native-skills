---
id: notion-sync
name: "Notion Sync"
version: 1.0.0
description: "Construct Notion block structures, database page properties, and markdown page exports"
author: "AURA Team"
category: productivity
tags:
  - "notion"
  - "notion page"
  - "notion database"
  - "notion block"
  - "sync notion"
triggers:
  - "notion"
  - "notion page"
  - "notion database"
  - "notion block"
  - "sync notion"
permissions:
  - type: api
    scope: [notion]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Notion Sync

Construct Notion block structures, database page properties, and markdown page exports

## Metadata

- **ID:** `notion-sync`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `notion`)

## Triggers

- `notion`
- `notion page`
- `notion database`
- `notion block`
- `sync notion`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('notion-sync', {
  /* input parameters */
});
```
