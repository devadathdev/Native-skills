---
id: nfc-reader
name: "NFC Reader Manager"
version: 1.0.0
description: "Inspect Near Field Communication (NFC) NDEF payloads, tags, and MIME types"
author: "AURA Team"
category: integration
tags:
  - "nfc"
  - "ndef"
  - "nfc tag"
  - "contactless"
triggers:
  - "nfc"
  - "ndef"
  - "nfc tag"
  - "contactless"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# NFC Reader Manager

Inspect Near Field Communication (NFC) NDEF payloads, tags, and MIME types

## Metadata

- **ID:** `nfc-reader`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `nfc`
- `ndef`
- `nfc tag`
- `contactless`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('nfc-reader', {
  /* input parameters */
});
```
