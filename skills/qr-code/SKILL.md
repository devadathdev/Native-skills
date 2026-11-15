---
id: qr-code
name: "QR Code Generator"
version: 1.0.0
description: "Generate QR code matrices with configurable error correction levels (L, M, Q, H) and SVG output"
author: "AURA Team"
category: documents
tags:
  - "qr code"
  - "generate qr"
  - "qrcode"
  - "matrix code"
  - "qr barcode"
triggers:
  - "qr code"
  - "generate qr"
  - "qrcode"
  - "matrix code"
  - "qr barcode"
permissions:
  - type: api
    scope: [qr]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# QR Code Generator

Generate QR code matrices with configurable error correction levels (L, M, Q, H) and SVG output

## Metadata

- **ID:** `qr-code`
- **Category:** `documents`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `qr`)

## Triggers

- `qr code`
- `generate qr`
- `qrcode`
- `matrix code`
- `qr barcode`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('qr-code', {
  /* input parameters */
});
```
