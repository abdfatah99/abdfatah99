---
title: "Dynamic Repartitioning for Time Series Workloads"
date: "2026-06-03"
description: "Distributed system for partitions"
author: "John Doe"
tags: ["Distributed System"]
---

Introduction

Netflix’s TimeSeries Abstraction is a scalable system for ingesting and querying petabytes of temporal event data with millisecond latency. We use Apache Cassandra 4.x as the underlying storage for these main reasons:

    Throughput, latency, and cost: Cassandra can handle millions of low‑latency reads and writes in a cost-effective manner.
    Operational maturity: Our data platform team has deep operational expertise running large Cassandra clusters in production.

However, using Cassandra at this scale introduces trade‑offs for TimeSeries workloads. A key challenge is wide partitions, as TimeSeries dataset partitions can grow quite large with events accumulating over time.

This problem is further compounded by the fact that TimeSeries servers routinely deal with a very high read throughput: