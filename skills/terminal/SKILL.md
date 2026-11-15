---
id: terminal
name: "Terminal"
version: 1.0.0
description: "Controlled terminal command execution with safety allowlists"
author: "AURA Team"
category: system
tags:
  - "terminal"
  - "shell"
  - "exec"
  - "command"
triggers:
  - "terminal"
  - "shell"
  - "command"
  - "run command"
  - "exec"
permissions:
  - type: shell
    scope: [execute]
enabled: true
entryPoint: src/skills/core/index.ts
---

# Terminal

Controlled terminal command execution with safety allowlists

## Metadata

- **ID:** `terminal`
- **Category:** `system`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `execute`)

## Triggers

- `terminal`
- `shell`
- `command`
- `run command`
- `exec`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('terminal', {
  /* input parameters */
});
```
