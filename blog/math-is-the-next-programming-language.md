---
title: Mathematic is the Next Programming Language
description: AI work the code for you, you define the math for the problem
date: 06/08/2026
---

# Mathematics Is the Next Programming Language

There's a popular claim going around: English is becoming the next programming language. Just describe what you want, and the AI writes the code. I disagree — not because the idea is wrong, but because it's incomplete. English can describe a problem, but describing a problem is not the same as understanding it. And without understanding, you can't ask for the right thing in the first place.

What actually closes that gap is mathematics.

## A Small Problem With Water

Imagine water flowing down a surface. It has a speed. Now put a rock in its path. The water slows down, backs up a little, and finds a new equilibrium.

Simple enough to describe in English: "the rock slowed the water down." But that sentence doesn't tell you what to _do_ about it.

Here's the real question: if you want to keep the water flowing at its original speed, with the rock still in place, what do you change?

The answer is the slope of the surface. Increase the incline enough, and gravity pulls the water through the obstruction fast enough to compensate. But "enough" isn't a feeling — it's a number, and that number comes from a relationship between three quantities: flow speed, obstruction, and slope. Once you write that relationship down as a formula, the problem stops being a vague description and becomes something you can actually solve, test, and adjust.

That's the whole idea in miniature. English identifies that a problem exists. Mathematics tells you the shape of the problem — which variables matter, how they depend on each other, and what has to change to get the outcome you want.

## Where This Actually Matters

Swap the water flow for a real business problem and the pattern repeats.

- Water speed → some system's throughput (orders processed, users onboarded, requests served)
- The rock → a new constraint (a cost cut, a compliance rule, a supply shortage)
- The slope → the lever you're actually allowed to pull (price, staffing, batch size, timing)

"Our conversion rate dropped after we added a verification step" is an English sentence. It's true, and it's useless on its own. The useful version is a model: what's the relationship between verification friction, drop-off rate, and the lever you can actually adjust — trust signals, step count, timing? Once that relationship exists as something explicit, you can reason about it, simulate it, and hand the actual computation off to a machine.

This is the part I think is underrated right now. Writing code used to be the bottleneck between an idea and a working solution. LLMs have mostly closed that gap — they'll turn a well-specified problem into working code faster than a human can type it. But "well-specified" is doing a lot of work in that sentence. Someone still has to figure out what the right relationship _is_. That step doesn't go away just because the next step got automated. If anything, it becomes the entire job.

## Where I'd Push Back on Myself

Not every real-world problem is a slope waiting to be discovered. Water flow is a closed system — three variables, one well-understood physical law connecting them. Most business problems are messier: incomplete data, people behaving inconsistently, variables you can't directly measure. Forcing a clean formula onto a fundamentally fuzzy situation is its own failure mode — false precision is worse than honest ambiguity.

So the skill isn't "reduce everything to math." It's knowing _which parts_ of a problem are stable enough to formalize, and being honest about the parts that still need judgment, statistics, or plain human intuition. That distinction — what to formalize versus what to leave open — might be the harder and more valuable skill of the two.

## The Actual Claim

English gets you to a description. Mathematics gets you to a _constraint_ — something that's either consistent with reality or it isn't, something you can check, adjust, and hand to a machine to compute.

As AI keeps closing the gap between "well-specified problem" and "working solution," the scarce skill isn't writing the code anymore. It's building the model that the code is supposed to satisfy. That's what I mean by mathematics being the next programming language: not a replacement for code, but the layer above it that decides whether the code is even solving the right problem.
