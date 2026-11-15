---
id: service-worker-cache
name: "Service Worker Cache"
version: 1.0.0
description: "Inspect Workbox precache manifests, runtime caching strategies, and offline fallbacks"
author: "AURA Team"
category: development
tags:
  - "service worker"
  - "workbox"
  - "offline cache"
  - "cache first"
triggers:
  - "service worker"
  - "workbox"
  - "offline cache"
  - "cache first"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Service Worker Cache

Inspect Workbox precache manifests, runtime caching strategies, and offline fallbacks

## Metadata

- **ID:** `service-worker-cache`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `service worker`
- `workbox`
- `offline cache`
- `cache first`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('service-worker-cache', {
  /* input parameters */
});
```
