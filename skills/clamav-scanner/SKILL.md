---
id: clamav-scanner
name: "ClamAV Antivirus"
version: 1.0.0
description: "Scan files for known virus signatures, malware heuristics, and infected attachments"
author: "AURA Team"
category: security
tags:
  - "clamav"
  - "antivirus"
  - "virus scan"
  - "malware scan"
triggers:
  - "clamav"
  - "antivirus"
  - "virus scan"
  - "malware scan"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# ClamAV Antivirus

Scan files for known virus signatures, malware heuristics, and infected attachments

## Metadata

- **ID:** `clamav-scanner`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `clamav`
- `antivirus`
- `virus scan`
- `malware scan`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('clamav-scanner', {
  /* input parameters */
});
```
