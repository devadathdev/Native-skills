---
id: slack-notifier
name: "Slack Notifier"
version: 1.0.0
description: "Format rich Slack Block Kit messages, attachment cards, thread responses, and webhooks"
author: "AURA Team"
category: productivity
tags:
  - "slack"
  - "slack message"
  - "block kit"
  - "slack notification"
  - "post to slack"
triggers:
  - "slack"
  - "slack message"
  - "block kit"
  - "slack notification"
  - "post to slack"
permissions:
  - type: network
    scope: [slack]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Slack Notifier

Format rich Slack Block Kit messages, attachment cards, thread responses, and webhooks

## Metadata

- **ID:** `slack-notifier`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `slack`)

## Triggers

- `slack`
- `slack message`
- `block kit`
- `slack notification`
- `post to slack`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('slack-notifier', {
  /* input parameters */
});
```
