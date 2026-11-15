---
id: webrtc-mobile
name: "WebRTC Mobile"
version: 1.0.0
description: "Inspect mobile native peer connection audio/video track constraints and permissions"
author: "AURA Team"
category: integration
tags:
  - "webrtc mobile"
  - "audio constraint"
  - "video track"
  - "peer connection"
triggers:
  - "webrtc mobile"
  - "audio constraint"
  - "video track"
  - "peer connection"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# WebRTC Mobile

Inspect mobile native peer connection audio/video track constraints and permissions

## Metadata

- **ID:** `webrtc-mobile`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `webrtc mobile`
- `audio constraint`
- `video track`
- `peer connection`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('webrtc-mobile', {
  /* input parameters */
});
```
