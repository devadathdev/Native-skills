---
id: linear-manager
name: "Linear Manager"
version: 1.0.0
description: "Create and organize Linear issues, cycles, teams, and priority triage workflows"
author: "AURA Team"
category: productivity
tags:
  - "linear"
  - "linear app"
  - "linear issue"
  - "linear cycle"
  - "triage linear"
triggers:
  - "linear"
  - "linear app"
  - "linear issue"
  - "linear cycle"
  - "triage linear"
permissions:
  - type: api
    scope: [linear]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Linear Manager

Create and organize Linear issues, cycles, teams, and priority triage workflows

## Metadata

- **ID:** `linear-manager`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `linear`)

## Triggers

- `linear`
- `linear app`
- `linear issue`
- `linear cycle`
- `triage linear`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('linear-manager', {
  /* input parameters */
});
```
