# AURA Native Skills

A standalone, portable native-skills runtime for **AURA Assistant**. It provides a common execution layer for local tools, web capabilities, developer workflows, AI/ML operations, documents, data, DevOps, security, and productivity integrations.

> **Status:** Production runtime v1.0 — All 618 native skills implemented as independently executable modules with typed manifests, dynamic `SKILL.md` loading, dependency graphs, full AURA host adapters (FORGE, SENTINEL, GitHub, Model, Memory, Browser), sandboxed workers, cryptographic audit streaming, parallel execution, approval policies, and observability.

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

### Existing core skills (11)

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

### Additional native skills (32)

**Productivity:** Calendar, Email, Notifications, Notes

**Documents:** PDF Processing, OCR, Document Converter

**Data:** Spreadsheet, SQL, Statistics

**AI / ML:** Machine Learning, Deep Learning, Model Routing, Prompt Engineering, Memory, Agent Planner

**Web:** Browser Automation, URL Fetcher, Web Extractor

**Integration:** API Client

**DevOps:** Docker, Kubernetes, CI/CD, Deployment, Monitoring, Log Analysis

**Development:** Dependency Manager, API Design, Architecture, Performance Optimization, Accessibility, Localization

### Extended native skills (17)

**Productivity:** Task Manager, Clipboard, Time Tracker

**Documents & Media:** Image Processor, Markdown Linter

**Data:** JSON Query, Vector Search, Mock Data Generator

**AI Engineering:** Eval Harness

**Security:** Secret Vault, Network Scanner, Compliance Checker

**DevOps & Cloud:** Environment Manager, Cloud Infrastructure

**Integration:** Webhook Dispatcher

**Development:** Regex Helper, AST Parser

### Advanced native skills (20)

**Cloud & Infrastructure:** Serverless Function Manager, DNS Manager

**Data & Streaming:** Database Migration, Cache Manager, Stream Processor, Parquet Reader

**API & Protocols:** GraphQL Client, gRPC Client, WebSocket Manager

**AI, Speech & Multimodal:** Audio Transcriber, Text to Speech, RAG Pipeline, Agent Memory Compact

**Security & Cryptography:** Rate Limiter, Data Anonymizer, Cryptographic Tools, JWT Validator, CORS Policy Checker

**Developer Quality:** Changelog Generator, Code Formatter

### Ecosystem native skills (92)

**Cloud & Multi-Cloud Infrastructure (12):** AWS Manager, Azure Manager, GCP Manager, Cloudflare Manager, Vercel Deployer, Netlify Deployer, Terraform Generator, Ansible Runner, Helm Charts, Pulumi Manager, Load Balancer, Cost Optimizer

**Databases & Storage Engines (12):** PostgreSQL Admin, MySQL Admin, MongoDB Admin, SQLite Admin, Elasticsearch, ClickHouse Client, DynamoDB Client, Neo4j Graph Client, Snowflake Client, BigQuery Client, Blob Storage, Backup & Recovery

**Security & DevSecOps (10):** SAST Scanner, DAST Scanner, SBOM Generator, Container Security, Secrets Scanner, OAuth 2.0 / OIDC Provider, Zero Trust Architecture, WAF Ruleset Manager, Penetration Testing Helper, Compliance Audit Reporter

**AI, LLMOps & Autonomous Agents (10):** Prompt Guardrails, Token Counter, Tool Router, Embedding Cache, Agent Reflexion, Swarm Orchestrator, Few-Shot Selector, Model Benchmark, Synthetic Text Generator, Hallucination Detector

**Web & Frontend Architecture (10):** Bundle Analyzer, Lighthouse Auditor, SEO Optimizer, Core Web Vitals, Tailwind CSS Helper, SVG Optimizer, Responsive Viewport Preview, Frontend State Inspector, CSS Optimizer, Icon & Favicon Generator

**DevOps, SRE & Observability (10):** Prometheus Metrics, Grafana Dashboards, OpenTelemetry Tracing, Sentry Logger, Incident Commander, Chaos Engineering, Load Tester, Canary Release Manager, Autoscaling Rules, Uptime & SLA Checker

**Formats, Media & Document Processing (10):** XML Processor, YAML Linter, TOML Processor, CSV Transformer, Video Processor, Audio Filter, LaTeX Compiler, EPUB Builder, QR Code Generator, Barcode Generator

