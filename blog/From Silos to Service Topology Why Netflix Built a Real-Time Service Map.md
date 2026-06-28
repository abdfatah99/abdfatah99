---
title: "From Silos to Service Topology Why Netflix Build a Real-Time Service Map"
date: "2026-02-28df"
description: "Distributed System for service Availability"
author: "John Doe"
tags: ["architecture", "distributed-systems", "resilience"]
---


## The Puzzle with a Thousand Pieces

Picture this: It’s 3am, and an engineer gets paged. One of our critical services is showing elevated error rates. Members trying to watch their favorite films and series are seeing degraded experiences. The clock is ticking.

In a system with thousands of microservices supporting our entertainment experience for members worldwide, answering these questions quickly can mean the difference between a minor blip and a major incident.

We kept hearing variations of this story from engineers across Netflix. The tooling gap was clear: we had plenty of signals, but no unified way to understand how everything connected.

## The Three Questions Every Engineer Asks

When troubleshooting distributed systems, engineers fundamentally need to understand relationships:

**Which services depend on each other?** Not just theoretical dependencies from configuration files or architecture diagrams, but actual runtime connections based on real traffic.

**What’s the blast radius?** When something breaks or needs to go down for maintenance, what else will be affected? Which teams need to be notified?

**Where’s the source?** Is my problem caused by an upstream issue, or am I the root cause that’s cascading to others?

Traditional observability tools show fragments of this picture. Metrics show symptoms and performance characteristics. Logs show individual service behavior. Traces show single request flows through the system. But none of them show the complete map of how everything connects — the steady-state topology of dependencies that forms the backbone of our distributed architecture.

For an engineer at 3am, having to mentally stitch together information from multiple tools is slow, error-prone, and stressful. We needed something better: a unified view of service dependencies — a map showing how everything connects — with easy navigation to the detailed signals when you need to dig deeper.

## Why This Matters More Than Ever

Netflix runs on thousands of microservices working together to deliver entertainment to our members. When you press play on your favorite series, that single action triggers a cascade of service-to-service calls — authentication, recommendations tailored to your tastes, video encoding selection, playback optimization, and more.

This architecture gives us tremendous flexibility and allows hundreds of engineering teams to innovate independently. But it also creates fundamental observability challenges.

And these challenges were growing. New initiatives like our Live programming and Ads-supported plans require even more sophisticated monitoring and faster troubleshooting. Live events can’t wait for lengthy incident investigations. The scale and real-time nature of these systems demanded better tooling.

We analyzed thousands of support requests from our engineers over a four-year period. The patterns were consistent:

- “What are my upstream and downstream dependencies?”
- “Is this failure in my service, or is something I depend on broken?”
- “Which services will be impacted if I take this down for maintenance?”
- “Why is this service showing as ‘Unknown’ in my metrics?”
- “What changed in my call path recently that could explain this behavior?”

Engineers were asking dependency questions constantly. We needed to provide answers — quickly, accurately, and in real-time.

## Building on What We Learned

We didn’t start from scratch. Over the years, we explored various approaches to solving this problem — from evaluating external graph databases and vendor platforms to building internal prototypes with different storage technologies and data models.

### Each iteration taught us something valuable:

**Real-time matters:** Dependency maps that are hours old are useless in dynamic environments where services deploy multiple times per day. We needed near real-time updates.

**Scale changes everything:** Solutions that work at modest scale hit fundamental walls at Netflix scale. Storage systems that handle thousands of nodes struggle with our service count and traffic volume.

**Integration is key:** Any solution needs seamless integration with our existing observability ecosystem. Engineers shouldn’t have to learn entirely new tools or leave their existing workflows.

**Data quality is critical:** Incomplete or incorrect dependency information is worse than no information — it leads to wrong conclusions during incidents.

**Multiple perspectives needed:** We learned that no single source of dependency information tells the complete story. Network connectivity data lacks application context. Application metrics only cover instrumented services. We needed to combine multiple sources.

These lessons shaped every decision we made in building Service Topology.

## What We Needed: A Living Map

We set out to build something specific: a living map of our infrastructure — one that updates in real-time as services deploy, as traffic patterns shift, as new dependencies form and old ones disappear.

The requirements were clear:

**Real-time updates, not stale snapshots:** In an environment where services deploy continuously, yesterday’s topology map is archaeology, not observability.

**Fast queries at scale:** When an engineer is troubleshooting at 3am, they can’t wait minutes for a query to return. We needed sub-second response times for traversing the call graph.

**Multiple layers:** Network-level connectivity doesn’t tell the whole story. We needed to see both the network layer (what’s actually talking to what) and the application layer (which APIs and endpoints are being called).

**Rich context, not just connections:** Knowing Service A talks to Service B isn’t enough. We needed to overlay health status, availability tiers, business domains, ownership information, and other metadata to make the information actionable.

**Visual and programmatic access:** Engineers needed a UI for exploration and troubleshooting. But automated systems — resilience frameworks, blast radius calculators, incident response automation — needed programmatic API access.
