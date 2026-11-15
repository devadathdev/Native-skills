---
id: typesense-client
name: "Typesense Client"
version: 1.0.0
description: "Inspect Typesense typo-tolerant search collections, schema definitions, and facets"
author: "AURA Team"
category: web
tags:
  - "typesense"
  - "typo tolerant search"
  - "instant search"
  - "typesense collection"
triggers:
  - "typesense"
  - "typo tolerant search"
  - "instant search"
  - "typesense collection"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Typesense Client

Inspect Typesense typo-tolerant search collections, schema definitions, and facets

## Metadata

- **ID:** `typesense-client`
- **Category:** `web`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `typesense`
- `typo tolerant search`
- `instant search`
- `typesense collection`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('typesense-client', {
  /* input parameters */
});
```
