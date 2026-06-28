---
title: "High-Throughput Graph Abstraction at Netflix"
date: "2026-02-28"
description: "Distributed System Architecture"
author: "John Doe"
tags: ["architecture", "distributed-systems", "resilience"]
---

# Introduction

Netflix has a diverse range of graph use cases, each serving specific business needs with unique functionality and performance requirements. These use cases fall into two broad categories:

1. **OLAP**: These use cases typically involve open-ended and algorithmic exploration of large graph datasets. They often utilize industry-standard models and languages such as RDF with SPARQL, Property Graphs with Gremlin or openCypher, and even SQL. The primary focus in these situations is in-depth analysis, rather than achieving high throughput and low latency.
2. **OLTP**: These use cases require extremely high throughput — up to millions of operations per second — while delivering traversal results within milliseconds. Achieving such a level of performance often requires making trade-offs, which can include accepting eventual consistency or restricting query complexity. For example, the service can demand a specified starting point for traversals and enforce a maximum traversal depth. Such use cases are often directly tied to streaming or user experiences and demand high global availability.

Netflix’s Graph Abstraction was designed specifically for this second category of use cases. As of this writing, the abstraction is handling close to 10 million operations per second across 650 TB of graph datasets with low latency and cost efficiency.

This post is the first in a multi-part series that explores the Graph Abstraction architecture in depth. We’ll cover how the abstraction indexes data for real-time and historical views, manages strongly typed graphs, performs efficient traversals, and integrates with the Netflix Big Data ecosystem.

# Usage at Netflix

From a business standpoint, the primary driver for developing the Graph Abstraction was internal demand for supporting several key use cases:

- **Real-Time Distributed Graph (RDG)**: A graph capturing dynamic relationships across entities and interactions throughout the Netflix ecosystem. You can learn more about the initial RDG implementation in this insightful [blog post](https://netflixtechblog.medium.com/how-and-why-netflix-built-a-real-time-distributed-graph-part-2-building-a-scalable-storage-layer-ff4a8dbd3d1f). This functionality has since been integrated into the Graph Abstraction.
- **Social Graph**: A graph of social connections within Netflix Gaming, designed to boost user engagement.
- [**Service Topology**](https://netflixtechblog.com/from-silos-to-service-topology-why-netflix-built-a-real-time-service-map-0165ba13a7bc): A graph of all internal Netflix services, used for real-time and historical analysis to improve root cause analysis during incidents.

Let’s examine the overall architecture of the Graph Abstraction and how it integrates with the Netflix Online Datastore ecosystem.

# Architecture

Instead of building the persistence and caching layers from scratch, we chose to build taller on top of existing Netflix data abstractions.
