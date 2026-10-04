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

**Starting balance, measured 2026-10-04: $17,513 (PKR 4,852,492).**

That is cash in Mercury and Wise, read from their APIs, at 277.07 PKR to the
dollar. It is 1.8% of the first million. It does NOT include his Pakistani
bank accounts, which have no API and are tracked only through email alerts
that report movements and never balances, so his real position is higher by
an unknown amount. Treat this as a floor, not a total.

Skynet snapshots these balances with the rate used at the time, so a trend
now accumulates. Before 2026-10-04 only the rate of change could be measured
and progress against the goal could not be measured at all.

**The currency question is settled.** Balances are shown in their own
currency and converted to both USD and PKR, at the Wise rate, with the rate
displayed alongside the figure. The rate used is stored with each snapshot
rather than applied retrospectively: converting history at today's rate would
silently rewrite what an earlier month was worth. PKR has lost value against
the dollar over time, which works against a dollar target held in rupees.

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
4. ~~Account balances~~ DONE 2026-10-04 for Mercury and Wise. Still missing
   for Bank Alfalah and Allied, which have no API.
5. ~~Goal tracking~~ DONE 2026-10-04. The Overview page shows net worth
   against both targets, with the monthly rate recomputed from today on every
   read so it cannot go stale.
6. Recurring payments: DONE 2026-10-04. $405 a month across 6, detected from
   Mercury and Wise history rather than declared by hand.

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
