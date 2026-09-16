---
title: "Week 2: Faucets and Sinks"
description:
  The two pipes every game economy runs on — where currency comes from, and
  where it has to go, or inflation eats everything else you designed.
week: 2
date: 2027-03-01
teachers:
  - sana-okafor-lindqvist
spec:
  - names at least three distinct faucets and three distinct sinks from at
    least two different games, not restatements of the lecture's own examples
  - explains why a sink that only wealthy players can afford doesn't control
    inflation for anyone else
related: []
---

Every unit of currency in a live game has a birth certificate: a quest
reward, a mission payout, a mining tick, a daily login bonus. Every one of
those is a faucet. If faucets ran unopposed, the currency would inflate until
it was worthless --- which is exactly what "gold farmer" panics and "the market
is broken" complaints usually are: an economy with more coming in than going
out.

## Faucets

- **flat**: same payout regardless of player skill or time invested (login
  rewards)
- **scaling**: payout tracks player power, which means it scales with
  inflation itself (mission bounties that get better as your character
  does)
- **market-adjacent**: currency created by selling something to an NPC buyer
  at a fixed price, which decouples that item's price from player demand
  entirely

## Sinks

- **repair and maintenance**: durability loss, ammunition, consumables ---
  currency that leaves just by playing normally
- **market taxes**: a cut taken on every trade, which is also a sink that
  scales with how active the economy is
- **vanity and prestige**: cosmetics priced deliberately high, because the
  point is that most players *can't* afford them
- **respec and correction costs**: a tax on changing your mind, which is
  unpopular exactly because players notice it as a sink

## The lever that matters

A designer can't set "the inflation rate" the way a central bank sets an
interest rate --- there's no single knob. What they can do is watch the ratio
of total faucet output to total sink absorption over time, in a
Monthly-Economic-Report-style breakdown, and add or widen a sink when that
ratio drifts. This is duller than it sounds, and it is most of the actual
job.

This is also where intuition about "the" faucet goes wrong. It's tempting to
assume a game's cash-shop currency exchange --- EVE's PLEX, which converts
real money into tradeable in-game value --- is the dominant source of new
ISK, since it's the one with a price tag attached. Independent analysis of
EVE's January 2026 Monthly Economic Report found the opposite: raw ISK
faucets (missions, bounties, and the like) added roughly 203.6 trillion ISK
that month, against about 28.7 trillion ISK moving through PLEX --- PLEX
accounted for only around a seventh of new inflow. The unglamorous faucets a
designer never has to advertise are usually doing most of the work.

## Before Week 3

Bring one faucet and one sink from a game you actually play, described
precisely enough that someone who's never played it could identify both in
a transaction log.
