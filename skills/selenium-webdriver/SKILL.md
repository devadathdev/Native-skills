---
id: selenium-webdriver
name: "Selenium WebDriver"
version: 1.0.0
description: "Inspect Selenium browser capabilities, remote grid connections, and page objects"
author: "AURA Team"
category: development
tags:
  - "selenium"
  - "webdriver"
  - "remote grid"
  - "page object model"
triggers:
  - "selenium"
  - "webdriver"
  - "remote grid"
  - "page object model"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Selenium WebDriver

Inspect Selenium browser capabilities, remote grid connections, and page objects

## Metadata

- **ID:** `selenium-webdriver`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `selenium`
- `webdriver`
- `remote grid`
- `page object model`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('selenium-webdriver', {
  /* input parameters */
});
```
