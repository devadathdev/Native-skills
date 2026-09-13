# AURA Native Skills

A standalone native skills runtime and portable Agent Skills library for AURA Assistant.

## Goals

- Native, deterministic skill routing instead of invoking every skill for every message.
- Permission-aware execution for filesystem, shell, network, APIs, memory and model access.
- Progressive disclosure compatible with portable `SKILL.md` skills.
- Lifecycle hooks, commands, intervals, configuration and structured results.
- Easy integration with AURA, FORGE and SENTINEL.

## Architecture

```text
Input -> Router -> Permission Gate -> Runtime -> Skill -> Actions -> Result
```

## Built-in skills

- code-analysis
- git
- github
- filesystem
- terminal
- testing
- documentation
- data-analysis
- security-audit
- automation
- research

## Install

```bash
npm install
npm run build
npm test
```

## AURA integration

Import `NativeSkillRuntime`, register the built-ins, then pass AURA's normalized `SkillContext` into `processUserMessage()` or `processCommand()`.

## Security

Skills declare permissions in their manifests. The runtime denies undeclared capabilities and supports a deny-by-default policy.
