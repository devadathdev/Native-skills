---
id: clipboard
name: "Clipboard"
version: 1.0.0
description: "Inspect, set, and format temporary clipboard buffer payloads"
author: "AURA Team"
category: productivity
tags:
  - "clipboard"
  - "copy to clipboard"
  - "paste"
  - "clipboard buffer"
  - "copy text"
triggers:
  - "clipboard"
  - "copy to clipboard"
  - "paste"
  - "clipboard buffer"
  - "copy text"
permissions:
  - type: api
    scope: [clipboard]
enabled: true
entryPoint: src/skills/extended/index.ts
---

# Clipboard

Inspect, set, and format temporary clipboard buffer payloads

## Metadata

- **ID:** `clipboard`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `clipboard`)

## Triggers

- `clipboard`
- `copy to clipboard`
- `paste`
- `clipboard buffer`
- `copy text`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('clipboard', {
  /* input parameters */
});
```
