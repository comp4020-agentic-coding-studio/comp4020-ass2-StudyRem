---
title: "Week 1: Economies as Designed Systems"
description:
  Why a virtual economy is not a metaphor for a real one --- it's a system
  someone wrote code for, with all the same failure modes a bad API has.
week: 1
date: 2027-02-22
teachers:
  - sana-okafor-lindqvist
spec:
  - identifies at least three concrete design levers a game economy designer
    controls that a real-world central bank does not
  - distinguishes a currency sink from a currency faucet with an example of
    each from a named game
related: []
links:
  - label: "EVE Online Monthly Economic Reports (CCP Games)"
    url: https://www.eveonline.com/news/t/monthly-economic-reports
---

A national economy has millions of independent actors, no reset button, and
no logs. A game economy has a database. Every trade, every currency drop,
every item destroyed is a row somewhere, and the person balancing the economy
can query all of it. This is the central claim of the course: a virtual
economy is not a toy version of a real one, it's a *fully observable* one, and
that observability is what makes it a genuinely different design problem, not
a simplified one.

## Three levers no central bank has

A central bank sets rates and reserve requirements and then waits, via
millions of independent decisions, to find out if it worked. A game
economy designer has levers with no real-world equivalent:

1. **total observability**: a central bank estimates spending from surveys
   and sampled data; a designer can query the exact row for any single
   trade, drop, or destruction event, for every player, at any time.
2. **reversal**: a designer can delete or rewind one specific player's one
   specific transaction directly in the database. A central bank cannot
   unwind a single citizen's already-completed purchase by fiat.
3. **outright prohibition**: "just don't let players do that" bans a
   category of action outright, at the code level rather than merely
   discouraging it economically --- the bluntest of the three levers, and
   the one designers reach for constantly anyway.

## Outline

- what "the economy" means for a game that has no bank, no interest rate, and
  no unemployment --- just numbers that go up when the server says so
- **faucets and sinks**: every unit of currency in a live game either came
  from a faucet (a quest reward --- World of Warcraft's daily quest
  turn-ins pay out whether or not the game "needs" more gold in
  circulation) or will eventually leave through a sink (a repair bill ---
  EVE Online's ammunition and module losses in combat, which disappear
  from the economy the moment they're consumed). The entire semester is
  going to keep coming back to this pair.
- what this course is going to ask of you: read real published data (EVE
  Online's Monthly Economic Reports are public and free), and treat game
  economies as systems worth taking seriously rather than as jokes about
  "gold farmers"

## Before Week 2

Skim one EVE Online Monthly Economic Report (any recent one; they're on CCP's
developer site). You don't need to understand every chart. Come with one
number from it you didn't expect.
