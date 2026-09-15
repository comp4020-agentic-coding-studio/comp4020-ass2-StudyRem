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

Neither number is the whole story on its own. A cheap, disposable fit with a
mediocre EHP-per-ISK ratio can still be the correct choice if losing it
doesn't hurt --- which is its own economic argument, just phrased as risk
tolerance rather than a ratio.

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
