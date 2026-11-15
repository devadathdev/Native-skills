---
id: browser
name: "Browser Automation"
version: 1.0.0
description: "Drive controlled headless browser automation for web navigation and inspection"
author: "AURA Team"
category: web
tags:
  - "open website"
  - "click"
  - "fill form"
  - "browser"
  - "navigate page"
triggers:
  - "open website"
  - "click"
  - "fill form"
  - "browser"
  - "navigate page"
permissions:
  - type: network
    scope: [browser]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Browser Automation

Drive controlled headless browser automation for web navigation and inspection

## Metadata

- **ID:** `browser`
- **Category:** `web`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `browser`)

## Triggers

- `open website`
- `click`
- `fill form`
- `browser`
- `navigate page`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('browser', {
  /* input parameters */
});
```
