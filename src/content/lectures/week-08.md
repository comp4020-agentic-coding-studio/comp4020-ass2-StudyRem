---
title: "Week 8: Market Manipulation and Real Scandals"
description:
  The Guiding Hand Social Club heist, and what a decades-old player scandal
  still teaches about the difference between a bug and a working system.
week: 8
date: 2027-04-19
teachers:
  - sana-okafor-lindqvist
spec:
  - accurately describes the mechanics of at least one real documented
    market or social-engineering exploit, not just its outcome
  - argues, with reasons, whether a named exploit was a design failure or
    the system working as specified against an unanticipated strategy
  - distinguishes an illicit, bot-driven faucet from manipulation of a
    legitimate one, and explains why enforcement rather than a new sink is
    the fix for the former
related:
  - assessments/scandal-case-study-essay
links:
  - label: "Most hostile corporate takeover in EVE Online — Guinness World Records"
    url: https://www.guinnessworldrecords.com/world-records/88183-most-hostile-corporate-takeover-in-eve-online
  - label: "Murder Incorporated: ten months of deception for one kill in EVE Online — PC Gamer"
    url: https://www.pcgamer.com/murder-incorporated-ten-months-of-deception-for-one-kill-in-eve-online/
  - label: "How a failed Kickstarter sparked one of the biggest battles in EVE Online history — PC Gamer"
    url: https://www.pcgamer.com/how-a-failed-kickstarter-sparked-eve-onlines-second-largest-battle-ever/
  - label: "EVE Online Bans Gambling Sites — The Nosy Gamer"
    url: https://nosygamer.blogspot.com/2016/10/eve-online-bans-gambling-sites.html
---

In April 2005, a mercenary corporation called the Guiding Hand Social Club
spent close to a year infiltrating a rival corporation, Ubiqua Seraph, before
assassinating its CEO and walking away with assets worth an estimated tens of
billions of ISK --- reported at the time as somewhere north of $16,000 in
real-world terms. Nothing about the operation broke a rule. Every step ---
earning trust, gaining hangar access, timing the kill --- used mechanics the
game provided to every player. It is still one of the most cited examples in
this course's field precisely because it is *not* a bug report.

## Why "was this legitimate" is the wrong first question

The interesting design question isn't whether GHSC should have been banned
(they weren't), it's what the incident reveals about the systems that made it
possible: unrestricted corporation hangar permissions, no cooldown on
promoting a trusted member to full access, and no in-game signal that would
have let Ubiqua Seraph notice the setup before it was too late. Every one of
those is a design decision, not a law of physics, and every one is still a
live design choice in games built after 2005.

## Market manipulation, more mundanely

Most manipulation is far less cinematic: buy out the visible supply of a
thinly-traded item, relist high, profit from anyone who needs it before
supply recovers. Section 3's Grand Exchange price band exists specifically
because this pattern is common and mechanically simple to pull off without
a year of social engineering.

## Illicit faucets: a different kind of exploit

Everything above is manipulation of an already-legitimate faucet or a
market's own rules. A quieter, separate category is an illicit faucet:
currency injected by bots grinding missions or farming resources around the
clock, which is functionally a faucet Week 2's design vocabulary never
accounted for and can't tune the normal way. CCP has kept a full-time
in-house economist for over a decade partly because of exactly this --- an
illicit faucet doesn't announce itself as "manipulation" in a transaction
log, it shows up as inflation with no matching legitimate source, and the
only real fix is enforcement (finding and banning the bots), not a wider
sink. Keep it distinct from everything else this week covers: manipulation
abuses rules that are meant to exist; an illicit faucet operates outside
whatever the designers thought they were tracking at all.

## A second incident: manipulation that funded a war

Not every scandal stays contained to a market. In early 2016, a loose
coalition that came to be known as the MoneyBadger Coalition fought a war
against the long-standing Imperium alliance for control of null-sec
territory --- a war substantially bankrolled by an unlicensed in-game
gambling site, IWantISK, which paid mercenary alliances directly in ISK to
attack Imperium space. The arrangement didn't last: CCP banned ISK
gambling outright later that same year, and losing that funding is widely
credited as a large part of why the war wound down when it did. That's a
market-integrity violation directly bankrolling, and then ending, a
military campaign --- a different shape of "was this the system working as
specified" than GHSC's heist. GHSC exploited permissions the game meant to
grant; IWantISK exploited a gap the EULA had never closed, and CCP's
eventual response was the same fix this week's illicit-faucet section
argues for: not a wider sink, but shutting the operation down outright.
Retrospectives differ on exactly how much of the war's funding traces to
IWantISK specifically, so treat that proportion as reported rather than
settled if you use this incident for the essay.

## Before the assessment

The Scandal Case Study Essay (due next week) asks you to do this same
analysis --- mechanism, not just headline --- for an incident you research
yourself.
