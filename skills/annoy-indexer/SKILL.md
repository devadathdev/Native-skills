---
id: annoy-indexer
name: "Annoy Indexer"
version: 1.0.0
description: "Inspect Spotify Annoy random projection tree counts and approximate nearest neighbors"
author: "AURA Team"
category: ai
tags:
  - "annoy"
  - "approximate nearest neighbor"
  - "projection trees"
  - "spotify annoy"
triggers:
  - "annoy"
  - "approximate nearest neighbor"
  - "projection trees"
  - "spotify annoy"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Annoy Indexer

Inspect Spotify Annoy random projection tree counts and approximate nearest neighbors

## Metadata

- **ID:** `annoy-indexer`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `annoy`
- `approximate nearest neighbor`
- `projection trees`
- `spotify annoy`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('annoy-indexer', {
  /* input parameters */
});
```
