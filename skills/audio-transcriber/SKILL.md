---
id: audio-transcriber
name: "Audio Transcriber"
version: 1.0.0
description: "Prepare audio transcription jobs, segment audio tracks, and format subtitle tracks (SRT/VTT)"
author: "AURA Team"
category: ai
tags:
  - "audio transcribe"
  - "transcription"
  - "speech to text"
  - "stt"
  - "audio transcript"
  - "subtitles"
triggers:
  - "audio transcribe"
  - "transcription"
  - "speech to text"
  - "stt"
  - "audio transcript"
  - "subtitles"
permissions:
  - type: model
    scope: [audio]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# Audio Transcriber

Prepare audio transcription jobs, segment audio tracks, and format subtitle tracks (SRT/VTT)

## Metadata

- **ID:** `audio-transcriber`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `audio`)

## Triggers

- `audio transcribe`
- `transcription`
- `speech to text`
- `stt`
- `audio transcript`
- `subtitles`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('audio-transcriber', {
  /* input parameters */
});
```
