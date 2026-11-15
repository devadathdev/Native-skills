---
id: code-analysis
name: "Code Analysis"
version: 1.0.0
description: "Analyze code for bugs, security vulnerabilities, performance, and maintainability"
author: "AURA Team"
category: development
tags:
  - "code review"
  - "static analysis"
  - "linter"
  - "security"
  - "quality"
triggers:
  - "analyze code"
  - "code review"
  - "review code"
  - "lint code"
  - "check syntax"
permissions:
  - type: filesystem
    scope: [read]
  - type: model
    scope: [analysis]
enabled: true
entryPoint: src/skills/core/index.ts
---

# Code Analysis

Analyze code for bugs, security vulnerabilities, performance, and maintainability

## Metadata

- **ID:** `code-analysis`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read`) — Read source code files
- `model` (scope: `analysis`) — Deep semantic code review

## Triggers

- `analyze code`
- `code review`
- `review code`
- `lint code`
- `check syntax`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('code-analysis', {
  /* input parameters */
});
```
