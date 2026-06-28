---
title: "Democratizing Machine Learning at Netflix"
date: "2026-02-28"
description: "Machine Learning for Engineer"
author: "John Doe"
tags: ["architecture", "distributed-systems", "resilience"]
---

## Introduction

As Netflix has grown, machine learning continues to support our ability to deliver value to members and drive excellence across multiple areas of our business. When Netflix began investing in machine learning over a decade ago, it was primarily focused on a single domain: personalization. Scala was the industry standard, our ML teams were relatively small, and optimizing member engagement was our primary use case. Fast forward to today, and machine learning has become the backbone of Netflix’s business transformation. We now apply ML across various business domains, including:

- **Personalization**: Optimizing engagement and helping members discover content they’ll love
- **Studio**: Pre and post-production workflows
- **Payments**_:_ Fraud detection, payment routing, and recurring billing optimization
- **Ads**: Our newest domain, requiring real-time decisioning and targeting

… and a growing number of additional use cases across the company

Each domain operates with a different tech stack, different business metrics, and a distinct organizational structure. While this diversity is a testament to how machine learning has evolved to drive value across many verticals at Netflix, this growth introduces a new challenge: **enabling cross-pollination of models and data across domains.**

## The Challenge: A Fragmented ML Landscape

As our ML investments scaled across these domains, a critical problem emerged: the models produced largely became black boxes. Without any discovery infrastructure, ML practitioners couldn’t easily collaborate or share work across business verticals.

Consider a concrete example: [content embeddings](https://netflixtechblog.com/mediafm-the-multimodal-ai-foundation-for-media-understanding-at-netflix-e8c28df82e2d). Our Studio teams create sophisticated embeddings that identify scene boundaries, detect visual transitions, and understand content structure. These embeddings were originally built for production workflows.

But those same embeddings could be incredibly valuable elsewhere. Ads could hypothetically use content embeddings for context matching (ensuring advertisements align with the tone and content of what’s currently playing). Personalization could leverage them for episodic merchandising and recommendations (matching the topic or mood of an episode with a user’s preferred viewing preferences). Yet making this cross-pollination happen is extraordinarily difficult.

Why? Our ML tools exist in silos, each with its own backend services and user interface. The model registry is unaware of which A/B tests were using its models, and the pipeline orchestrator is unaware of downstream model dependencies. ML practitioners have to traverse multiple systems to answer basic questions about their work. Finding a model requires opening the model registry, understanding its lineage means switching to the pipeline orchestrator, and tracking which A/B tests use that model requires navigating to the experimentation platform. This fragmentation prevents practitioners from answering critical questions:

- **Discovery:** What features exist? What data sources are available for generating features for a model?
- **Lineage:** Which pipeline is generating data for a specific model? What data sources feed those features?
- **Impact:** Which A/B tests are running this model? Which models will break if I change this feature? Who owns each piece of this chain?

## The Hard Problem: Connecting everything

The real challenge wasn’t just building a consolidated UI. We needed to connect the different pieces of infrastructure our ML practitioners were using to perform different parts of the ML lifecycle.

Our ML ecosystem generates metadata from dozens of sources:

- Pipeline orchestration systems emit execution details, stage dependencies, and data transformations
- Deployed model registry tracks model versions, artifacts, staleness, and deployment history
- Experimentation platform manages A/B tests and their configurations
- Feature store catalog feature definitions and usage
- AI Dataset platform tracks the creation, management, discovery, and loading of datasets.
- Identity platform maintains user, team, and organization metadata

==Each system employs different formats, identifiers, and mental models. The hard technical problem we had to solve was:== ==**How do we collect this heterogeneous metadata, transform it into a unified entity model, and build a connected graph that enables true exploration and collaboration across business domains?**==

### The Solution: Metadata Service and the Model Lifecycle Graph

Our answer was the Metadata Service (MDS), which builds a Model Lifecycle Graph that indexes and connects ML-related entities across Netflix. MDS is optimized for real-time ingestion of ML metadata (e.g., models, features, pipelines, experiments, datasets) and to answer cross-domain questions such as “Which experiments are running this model?” or “Which models share these features?” It is the foundation that enables discovery, ingesting events from diverse sources, enriching them with context, and materializing relationships across entities.

Our vision: to make every ML asset at Netflix discoverable, understandable, and reusable by every ML practitioner, regardless of their team or domain.

## Core Abstractions: The Vocabulary of the System

Before diving into the technical implementation, it’s helpful to understand the conceptual model that underpins MDS. This vocabulary enables consistent communication across teams and systems:

**Component:** Any object that is uniquely addressable using an AI Platform’s (AIP) Uniform Resource Identifier (URI). An AIP URI follows the format`aip://<componentType>/<platformId>/<resourceId>`, ensuring global uniqueness. For example:

- Models: `aip://model/registry/ranking-v5`
- Users: `aip://user/identity/alice`
- Pipelines: `aip://pipeline/orchestrator/weekly-training`

**Entity:** A component within the ML ecosystem, characterized by additional properties such as name, description, creation date, and owners. Entities represent ML-specific assets, such as models, features, and pipelines.

**Entity Type:** A group of entities that share the same data shape. A data shape is a set of property constraints that specify the attributes and relationships an entity must have.

**Domain:** A functional grouping of related entity types that defines the abstract interface for a category of ML assets. For example, the Models domain defines what a Model and Model Instance look like, while the Pipelines domain defines Schedules, Requests, and Executions.

**Provider:** A concrete implementation of a domain, backed by a specific source system. For example, the Models domain is currently backed by our internal model registry. This separation allows MDS to support multiple providers for the same domain. If a new model registry were introduced, it could be added as an additional provider without changing the domain interface.

We can summarize these concepts with a concrete example:
