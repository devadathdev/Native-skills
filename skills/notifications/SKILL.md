---
id: notifications
name: "Notifications"
version: 1.0.0
description: "Dispatch and manage system or user notifications"
author: "AURA Team"
category: productivity
tags:
  - "notify"
  - "notification"
  - "alert"
  - "remind me"
  - "push notification"
triggers:
  - "notify"
  - "notification"
  - "alert"
  - "remind me"
  - "push notification"
permissions:
  - type: api
    scope: [notifications]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Notifications

Dispatch and manage system or user notifications

## Metadata

- **ID:** `notifications`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `notifications`)

## Triggers

- `notify`
- `notification`
- `alert`
- `remind me`
- `push notification`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('notifications', {
  /* input parameters */
});
```
