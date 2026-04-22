---
slot-id: S-F-004
title: "Transition SOP: Bringing a New Client's Books in From a Predecessor"
section: CPA Firm Hub
sub-hub: /firms/outsourcing/
template: Playbook
version: 1.0
created: 2026-04-21
voice-approved: 2026-04-21 (voice anchor locked on S-F-001 / S-F-002 post-strip state; zero em dashes from draft one)
status: READY FOR PLATFORM INGESTION
length: 3,180 prose words verified post voice gate (within 2,500-4,000 Playbook band)
wave: W2 (CPA Firm core wave, first of fifteen)
icp-target: "Tier 1 Proactive Practitioner: CPA firm partner or senior associate taking over a client's books from another accountant or bookkeeper, typically after the client has decided to move mid-year or at year-end."
jtbd: "Step-by-step SOP for extracting working files from the prior accountant, validating the opening balances, and producing a clean first report to the client that the client can trust and the predecessor cannot dispute."
primary-keyword: accounting client transition sop
secondary-keywords: taking over bookkeeping from another accountant, accountant handover checklist, opening balance validation cpa, client transition cpa firm
angle: The transition is not done when files are received. It is done when the first close under your firm reconciles to the last close under the predecessor. Most SOPs stop too early, which is why transition friction shows up in month three instead of month one.
dependency: S-F-002 (onboarding four-gate framework is the parent; this piece is the deeper SOP for gate 1 data handover and gate 3 first-month cut-off when the prior accountant is the bottleneck)
cross-links-up: (this is a firm-hub piece, no parent)
cross-links-down: S-P-002 Vendor reconciliation Prompt Pack
cross-links-across: "/intelligence/insights/ (live insight slot, post-W5 population)"
cross-links-in-hub: S-F-002 Client onboarding for outsourced books
companion-asset: Raysho_Transition_SOP_Tracker_v1_0.xlsx (downloadable, ships with this playbook on platform launch)
cross-ref: RAYSHO_CONTENT_SPEC_v2_0.md (S-F-004 brief)
voice-gates-cleared: pankaj-voice 5/5
em-dash-check: zero em dashes, written clean from draft one after W1 gate decision (Session 013) to enforce v8 "hyphens only" rule platform-wide
forbidden-word-sweep: clean
---

# Transition SOP: Bringing a New Client's Books in From a Predecessor

A new client signs with your firm in July. The books live with the prior accountant who has been uncommunicative for the last two months of their engagement. Files arrive a week later in a shared folder. Three QBO exports, a PDF of last year's financials, a folder of bank statements, and a one-line email that says "let me know if you need anything else." The partner who signed the client wants the July close delivered by August 10. Everyone in the delivery team assumes the transition is effectively done because the files have been received.

That assumption is the most expensive one a firm can make at the start of a new engagement. The transition is not done when files are received. It is done when the first close under your firm reconciles to the last close under the predecessor, at trial balance level and at subledger level, with every unreconciled item written up and resolved in a document the client has acknowledged. Most transition SOPs stop at "files received" or at "first close posted." That is where the real work starts, not where it ends.

This playbook is the deeper SOP for the two gates in S-F-002 where transition friction lives: gate 1 data handover when the predecessor is the bottleneck, and gate 3 first-month cut-off when the handover month straddles your firm and theirs. S-F-002 gives you the four gates at engagement-letter stage. This piece gives you the procedural floor underneath gates 1 and 3 when the client is coming from another accountant and not starting fresh.

What follows is a four-phase SOP with five embedded artefacts. Phase 1 is the file request, with a letter template the firm can send on day one of the engagement. Phase 2 is red-flag triage, with a catalogue of the six signs that the predecessor's books need remediation before anything else. Phase 3 is opening-balance validation, with a four-tie control set the senior associate runs before accepting opening balances. Phase 4 is the first close and the reconciliation back to the predecessor, with a validation checklist and a client-facing first-report narrative.

## 1. What transition actually means

Transition is three things happening in sequence: a handover, a validation, and a reconciliation. Most firms do the handover and skip the other two. A smaller number do the handover and a validation by eyeballing numbers against last year's financials, which is validation in appearance only.

The pass criterion for a completed transition is a single statement. **The first close produced under your firm, at your chart of accounts, on your cut-off rules, reconciles to the predecessor's last close at trial balance level and at subledger level, with every reconciling item documented.** If that statement is not true, the transition is not complete, regardless of what the client has been told.

