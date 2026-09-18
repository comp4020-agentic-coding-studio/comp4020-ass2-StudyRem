---
title: "Week 10: Agent-Based Economic Modeling"
description:
  Guest lecture — thousands of simple trading agents, none of them smart,
  still manage to reproduce the bubbles and crashes a real market produces.
week: 10
date: 2027-05-03
teachers:
  - lior-tanaka-bramwell
spec:
  - describes what a trading agent in an agent-based model actually needs
    (a strategy, a budget, a way to observe price) without overstating it
    as "AI"
  - identifies one emergent behaviour the lecture claims arises from agent
    interaction rather than from any single agent's design
related: []
---

*Guest lecture by Dr. Lior Tanaka-Bramwell.*

You don't need a smart agent to get a realistic-looking market. You need
enough of them, each running a simple rule --- buy under a threshold, sell
above it, adjust the threshold slowly based on recent trades --- and the
*interaction* between thousands of dumb agents produces price bubbles, herd
selling, and crashes that look uncannily like the real thing, without any
single agent intending any of it.

Three ingredients are enough, and none of them require anything you'd call
intelligence: a strategy (the buy/sell rule above), a way to observe price
(what "recent trades" the threshold adjusts against), and a budget --- each
agent starts with a fixed stash of currency and stock, so its rule can only
ever act on what it actually holds, not a hypothetical unlimited wallet.
That budget constraint is what turns a simple rule into something that can
run out of room to buy or sell, which is exactly the kind of pressure that
produces a crash instead of a smooth line.

## Why this matters for a game economy specifically

A live game economy already has thousands of real, if unpredictable, human
agents running exactly this kind of simple heuristic --- "buy low, sell
high", "panic if the price drops fast", "follow whatever the streamer just
recommended". An agent-based model built from those same simple rules is
cheap to run and can be stress-tested in ways a live economy never can: what
happens if a new item floods the market overnight, or a sink gets removed
without warning. It's how a designer gets an early answer to "will this
break the game" before it ships.

## What the model can't tell you

An agent-based model is only as honest as its rules. If the model's agents
don't include the deliberately weird behaviour real players show ---
speculative hoarding ahead of an announced patch, or a coordinated guild
deciding to crash a market out of spite --- the model will confidently
predict stability right up until a real, ungoverned crowd of players proves
it wrong.

## No studio this week

There's no studio session this week --- this is a single guest lecture, kept
deliberately self-contained so it doesn't create dependencies on a session
Lior isn't teaching.
