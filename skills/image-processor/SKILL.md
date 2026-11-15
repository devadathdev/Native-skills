---
id: image-processor
name: "Image Processor"
version: 1.0.0
description: "Inspect image metadata, convert formats (PNG, JPEG, WebP), and resize assets"
author: "AURA Team"
category: documents
tags:
  - "image"
  - "resize image"
  - "crop image"
  - "compress image"
  - "image format"
  - "convert image"
triggers:
  - "image"
  - "resize image"
  - "crop image"
  - "compress image"
  - "image format"
  - "convert image"
permissions:
  - type: filesystem
    scope: [read, write]
  - type: shell
    scope: [node]
enabled: true
entryPoint: src/skills/extended/index.ts
---

# Image Processor

Inspect image metadata, convert formats (PNG, JPEG, WebP), and resize assets

## Metadata

- **ID:** `image-processor`
- **Category:** `documents`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)
- `shell` (scope: `node`)

## Triggers

- `image`
- `resize image`
- `crop image`
- `compress image`
- `image format`
- `convert image`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('image-processor', {
  /* input parameters */
});
```
