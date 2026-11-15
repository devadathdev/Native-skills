---
id: mysql-admin
name: "MySQL Admin"
version: 1.0.0
description: "Inspect MySQL server variables, slow query logs, InnoDB table metrics, and deadlocks"
author: "AURA Team"
category: data
tags:
  - "mysql"
  - "innodb"
  - "slow query log"
  - "mysql admin"
  - "mariadb"
triggers:
  - "mysql"
  - "innodb"
  - "slow query log"
  - "mysql admin"
  - "mariadb"
permissions:
  - type: database
    scope: [read]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# MySQL Admin

Inspect MySQL server variables, slow query logs, InnoDB table metrics, and deadlocks

## Metadata

- **ID:** `mysql-admin`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `read`)

## Triggers

- `mysql`
- `innodb`
- `slow query log`
- `mysql admin`
- `mariadb`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('mysql-admin', {
  /* input parameters */
});
```