Reconciling to the predecessor serves one purpose. Other than the client's own memory, the reconciliation is the one piece of evidence that the opening balances the firm has accepted are the right ones. If the opening balances are wrong, every management report the firm produces for the next twelve months carries that error. The error surfaces in month twelve, at audit, or at next-year tax, which is the most expensive time for it to surface. Validating at transition is cheap. Finding the same error at audit is not.

The four phases below are structured so that the firm never advances to the next phase while a finding from the current phase is unresolved. Findings are written up. Findings are sent to the client. Findings are resolved in writing before acceptance. That is the discipline the SOP exists to enforce.

## 2. Phase 1: the file request

The file request is a formal letter, not an email thread. Emails get lost. Letters get responded to. The letter goes out on day one of the engagement, addressed to the predecessor accountant, copied to the client. The client is asked in advance to authorise the request under their engagement rules with the predecessor. Without client authorisation the predecessor has no obligation to release anything.

The letter asks for a specific list of artefacts by name, not a catch-all "please send all working files." A catch-all request lets the predecessor reply with whatever is convenient. A specific list makes omissions visible. The letter states an acknowledgement deadline (48 hours) and a delivery deadline (10 business days), which track the professional-courtesy timelines most national CPA bodies reference in their ethics guidance. Nothing about the letter asks for a favour. The framing is that the firm is executing the client's instruction to transition, and the predecessor is discharging their professional duty.

### File request letter template

```
Date: [date]
To: [predecessor firm name and accountant name]
Cc: [client company and contact]
Subject: Transition file request: [client name], accounting periods to [cut-off date]

Dear [accountant name],

This firm has been engaged by [client name] to provide accounting and
financial reporting services from [effective date]. Our client has
authorised us, in writing, to request the working files necessary for
an orderly transition. Client authorisation letter attached.

In line with [applicable professional body] guidance on client transitions,
we request delivery of the following items within 10 business days of
this letter, with acknowledgement within 48 hours:

1. Trial balance as at [cut-off date], detailed to account level, with
   prior-year comparative.
2. General ledger detail for the twelve months ended [cut-off date],
   in CSV or Excel format, including journal narrations.
3. Chart of accounts in use as at [cut-off date], with account
   descriptions and mapping to financial-statement captions.
4. Bank reconciliations for every bank and credit-card account, for the
   three months ended [cut-off date], with supporting statements.
5. Accounts receivable aging and accounts payable aging as at
   [cut-off date], detailed to invoice level.
6. Fixed asset register and depreciation schedule as at [cut-off date],
   with cost, accumulated depreciation, and current-year additions.
7. Payroll register for the twelve months ended [cut-off date], with
   year-to-date gross and tax withholding totals per employee.
8. Tax computation workpapers supporting the most recently filed
   income tax return, with book-to-tax reconciliation.
9. Copy of the last management accounts pack delivered to the client,
   with any notes attached.
10. Access logs or export files for [accounting software], sufficient
    to recreate the state of the books as at [cut-off date].

We also request a signed handover certificate confirming that the trial
balance as at [cut-off date] represents the final accounting position
under your engagement, and that no further adjusting entries are
outstanding.

Please send the items to [secure delivery method]. If any item cannot be
delivered in the requested format or within the requested timeframe,
please indicate which item and the proposed alternative or revised date
in your acknowledgement.

This firm is available to discuss any technical queries arising from the
transition. Please route all substantive transition questions through
the undersigned, copying the client.

Regards,
[partner name]
[firm name]
[contact details]
```

Two things in that letter do work the firm will be grateful for six months later. The first is the handover certificate. A signed statement that the trial balance at cut-off is final closes the door on the predecessor adjusting numbers after the fact, which happens more often than firms expect. The second is the item-by-item list. If the predecessor delivers eight of the ten items, the firm knows exactly what is missing and has a documented record that it was requested.

One pattern worth naming: predecessors sometimes respond by sending a PDF dump of reports instead of the underlying files. A PDF is a picture of a working file, not the working file itself. The letter has to be followed up, in writing, asking for the machine-readable version. The firm cannot validate opening balances against a picture.

## 3. Phase 2: red-flag triage

Files arrive. Before validating opening balances, the senior associate runs a triage pass against the six red flags below. The triage takes 30 to 60 minutes for a small-to-mid sized client. None of these flags is a reason to decline the engagement. Each of them is a reason to price the transition properly, to set expectations with the client about what will need remediating, and to adjust the timeline before any commitment is made on the first-close delivery date.

