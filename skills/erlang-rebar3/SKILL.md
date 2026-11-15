---
id: erlang-rebar3
name: "Erlang Rebar3"
version: 1.0.0
description: "Inspect rebar.config files, Erlang OTP release specs, and gen_server modules"
author: "AURA Team"
category: development
tags:
  - "rebar3"
  - "erlang build"
  - "rebar config"
  - "otp app"
triggers:
  - "rebar3"
  - "erlang build"
  - "rebar config"
  - "otp app"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Erlang Rebar3

Inspect rebar.config files, Erlang OTP release specs, and gen_server modules

## Metadata

- **ID:** `erlang-rebar3`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `rebar3`
- `erlang build`
- `rebar config`
- `otp app`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('erlang-rebar3', {
  /* input parameters */
});
```
