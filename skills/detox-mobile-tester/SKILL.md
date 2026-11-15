---
id: detox-mobile-tester
name: "Detox React Native"
version: 1.0.0
description: "Inspect Detox gray-box end-to-end mobile automation configs, matchers, and device sync"
author: "AURA Team"
category: development
tags:
  - "detox"
  - "detox test"
  - "react native e2e"
  - "graybox test"
triggers:
  - "detox"
  - "detox test"
  - "react native e2e"
  - "graybox test"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Detox React Native

Inspect Detox gray-box end-to-end mobile automation configs, matchers, and device sync

## Metadata

- **ID:** `detox-mobile-tester`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `detox`
- `detox test`
- `react native e2e`
- `graybox test`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('detox-mobile-tester', {
  /* input parameters */
});
```
