---
id: sftp-client
name: "SFTP Client"
version: 1.0.0
description: "Plan and validate secure SFTP and SCP remote file transfer sessions and permissions"
author: "AURA Team"
category: integration
tags:
  - "sftp"
  - "scp"
  - "secure ftp"
  - "remote file transfer"
  - "ssh ftp"
triggers:
  - "sftp"
  - "scp"
  - "secure ftp"
  - "remote file transfer"
  - "ssh ftp"
permissions:
  - type: network
    scope: [sftp]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# SFTP Client

Plan and validate secure SFTP and SCP remote file transfer sessions and permissions

## Metadata

- **ID:** `sftp-client`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `sftp`)

## Triggers

- `sftp`
- `scp`
- `secure ftp`
- `remote file transfer`
- `ssh ftp`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('sftp-client', {
  /* input parameters */
});
```
