# Brain

A private, local-only knowledge system. Not hosted, not public, nobody else
sees it. The point: when Samee asks for help on any of his five pillars
(Faith, Family, Fitness, Finance, Fun), the answer should come from sources he
actually chose, ranked by how trustworthy they are, not from whatever the
model happens to recall.

See `BRAIN-SPEC.md` for the full design. This README is the short version.

## Capture

One command, under five seconds, never blocks on processing:

```
bin/brain add https://youtube.com/watch?v=...
bin/brain add ~/Downloads/book.pdf
bin/brain add "note to self: ..."
bin/brain add ~/Desktop/screenshot.png
```

Add `--note "..."` to attach a short note to any capture.

Everything lands in `inbox/` as `YYYY-MM-DD-<slug>.<ext>` plus a `.json`
sidecar recording the source, capture time, and note. Nothing is read,
summarized, or filed at capture time — that happens later, by hand or with
agent help, during distillation.

To use `brain` as a bare word in your terminal instead of the full path, add
an alias in your shell config:

```
alias brain="/Users/Shared/personal/brain/bin/brain"
```

## Layout

```
brain/
  CLAUDE.md          operating rules, auto-loads, enforces routing
  inbox/             drop zone, unprocessed
  library/           full source texts (gitignored)
  domains/
    faith/sources/
    family/sources/
    fitness/sources/   (aka health)
    finance/sources/   (aka money, business, trading)
    fun/sources/
  scripts/
    add.js           capture into inbox/
  bin/
    brain            the `brain add ...` command
```

Five domains, matching the same five pillars as the `life` repo. See
`CLAUDE.md`'s "Domains" section for which words map to which folder.

`domains/*/goals.md`, `domains/*/plays.md`, `domains/*/MANIFEST.md`,
`scripts/distil.js`, and `scripts/compile.js` don't exist yet — those are
Phase 3 onward.

## Status

**Phase 2, in progress.** Capture works. One resource has been distilled all
the way through and reviewed: `domains/finance/sources/psychology-of-money.md`.
See `BRAIN-SPEC.md` section 6 for the full build order.
