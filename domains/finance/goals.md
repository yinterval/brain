# Finance

## Goal: not set yet

Samee has not set a finance goal. This file exists because the spec puts the
goal, the current number, and the history here, and the history had to start
somewhere. Do not invent a target. Ask him.

Once a goal exists, the spec wants a required run rate computed from it, not
guessed, and the plays in `plays.md` linked to it.

## History

Notable money events. Small everyday spending is not recorded here, it lives
in Skynet against the bank data. This file is for the large or unusual ones,
the kind that look mysterious a year later if nobody wrote down why they
happened.

| date | direction | amount | what |
|---|---|---|---|
| 2026-09-12 | in | PKR 4,950,000 | Sold his car. Paid by an outside buyer via inter bank transfer into the Allied Bank main account. |
| 2026-09-12 | out | PKR 4,000,000 | Repaid a loan to his brother, Hafiz Fahad, by RAAST transfer. Samee was the borrower, so this closes a debt rather than creating one. |

Both are recorded against the transactions themselves in Skynet, in the
`note` column of `bank_transactions`. That is the primary record. This file
is the summary, so a question about his finances surfaces them without
needing a database query.

## Why this matters for reading the numbers

These two events land in the same week and are each roughly a thousand times
a normal day's spending. Any average, total, or trend computed over September
2026 without excluding them will be meaningless. The Skynet finance page
flags the transfer total on the Spent tile for exactly this reason.

An important correction to note, because the raw data invites the wrong
conclusion: both of these look like internal transfers between Samee's own
accounts if you only read the bank emails. Neither is. The emails never say
who owns the far end of a transfer, so this cannot be inferred from the data
and has to come from him.

## Open question

The loan from his brother is now repaid. Whether any other lending or
borrowing is outstanding, in either direction, is unknown. Worth asking
before drawing any conclusion about his actual position.
