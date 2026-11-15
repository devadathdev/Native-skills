---
id: rails-framework
name: "Ruby on Rails"
version: 1.0.0
description: "Inspect Rails ActiveRecord models, routes, controllers, and ActiveSupport"
author: "AURA Team"
category: development
tags:
  - "rails"
  - "ruby on rails"
  - "activerecord"
  - "rails routes"
triggers:
  - "rails"
  - "ruby on rails"
  - "activerecord"
  - "rails routes"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Ruby on Rails

Inspect Rails ActiveRecord models, routes, controllers, and ActiveSupport

## Metadata

- **ID:** `rails-framework`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `rails`
- `ruby on rails`
- `activerecord`
- `rails routes`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('rails-framework', {
  /* input parameters */
});
```
