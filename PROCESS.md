# Process overview

Written by you, for a reader: how you got from the brief to the harness and
agentic workflow behind this submission. Markers read this file and follow its
citations; they don't trawl the repo for evidence you didn't point at.

This file is the shape; the course site's
[assessment page](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#what-you-submit)
is the requirement, and its
[word counts](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#word-counts)
cover every deliverable.

## What I built

SLOP6133, "Spreadsheets at War: Designing Player-Run Economies": a 12-week
course site on the course's fixed Astro platform. It uses virtual economies
(EVE Online, Old School RuneScape, World of Warcraft) as case studies for
economic-systems design — faucets and sinks, pricing mechanisms, market
manipulation, mechanism design, and the industrial/political systems that
drive a virtual economy's actual behaviour. The 12 weeks move from shared
vocabulary (weeks 1–3) through a single deep EVE case study (weeks 4–8) to
cross-game comparison and formal modelling (weeks 9–11), ending in a
capstone where students design and defend their own intervention (week 12).

Content: 12 lectures, 5 studio sessions, 4 assessments, and a glossary
linking in-game jargon to plain-language definitions. A small `spec/` test
suite enforces what's mechanically checkable in the brief.

## How I got here

I built the twelve weeks of content by asking the agent to research each
real-world claim before writing it — every lecture and assessment cites a
web-search-verified source rather than an invented number, a rule fixed
early in `CLAUDE.md`. Once that seemed to be working, I assumed verification
would be just as easy, since most of it was checkable against public
sources, so I asked the same agent, in the same conversation, to audit its
own work directly: did the skeleton hold together, did each lecture actually
teach what it promised.

On 2026-09-16 it said yes, cleanly — every lecture's `spec:` promise met. I
felt something was off, but even asking it to audit directly, in that same
thread, never turned up what I was sensing. What actually gave it away was
the shape of the answer, not its content: a genuine first read of twelve
lectures should turn up close, specific findings per lecture; instead I got
one short, general pass over all of them — the signature of an answer
pulled from what it remembered writing rather than from reading the page in
front of it.

Two days later I asked it to re-run the same check with six fresh
subagents instead, one per lecture, briefed with no memory of writing the
content and no stake in defending it. This time the verdict reversed: 9 of
the 12 `spec:` lines were only partially met or not met at all, on the
exact weeks the in-context self-audit had just cleared, with nothing about
the content changed in between. The fix landed as six commits, one per
week:
[`3894560`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/3894560)
(Week 1),
[`b412858`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/b412858)
(Week 5),
[`b67c55d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/b67c55d)
(Week 6),
[`982686f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/982686f)
(Week 10),
[`ec21f0c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/ec21f0c)
(Week 11), and
[`c8a3b16`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/c8a3b16)
(Week 12).

The reason isn't carelessness. An agent auditing content inside the context
where it reasoned its way to that content is anchored by that reasoning; a
subagent with no memory of writing it and no stake in defending it reads it
the way a real reader would. I turned this into a standing `CLAUDE.md` rule
([`6980101`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/6980101)):
any audit goes to a fresh, context-free subagent standing in a client's or
audience's position, never back to the thread that produced the content.

> I find continually ask to audit in main agent is insufficient and the
> agent might be misguided by the context, so I turn to ask to create new
> subagent with no context to audit.

The same pattern caught real problems again in a citation-accuracy pass
across the EVE/game-economy claims
([`a388ba7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/a388ba7)
...
[`3e0e099`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/3e0e099))
and a jargon-accessibility pass that became a
[glossary page](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/e06c6f7)
plus a WoW/OSRS terminology fix
([`5dd0ee2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-StudyRem/commit/5dd0ee2)).
