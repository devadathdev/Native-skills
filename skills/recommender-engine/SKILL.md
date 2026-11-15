---
id: recommender-engine
name: "Recommender Engine"
version: 1.0.0
description: "Compute collaborative filtering matrices, item-item similarity, and user scoring"
author: "AURA Team"
category: ai
tags:
  - "recommendation"
  - "recommender"
  - "collaborative filtering"
  - "user affinity"
triggers:
  - "recommendation"
  - "recommender"
  - "collaborative filtering"
  - "user affinity"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Recommender Engine

Compute collaborative filtering matrices, item-item similarity, and user scoring

## Metadata

- **ID:** `recommender-engine`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `recommendation`
- `recommender`
- `collaborative filtering`
- `user affinity`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('recommender-engine', {
  /* input parameters */
});
```
