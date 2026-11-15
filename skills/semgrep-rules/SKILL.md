---
id: semgrep-rules
name: "Semgrep Rules Engine"
version: 1.0.0
description: "Inspect Semgrep pattern matching rules for security bugs, AST patterns, and autofixes"
author: "AURA Team"
category: security
tags:
  - "semgrep"
  - "semgrep rule"
  - "pattern matching code"
  - "ast security"
triggers:
  - "semgrep"
  - "semgrep rule"
  - "pattern matching code"
  - "ast security"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Semgrep Rules Engine

Inspect Semgrep pattern matching rules for security bugs, AST patterns, and autofixes

## Metadata

- **ID:** `semgrep-rules`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `semgrep`
- `semgrep rule`
- `pattern matching code`
- `ast security`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('semgrep-rules', {
  /* input parameters */
});
```
