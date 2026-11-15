---
id: falco-runtime-security
name: "Falco Runtime Security"
version: 1.0.0
description: "Inspect Falco kernel-level eBPF security rules, system call alerts, and anomalies"
author: "AURA Team"
category: security
tags:
  - "falco"
  - "ebpf security"
  - "runtime security"
  - "syscall alert"
triggers:
  - "falco"
  - "ebpf security"
  - "runtime security"
  - "syscall alert"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Falco Runtime Security

Inspect Falco kernel-level eBPF security rules, system call alerts, and anomalies

## Metadata

- **ID:** `falco-runtime-security`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `falco`
- `ebpf security`
- `runtime security`
- `syscall alert`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('falco-runtime-security', {
  /* input parameters */
});
```
