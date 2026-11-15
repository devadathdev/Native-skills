---
id: appium-mobile-tester
name: "Appium Mobile Tester"
version: 1.0.0
description: "Inspect Appium mobile test sessions, UIAutomator2/XCUITest drivers, and touch actions"
author: "AURA Team"
category: development
tags:
  - "appium"
  - "mobile automation"
  - "uiautomator2"
  - "xcuitest"
triggers:
  - "appium"
  - "mobile automation"
  - "uiautomator2"
  - "xcuitest"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Appium Mobile Tester

Inspect Appium mobile test sessions, UIAutomator2/XCUITest drivers, and touch actions

## Metadata

- **ID:** `appium-mobile-tester`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `appium`
- `mobile automation`
- `uiautomator2`
- `xcuitest`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('appium-mobile-tester', {
  /* input parameters */
});
```
