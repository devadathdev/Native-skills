# AURA Native Skills

A standalone, portable native-skills runtime for **AURA Assistant**. It provides a common execution layer for local tools, web capabilities, developer workflows, AI/ML operations, documents, data, DevOps, security, and productivity integrations.

> **Status:** Active foundation — 43 skills are cataloged, with the native runtime and executable skill interface in place. External services are connected through host adapters rather than hard-coded into the skill layer.

## What this project provides

- Native skill registration and execution
- Skill metadata and trigger catalog
- Permission-aware execution
- Workspace filesystem sandboxing
- Controlled shell execution
- Network/URL execution through injected `fetch`
- Structured skill inputs and outputs
- Portable skill definitions suitable for AURA integration
- Host-adapter architecture for FORGE, SENTINEL, GitHub, models, memory, email, calendar, databases, and other services

## Architecture

```text
                    AURA Assistant
                          │
                          ▼
                   Native Skill Router
                          │
                  ┌───────┴────────┐
                  ▼                ▼
             Skill Match      Permission Gate
                  │                │
                  └───────┬────────┘
                          ▼
                  Native Skill Runtime
                          │
             ┌────────────┼────────────┐
             ▼            ▼            ▼
          Local I/O     Shell        Network
             │            │            │
             └────────────┼────────────┘
                          ▼
                    Host Adapters
                          │
          ┌───────────────┼────────────────┐
          ▼               ▼                ▼
        FORGE           SENTINEL        External APIs
                          │
                          ▼
                    Skill Result
                          │
                          ▼
                     AURA Response
```

## Skill catalog

### Existing core skills

- Code Analysis
- Git
- GitHub
- Filesystem
- Terminal
- Testing
- Documentation
- Data Analysis
- Security Audit
- Automation
- Research

### 32 additional native skills

**Productivity:** Calendar, Email, Notifications, Notes

**Documents:** PDF Processing, OCR, Document Converter

**Data:** Spreadsheet, SQL, Statistics

**AI / ML:** Machine Learning, Deep Learning, Model Routing, Prompt Engineering, Memory, Agent Planner

**Web:** Browser Automation, URL Fetcher, Web Extractor

**Integration:** API Client

**DevOps:** Docker, Kubernetes, CI/CD, Deployment, Monitoring, Log Analysis

**Development:** Dependency Manager, API Design, Architecture, Performance Optimization, Accessibility, Localization

**Total: 43 cataloged skills.**

The complete trigger and category catalog is maintained in [`skills/catalog.json`](skills/catalog.json).

## Executable runtime

The runtime lives in `src/native-skill-runtime.js` and exposes a common execution contract:

```js
import { NativeSkillRuntime, createSkill } from './src/native-skill-runtime.js';

const runtime = new NativeSkillRuntime({
  workspace: '/path/to/aura-workspace'
});

runtime.register(createSkill(
  'example',
  'Example Skill',
  'Demonstrates native execution',
  ['filesystem'],
  async ({ input, tools }) => {
    const content = await tools.fs.read(input.file);
    return { success: true, output: content };
  }
));

const result = await runtime.execute('example', { file: 'README.md' });
```

### Built-in runtime tools

| Tool | Capability | Protection |
|---|---|---|
| `tools.fs.read` | Read workspace files | Workspace boundary + permission |
| `tools.fs.write` | Write workspace files | Workspace boundary + permission |
| `tools.shell` | Run approved developer commands | Command allowlist + permission |
| `tools.web` | Fetch URLs | Network permission |

The runtime rejects paths that escape the configured workspace and rejects shell commands outside its allowlist.

## Host adapters

Skills are intentionally separated from service credentials and vendor-specific implementations. AURA can inject adapters for:

- **FORGE** — build, automation, deployment and CI/CD operations
- **SENTINEL** — security auditing, policy checks and threat analysis
- **GitHub** — repositories, commits, pull requests and issues
- **Models** — model routing, inference and AI workflows
- **Memory** — AURA memory services
- **Database** — SQL and structured data stores
- **Browser** — controlled browser automation
- **Email / Calendar** — productivity integrations

This keeps the skill package portable and prevents credentials from being embedded in individual skills.

## Installation

```bash
npm install
npm run build
npm test
```

For development:

```bash
npm run typecheck
```

## AURA integration

The intended integration flow is:

```text
AURA SkillContext
       │
       ▼
Native Skill Router
       │
       ▼
Permission Gate
       │
       ▼
NativeSkillRuntime
       │
       ▼
Host Adapter / Native Tool
       │
       ▼
SkillResult
       │
       ▼
AURA response pipeline
```

AURA should remain responsible for conversation state, authentication, model selection, user-facing responses and policy. Native Skills should remain responsible for capability execution.

## Security model

Native skills follow **deny-by-default capability access**.

A skill must explicitly declare capabilities such as:

```text
filesystem
shell
network
api
database
model
memory
```

The runtime exposes only the corresponding tool surface. Workspace filesystem operations are restricted to the configured workspace. Shell execution is restricted to an explicit command allowlist.

### Production requirements

Before exposing powerful skills to untrusted users, add:

- Per-user authorization
- OS/container sandboxing
- Resource and execution time limits
- Network egress policy
- Secret isolation
- Audit logging
- Approval gates for destructive operations
- Rate limits
- Strong schema validation
- Process isolation for untrusted code

The JavaScript runtime alone is **not** a complete security boundary for hostile workloads.

## Portable skill format

A portable skill can be packaged with a `SKILL.md` manifest describing:

```text
name
version
description
category
triggers
permissions
configuration
entry point
```

This allows the same capability to be discovered by AURA while keeping execution logic modular.

## Repository structure

```text
Native-skills/
├── README.md
├── package.json
├── tsconfig.json
├── skills/
│   └── catalog.json
└── src/
    └── native-skill-runtime.js
```

The repository is deliberately separated from `aura-assistant` so the skills runtime can evolve independently and later be consumed as a package.

## Roadmap

### V0.1 — Foundation

- [x] Standalone repository
- [x] Native runtime
- [x] Permission checks
- [x] Filesystem sandbox
- [x] Controlled shell execution
- [x] Network tool
- [x] 43-skill catalog

### V0.2 — Skill execution layer

- [ ] Implement each skill as an independently executable module
- [ ] Native skill router
- [ ] Dynamic `SKILL.md` loader
- [ ] Skill dependency graph
- [ ] Input/output schema validation
- [ ] Lifecycle events
- [ ] Skill health checks

### V0.3 — AURA platform integration

- [ ] AURA SkillContext adapter
- [ ] FORGE adapter
- [ ] SENTINEL adapter
- [ ] GitHub adapter
- [ ] Model adapter
- [ ] Memory adapter
- [ ] Browser adapter

### V1.0 — Production runtime

- [ ] Sandboxed workers
- [ ] Approval policies
- [ ] Audit/event stream
- [ ] Parallel skill execution
- [ ] Retry and timeout policies
- [ ] Observability
- [ ] Versioned skill registry
- [ ] Skill marketplace/package loading

## License

See the repository license for the applicable terms.
