---
id: powershell-script-analyzer
name: "PSScriptAnalyzer"
version: 1.0.0
description: "Lint and analyze PowerShell cmdlets, modules, and script security"
author: "AURA Team"
category: development
tags:
  - "psscriptanalyzer"
  - "powershell lint"
  - "ps1 check"
  - "cmdlet audit"
triggers:
  - "psscriptanalyzer"
  - "powershell lint"
  - "ps1 check"
  - "cmdlet audit"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# PSScriptAnalyzer

Lint and analyze PowerShell cmdlets, modules, and script security

## Metadata

- **ID:** `powershell-script-analyzer`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `psscriptanalyzer`
- `powershell lint`
- `ps1 check`
- `cmdlet audit`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('powershell-script-analyzer', {
  /* input parameters */
});
```
