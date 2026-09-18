---
title: "Week 9: Cross-Game Comparative Economics"
description:
  Putting EVE Online, World of Warcraft and RuneScape's markets side by side
  — same underlying problem, three genuinely different mechanical answers.
week: 9
date: 2027-04-26
teachers:
  - sana-okafor-lindqvist
spec:
  - compares at least two of the three case-study games on a named, specific
    design axis (matching mechanism, sink strategy, or manipulation
    safeguard), not just "they're different"
  - explains one design choice each game made that the other two didn't,
    and a plausible reason for the difference
related:
  - sessions/09-comparative-market-teardown
  - assessments/scandal-case-study-essay
links:
  - label: "Grand Exchange — Old School RuneScape Wiki"
    url: https://oldschool.runescape.wiki/w/Grand_Exchange
  - label: "Auction House — Warcraft Wiki"
    url: https://warcraft.wiki.gg/wiki/Auction_House
  - label: "EVE Online Monthly Economic Reports (CCP Games)"
    url: https://www.eveonline.com/news/t/monthly-economic-reports
---

Three games, three market designs, one underlying problem: get a seller's
item to a buyer who wants it, at a price both would accept, without either
of them meeting.

| Dimension | EVE Online | World of Warcraft | Old School RuneScape |
|---|---|---|---|
| matching | regional order books, per station | listing-based [auction house](/glossary/#auction-house) | matched-order [Grand Exchange](/glossary/#grand-exchange) |
| primary sink | ship and module destruction | AH fees and deposits | GE tax (funds a scheduled item sink) |
| price transparency | full order-book visibility | listings only, no history | lagging "guide price", no live book |
| dominant manipulation risk | market cornering in thin regional markets | undercut-[bot](/glossary/#bot) warfare | manipulation within the enforced price band |

## What the differences actually mean

EVE's full order-book transparency is only viable because the destruction
sink (Week 5's fittings, exploding) constantly removes supply --- a
transparent market with no comparable sink would be far easier to corner
permanently. RuneScape's opaque, lagging guide price does the opposite job:
it trades transparency for manipulation resistance, at the cost of the
"real" price sometimes being invisible to players who only check the guide
number. WoW's split-then-unified realm history (faction-separated auction
houses, later merged into region-wide commodities) shows a designer
literally choosing market size as a lever --- a bigger, unified market is more
liquid and harder to corner, at the cost of realm-level identity.

None of these are "the right answer". Each is the right answer to what that
game's other systems already demand of it. Week 11 gives this idea --- that
a market's rules can be judged against a formal standard, not just
preference --- a proper name and a worked argument for why it holds.

## Studio this week

Comparative Market Teardown: pick two of the three case-study markets and
find one design choice in each that the other explicitly avoided.
