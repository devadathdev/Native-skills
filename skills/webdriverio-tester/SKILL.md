---
id: webdriverio-tester
name: "WebdriverIO Tester"
version: 1.0.0
description: "Inspect wdio.conf.js specs, services, capabilities, and mobile Appium drivers"
author: "AURA Team"
category: development
tags:
  - "webdriverio"
  - "wdio"
  - "appium test"
  - "e2e automation"
triggers:
  - "webdriverio"
  - "wdio"
  - "appium test"
  - "e2e automation"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# WebdriverIO Tester

Inspect wdio.conf.js specs, services, capabilities, and mobile Appium drivers

## Metadata

- **ID:** `webdriverio-tester`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `webdriverio`
- `wdio`
- `appium test`
- `e2e automation`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('webdriverio-tester', {
  /* input parameters */
});
```
