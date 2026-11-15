---
id: text-to-speech
name: "Text to Speech"
version: 1.0.0
description: "Synthesize speech audio from text with voice profiles, speaking rates, and SSML tags"
author: "AURA Team"
category: ai
tags:
  - "text to speech"
  - "tts"
  - "voice synthesis"
  - "read aloud"
  - "generate audio"
  - "voice"
triggers:
  - "text to speech"
  - "tts"
  - "voice synthesis"
  - "read aloud"
  - "generate audio"
  - "voice"
permissions:
  - type: model
    scope: [tts]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# Text to Speech

Synthesize speech audio from text with voice profiles, speaking rates, and SSML tags

## Metadata

- **ID:** `text-to-speech`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `tts`)

## Triggers

- `text to speech`
- `tts`
- `voice synthesis`
- `read aloud`
- `generate audio`
- `voice`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('text-to-speech', {
  /* input parameters */
});
```
