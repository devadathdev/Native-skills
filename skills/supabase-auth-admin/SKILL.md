---
id: supabase-auth-admin
name: "Supabase Auth Admin"
version: 1.0.0
description: "Inspect Supabase GoTrue authentication policies, row level security (RLS), and JWT"
author: "AURA Team"
category: security
tags:
  - "supabase auth"
  - "gotrue"
  - "supabase rls"
  - "row level security"
triggers:
  - "supabase auth"
  - "gotrue"
  - "supabase rls"
  - "row level security"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Supabase Auth Admin

Inspect Supabase GoTrue authentication policies, row level security (RLS), and JWT

## Metadata

- **ID:** `supabase-auth-admin`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `supabase auth`
- `gotrue`
- `supabase rls`
- `row level security`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('supabase-auth-admin', {
  /* input parameters */
});
```
