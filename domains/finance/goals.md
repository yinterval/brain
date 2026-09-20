# Finance

## The goal

Stated by Samee on 2026-09-20.

| Target | By | From today |
|---|---|---|
| $1,000,000 saved | 2027-12-31 | 15.3 months |
| $5,000,000 saved | 2030-12-31 | 51.4 months |

"Saved" means money in the bank, not revenue and not company valuation. His
words: "that's what I want to save in my bank, and that's what we will be
building our businesses towards."

He called it "a little aggressive" himself, so this is a direction to build
toward rather than a forecast. Do not quietly soften it, and do not treat it
as a prediction either.

## Required run rate

Computed 2026-09-20, not guessed.

| Stretch | Needs |
|---|---|
| Now to 2027-12-31 | **$65,176 per month** (about $15,000 a week) |
| 2028-01-01 to 2030-12-31 | **$111,084 per month** |
| Whole run to 2030 | $97,367 per month average |

At roughly 280 PKR to the dollar, the first stretch is about **PKR 18.2
million saved per month**.

Recompute this whenever the date moves or a target changes. A run rate from a
stale date understates what is needed, every month, silently.

## What we do not know yet, and it matters

**There is no starting balance.** Skynet tracks money moving across 5
accounts, not what is sitting in them. Every figure above assumes a start of
zero. Until his actual savings are known, progress against this goal cannot
be measured at all, only the rate of change can.

**The currency is mixed.** The goal is in dollars, every transaction is in
PKR. A rate convention has to be picked and written down, otherwise the same
month gets two different answers. PKR has also lost value against the dollar
over time, which works against a dollar target saved in rupees.

**The gap is large and should be said plainly.** Observed personal spending
is roughly PKR 250,000 to 400,000 a month, which is about $900 to $1,400. The
first stretch needs about $65,000 a month saved. That is not an incremental
change to current cash flow, it is a different order of magnitude, and it has
to come from the businesses rather than from spending less. Any plan that
tries to reach it by trimming FoodPanda is not a plan.

## What Skynet needs to build to track this

Recorded so it is not lost between sessions. See the Skynet repo's CLAUDE.md
for the same list in build order.

1. Connect the remaining bank accounts, so in and out is complete rather than
   a sample.
2. Full cash flow: everything in, everything out, in one view.
3. A profit and loss view: earning versus spending over a period.
4. Account balances, which is the missing piece that makes the goal
   measurable.
5. Goal tracking: target, current position, required rate, whether he is
   ahead or behind, and by how much.

## History

Notable money events. Everyday spending is not recorded here, it lives in
Skynet against the bank data. This is for the large or unusual ones, the kind
that look mysterious a year later if nobody wrote down why they happened.

| date | direction | amount | what |
|---|---|---|---|
| 2026-09-12 | in | PKR 4,950,000 | Sold his car. Paid by an outside buyer via inter bank transfer into the Allied Bank main account. |
| 2026-09-12 | out | PKR 4,000,000 | Repaid a loan to his brother, Hafiz Fahad, by RAAST transfer. Samee was the borrower, so this closes a debt rather than creating one. |

Both are recorded against the transactions themselves in Skynet, in the
`note` column of `bank_transactions`. That is the primary record. This file is
the summary, so a question about his finances surfaces them without needing a
database query.

### Why this matters for reading the numbers

These two events land in the same week and are each roughly a thousand times
a normal day's spending. Any average, total, or trend computed over September
2026 without excluding them will be meaningless. The Skynet finance page
reports transfers separately from spending for exactly this reason.

An important correction to note, because the raw data invites the wrong
conclusion: both of these look like internal transfers between Samee's own
accounts if you only read the bank emails. Neither is. The emails never say
who owns the far end of a transfer, so this cannot be inferred from the data
and has to come from him.

## Open question

The loan from his brother is now repaid. Whether any other lending or
borrowing is outstanding, in either direction, is unknown. Worth asking
before drawing any conclusion about his actual position.