**Networking, Protocols & API (8):** HTTP/2 Checker, HTTP/3 & QUIC Inspector, MQTT Client, WebRTC Signaling, SFTP Client, SSH Manager, Proxy Manager, Webhook Tester

**Productivity, Collaboration & Integrations (10):** Jira Manager, Linear Manager, Slack Notifier, Discord Notifier, Notion Sync, Trello Manager, Meeting Summarizer, Expense Tracker, Workspace Semantic Search, Workflow Orchestrator

### Expansion native skills (446)

- **Frontend & Modern UI (20):** Lit Components, Preact Signals, Alpine Inspector, HTMX Inspector, Tailwind v4 Engine, Shadcn UI Manager, Chakra UI, Material UI Manager, Radix Primitives, Framer Motion, TanStack Query, TanStack Table, Redux Toolkit, Zustand Inspector, Jotai Atoms, Pinia Store, Storybook Manager, Vite Config, Webpack Config, and modern UI tooling.
- **Backend Frameworks & Runtimes (30):** Express, Fastify, NestJS, Koa, Hono, Elysia, FastAPI, Django, Flask, Spring Boot, Micronaut, Quarkus, Rails, Laravel, Symfony, Gin, Echo, Fiber, Actix-web, Axum, Rocket, Phoenix, ASP.NET Core, Ktor, Deno, Bun, Node Cluster, gRPC Server, tRPC Router, JSON-RPC Server.
- **Distributed Systems & Event Brokers (25):** Kafka Producer, Kafka Consumer, RabbitMQ AMQP, Apache Pulsar, NATS Core, NATS JetStream, Redis Streams, Apache Flink, Apache Spark, Storm, Hazelcast, Temporal Workflow, Cadence, BullMQ, Celery, Sidekiq, Temporal Worker, Temporal Signals, Dapr Runtime, ZeroMQ, Socket.io, SSE Emitter, WebSub Hub, MQTT Broker, Debezium CDC.
- **Cloud Native, Containers & Mesh (25):** Docker Compose, Buildah Container, Kaniko Builder, Podman Pod, Containerd Engine, CRI-O Runtime, K8s Ingress, K8s Service, K8s ConfigMap, K8s Secret, K8s StatefulSet, K8s DaemonSet, K8s CRD, K8s Operator, Helmfile, Kustomize, Istio Service Mesh, Linkerd, Consul Connect, Cilium eBPF, Traefik Router, Nginx Ingress, Envoy Proxy, Kong Gateway, Emissary Ingress.
- **Serverless & Edge Computing (20):** AWS Lambda, Lambda Layer, Cloudflare Worker, Cloudflare KV, Cloudflare D1, Vercel Edge, Netlify Functions, Deno Deploy, Supabase Edge, Fastly Compute, Azure Functions, Google Cloud Functions, OpenFaaS, Knative Serving, Knative Eventing, SST Framework, Serverless Framework, SAM CLI, Edge Caching, WebAssembly Edge.
- **Databases & High-Performance Storage (30):** PostgreSQL Extensions, PGVector, TimescaleDB, MySQL Replication, MariaDB Galera, TiDB Distributed, ScyllaDB, Cassandra, Couchbase, CockroachDB, Spanner, DynamoDB Streams, Redis Clustering, Redis JSON, Memcached, RocksDB, LevelDB, DuckDB Engine, SQLite WAL, Neo4j Cypher, ArangoDB, OrientDB, Milvus, Qdrant, Weaviate, Pinecone, ChromaDB, Vespa Search, Meilisearch, Typesense.
- **Data Engineering & Lakehouses (30):** Apache Airflow DAG, Prefect Flow, Dagster Pipeline, Mage AI, Luigi Task, DBT Model, DBT Docs, Great Expectations, Soda Core, Apache Iceberg, Delta Lake, Apache Hudi, Databricks Jobs, Snowflake Warehouse, BigQuery Partitioning, Redshift Cluster, AWS Glue Job, Athena Query, Trino Distributed, Presto Engine, ClickHouse MergeTree, DuckDB Parquet, Apache Arrow, Polars Engine, Modin Distributed, Vaex BigData, Dremio Lakehouse, Cube.js Semantic, PyTorch Trainer, TensorFlow Keras.
- **Deep Learning, Neural Networks & Frameworks (35):** JAX Flax, ONNX Runtime, TensorRT Optimizer, HuggingFace Models, LangChain Chain, LlamaIndex Engine, vLLM Server, Ollama Manager, TGI Server, DeepSpeed Optimizer, Triton Inference Server, Scikit-Learn Pipeline, XGBoost Model, LightGBM Model, Pandas Analyst, NumPy Compute, SciPy Scientific, Dask Distributed, Ray Framework, MLflow Tracking, WandB Tracking, Kubeflow Pipelines, ClearML Manager, Feast Feature Store, Hopsworks Features, DVC Versioning, Pydantic v2, Instructor LLM, Outlines Guided, and neural network optimization.
- **LLMOps, Multi-Agent & RAG Architectures (35):** Semantic Router, Embedding Cache Manager, RAG Hybrid Search, Reranking Pipeline, Auto-Merging Retriever, Multi-Query Retriever, Self-Query Engine, Chunking Optimizer, Agentic RAG, Function Calling Engine, JSON Mode Enforcer, Multi-Agent Debate, Critic Reflexion, Plan-and-Solve Agent, ReAct Orchestrator, Hierarchical Swarm, Chain-of-Thought Analyzer, Tree-of-Thought Search, Graph of Thoughts, Prompt Compression, Context Compaction, Token Budget Allocator, Model Fallback Router, Speculative Decoder, LLM Cache Proxy, OpenTelemetry GenAI, LangSmith Tracing, Arize Phoenix, DeepEval Metric, Ragas Evaluator, TruLens Feedback, Guardrails AI, NeMo Guardrails, Guidance AI, Promptfoo Suite.
- **DevSecOps, Identity & Application Security (30):** Semgrep SAST, SonarQube Scanner, Trivy Container, Snyk Vulnerability, Grype SBOM, Syft Generator, Cosign Sigstore, Slsa Verifier, HashiCorp Vault, AWS Secrets Manager, GCP Secret Manager, Azure Key Vault, SOPS Encryption, Age Encryption, GitGuardian, TruffleHog, Gitleaks, Keycloak Realm, Auth0 Action, Clerk Auth, Supabase Auth, Firebase Auth, OAuth2 Proxy, Zitadel Identity, Ory Kratos, Ory Hydra, Teleport Access, Boundary Access, OpenFGA ReBAC, Casbin RBAC.
- **Cloud Infrastructure & Site Reliability (30):** Terraform Plan, Terraform State, OpenTofu Manager, Pulumi Stack, AWS CDK, CloudFormation, Terragrunt Runner, AWS EC2, AWS ECS, AWS EKS, AWS S3, AWS RDS, GCP Compute, GCP GKE, GCP Cloud Run, GCP GCS, Azure VM, Azure AKS, Azure Container Apps, Azure Blob, Datadog Agent, New Relic, Dynatrace, Honeycomb, Coralogix, Grafana Loki, Grafana Tempo, Vector Datadog, FluentBit Collector, Fluentd Daemon.
- **Continuous Integration, Delivery & GitOps (25):** GitHub Actions Workflow, GitLab CI Pipeline, CircleCI Config, Bitbucket Pipeline, Jenkinsfile Pipeline, ArgoCD Application, FluxCD GitOps, Spinnaker Pipeline, Tekton Pipeline, Drone CI, Woodpecker CI, semantic-release, Changesets Manager, Renovate Bot, Dependabot Config, Pre-commit Hooks, Husky Hooks, Lint-Staged, Danger JS, Codecov Reporter, SonarCloud PR, Release Please, Auto Changelog, TurboRepo Cache, Nx Monorepo.
- **Web, API Protocols & Transport (25):** HTTP/3 Client, QUIC Protocol, WebTransport, WebSocket Cluster, Socket.io Server, gRPC Gateway, Protocol Buffers, FlatBuffers, Cap'n Proto, Avro Schema, Thrift RPC, OpenAPI 3.1 Spec, JSON Schema 2020-12, Postman Collection, Bruno Collection, Insomnia Workspace, Soap XML, AsyncAPI Spec, GraphQL Federation, Apollo Router, GraphQL Yoga, Strawberry GraphQL, TypeGraphQL, Webhook Signature, SSE Streamer.
- **Mobile, Desktop & Cross-Platform (25):** React Native, Expo Application, Flutter Engine, Dart Analyzer, Swift Package Manager, Xcode Build, Gradle Android, Fastlane Pipeline, Tauri Desktop, Electron Desktop, Capacitor Mobile, Cordova Hybrid, MAUI Dotnet, Kotlin Multiplatform, Compose Multiplatform, Appium Mobile Test, Detox Test, Maestro Mobile Test, Fastlane Match, Android Keystore, iOS Provisioning, Google Play Publisher, App Store Connect, Firebase Crashlytics, Sentry Mobile.
- **Testing, Quality Assurance & Chaos Engineering (25):** Vitest Runner, Jest Runner, Mocha Chai, Playwright Browser, Cypress E2E, Puppeteer Automation, Selenium WebDriver, Artillery Load, k6 Performance, Locust Python, Gatling Simulation, Chaos Mesh, Litmus Chaos, Gremlin Fault, Tox Environment, Pytest Framework, Unittest Python, Cargo Test, Go Test, Maven Surefire, Gradle Test, Stryker Mutation, Code Climate, SonarQube Quality, Coverage LCOV.
- **Productivity, Collaboration, Workflow & Analytics (36):** Notion API, Jira Agile, Linear Issue, Trello Board, Asana Project, Monday Item, ClickUp Task, Basecamp Project, Slack Bot, Discord Bot, Microsoft Teams, Mattermost Hook, Telegram Bot, Zoom Meeting, Google Calendar, Outlook Calendar, Google Drive, OneDrive File, Dropbox Sync, Box Storage, Figma Token, Miro Board, Excalidraw Export, SendGrid Mail, Mailgun Delivery, Postmark Mail, Resend Email, Twilio SMS, Stripe Billing, Paddle Billing, Chargebee Sub, Segment Analytics, Mixpanel Events, Amplitude Analytics, PostHog Product, Metabase Query.

