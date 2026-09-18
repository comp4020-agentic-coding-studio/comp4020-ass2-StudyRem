---
title: "Week 5: Numerical Balancing — The Ship-Fitting Problem"
description:
  Why "make it better" is not a balance patch, and how DPS-per-ISK and
  effective-hitpoints-per-ISK turn a vibe into a number you can compare.
week: 5
date: 2027-03-22
teachers:
  - sana-okafor-lindqvist
spec:
  - constructs a cost-effectiveness ratio (a "per-currency-unit" metric) for
    at least two competing in-game options and uses it to make a concrete
    recommendation
  - identifies at least one case where the numerically "better" option is
    still the wrong recommendation, and explains why
related:
  - sessions/05-balance-sheet-clinic
---

A ship, a weapon loadout, a build --- any of them can be evaluated the same
way: what did it cost, and what does it do. Divide one by the other and
you get a ratio you can actually rank things by, instead of arguing about
which one "feels" stronger.

## The two numbers that matter most

- **damage per second per unit of currency spent** — a raw offensive
  cost-effectiveness ratio
- **effective hit points per unit of currency spent** — the same idea for
  survivability, where "effective" already folds in resistances and
  active mitigation, not just a raw health number

## A worked example

Take two illustrative fits priced in the same currency (numbers invented
for this example, not a published stat): Fit A costs 10 million ISK and
does 400 effective DPS --- 40 DPS per million. Fit B costs 15 million ISK
and does 750 effective DPS --- 50 DPS per million. Fit B wins the ratio by
a wide margin, and if raw offensive output per ISK spent is the whole
question, Fit B is the recommendation.

But run the same two fits through EHP-per-ISK and the story flips: Fit A
has 8,000 effective hit points (800 EHP/million), while Fit B, built light
to hit that DPS number, only has 6,000 (400 EHP/million). Neither ratio is
"the" answer --- the recommendation depends on which one the situation
actually calls for, which is the entire point of building both numbers
instead of picking one.

Neither number is the whole story on its own. A cheap, disposable fit with a
mediocre EHP-per-ISK ratio can still be the correct choice if losing it
doesn't hurt --- which is its own economic argument, just phrased as risk
tolerance rather than a ratio. The reverse trap is just as real: Fit B's
DPS/ISK ratio is the best number on the sheet, but if the fight is slow and
attritional rather than a burst trade, its lower EHP means it dies before
that DPS advantage has time to matter. The numerically better option loses
because the ratio it wins on isn't the one the engagement is actually
testing.

## Why this is a balance problem, not just a spreadsheet problem

If one fitting philosophy dominates every ratio at every price point,
players converge on it and the rest of the design space stops mattering ---
the "solved game" failure mode. A designer reads these ratios not to find
"the best" build, but to find where the ratios are *too* flat or *too*
peaked, and nudges price or performance until there's a real choice again.

## Studio this week

Balance Sheet Clinic: you'll be given real cost and performance data for a
small set of competing options and asked to build the ratio yourself, then
argue for a rebalance using it.
