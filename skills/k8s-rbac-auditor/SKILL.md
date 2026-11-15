---
id: k8s-rbac-auditor
name: "K8s RBAC Auditor"
version: 1.0.0
description: "Audit Kubernetes Roles, ClusterRoles, and RoleBindings for overprivileged wildcards"
author: "AURA Team"
category: security
tags:
  - "k8s rbac"
  - "clusterrole"
  - "rolebinding"
  - "rbac audit"
triggers:
  - "k8s rbac"
  - "clusterrole"
  - "rolebinding"
  - "rbac audit"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# K8s RBAC Auditor

Audit Kubernetes Roles, ClusterRoles, and RoleBindings for overprivileged wildcards

## Metadata

- **ID:** `k8s-rbac-auditor`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `k8s rbac`
- `clusterrole`
- `rolebinding`
- `rbac audit`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('k8s-rbac-auditor', {
  /* input parameters */
});
```
