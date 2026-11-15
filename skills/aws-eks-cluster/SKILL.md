---
id: aws-eks-cluster
name: "AWS EKS Cluster"
version: 1.0.0
description: "Inspect Amazon EKS control planes, managed node groups, and IAM roles for service accounts (IRSA)"
author: "AURA Team"
category: devops
tags:
  - "aws eks"
  - "eks cluster"
  - "managed node group"
  - "irsa"
triggers:
  - "aws eks"
  - "eks cluster"
  - "managed node group"
  - "irsa"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# AWS EKS Cluster

Inspect Amazon EKS control planes, managed node groups, and IAM roles for service accounts (IRSA)

## Metadata

- **ID:** `aws-eks-cluster`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `aws eks`
- `eks cluster`
- `managed node group`
- `irsa`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aws-eks-cluster', {
  /* input parameters */
});
```
