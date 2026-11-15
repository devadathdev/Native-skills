---
id: barcode
name: "Barcode Generator"
version: 1.0.0
description: "Generate 1D barcodes across Code 128, EAN-13, and UPC formats with checksum verification"
author: "AURA Team"
category: documents
tags:
  - "barcode"
  - "code 128"
  - "ean 13"
  - "upc barcode"
  - "generate barcode"
triggers:
  - "barcode"
  - "code 128"
  - "ean 13"
  - "upc barcode"
  - "generate barcode"
permissions:
  - type: api
    scope: [barcode]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Barcode Generator

Generate 1D barcodes across Code 128, EAN-13, and UPC formats with checksum verification

## Metadata

- **ID:** `barcode`
- **Category:** `documents`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `barcode`)

## Triggers

- `barcode`
- `code 128`
- `ean 13`
- `upc barcode`
- `generate barcode`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('barcode', {
  /* input parameters */
});
```
