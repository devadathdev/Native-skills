---
id: audio-filter
name: "Audio Filter"
version: 1.0.0
description: "Apply audio gain adjustments, volume normalization (EBU R128), and low-pass filter specs"
author: "AURA Team"
category: documents
tags:
  - "audio filter"
  - "normalize audio"
  - "audio gain"
  - "audio volume"
  - "sound filter"
triggers:
  - "audio filter"
  - "normalize audio"
  - "audio gain"
  - "audio volume"
  - "sound filter"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Audio Filter

Apply audio gain adjustments, volume normalization (EBU R128), and low-pass filter specs

## Metadata

- **ID:** `audio-filter`
- **Category:** `documents`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `audio filter`
- `normalize audio`
- `audio gain`
- `audio volume`
- `sound filter`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('audio-filter', {
  /* input parameters */
});
```
