---
id: seo-optimizer
name: "SEO Optimizer"
version: 1.0.0
description: "Validate HTML meta tags, OpenGraph previews, Twitter Cards, robots.txt, and sitemap.xml"
author: "AURA Team"
category: development
tags:
  - "seo"
  - "meta tags"
  - "opengraph"
  - "robots txt"
  - "sitemap"
  - "seo audit"
triggers:
  - "seo"
  - "meta tags"
  - "opengraph"
  - "robots txt"
  - "sitemap"
  - "seo audit"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# SEO Optimizer

Validate HTML meta tags, OpenGraph previews, Twitter Cards, robots.txt, and sitemap.xml

## Metadata

- **ID:** `seo-optimizer`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `seo`
- `meta tags`
- `opengraph`
- `robots txt`
- `sitemap`
- `seo audit`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('seo-optimizer', {
  /* input parameters */
});
```
