---
title: "Week 3: Market Design and Price Discovery"
description:
  Order books, guide prices, and why Old School RuneScape's Grand Exchange
  and a stock exchange are closer cousins than either fandom would like.
week: 3
date: 2027-03-08
teachers:
  - sana-okafor-lindqvist
spec:
  - correctly distinguishes a matched-order market (Grand Exchange style)
    from a direct player-to-player listing market (auction-house style)
  - identifies one deliberate anti-manipulation safeguard in a named game's
    market and explains what exploit it was built to close
related:
  - sessions/03-market-data-lab
links:
  - label: "Grand Exchange — Old School RuneScape Wiki"
    url: https://oldschool.runescape.wiki/w/Grand_Exchange
---

A market needs a way to turn "I'll sell for at least X" and "I'll buy for at
most Y" into an actual trade, and different games have made genuinely
different choices here.

## Two shapes of market

**Matched-order books** (RuneScape's Grand Exchange): players post buy and
sell offers into a shared queue, and the system matches them automatically at
a clearing price. Nobody meets anybody. The published "guide price" is a
lagging average of recent trades, not a live order-book snapshot --- which
means the number on screen and the number you'll actually pay can quietly
diverge, especially for anything traded rarely.

**Listing markets** (a WoW-style auction house): sellers post a fixed asking
price, buyers browse and buy at that price or don't. There's no matching
engine deciding a clearing price --- the "market price" is just whatever the
crowd of current listings happens to say, which makes it easier to manipulate
with a handful of coordinated accounts.

## Why the Grand Exchange enforces a price band

The Grand Exchange caps how far an offer can sit from its guide price. That
isn't a courtesy --- it's a scar. A market with no band is trivially cornered:
buy up the visible supply, then relist it at ten times the price to anyone
desperate enough. The band doesn't eliminate manipulation, it just raises the
capital required to move the price meaningfully, which is the same tool a
real securities exchange's circuit breaker is doing, aimed at a different
failure mode. There's a general theory for why a rule like this is the
"correct" fix rather than just a plausible one --- Week 11 names it properly.

## Studio this week

Market Data Lab: you'll get a real (anonymised) slice of trade data and be
asked to find where price and guide-price diverge, and why.
