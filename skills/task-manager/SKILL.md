---
id: task-manager
name: "Task Manager"
version: 1.0.0
description: "Create, prioritize, organize, and track task items and to-do lists"
author: "AURA Team"
category: productivity
tags:
  - "task"
  - "todo"
  - "task list"
  - "add task"
  - "complete task"
  - "manage tasks"
triggers:
  - "task"
  - "todo"
  - "task list"
  - "add task"
  - "complete task"
  - "manage tasks"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/extended/index.ts
---

# Task Manager

Create, prioritize, organize, and track task items and to-do lists

## Metadata

- **ID:** `task-manager`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `task`
- `todo`
- `task list`
- `add task`
- `complete task`
- `manage tasks`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('task-manager', {
  /* input parameters */
});
```
