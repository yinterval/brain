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

## Domains — the five pillars

Everything captured belongs to one of five domains, the same five pillars as
`life`:

| Domain folder | Pillar | Also covers when Sam says |
|---|---|---|
| `domains/faith/` | Faith | Islam, religious practice |
| `domains/family/` | Family | people, parenting, relationships |
| `domains/fitness/` | Fitness | health, training, nutrition, medical |
| `domains/finance/` | Finance | money, business, trading, investing |
| `domains/fun/` | Fun | trips, hobbies, things worth doing |

**When Sam shares something and says "add this to brain,"** pick the domain
from the content, not from the exact word he used — he'll say "money" or
"health" or "business" interchangeably and all of them map to a pillar above.
If a resource genuinely spans two pillars (e.g. a book on money and family
planning), pick the primary one and note the overlap in the distillation's
"What it contradicts" or a new line under "What it claims" — don't invent a
sixth folder or split it across two.

If it's genuinely ambiguous which pillar fits, ask rather than guess.

## Routing — the part that makes this useful

Before answering ANY question that touches a domain in `domains/`, read that
domain's MANIFEST.md first. Do this without being asked.

Never answer from general knowledge when a source exists. If no source covers
it, say so explicitly rather than filling the gap silently.

Name the source and its authority on every recommendation.

When sources conflict, present both and name them. Never silently pick a side.

Distinguish what a source STATES from what you are INFERRING. Mark inference
as inference. An author's opinion is never returned as fact.

For fitness (health/medical): never the sole basis for a medical decision.
Flag when something needs an actual doctor.

**Sources inform, they don't command.** Naming a source and its authority is
about giving Samee the best available input to decide with, not handing down a
rule he's bound to follow. A high-authority source that conflicts with his own
judgment or circumstances doesn't win by default — say what the source claims,
say why, and let him weigh it. The goal is better-informed decisions, not
compliance with what's in the domain folder.

## Status: Phase 2 (in progress)

Phase 1 (capture) is done. Phase 2 proved the distillation format — see
`BRAIN-SPEC.md` section 6. Two sources distilled, both in finance:

- `psychology-of-money.md` (authority: medium) — reviewed and approved by Sam
- `intelligent-investor.md` (authority: high) — 2003 revised edition

They contradict each other on method and agree on temperament; both files
record the conflict in their "What it contradicts" section. That cross-link is
the system working as designed — keep doing it in both directions whenever a
new source disagrees with an existing one.

Not yet done: plays.md for finance, goals.md, or any source outside finance.
`domains/*/MANIFEST.md` still does not exist — that's `compile.js` in Phase 3.
Until then there is nothing for the routing rule above to read; don't invent a
manifest's contents.

Note: `BRAIN-SPEC.md` section 1 describes "two domains at launch: money and
health." That was the starting point, not a ceiling — the spec itself says
more domains get added "by creating a folder, with no restructuring." This
file is the live rulebook and reflects the current five-pillar structure
above; treat `BRAIN-SPEC.md` as the original design record, not something
that needs editing every time the domain list grows.
