---
id: discord-notifier
name: "Discord Notifier"
version: 1.0.0
description: "Format Discord rich embeds, field tables, webhook announcements, and bot messages"
author: "AURA Team"
category: productivity
tags:
  - "discord"
  - "discord webhook"
  - "discord embed"
  - "post to discord"
  - "discord bot"
triggers:
  - "discord"
  - "discord webhook"
  - "discord embed"
  - "post to discord"
  - "discord bot"
permissions:
  - type: network
    scope: [discord]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Discord Notifier

Format Discord rich embeds, field tables, webhook announcements, and bot messages

## Metadata

- **ID:** `discord-notifier`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `discord`)

## Triggers

- `discord`
- `discord webhook`
- `discord embed`
- `post to discord`
- `discord bot`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('discord-notifier', {
  /* input parameters */
});
```
