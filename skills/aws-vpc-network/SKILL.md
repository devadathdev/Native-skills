---
id: aws-vpc-network
name: "AWS VPC Network"
version: 1.0.0
description: "Inspect VPC subnets, route tables, internet gateways, NAT gateways, and security groups"
author: "AURA Team"
category: devops
tags:
  - "aws vpc"
  - "vpc subnet"
  - "nat gateway"
  - "security group"
triggers:
  - "aws vpc"
  - "vpc subnet"
  - "nat gateway"
  - "security group"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# AWS VPC Network

Inspect VPC subnets, route tables, internet gateways, NAT gateways, and security groups

## Metadata

- **ID:** `aws-vpc-network`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `aws vpc`
- `vpc subnet`
- `nat gateway`
- `security group`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aws-vpc-network', {
  /* input parameters */
});
```
