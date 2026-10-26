# 05 · Cloud & DevOps

**Status:** Parked until Season 3 · CD1 can be pulled in anytime

## Why this matters for you

Building something is half the job; shipping and running it is the other
half. Knowing containers, CI/CD, one cloud, and infrastructure-as-code makes
you self-sufficient on a full product and fluent in conversations with
platform teams. Start where you are: mobile CI/CD is DevOps too.

## Good enough looks like

You can take a service from repo to a public URL with automated build, test,
and deploy; infrastructure is defined in code; you can explain what it costs
and how to roll back.

## Milestones

- [ ] **CD1 — Mobile release automation.** Fastlane or Gradle-based pipeline:
  build, sign, version bump, upload to Play internal track on tag. Build
  caching to speed CI. *Artifact:* pipeline on one of your apps.
- [ ] **CD2 — Docker.** Containerize the SDUI Lab server; multi-stage build;
  Docker Compose with Postgres and Redis. *Artifact:* `docker compose up` works from a clean checkout.
- [ ] **CD3 — CI/CD for a service.** GitHub Actions: test, build image, push
  to a registry, deploy on merge. (This site already deploys with Actions —
  read that workflow first.) *Artifact:* green pipeline.
- [ ] **CD4 — One cloud.** Deploy to a managed platform (default proposal: GCP
  Cloud Run + Cloud SQL; AWS equivalent is fine). Secrets, environments,
  custom domain, budget alert. *Artifact:* public URL.
- [ ] **CD5 — Infrastructure as code.** Recreate CD4 with Terraform; tear
  down and rebuild from scratch. *Artifact:* `terraform apply` from zero.
- [ ] **CD6 — Kubernetes, the basics.** Only after CD1–5. Deploy to a local
  cluster (kind/minikube): deployments, services, config, probes.
  *Artifact:* manifests + notes on when you would and wouldn't use K8s.
- [ ] **CD7 — Optional certification.** AWS Solutions Architect Associate or
  GCP Associate Cloud Engineer — only if the job market signal says it's
  worth it at the time. *Artifact:* the cert.

## Resources

- Docker docs — "Get started" and multi-stage builds.
- GitHub Actions docs.
- The cloud provider's own getting-started paths (Cloud Run / AWS App Runner).
- HashiCorp's Terraform tutorials (developer.hashicorp.com).
- fastlane docs.

## Connects to

03 (what you deploy), 06 (what you observe), 01 (agents are excellent at
writing Dockerfiles, workflows and Terraform — and at subtly breaking them;
review carefully).
