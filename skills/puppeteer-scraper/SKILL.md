---
id: puppeteer-scraper
name: "Puppeteer Scraper"
version: 1.0.0
description: "Inspect Puppeteer headless browser navigation, element screenshots, and PDF printing"
author: "AURA Team"
category: web
tags:
  - "puppeteer"
  - "headless chrome"
  - "scrape browser"
  - "page evaluate"
triggers:
  - "puppeteer"
  - "headless chrome"
  - "scrape browser"
  - "page evaluate"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Puppeteer Scraper

Inspect Puppeteer headless browser navigation, element screenshots, and PDF printing

## Metadata

- **ID:** `puppeteer-scraper`
- **Category:** `web`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `puppeteer`
- `headless chrome`
- `scrape browser`
- `page evaluate`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('puppeteer-scraper', {
  /* input parameters */
});
```
