---
title: "Week 11: Mechanism Design and Game Theory Crossover"
description:
  Auction theory shows up in every market this course has studied — this is
  the week we name it properly and ask what it would mean to design one on
  purpose.
week: 11
date: 2027-05-10
teachers:
  - sana-okafor-lindqvist
spec:
  - explains, correctly, why a second-price (Vickrey-style) auction gives
    bidders an incentive to bid their true value, and where a first-price
    auction does not
  - proposes one concrete way a studied game's market could adopt a
    mechanism-design idea, and names the tradeoff it would introduce
related: []
---

Every market this course has looked at is, underneath the UI, a kind of
auction --- and auction theory has a genuinely rigorous answer to a question
game designers usually solve by feel: what rules make people bid what they
actually think something is worth?

## The core result, briefly

In a **first-price sealed-bid auction**, the winner pays what they bid, so
the rational move is to shade your bid below your true value --- bid your
real number and you win, but overpay. In a **second-price (Vickrey) auction**,
the winner pays the *second-highest* bid, which removes the incentive to
shade: bidding your true value is the dominant strategy, because the amount
you actually pay no longer depends on your own number.

None of the three case-study markets run a literal second-price auction, but
the *idea* --- design the payment rule so honesty is the winning strategy ---
is exactly the lever a designer is pulling whenever they add a price band, a
matching algorithm, or a delayed settlement to a market.

## Where this connects back

RuneScape's price band (Week 3) and EVE's fully transparent order book
(Week 9) are both, in mechanism-design terms, attempts to make the
*truthful* strategy also the *winning* one, just aimed at different failure
modes: the band against cornering, the transparency against information
asymmetry.

## Studio's over, but the question isn't

There's no dedicated studio for this week --- it feeds straight into the
capstone. Start thinking now about which market, and which specific
mechanism-design lever, your Economic Intervention Report will use.
