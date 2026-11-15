---
id: sentry-logger
name: "Sentry Logger"
version: 1.0.0
description: "Format Sentry error events, attach execution breadcrumbs, user contexts, and tag metadata"
author: "AURA Team"
category: devops
tags:
  - "sentry"
  - "error tracking"
  - "sentry breadcrumb"
  - "sentry event"
  - "crash report"
triggers:
  - "sentry"
  - "error tracking"
  - "sentry breadcrumb"
  - "sentry event"
  - "crash report"
permissions:
  - type: network
    scope: [sentry]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Sentry Logger

Format Sentry error events, attach execution breadcrumbs, user contexts, and tag metadata

## Metadata

- **ID:** `sentry-logger`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `sentry`)

## Triggers

- `sentry`
- `error tracking`
- `sentry breadcrumb`
- `sentry event`
- `crash report`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('sentry-logger', {
  /* input parameters */
});
```