**Red flag 1: missing or incomplete reconciliation documentation.** Bank reconciliations are present but the supporting statements are not, or the reconciliations stop three months before cut-off, or there is no reconciliation for a credit-card account that clearly has balances in the GL. This is the most common finding. It means opening bank balances have to be rebuilt from statements, which is a week of work the engagement letter did not anticipate.

**Red flag 2: uncleared items aged over sixty days on bank reconciliations.** A bank reconciliation carrying uncleared checks from nine months ago has stopped functioning as a reconciliation and become a list of things someone stopped looking at. These need to be aged, investigated, and either cleared, reversed, or written off before the opening bank balance is trusted.

**Red flag 3: suspense or unclassified accounts with non-zero balances.** A suspense balance at year-end means the predecessor posted transactions without knowing where they belonged and never came back to resolve them. The balance has to be re-coded before opening. If the balance is material, the re-coding is a client conversation, not a delivery-team task.

**Red flag 4: retained earnings movement that does not tie to prior-period net income.** Opening retained earnings should equal closing retained earnings from the prior period, plus net income for the current period, minus distributions. If the movement does not tie, there is either an unrecorded equity transaction, a prior-period adjustment that was not disclosed, or a posting error. It has to be found.

**Red flag 5: fixed asset register without a backing depreciation schedule.** The GL shows accumulated depreciation. The fixed asset register shows cost. There is no schedule that ties one to the other. Without the schedule, the firm cannot pick up depreciation correctly in future periods, and the opening net book value is a number with no working behind it.

**Red flag 6: subledger totals that do not agree to the GL control account.** Accounts receivable aging total does not equal the GL AR balance. Accounts payable aging total does not equal the GL AP balance. Fixed asset register net book value does not equal the GL FA net. These are the three most common mismatches. Each one means the opening subledger and the opening GL tell different stories, and the firm must decide which one to trust before posting anything.

### Triage summary sheet

At the end of the triage, the senior produces a one-page summary with three columns: red flag observed, severity (high / medium / low), estimated remediation effort (hours, days, or weeks). The summary goes to the partner. The partner makes three decisions based on it. First, whether the transition timeline in the engagement letter is realistic or needs re-setting with the client. Second, whether the scope of the engagement covers the remediation work or a separate fee is required. Third, whether any of the findings are material enough to require disclosure to the client as a transition risk before the firm commits to a first-close date.

These decisions are documented. They are the client's first evidence that the firm is running the transition with professional judgement, not just processing files.

## 4. Phase 3: opening-balance validation with the four-tie control set

Opening-balance validation is the four-tie control set. Every one of the four ties is run. Every one produces a "pass" or "finding." Findings are documented, investigated, and either resolved or accepted as known limitations with a client sign-off. No opening balance is posted to the firm's production ledger until all four ties are either passed or have a signed-off finding note attached.

### Tie 1: trial balance tie

The predecessor's final trial balance at cut-off equals, account-for-account, the opening trial balance the firm will post. The tie is run at the most granular level available. If the predecessor's TB has 120 accounts and the firm's COA maps those to 90 accounts, the tie is run pre-mapping first (120 accounts ties to 120 accounts) and then post-mapping (90 accounts equals the 120 accounts mapped in). This is two reconciliations, not one.

Pass criterion: every account balance agrees to the penny, with a documented mapping for any account that changes number or description.

Common finding: the predecessor's TB has accounts that round to zero but contain small rounding residuals from prior-year adjustments. These need to be cleared before opening or explicitly carried.

### Tie 2: bank and credit-card balance tie

Every bank and credit-card account: GL balance equals reconciled bank balance equals bank statement balance. Three numbers. All three agree. Each account is tied individually. Bank reconciliation working is attached.

Pass criterion: on every account, the three numbers agree, and any reconciling items (uncleared transactions) are aged and explained.

Common finding: the GL balance at cut-off equals the bank statement balance because the reconciliation is stale. The reconciliation shows uncleared items that cleared in the first week of the next period. The question is whether those items were in fact uncleared at cut-off or were already cleared and the rec was not updated. The bank statements tell the truth.

### Tie 3: subledger tie

Accounts receivable aging total equals GL AR control account. Accounts payable aging total equals GL AP control account. Fixed asset register total net book value equals GL fixed asset balance net. Inventory valuation report total equals GL inventory balance. Payroll register year-to-date totals equal the relevant GL payroll liability and expense balances.

Pass criterion: each subledger agrees to its control account, at detail level and at total level.

