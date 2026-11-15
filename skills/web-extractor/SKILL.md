---
id: web-extractor
name: "Web Extractor"
version: 1.0.0
description: "Extract clean readable text and structured metadata from web pages"
author: "AURA Team"
category: web
tags:
  - "extract webpage"
  - "scrape page"
  - "web extraction"
  - "clean article"
triggers:
  - "extract webpage"
  - "scrape page"
  - "web extraction"
  - "clean article"
permissions:
  - type: network
    scope: [extract]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Web Extractor

Extract clean readable text and structured metadata from web pages

## Metadata

- **ID:** `web-extractor`
- **Category:** `web`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `extract`)

## Triggers

- `extract webpage`
- `scrape page`
- `web extraction`
- `clean article`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('web-extractor', {
  /* input parameters */
});
```
