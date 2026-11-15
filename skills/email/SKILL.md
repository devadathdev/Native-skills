---
id: email
name: "Email"
version: 1.0.0
description: "Compose, send, and parse email messages"
author: "AURA Team"
category: productivity
tags:
  - "email"
  - "mail"
  - "inbox"
  - "reply"
  - "send email"
triggers:
  - "email"
  - "mail"
  - "inbox"
  - "reply"
  - "send email"
permissions:
  - type: api
    scope: [email]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Email

Compose, send, and parse email messages

## Metadata

- **ID:** `email`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `email`)

## Triggers

- `email`
- `mail`
- `inbox`
- `reply`
- `send email`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('email', {
  /* input parameters */
});
```