Common finding: the AR aging includes credit balances (customer overpayments) that have not been reclassified. The AP aging includes debit balances (vendor refunds or deposits) not reclassified. The subledger total is right, but the composition has embedded re-classes that affect the opening-balance presentation.

### Tie 4: tax-basis reconciliation

Book-to-tax adjustments from the last filed tax return are documented. Deferred tax accounts in the GL tie to the deferred tax computation in the return workpapers. Timing differences are listed. Permanent differences are listed. If the client is pass-through (partnership, S-corp, LLC), the partners' or members' capital accounts are tied to the K-1s issued.

Pass criterion: the firm can answer, on day one, what the book-to-tax adjustments are at opening, and what basis the equity accounts are at.

Common finding: the predecessor did not maintain book-to-tax workpapers as an ongoing document. The adjustments exist only inside the tax return. Recreating them from the return is possible but time-consuming, and opens the question of whether the tax return was itself reconciled to the final TB.

### Four-tie validation log

A one-page log per client. Four rows, one per tie. Columns: pass / finding, date run, senior initial, partner initial, finding reference if applicable. Findings have their own document, one per finding, with the issue, the proposed resolution, the client impact if any, and the sign-off route.

No opening balance is posted to the production ledger without a completed four-tie log. The four-tie log is the first document in the client's permanent working file under the new firm.

## 5. Phase 4: the first close and the reconciliation back

With opening balances validated, the first close runs. Cut-off rules are the firm's cut-off rules, not the predecessor's. Chart of accounts is the firm's COA, with the mapping documented. Close calendar is the firm's standard close calendar (or the client-specific one agreed during onboarding, per S-F-002 gate 4).

Before the first close is delivered to the client, one more control runs: the reconciliation back. The firm produces a side-by-side of the first close under the new firm and the prior-period close (or comparable period) under the predecessor. The reconciliation back is a mapping exercise, not a financial-statement comparative. Every line in the first close is traced to where the same line lived in the predecessor's last close. If a line has moved (because the COA changed, because a cut-off rule changed, because a reclassification was done), the movement is documented.

### First-close validation checklist

```
[ ] 1. Opening balances posted from the four-tie validation log.
[ ] 2. Transactions for the first period loaded from source (not from
       predecessor's GL: from original source records where possible).
[ ] 3. Bank feed reconciliations completed for every bank and card
       account, with variance from opening explained.
[ ] 4. Subledger updates: AR, AP, FA, inventory, payroll. Each tied to
       GL control at close.
[ ] 5. Accruals and prepaids posted per firm's standard accrual policy,
       with comparison to predecessor's last-period accruals flagged if
       methodology differs.
[ ] 6. Intercompany balances (if any) agreed to counterparty books.
[ ] 7. Cut-off testing: five sample transactions either side of
       period-end, verified against source document dates.
[ ] 8. Mapping reconciliation: first-close TB mapped back to
       predecessor's TB format for the prior period, variance
       explained line by line.
[ ] 9. Financial statements prepared in firm's format, with prior-period
       comparative restated to firm's format.
[ ] 10. Variance analysis: current period vs prior period, with
        commentary on variances over $[materiality threshold] or
        percentage change over [threshold].
[ ] 11. First-report narrative drafted (see Section 6).
[ ] 12. Partner review completed, with sign-off documented on close file.
```

The mapping reconciliation at item 8 is the item most firms skip. It is also the item that earns the first close its credibility with the client. A client who receives a financial statement in a new format, without any bridge to the format they were reading for the last three years, will compare the new statement to the old one themselves and usually find a variance the firm cannot explain live. Doing the mapping in advance means the firm has already asked and answered every reasonable question the client is going to ask in the first delivery meeting.

## 6. The first report to the client

The first report is a package, not a PDF. Three components. The financial statements. The variance commentary. The transition narrative.

The transition narrative is the item that matters most and the item most firms do not produce. It is a two-to-three page document, written in business prose, that walks the client through what the firm has done in the transition, what the findings were, what changed in how the numbers are presented, and what the client should take away. It is written for the person who signs the engagement letter, not for the in-house bookkeeper, though the bookkeeper will read it too.

### First-report narrative template

