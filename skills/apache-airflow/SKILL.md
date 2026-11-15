---
id: apache-airflow
name: "Apache Airflow"
version: 1.0.0
description: "Inspect Airflow DAG python definitions, task dependencies, operators, and schedules"
author: "AURA Team"
category: data
tags:
  - "airflow"
  - "airflow dag"
  - "dag operator"
  - "task dependency"
triggers:
  - "airflow"
  - "airflow dag"
  - "dag operator"
  - "task dependency"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Apache Airflow

Inspect Airflow DAG python definitions, task dependencies, operators, and schedules

## Metadata

- **ID:** `apache-airflow`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `airflow`
- `airflow dag`
- `dag operator`
- `task dependency`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('apache-airflow', {
  /* input parameters */
});
```
