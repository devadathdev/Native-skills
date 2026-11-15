---
id: allure-reporter
name: "Allure Test Reporter"
version: 1.0.0
description: "Format Allure test results, epic/feature labels, attachments, and step histories"
author: "AURA Team"
category: development
tags:
  - "allure"
  - "allure report"
  - "test attachments"
  - "test steps report"
triggers:
  - "allure"
  - "allure report"
  - "test attachments"
  - "test steps report"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Allure Test Reporter

Format Allure test results, epic/feature labels, attachments, and step histories

## Metadata

- **ID:** `allure-reporter`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `allure`
- `allure report`
- `test attachments`
- `test steps report`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('allure-reporter', {
  /* input parameters */
});
```