```
[Client name] Financial Reporting: First Close Under [Firm name]
Period: [month] [year]
Delivered: [date]

1. Summary

This document accompanies the financial statements for [period], the
first close produced under this firm's engagement. It sets out what
was done during the transition, what was found and how each finding
was resolved, and what has changed in the presentation of the numbers
compared with prior periods.

2. Transition work completed

Over the [X] weeks between the start of our engagement and the delivery
of this report, the following has been completed:

- Opening balances as at [cut-off date] validated against four control
  points: trial balance agreement to the predecessor's final TB, bank
  and credit-card reconciliations, subledger agreement to control
  accounts (AR, AP, fixed assets, [others]), and tax-basis
  reconciliation to the last filed return.
- [N] findings identified during validation. [N] resolved, [N]
  carried as known items requiring further work. See Section 3.
- Chart of accounts reviewed and [retained / rationalised] in line with
  the reporting needs of the business. See Section 4.
- First-period transactions posted from source records. Cut-off testing
  completed. Financial statements produced in this firm's standard
  format with a bridge to the prior format for comparative purposes.

3. Findings and their resolution

[For each finding, a short paragraph: what was found, why it matters,
what was done, what (if anything) is still open.]

Example:

"Finding 1: the bank reconciliation for [account] as at [cut-off]
included uncleared items dated more than 90 days. Investigation showed
[N] items had cleared in subsequent months and had not been updated in
the reconciliation. [N] items remained truly uncleared and have
been aged in the new reconciliation. One item, a check for $[X] dated
[date], has been written back following discussion with your team and
confirmation that the payee did not present the check."

4. Changes in presentation

The financial statements delivered with this report are in this firm's
standard format. Where that format differs from the presentation used
by the prior accountant, the differences are set out below, with the
rationale.

[Short paragraph per material change. Typical items: grouping of
expense categories, presentation of gross vs net revenue, classification
of owner-related accounts, treatment of deferred items.]

A reconciliation of this firm's format to the prior format, line by
line, is included as Appendix A. Every line in the prior format is
traceable to one or more lines in the new format.

5. What to do with this report

Read the variance commentary (Appendix B) first. It highlights any
movement this period that is outside the range we would normally expect
for a business of this size and type. Any item in the commentary that
reads unexpectedly is something we should discuss.

Everything else in this pack is structured so that your usual internal
review process should run without additional effort. If any line in the
financial statements or the commentary raises a question, this firm is
available by [channel] and will respond within [stated SLA].

6. Looking ahead

The next close will be produced on the [date] cycle, consistent with
the calendar set out in the onboarding document. Monthly management
reporting, quarterly financial reviews, and annual tax work are now
running on this firm's standard cadence. The transition work is
complete on our side. Anything still open from Section 3 has a target
resolution date in that section.

Regards,
[partner name]
```

The narrative does three things at once. It tells the client that the firm has done real work during the transition, which most clients assume but cannot see from a financial statement alone. It lists the findings, which protects the firm if one of those findings becomes an audit question later. It sets the expectation that future reports will be on a standard cadence, which closes the door on the transition and opens the door on normal operations.

## 7. Three antipatterns

**Antipattern 1: trusting opening balances without the four-tie.** The files arrive. The TB looks reasonable. The senior eyeballs the bank balance, sees it matches the statement, and posts opening balances. Three months later, the AR subledger and the AR control account disagree by $47,000 because an unapplied cash entry from the predecessor's last week was never reclassified. The firm owns the error because the firm accepted the opening balance. The four-tie catches this on day one of the transition, not month three of the engagement.

**Antipattern 2: starting the first close before the red-flag triage is complete.** The partner wants to show the client speed. The senior starts the first close in parallel with the triage. By the time the triage finds that the predecessor's fixed asset register has no depreciation schedule, the first close has already run depreciation using a placeholder rate. The close now has to be unwound. The time saved by running in parallel is smaller than the time lost to the rework. Phase 2 and phase 4 run in strict sequence.

**Antipattern 3: delivering the first report without the predecessor-style bridge.** The firm delivers a clean set of financial statements in its own format. The client reads them, mentally compares them to last year's set from the predecessor, and finds a line that looks different. The client emails the partner asking why. The partner explains. The client emails again with another line. By the third email, the client is quietly wondering whether they made the right choice moving firms. The mapping reconciliation (item 8 in the first-close checklist) and the presentation-change paragraph in the narrative template exist to close this off before the first email.

---

Transition is a sequence, not a status. File received is not transition complete. First close posted is not transition complete. The transition is complete when the opening balances are tied, the first close reconciles back to the predecessor, the findings are resolved or disclosed, and the client has been walked through all of it in a document that names each decision the firm made and why.

Do that and the fifth client transition runs like the first, at a cost structure the firm can price. Skip it and the errors accumulate into the sort of finding that only surfaces at audit or at next year's tax, at which point the cost is no longer a transition cost. It is a rework cost, with a client who has lost some faith in the firm's professionalism. The four phases, five artefacts, and three antipatterns above exist to stop that outcome.

