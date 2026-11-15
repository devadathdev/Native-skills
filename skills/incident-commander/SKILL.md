---
id: incident-commander
name: "Incident Commander"
version: 1.0.0
description: "Coordinate incident triage, generate war-room playbooks, and assemble post-mortem timelines"
author: "AURA Team"
category: devops
tags:
  - "incident"
  - "incident response"
  - "postmortem"
  - "outage triage"
  - "sev1"
  - "incident timeline"
triggers:
  - "incident"
  - "incident response"
  - "postmortem"
  - "outage triage"
  - "sev1"
  - "incident timeline"
permissions:
  - type: api
    scope: [incident]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Incident Commander

Coordinate incident triage, generate war-room playbooks, and assemble post-mortem timelines

## Metadata

- **ID:** `incident-commander`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `incident`)

## Triggers

- `incident`
- `incident response`
- `postmortem`
- `outage triage`
- `sev1`
- `incident timeline`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('incident-commander', {
  /* input parameters */
});
```
