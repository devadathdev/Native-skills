---
id: time-tracker
name: "Time Tracker"
version: 1.0.0
description: "Track work duration, log billable hours, and manage Pomodoro sessions"
author: "AURA Team"
category: productivity
tags:
  - "time tracker"
  - "start timer"
  - "stop timer"
  - "log hours"
  - "pomodoro"
  - "track time"
triggers:
  - "time tracker"
  - "start timer"
  - "stop timer"
  - "log hours"
  - "pomodoro"
  - "track time"
permissions:
  - type: api
    scope: [timer]
enabled: true
entryPoint: src/skills/extended/index.ts
---

# Time Tracker

Track work duration, log billable hours, and manage Pomodoro sessions

## Metadata

- **ID:** `time-tracker`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `timer`)

## Triggers

- `time tracker`
- `start timer`
- `stop timer`
- `log hours`
- `pomodoro`
- `track time`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('time-tracker', {
  /* input parameters */
});
```
