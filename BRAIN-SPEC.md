# BRAIN - build specification

Hand this to the PERSONAL Claude profile. Start it with `me`, never from the work profile.

This file contains no personal data and no credentials. Move it into the new repo as the first
commit, then delete it from the Desktop.

---

## 0. Non-negotiables

**Where this runs.** The personal profile only: `~/.claude-personal`, account sam@yinterval.com,
started with `me`. Never the work profile, never the jarvis repo, never the Founder OS Supabase,
never the Railway dashboard.

**Why it matters.** `~/CLAUDE.md` is the Founder OS rulebook and contains an FOS API key. It
auto-loads into any project stored inside `/Users/samee`. That is why the personal tree lives at
`/Users/Shared/personal/`. Do not put the Brain anywhere under the home folder.

**Repo.** `/Users/Shared/personal/brain`, private, pushed to @yinterval over SSH via the
`github-personal` host alias. Never run `gh auth switch`.

**Visibility.** Nobody sees this. Not clients, not the Founder OS team, not anyone Samee works
with. No hosted UI, no public URL, no shared database. If a feature would require exposing it,
that feature does not ship.

**The `brain` / `life` split.** `life` holds the actual records: real medical results, real account
balances. `brain` holds the SYSTEM and the distilled knowledge. When a play needs a real number, it
REFERENCES `life`, it does not copy it. That keeps sensitive data in exactly one place and keeps
`brain` rebuildable.

---

## 1. What this is for

A private knowledge system that sits underneath everything Samee works on, so that when he asks for
help with something, the answer is grounded in material he has deliberately chosen rather than in
whatever the model happens to recall.

Two domains at launch: **money** and **health**. The structure is per-domain, so `y-interval`,
`b2b-whales` and `trading` can be added later by creating a folder, with no restructuring.

The two things that make this work, and the two things that make most "second brains" fail:

1. **Distillation.** A PDF in a folder is dead weight. Every resource becomes a short set of usable
   principles plus a pointer back to the source for depth.
2. **Automatic routing.** If Samee has to remember to say "check my finance books first", it will
   not happen. The agent must consult the domain's manifest before answering, without being asked.

---

## 2. Repo layout

```
brain/
  README.md                  what this is, how to use it, in plain language
  CLAUDE.md                  operating rules - auto-loads, this is what enforces routing
  inbox/                     drop zone. anything, unprocessed, zero friction
  library/                   full source texts. gitignored by default (size + copyright)
  domains/
    money/
      MANIFEST.md            COMPILED. the router for this domain. do not hand-edit
      goals.md               the goal, the current number, the history
      plays.md               atomised actionable units
      sources/
        <slug>.md            one distillation per resource
    health/
      ... same shape
  scripts/
    add.js                   capture into inbox/
    distil.js                inbox item -> sources/<slug>.md  (agent-assisted)
    compile.js               sources + plays + goals -> MANIFEST.md
  .gitignore                 library/, inbox/raw binaries, scratch
```

---

## 3. The four layers

### Inbox
Capture must be one command and must never block on processing. If capturing is slow it will not
happen, and a brain that is not fed is worthless.

```
brain add https://youtube.com/watch?v=...     # url
brain add ~/Downloads/book.pdf                # file
brain add "note to self: ..."                 # text
brain add ~/Desktop/screenshot.png            # image
```

Each lands as `inbox/YYYY-MM-DD-<slug>.<ext>` plus a sidecar `.json` holding the original URL,
capture date, and any note. Nothing is processed at capture time.

### Sources
One file per resource, `domains/<domain>/sources/<slug>.md`, with this exact frontmatter:

```markdown
---
title:
kind: book | video | article | pdf | post | image | study | course
url:
domain: money | health
authority: high | medium | low
authority_why: one line stating WHY it earns that rank
added: YYYY-MM-DD
full_text: library/<file>   or  not-stored
---

## What it claims
Ten to thirty lines. The actual argument, not a blurb.

## What is actionable
Only things that can be done. No abstractions.

## What it contradicts
Which other source in this domain it disagrees with, and on what.

## Open questions
What it does not answer, or where it is weak.
```

**`authority` is the most important field in the system.** A brain that weighs a YouTube video the
same as a clinical trial will give confidently wrong advice about money and health, and it will
sound identical either way. Ranking guidance:

- **high** - peer-reviewed research, primary data, a practitioner with verifiable long-term results
- **medium** - a well-regarded book, a credentialed expert writing outside their primary evidence base
- **low** - social posts, most YouTube, anyone selling something adjacent to the advice

