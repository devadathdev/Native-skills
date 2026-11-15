---
id: meeting-summarizer
name: "Meeting Summarizer"
version: 1.0.0
description: "Extract action items, key decisions, consensus agreements, and attendee follow-ups from transcripts"
author: "AURA Team"
category: productivity
tags:
  - "meeting summary"
  - "meeting notes"
  - "action items"
  - "transcription summary"
  - "meeting decisions"
triggers:
  - "meeting summary"
  - "meeting notes"
  - "action items"
  - "transcription summary"
  - "meeting decisions"
permissions:
  - type: model
    scope: [summary]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Meeting Summarizer

Extract action items, key decisions, consensus agreements, and attendee follow-ups from transcripts

## Metadata

- **ID:** `meeting-summarizer`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `summary`)

## Triggers

- `meeting summary`
- `meeting notes`
- `action items`
- `transcription summary`
- `meeting decisions`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('meeting-summarizer', {
  /* input parameters */
});
```
