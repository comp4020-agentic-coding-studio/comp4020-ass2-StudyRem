# Your harness

The rules you hold the agent to are part of what gets marked, so they should be
rules you decided on.

Nothing about the starter is recorded here. The platform under you is fixed and
documented in `README.md`, and the
[course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/)
publishes this deliverable's brief and spec. Read both before you plan or build;
what the agent needs to carry from either is your call.

## My working rules

- **Check the course plugin for updates before starting a new crit or
  assignment.** Run `claude plugin update comp4020@comp4020` (and
  `comp4020-statusline@comp4020` while you're at it) before running **start**
  for a new deliverable, and restart the session if it reports an update ---
  a stale plugin means `start` is pulling specs or running checks against
  outdated skill logic without either of us noticing. Once caught genuinely
  out of date by several releases (0.12.4 installed while 0.13.0--0.14.0 had
  shipped), so this isn't hypothetical --- check it every time, not just when
  something seems off.
- **Commit locally, don't push without asking.** Commit every meaningful
  change as you go (a new file, a spec test, a harness edit, a working
  feature) --- don't batch everything into one commit at the end. But never run
  `git push`, open a PR, or otherwise touch the remote unless I explicitly ask
  for that push in the same turn. Approval to push once does not carry
  forward --- ask again next time. This repo stays private and local-only
  until I say otherwise.
- **When I name the deliverable, summarize the spec back to me.** If I tell
  you which crit or assignment we're working on, after you've finished any
  initialization work (cloning, installing, pulling the spec, writing starter
  tests), give me a brief summary of that week's spec before we start
  building --- what's mechanically checkable vs. judged at the crit, and the
  cutoff. I shouldn't have to re-read the brief myself to know what we're
  aiming at.
- **Big changes get a plan first.** If a change is big --- a new feature, a
  restructure, anything touching multiple files or the content/information
  model --- write out a detailed implementation plan and get my sign-off
  before writing code. Small, mechanical, or single-file edits don't need
  this; use judgement on where the line is.
- **Audits go to a clean subagent, not the main thread.** When I ask you to
  audit something (content, a claim, prior work), don't do it yourself in
  this same conversation --- spin up a fresh subagent with no prior context
  and have it review from a client's or audience's position, not an
  author's. Asking the agent that already produced or discussed the content
  to also audit it is insufficient: it's anchored by its own context and
  tends to see what it meant rather than what's actually on the page. A
  subagent with no stake in the content and no memory of writing it reads it
  the way a real reader would.
