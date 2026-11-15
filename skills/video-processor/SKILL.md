---
id: video-processor
name: "Video Processor"
version: 1.0.0
description: "Generate FFmpeg processing commands for video transcoding, resolution scaling, and thumbnail cuts"
author: "AURA Team"
category: documents
tags:
  - "video"
  - "ffmpeg"
  - "transcode video"
  - "video thumbnail"
  - "mp4"
  - "h264"
triggers:
  - "video"
  - "ffmpeg"
  - "transcode video"
  - "video thumbnail"
  - "mp4"
  - "h264"
permissions:
  - type: shell
    scope: [node]
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Video Processor

Generate FFmpeg processing commands for video transcoding, resolution scaling, and thumbnail cuts

## Metadata

- **ID:** `video-processor`
- **Category:** `documents`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `node`)
- `filesystem` (scope: `read, write`)

## Triggers

- `video`
- `ffmpeg`
- `transcode video`
- `video thumbnail`
- `mp4`
- `h264`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('video-processor', {
  /* input parameters */
});
```
