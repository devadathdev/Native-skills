---
id: expense-tracker
name: "Expense Tracker"
version: 1.0.0
description: "Parse invoice/receipt line items, calculate tax totals, categorize expenses, and convert currencies"
author: "AURA Team"
category: productivity
tags:
  - "expense"
  - "receipt"
  - "invoice"
  - "track expense"
  - "bill"
  - "currency conversion"
triggers:
  - "expense"
  - "receipt"
  - "invoice"
  - "track expense"
  - "bill"
  - "currency conversion"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Expense Tracker

Parse invoice/receipt line items, calculate tax totals, categorize expenses, and convert currencies

## Metadata

- **ID:** `expense-tracker`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `expense`
- `receipt`
- `invoice`
- `track expense`
- `bill`
- `currency conversion`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('expense-tracker', {
  /* input parameters */
});
```
