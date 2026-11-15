---
id: url-fetcher
name: "URL Fetcher"
version: 1.0.0
description: "Fetch HTTP/HTTPS endpoints and web pages via the runtime network tool"
author: "AURA Team"
category: web
tags:
  - "fetch url"
  - "open url"
  - "url"
  - "http get"
  - "download url"
triggers:
  - "fetch url"
  - "open url"
  - "url"
  - "http get"
  - "download url"
permissions:
  - type: network
    scope: [fetch]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# URL Fetcher

Fetch HTTP/HTTPS endpoints and web pages via the runtime network tool

## Metadata

- **ID:** `url-fetcher`
- **Category:** `web`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `fetch`)

## Triggers

- `fetch url`
- `open url`
- `url`
- `http get`
- `download url`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('url-fetcher', {
  /* input parameters */
});
```
