---
id: spreadsheet
name: "Spreadsheet"
version: 1.0.0
description: "Parse tabular spreadsheets, manipulate rows/columns, and aggregate calculations"
author: "AURA Team"
category: data
tags:
  - "spreadsheet"
  - "excel"
  - "xlsx"
  - "worksheet"
  - "csv sheet"
triggers:
  - "spreadsheet"
  - "excel"
  - "xlsx"
  - "worksheet"
  - "csv sheet"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Spreadsheet

Parse tabular spreadsheets, manipulate rows/columns, and aggregate calculations

## Metadata

- **ID:** `spreadsheet`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `spreadsheet`
- `excel`
- `xlsx`
- `worksheet`
- `csv sheet`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('spreadsheet', {
  /* input parameters */
});
```
