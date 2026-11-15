---
id: regex
name: "Regex Helper"
version: 1.0.0
description: "Test regular expressions, explain patterns, extract match groups, and test strings"
author: "AURA Team"
category: development
tags:
  - "regex"
  - "regular expression"
  - "test regex"
  - "pattern match"
  - "regex tester"
  - "regex check"
triggers:
  - "regex"
  - "regular expression"
  - "test regex"
  - "pattern match"
  - "regex tester"
  - "regex check"
permissions:
  - type: api
    scope: [regex]
enabled: true
entryPoint: src/skills/extended/index.ts
---

# Regex Helper

Test regular expressions, explain patterns, extract match groups, and test strings

## Metadata

- **ID:** `regex`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `regex`)

## Triggers

- `regex`
- `regular expression`
- `test regex`
- `pattern match`
- `regex tester`
- `regex check`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('regex', {
  /* input parameters */
});
```
