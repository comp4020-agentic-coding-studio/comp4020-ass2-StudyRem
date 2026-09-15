# Process overview

## What I built

**SLOP3133, "Spreadsheets at War: Designing Player-Run Economies"** — a
systems-design course for computing/engineering students that treats virtual
economies (EVE Online, World of Warcraft, Old School RuneScape) not as trivia
but as real, publicly-documented datasets for teaching faucet/sink balance,
market microstructure, and mechanism design. The throughline is EVE Online's
decade of Monthly Economic Reports, used as the spine case study from Week 4
onward; WoW and RuneScape are brought in from Week 9 as comparative
mechanism-design answers to the same underlying problem.

## How I got here

I started by reading the fixed platform — `src/content.config.ts`'s four
collection schemas and the starter's `STARTER_CONTENT`/placeholder-image gates
— before deciding anything. From a longer brainstorm I picked player-run
economy design over the alternatives because it's genuinely something I know,
which made shallow filler harder to write than real content.

Course identity went in first
([`b17f01a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/b17f01a),
corrected to the intended `SLOP3133` code in
[`395962e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/395962e)),
alongside the `CLAUDE.md` working rules I decided to hold myself to: commit
locally and never push without being asked again, get sign-off on a plan
before big changes, and — because every lecture and assessment here leans on
a real published dataset or incident — cite every real-world fact with a
WebSearch-verified URL rather than a guessed one. That last rule shows up
throughout `links:` frontmatter and is enforced again in the policies page's
"Data sources and citation" section, which treats an uncited or invented
number as an integrity issue, not a formatting slip.

People, lectures, the Week 4 deck, sessions, and assessments followed in that
order
([`e78050c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/e78050c)
through
[`84d8e31`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/84d8e31)).
The capstone is where I changed my own plan mid-build: my first draft called
it "Design Your Own Economy," but a from-scratch design has no real context
to be right or wrong about, so I renamed it
[`84d8e31`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/84d8e31)
to "Capstone: Economic Intervention Report" — students must name a real
documented economy and a real problem in it, then scope an intervention,
which also keeps it distinct from Week 6's smaller in-class patching
exercise.

Homepage and policies copy replaced the last `STARTER_CONTENT` markers in
[`be48f5f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/be48f5f).
For the four gated images I generated original flat two-ink SVG art (a
candlestick chart, coin stacks, distinct-hairstyle portrait busts) and
rasterised it with the project's own `sharp` dependency rather than fetching
or guessing artwork
([`d2e982c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/d2e982c)).
That same commit fixes a real bug the full `pnpm build` caught that
`astro check` didn't: an empty leading `<th>` in Week 9's comparison table
tripped the theme's built-in axe-core audit, which is exactly the kind of
thing that check exists to catch.

Finally, I wrote three `spec/*.test.ts` files for promises the schema and
build don't already enforce
([`257428e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/257428e)):
assessment weights summing to exactly 100 across entries (the schema only
validates one entry's internal criteria sum), at least one lecture's slide
link resolving to a real deck file on disk, and weeks 1–12 each covered
exactly once with strictly ascending in-period dates. All three went green
immediately, because the content was already written and correct by that
point — they're regression backpressure for future edits, not scaffolding I
built content against.

What I left to a human marker rather than a test: whether the case-study
analogies actually teach the underlying mechanism-design ideas, whether the
two-ink art direction reads as coherent branding, and whether the capstone's
40/30/30 weighting is the right split. Those are judgement calls, not
checkable contracts.

## Before you ship

`pnpm check:evidence` verifies this file has no leftover template markers and
that its commit citations resolve to real commits in this repo. It checks
that the account is traceable, not that it is good — that's the marker's
call.
