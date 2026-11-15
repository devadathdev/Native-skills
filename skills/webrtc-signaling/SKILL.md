---
id: webrtc-signaling
name: "WebRTC Signaling"
version: 1.0.0
description: "Format WebRTC Session Description Protocol (SDP) offers, answers, and ICE candidate pairs"
author: "AURA Team"
category: integration
tags:
  - "webrtc"
  - "sdp"
  - "ice candidate"
  - "peer to peer"
  - "webrtc signaling"
  - "media stream"
triggers:
  - "webrtc"
  - "sdp"
  - "ice candidate"
  - "peer to peer"
  - "webrtc signaling"
  - "media stream"
permissions:
  - type: network
    scope: [webrtc]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# WebRTC Signaling

Format WebRTC Session Description Protocol (SDP) offers, answers, and ICE candidate pairs

## Metadata

- **ID:** `webrtc-signaling`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `webrtc`)

## Triggers

- `webrtc`
- `sdp`
- `ice candidate`
- `peer to peer`
- `webrtc signaling`
- `media stream`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('webrtc-signaling', {
  /* input parameters */
});
```
