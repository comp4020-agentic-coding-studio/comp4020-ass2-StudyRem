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
links:
  - label:
      "A Different Look At EVE Online's Monthly Economic Report For January
      2026 — The Nosy Gamer"
    url: https://nosygamer.blogspot.com/2026/02/a-different-look-at-eve-onlines-monthly.html
---

Every unit of currency in a live game has a birth certificate: a quest
reward, a mission payout, a mining tick, a daily login bonus. Every one of
those is a faucet. If faucets ran unopposed, the currency would inflate until
it was worthless --- which is exactly what "gold farmer" panics and "the market
is broken" complaints usually are: an economy with more coming in than going
out.

## Faucets

- **flat**: same payout regardless of player skill or time invested ---
  World of Warcraft's daily and weekly quest turn-ins pay the same gold
  whether a level-10 alt or a max-level main does them
- **scaling**: payout tracks player power, which means it scales with
  inflation itself --- EVE Online mission bounties get larger as a pilot
  flies bigger, more expensive ships, so the reward inflates alongside the
  cost of playing at that level
- **market-adjacent**: currency created by selling something to an NPC buyer
  at a fixed price, which decouples that item's price from player demand
  entirely --- Old School RuneScape's General Store buys back common items
  at a set price no matter how flooded the market already is

## Sinks

- **repair and maintenance**: durability loss, ammunition, consumables ---
  currency that leaves just by playing normally, whether that's EVE's
  ammunition and module losses in combat or OSRS's food and potions burned
  on a single boss trip
- **market taxes**: a cut taken on every trade, which is also a sink that
  scales with how active the economy is --- OSRS's Grand Exchange tax takes
  a flat percentage off nearly every sale
- **vanity and prestige**: cosmetics priced deliberately high, because the
  point is that most players *can't* afford them --- WoW sells gold-cost
  mounts and toys priced in the hundreds of thousands of gold for exactly
  this reason
- **respec and correction costs**: a tax on changing your mind, which is
  unpopular exactly because players notice it as a sink --- WoW's talent and
  glyph respec fees exist for no other reason

## The lever that matters

A designer can't set "the inflation rate" the way a central bank sets an
interest rate --- there's no single knob. What they can do is watch the ratio
of total faucet output to total sink absorption over time, in a
Monthly-Economic-Report-style breakdown, and add or widen a sink when that
ratio drifts. This is duller than it sounds, and it is most of the actual
job.

This is also where intuition about "the" faucet needs checking against
data, not guessed at. It's tempting to assume a game's cash-shop currency
exchange --- EVE's PLEX, which converts real money into tradeable in-game
value --- is a side channel next to the "real" faucets like missions and
bounties, since those are the ones a designer actually tunes. An independent
analysis of EVE's January 2026 Monthly Economic Report found the two are
much closer than that intuition suggests: raw ISK faucets added roughly
203.6 trillion ISK that month, while players traded roughly 175.1 trillion
ISK for PLEX on the open market --- worth about 86% of total faucet inflow,
not a rounding error next to it. PLEX itself isn't a faucet (it's ISK
changing hands between two players, not currency created from nothing), so
it doesn't belong on the same side of the ledger as a mission payout --- but
a channel that size means real money is doing nearly as much work moving
ISK around the economy as every mission board in the game combined, which
is exactly the kind of thing "the faucet is obviously X" intuition misses
without a report to check it against.

## Before Week 3

Bring one faucet and one sink from a game you actually play, described
precisely enough that someone who's never played it could identify both in
a transaction log.