**`What it contradicts` is not optional.** Eight finance books WILL disagree. A brain that silently
averages them is worse than no brain, because the disagreement is usually the most useful signal.

### Plays
`domains/<domain>/plays.md`. Atomised, actionable, each traceable:

```markdown
### Pay yourself first, minimum 20%
- **when:** any month where revenue lands before expenses are due
- **do:** move 20% out before paying anything else
- **why:** expenses expand to consume whatever is left in the account
- **source:** sources/profit-first.md
- **authority:** medium
- **conflicts:** sources/psychology-of-money.md argues the rate matters less than automation
```

### Goals
`domains/<domain>/goals.md`. Without this the Brain is a bookshelf, not a system.

```markdown
# Money

## Goal: $5,000,000 cash by 2030-12-31

| date       | cash      | note                    |
|------------|-----------|-------------------------|
| 2026-09-06 | <from life repo> | baseline         |

**Required run rate:** computed, not guessed.
**Plays serving this goal:** linked from plays.md.
```

---

## 4. Routing - the part that makes it useful

`compile.js` regenerates `domains/<domain>/MANIFEST.md` from the sources, plays and goals. Never
hand-edit a manifest.

A manifest contains: the goal and current state, every source ranked by authority with a one-line
summary, the plays index, and every known contradiction in the domain.

`brain/CLAUDE.md` carries the rules that make consultation automatic:

```
Before answering ANY question that touches a domain in domains/, read that domain's
MANIFEST.md first. Do this without being asked.

Never answer from general knowledge when a source exists. If no source covers it,
say so explicitly rather than filling the gap silently.

Name the source and its authority on every recommendation.

When sources conflict, present both and name them. Never silently pick a side.

Distinguish what a source STATES from what you are INFERRING. Mark inference as
inference. An author's opinion is never returned as fact.

For health: never the sole basis for a medical decision. Flag when something needs
an actual doctor.
```

Three tiers of depth, so context is never flooded:

1. **Manifest** - always read. One page.
2. **Distillations** - read when the task touches that domain. One page each.
3. **Full source** in `library/` - read only when the task genuinely needs the detail.

---

## 5. Ingestion notes

- **YouTube:** `yt-dlp --write-auto-sub --skip-download` gets the transcript with no API key.
  yt-dlp is already installed on this Mac.
- **PDFs and books:** the `pdf` skill reads them. Store the distillation always; store full text in
  `library/` only for material Samee owns.
- **Images and screenshots:** Claude reads them directly. Distil to text at ingest, because an
  image cannot be searched later.
- **Articles and posts:** capture the text at ingest, not just the URL. Links rot.

---

## 6. Build order

**Phase 1 - the skeleton.** Repo, layout, `brain/CLAUDE.md`, `add.js`. Capture working end to end.
Do not build anything else until capture is frictionless.

**Phase 2 - one real resource.** Take one finance book all the way through: inbox to distillation to
plays. Read the output. Is it actually useful, or is it a summary that tells Samee nothing he did
not know? Fix the distillation prompt until the output earns its place. **Do not ingest twenty
resources before this is right** - twenty mediocre distillations are harder to fix than one.

**Phase 3 - routing.** `compile.js` and the manifests. Test by asking a real money question and
checking the manifest was actually consulted, and that the answer names its sources.

**Phase 4 - goals.** `goals.md` for money, wired to the real numbers in `life`. Ask "am I on track,
and what is the highest-leverage change" and judge the answer.

**Phase 5 - health.** Repeat, once money is proven.

**Phase 6, only when it hurts - the index.** Files stay the source of truth. Add a database mirror
when lookup across plays becomes genuinely slow, which is somewhere past 200 plays. Rebuildable
from the files at any time. Not before: with 20 sources, files are faster to query than a database
is to maintain.

**Not in scope yet:** autonomous research. Manual feed only until the distillation quality bar is
proven. It is easy to add later and it is very easy for it to fill the brain with mediocre content
that dilutes every subsequent answer.

---

## 7. Definition of done for Phase 1 to 4

- Capturing a YouTube link takes one command and under five seconds
- One finance book produces a distillation Samee reads and finds genuinely useful
- Asking a money question causes the manifest to be read without being told
- Every recommendation names its source and authority
- A contradiction between two sources is surfaced, not averaged
- Nothing about the Brain is reachable from the work profile, the jarvis repo, the Founder OS
  Supabase, or any hosted URL
