---
id: jira-manager
name: "Jira Manager"
version: 1.0.0
description: "Inspect Jira issues, validate JQL queries, format sprint boards, and draft issue summaries"
author: "AURA Team"
category: productivity
tags:
  - "jira"
  - "jira issue"
  - "jql"
  - "sprint board"
  - "atlassian jira"
  - "create jira"
triggers:
  - "jira"
  - "jira issue"
  - "jql"
  - "sprint board"
  - "atlassian jira"
  - "create jira"
permissions:
  - type: api
    scope: [jira]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Jira Manager

Inspect Jira issues, validate JQL queries, format sprint boards, and draft issue summaries

## Metadata

- **ID:** `jira-manager`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `jira`)

## Triggers

- `jira`
- `jira issue`
- `jql`
- `sprint board`
- `atlassian jira`
- `create jira`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('jira-manager', {
  /* input parameters */
});
```
