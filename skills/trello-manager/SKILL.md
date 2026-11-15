---
id: trello-manager
name: "Trello Manager"
version: 1.0.0
description: "Inspect Trello kanban boards, cards, labels, checklists, and column transitions"
author: "AURA Team"
category: productivity
tags:
  - "trello"
  - "trello card"
  - "trello board"
  - "kanban card"
  - "trello list"
triggers:
  - "trello"
  - "trello card"
  - "trello board"
  - "kanban card"
  - "trello list"
permissions:
  - type: api
    scope: [trello]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Trello Manager

Inspect Trello kanban boards, cards, labels, checklists, and column transitions

## Metadata

- **ID:** `trello-manager`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `trello`)

## Triggers

- `trello`
- `trello card`
- `trello board`
- `kanban card`
- `trello list`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('trello-manager', {
  /* input parameters */
});
```
