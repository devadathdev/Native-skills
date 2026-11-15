---
id: geofencing-service
name: "Geofencing Service"
version: 1.0.0
description: "Configure geographic boundary regions, dwell times, and entry/exit alerts"
author: "AURA Team"
category: productivity
tags:
  - "geofence"
  - "location services"
  - "gps coordinate"
  - "geo boundary"
triggers:
  - "geofence"
  - "location services"
  - "gps coordinate"
  - "geo boundary"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Geofencing Service

Configure geographic boundary regions, dwell times, and entry/exit alerts

## Metadata

- **ID:** `geofencing-service`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `geofence`
- `location services`
- `gps coordinate`
- `geo boundary`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('geofencing-service', {
  /* input parameters */
});
```
