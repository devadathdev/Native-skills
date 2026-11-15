---
id: testng-runner
name: "TestNG Runner"
version: 1.0.0
description: "Inspect testng.xml test suite definitions, groups, parallel threads, and data providers"
author: "AURA Team"
category: development
tags:
  - "testng"
  - "testng xml"
  - "data provider"
  - "parallel test"
triggers:
  - "testng"
  - "testng xml"
  - "data provider"
  - "parallel test"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# TestNG Runner

Inspect testng.xml test suite definitions, groups, parallel threads, and data providers

## Metadata

- **ID:** `testng-runner`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `testng`
- `testng xml`
- `data provider`
- `parallel test`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('testng-runner', {
  /* input parameters */
});
```
