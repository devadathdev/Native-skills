---
id: workspace-search
name: "Workspace Semantic Search"
version: 1.0.0
description: "Perform indexed semantic search and keyword grep across workspace codebase and documentation"
author: "AURA Team"
category: productivity
tags:
  - "workspace search"
  - "code search"
  - "grep project"
  - "search codebase"
  - "find in files"
triggers:
  - "workspace search"
  - "code search"
  - "grep project"
  - "search codebase"
  - "find in files"
permissions:
  - type: filesystem
    scope: [read]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Workspace Semantic Search

Perform indexed semantic search and keyword grep across workspace codebase and documentation

## Metadata

- **ID:** `workspace-search`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read`)

## Triggers

- `workspace search`
- `code search`
- `grep project`
- `search codebase`
- `find in files`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('workspace-search', {
  /* input parameters */
});
```