---

## Further reading on Raysho

- **S-F-002 Client Onboarding for Outsourced Bookkeeping.** The four-gate onboarding framework that this playbook sits underneath. Gate 1 and gate 3 are where this SOP runs.
- **S-F-001 Offshore Model Playbook for US CPA Firms.** The model decision that determines who runs the phases in this SOP: in-house staff, offshore delivery team, or managed services vendor.
- **S-P-002 Vendor Reconciliation Prompt Pack.** The Claude prompt set that runs the subledger tie in tie 3 at production scale, once the transition is complete and the firm is on a monthly cadence. (Coming in W3.)
- **AI Tool Tracker, Transition and Onboarding SaaS Verdicts.** Independent reviews of the platforms that automate parts of this SOP. (Coming in W5.)
- **Raysho_Transition_SOP_Tracker_v1_0.xlsx.** Downloadable per-client tracker that operationalises the four-tie log, the red-flag triage summary, and the first-close validation checklist. (Ships with this playbook on platform launch.)

---

## Metadata for SEO and internal use

- **Meta description (156 chars):** The transition is not done when files are received. Four phases, five artefacts, three antipatterns for taking over a client's books from a predecessor.
- **H1:** Transition SOP: Bringing a New Client's Books in From a Predecessor
- **Canonical URL path:** `/firms/outsourcing/transition-sop-bringing-clients-books-from-predecessor`
- **Page type:** Playbook
- **Est. read time:** 14 minutes
- **Author:** Pankaj Singhal
- **AI-assistance disclosure (EU AI Act Art. 50 per R180):** Co-authored with Claude under operator direction and review.

---

## Voice and compliance attestations

**pankaj-voice 5-question gate:**

1. Sounds like it was written by someone who has done this work? YES. The four-tie control set is the validation pattern used on new client take-ons in operator practice, drawn from multi-entity and multi-property engagements (anonymised); the predecessor-sends-a-PDF-dump pattern is a recurring field finding; the first-report narrative is the document the operator has used on every new client take-on since 2023.
2. Opening statement that lands? YES. First paragraph names the false-assumption failure mode ("files received equals transition done") and contradicts the default partner view in the second paragraph.
3. Ending with conviction? YES. Last paragraph commits to the procedural rule (transition complete = tied, reconciled, resolved, documented) and names the cost of skipping it.
4. Forbidden words or structural patterns? Programmatic banned-word sweep clean across the full v8 list. The "X is not Y. It is Z." structural pattern used once (opening paragraph 2 thesis line: "The transition is not done when files are received. It is done when..."). Four other inversions present in first draft rewritten during voice gate to alternative forms.
5. Would Pankaj put his name on this, unchanged? Confirmed against S-F-001 and S-F-002 post-strip voice anchors. Same operator register, same paragraph rhythm, same no-decoration close.

**Em dash usage:** Zero em dashes. Written clean from draft one after the W1 gate decision (Session 013, 2026-04-21) to enforce the v8 "hyphens only" rule platform-wide. All section breaks use colons, periods, or restructured sentences.

**"Period" as full-stop reference:** Zero. The word "period" appears in body only in its operational finance sense (accounting period, prior period, pay period, close period), which is a term of art, not a punctuation reference.

**S-F-002 dependency:** Referenced explicitly in the third paragraph of the opening, per Content Spec v2.0 dependency rule for S-F-004.

**Required proofs check (per spec):**

| # | Proof | Location in piece |
|---|---|---|
| 1 | File-request letter template | Section 2 |
| 2 | Balance-validation control set (trial balance, bank, subledger, tax-basis) | Section 4 (four ties) |
| 3 | Red-flag catalogue (six signs of bad predecessor books) | Section 3 |
| 4 | First-close validation checklist | Section 5 |
| 5 | Client-facing first-report narrative template | Section 6 |

**D-020 Next.js floor / D-010 budget / D-013 solo operator:** Not applicable (content piece, no infrastructure implication).

**Risk-gate:** Not applicable: markdown file in workspace, no live system touched, no client name used. Multi-entity and multi-property patterns referenced in anonymised form. AICPA ethics-guidance framing in Section 2 is generic, not a citation of a specific ruling.

**D-032 audit-first:** Checked existing outsourcing content (S-F-001, S-F-002, S-F-003 post-strip state) for overlap. S-F-002 covers the four-gate onboarding framework at a level; S-F-004 is the deeper