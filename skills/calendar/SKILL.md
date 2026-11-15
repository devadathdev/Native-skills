---
id: calendar
name: "Calendar"
version: 1.0.0
description: "Schedule, query, and inspect calendar events"
author: "AURA Team"
category: productivity
tags:
  - "calendar"
  - "meeting"
  - "schedule"
  - "event"
  - "calendar invite"
triggers:
  - "calendar"
  - "meeting"
  - "schedule"
  - "event"
  - "calendar invite"
permissions:
  - type: api
    scope: [calendar]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Calendar

Schedule, query, and inspect calendar events

## Metadata

- **ID:** `calendar`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `calendar`)

## Triggers

- `calendar`
- `meeting`
- `schedule`
- `event`
- `calendar invite`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('calendar', {
  /* input parameters */
});
```
