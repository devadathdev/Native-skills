---
id: pwa-manifest-builder
name: "PWA Manifest Builder"
version: 1.0.0
description: "Inspect web app manifest.json, service worker caching strategies, and icons"
author: "AURA Team"
category: development
tags:
  - "pwa"
  - "progressive web app"
  - "service worker"
  - "manifest json"
triggers:
  - "pwa"
  - "progressive web app"
  - "service worker"
  - "manifest json"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# PWA Manifest Builder

Inspect web app manifest.json, service worker caching strategies, and icons

## Metadata

- **ID:** `pwa-manifest-builder`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `pwa`
- `progressive web app`
- `service worker`
- `manifest json`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('pwa-manifest-builder', {
  /* input parameters */
});
```
