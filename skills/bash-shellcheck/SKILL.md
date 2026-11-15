---
id: bash-shellcheck
name: "Bash ShellCheck"
version: 1.0.0
description: "Lint bash and POSIX shell scripts against syntax and portability pitfalls"
author: "AURA Team"
category: development
tags:
  - "shellcheck"
  - "bash lint"
  - "sh lint"
  - "shell script check"
triggers:
  - "shellcheck"
  - "bash lint"
  - "sh lint"
  - "shell script check"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Bash ShellCheck

Lint bash and POSIX shell scripts against syntax and portability pitfalls

## Metadata

- **ID:** `bash-shellcheck`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `shellcheck`
- `bash lint`
- `sh lint`
- `shell script check`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('bash-shellcheck', {
  /* input parameters */
});
```