**Total: 618 cataloged skills.**

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
│   ├── catalog.json
│   └── SKILL.md
├── src/
│   ├── index.ts
│   ├── runtime.ts
│   ├── types.ts
│   ├── builtins.ts
│   ├── router/
│   │   └── skill-router.ts
│   ├── loader/
│   │   └── skill-md-loader.ts
│   ├── graph/
│   │   └── dependency-graph.ts
│   ├── validation/
│   │   └── schema-validator.ts
│   ├── lifecycle/
│   │   └── lifecycle-events.ts
│   ├── health/
│   │   └── health-checker.ts
│   ├── adapters/
│   │   ├── host-adapter.ts
│   │   ├── aura-context-adapter.ts
│   │   ├── forge-adapter.ts
│   │   ├── sentinel-adapter.ts
│   │   ├── github-adapter.ts
│   │   ├── model-adapter.ts
│   │   ├── memory-adapter.ts
│   │   └── browser-adapter.ts
│   ├── production/
│   │   ├── worker-sandbox.ts
│   │   ├── approval-policy.ts
│   │   ├── audit-stream.ts
│   │   ├── parallel-executor.ts
│   │   ├── execution-policy.ts
│   │   ├── observability.ts
│   │   ├── versioned-registry.ts
│   │   └── package-loader.ts
│   └── skills/
│       ├── index.ts
│       ├── core/
│       │   └── index.ts
│       ├── additional/
│       │   └── index.ts
│       ├── extended/
│       │   └── index.ts
│       ├── advanced/
│       │   └── index.ts
│       ├── ecosystem/
│       │   └── index.ts
│       └── expansion/
│           └── index.ts
└── test/
    ├── runtime.test.ts
    ├── router.test.ts
    ├── loader.test.ts
    ├── graph.test.ts
    ├── validation.test.ts
    ├── lifecycle.test.ts
    ├── health.test.ts
    ├── adapters.test.ts
    ├── production.test.ts
    └── skills.test.ts
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
- [x] 618-skill catalog

### V0.2 — Skill execution layer

- [x] Implement each skill as an independently executable module
- [x] Native skill router
- [x] Dynamic `SKILL.md` loader
- [x] Skill dependency graph
- [x] Input/output schema validation
- [x] Lifecycle events
- [x] Skill health checks

### V0.3 — AURA platform integration

- [x] AURA SkillContext adapter
- [x] FORGE adapter
- [x] SENTINEL adapter
- [x] GitHub adapter
- [x] Model adapter
- [x] Memory adapter
- [x] Browser adapter

### V1.0 — Production runtime

- [x] Sandboxed workers
- [x] Approval policies
- [x] Audit/event stream
- [x] Parallel skill execution
- [x] Retry and timeout policies
- [x] Observability
- [x] Versioned skill registry
- [x] Skill marketplace/package loading

## License

See the repository license for the applicable terms.
