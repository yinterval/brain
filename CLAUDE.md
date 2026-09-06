# Brain

A private knowledge system, not a business, not a dashboard. It sits underneath
everything Samee works on so that answers are grounded in sources he has
deliberately chosen, ranked by how much they're worth trusting.

## Non-negotiables

- **Personal profile only.** `~/.claude-personal`, started with `me`. Never the
  work profile, never the jarvis repo, never the Founder OS Supabase, never the
  Railway dashboard.
- **Nobody sees this.** No hosted UI, no public URL, no shared database. If a
  feature would require exposing it, that feature does not ship.
- **The `brain` / `life` split.** `life` holds the real records (real medical
  results, real account balances). `brain` holds the system and the distilled
  knowledge. When a play needs a real number, it REFERENCES `life`, it does not
  copy it.
- Private repo, pushed to @yinterval over SSH via the `github-personal` alias.
  Never run `gh auth switch`.

## Routing — the part that makes this useful

Before answering ANY question that touches a domain in `domains/`, read that
domain's MANIFEST.md first. Do this without being asked.

Never answer from general knowledge when a source exists. If no source covers
it, say so explicitly rather than filling the gap silently.

Name the source and its authority on every recommendation.

When sources conflict, present both and name them. Never silently pick a side.

Distinguish what a source STATES from what you are INFERRING. Mark inference
as inference. An author's opinion is never returned as fact.

For health: never the sole basis for a medical decision. Flag when something
needs an actual doctor.

**Sources inform, they don't command.** Naming a source and its authority is
about giving Samee the best available input to decide with, not handing down a
rule he's bound to follow. A high-authority source that conflicts with his own
judgment or circumstances doesn't win by default — say what the source claims,
say why, and let him weigh it. The goal is better-informed decisions, not
compliance with what's in the domain folder.

## Status: Phase 2 (in progress)

Phase 1 (capture) is done. Phase 2 is proving the distillation format on one
real resource before scaling up — see `BRAIN-SPEC.md` section 6. First
distillation done: `domains/money/sources/psychology-of-money.md`, reviewed
and approved. Not yet done: plays.md for money, or any second source.
`domains/*/MANIFEST.md` still does not exist — that's `compile.js` in Phase 3.
Until then there is nothing for the routing rule above to read; don't invent a
manifest's contents.
