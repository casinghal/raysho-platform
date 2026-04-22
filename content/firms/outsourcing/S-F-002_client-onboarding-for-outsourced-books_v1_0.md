---
slot-id: S-F-002
title: "Client Onboarding for Outsourced Bookkeeping: The Four Gates From Engagement Letter to First Clean Close"
section: CPA Firm Hub
sub-hub: /firms/outsourcing/
template: Playbook
version: 1.0
created: 2026-04-21
voice-approved: 2026-04-21 (voice anchor locked on S-F-001 v1.0; no slice run)
status: READY FOR PLATFORM INGESTION
length: 2,535 prose words / 4,105 body words incl. tables and email templates (within 2,500-4,000 template band, measured by the S-F-001 prose-word method that returned 2,624 for S-F-001 v1.0)
wave: "W1 (voice-validation wave: second of three)"
icp-target: "Tier 1: CPA firm partner who has committed to an offshore or outsourced delivery model and is now onboarding the first 5 to 20 clients onto it. Tactical, not evaluative."
jtbd: "Walk me from signed engagement letter to first clean monthly ledger posted by the offshore team: every step, every artefact, every control."
primary-keyword: client onboarding for outsourced bookkeeping
secondary-keywords: cpa firm transition workflow, bookkeeping transition checklist, outsourced accounting onboarding, bookkeeping handoff playbook
angle: "Client onboarding fails at four predictable points: data handover, chart of accounts migration, bank feed setup, and first-month cut-off. This playbook hard-codes those four crossings as gates, not steps."
dependency: "S-F-001 (offshore model already chosen: referenced in opening)"
cross-links-up: (this is a firm-hub piece, no parent)
cross-links-down: S-P-016 Close calendar Prompt Pack
cross-links-across: "/intelligence/insights/: AICPA CPE data on outsourced-book firm partners (post-W5)"
cross-links-in-hub: "S-F-004 Transition SOP: bringing a new client's books in from a predecessor"
companion-asset: Raysho_Client_Onboarding_Tracker_v1_0.xlsx (downloadable, ships with this playbook on platform launch)
cross-ref: RAYSHO_CONTENT_SPEC_v2_0.md (S-F-002 brief)
voice-gates-cleared: pankaj-voice 5/5
em-dash-check: zero em dashes verified (post W1 gate strip pass, Session 013, 2026-04-21). Previous v1.0 had 43 em dashes (22 structural + 21 in bullet cross-links, email subjects, attestation); replaced with colons, periods, and restructured labels per Pankaj W1 gate decision to enforce v8 "hyphens only" rule platform-wide
forbidden-word-sweep: clean
---

# Client Onboarding for Outsourced Bookkeeping: The Four Gates From Engagement Letter to First Clean Close

Most CPA firms running their first offshore engagements ship the onboarding plan as a step list. Twenty steps. Some checkboxes. A Gantt chart in Asana. The first three onboardings work because the partner runs them personally. The fifth one breaks because the offshore team is now running them, and the step list never told anyone what had to be true before moving from one step to the next.

S-F-001 settled the model question for US CPA firms: captive, BOT, managed services, or staff augmentation, and which country supports each. This playbook starts on day one after the engagement letter is signed. It assumes that question has been answered and that an offshore team, in some structure, is now waiting for clients.

What follows is not a step list. It is a four-gate sequence. Each gate has a pass criterion. If the gate has not passed, the next gate cannot open, regardless of which calendar week the firm thinks it is in.

## 1. Why onboarding fails: the four predictable breakpoints

Four crossings show up in every onboarding that runs into trouble. Different clients. Different industries. Same four crossings.

**Data handover.** The client says everything is in QBO. It turns out everything is in three QBO files, two Xero files from a previous accountant, a Google Drive folder of receipt photos, and an email thread containing the bank login the partner has been using for two years.

**Chart of accounts migration.** The previous accountant's COA was built for a tax-return view, not a management-reporting view. The offshore team rebuilds it without telling the partner. The first monthly pack lands and the client cannot reconcile it to last year's reports.

**Bank feed setup.** Bank feeds are configured but not tested with the live transaction set. The first transaction batch loads with duplicate entries, missing memos, and wrong sign on five payment lines. Cleanup eats the first three weeks of the offshore team's productive time.

**First-month cut-off.** The offshore team posts the first close. It looks clean. Two weeks later the client's tax adviser asks why a payment that cleared the bank on day three of the new month was booked in the close month. The answer is that nobody defined the cut-off rule explicitly, and the offshore team made a reasonable guess that turned out to be wrong.

These four are not separate problems. They are gates. A failure at gate one cascades into gates two, three, and four. The firm that treats them as gates and refuses to open the next one until the prior pass criterion is met is the firm whose first outsourced close looks like the tenth, not the first.

## 2. Gate 1: Data handover

The pass criterion for gate one is a single declarative statement. **Every artefact the offshore team needs to perform a full month-end close exists, in the format they need, in the location they will retrieve it from, with a known owner and a confirmed validation step.**

That statement is harder to satisfy than it reads. Most firms move past gate one when "we have access" is true, not when the artefact is in usable shape.

The data-handover checklist below is the minimum. Add rows for industry-specific artefacts (POS exports for retail clients, payroll ledgers for clients on external payroll, inventory subledgers for product clients).

### Data-handover checklist (T-30 to T-7)

| # | Artefact | Format | Owner | Trigger day | Validation |
|---|---|---|---|---|---|
| 1 | Engagement letter, signed both sides | PDF | Firm + client | T-30 | Filed in client folder, copy in firm DMS |
| 2 | Accounting platform admin access (QBO / Xero / Sage) | Invite + role grant | Client | T-25 | Offshore team logs in with admin role, screenshots access screen |
| 3 | Bank statements, 24 months | PDF (one file per account per month) | Client or bank | T-25 | Sum of monthly closing balances reconciles to current GL bank balance |
| 4 | Credit card statements, 24 months | PDF | Client | T-25 | Same as #3 |
| 5 | Prior accountant working papers (last 12 months close binders) | xlsx + PDF | Prior accountant via formal request letter | T-21 | Trial balance ties to GL by penny |
| 6 | Current-month ledger lock confirmation from prior accountant | Email or letter | Prior accountant | T-21 | Written confirmation; date of lock noted on cover sheet |
| 7 | Vendor master list with payment terms and tax IDs | xlsx | Client | T-21 | At least 90% of last 90 days payment lines have a vendor master entry |
| 8 | Customer master list with billing terms | xlsx | Client | T-21 | At least 90% coverage of last 90 days invoice lines |
| 9 | Tax registrations (sales tax, GST, payroll, state) | PDF | Client | T-14 | Current registration certificate per jurisdiction |
| 10 | Last filed tax returns (federal + state, last 2 years) | PDF | Client | T-14 | Used to validate opening balances for retained earnings, fixed assets, accruals |
| 11 | Asset register | xlsx | Client | T-14 | Reconciles to GL fixed-asset accounts; depreciation schedule attached |
| 12 | Loan and lease schedules with amortisation tables | xlsx | Client | T-14 | Reconciles to GL liability accounts |
| 13 | Payroll register, last 12 months | xlsx | Client or payroll vendor | T-14 | Reconciles to GL wages, taxes, withholdings |
| 14 | Outstanding AR aging | xlsx | Client | T-7 | Total ties to GL AR control |
| 15 | Outstanding AP aging | xlsx | Client | T-7 | Total ties to GL AP control |
| 16 | Cut-off agreement (signed) | PDF | Firm + client | T-7 | Defines first day of firm responsibility, prior-period correction protocol |

Two rules govern this checklist.

**Rule one.** The validation column is mandatory. An artefact that has been received but not validated does not count as received. The offshore team flags any unvalidated row at end of each working day until cleared.

**Rule two.** The cut-off agreement is a separate document, not a clause inside the engagement letter. It states the date the firm becomes responsible, the protocol for prior-period adjustments, and who carries the cost of fixing pre-cut-off errors discovered after the cut-off date. This document has saved more first-year client relationships than any other single artefact.

Gate one passes when all 16 rows have a green validation. Until then, gate two does not open. The temptation to begin COA migration in parallel because "the data is mostly there" is the temptation that produces the first failure mode.

## 3. Gate 2: Chart of accounts migration

The pass criterion for gate two: **a COA is in place that satisfies tax-return needs, management-reporting needs, and the client's own historical-comparison needs, and every account has a defined owner for new-account requests.**

The first decision is structural, not cosmetic. Rebuild or lift-and-shift. Most firms get this wrong by defaulting to one or the other without running the decision through the matrix below.

### COA migration decision matrix: rebuild vs lift-and-shift

| Decision driver | Lift-and-shift wins when... | Rebuild wins when... |
|---|---|---|
| Historical comparison pressure | Client uses prior-year comparatives in board packs or for covenant reporting | Client only uses current-year reporting, or comparatives are not material |
| COA quality | Existing COA has fewer than 200 accounts, no orphaned accounts, no "miscellaneous" hiding more than 2% of activity | Existing COA exceeds 300 accounts, has duplicate-purpose accounts, or "miscellaneous" hides more than 5% of activity |
| Industry-specific reporting needs | Client industry is generic (services, light retail) and the COA already supports the needed gross-margin and overhead split | Client is in a vertical with a standard sub-ledger structure that is missing (USALI for hotels, restaurant-industry mapping, construction WIP) |
| Tax filing position | Client has an active tax position that depends on specific account groupings (e.g., R&D credit, depreciation pools) | No tax position depends on existing groupings, or all positions can be reproduced via reports |
| Audit history | Audited financials exist for the last 2-3 years with the current COA, and the auditor will return | Audit is scheduled but the auditor has flagged COA structure as an issue, or no audit |
| Time pressure | First close is due within 30 days of cut-off | First close is due 60 days or more from cut-off, allowing a parallel rebuild |
| Multi-entity reporting | Single entity, or entities already report on a consistent COA | Multi-entity client where consolidation requires a unified COA that does not yet exist |
| Cost sensitivity | Lower setup cost is the binding constraint | Reporting quality is the binding constraint, even at a one-time setup premium |

If five or more rows point to lift-and-shift, lift-and-shift is the answer. If five or more point to rebuild, rebuild. If the matrix is split, default to lift-and-shift in the first close, with a parallel rebuild scheduled for month four. Never run two structural changes in the first 90 days.

A lift-and-shift is not free. The offshore team runs a reformatting and re-validation pass, not a copy: a mapping document, an account-by-account confirmation that the existing description matches the existing usage (a surprising number do not), and a list of accounts proposed for archival because they have had no activity for 24 months. The partner approves the archival list before any account is touched.

A rebuild is a four-week project with its own checklist: target structure design (account groupings, sub-account hierarchy, statistical accounts if needed), historical-data re-mapping (every prior transaction mapped to the new structure), client sign-off on the management-reporting view, and a parallel-running close in month one (old COA and new COA produce reports side by side; the partner reviews both). The rebuild completes when the parallel close shows zero unexplained variances between the two. Not before.

Gate two passes when the COA is in place, the mapping document is signed off, and the new-account-request protocol is written and shared with the client.

## 4. Gate 3: Bank feed setup and opening balance validation

The pass criterion for gate three: **every transaction account has a working data path into the GL, opening balances tie to source documents, and the offshore team has run a 30-day backfill batch end to end with the partner reviewing every line.**

Bank feed setup is rarely the technical challenge most onboarding plans assume it to be. The challenge is opening balance validation. A bank feed that is configured but tied to a wrong opening balance produces a clean-looking ledger with a quiet error that compounds month over month until somebody traces it back.

### The three feed paths

The decision is which path to take, not whether to take all three. Most clients require a mix.

**Path A: Direct feed.** Bank or card account connected via the platform's native feed. Works for most major US, UK, Canadian, and Australian banks. Setup is usually under an hour per account. Failure modes are recoverable but require attention: feed disconnection (typically every 30 to 90 days requiring re-authentication), duplicate transactions (most often when a manual import is run during the same window as the live feed), and missing memos (some banks send less metadata than others). Direct feed is the default for any account where it works.

**Path B: File import.** CSV or QIF import where direct feed is not available, not reliable, or the client refuses to share banking credentials. Setup is per-account configuration of the column-mapping and date-format spec. Sustainable when the client or offshore team can pull the file on a defined cadence. The trap: column mappings drift when banks update their export format. Build a validation prompt that catches column-shift before the file is imported, not after.

**Path C: Manual import (no feed available).** The Australian petrol-station pattern this firm has run for the last three years works under a similar constraint: card-acquirer settlement files come weekly, banking is on a regional bank without API access, and the platform's 60-rule cap forces a redesign of how categorisation rules are written. The pattern: a CSV-sanitisation prompt cleans and standardises the file, a single import job per period runs it through, and a two-gate manual review (offshore preparer, onshore reviewer) catches the misclassifications that the rule set cannot. Manual import is more labour-intensive than direct feed by a factor of three to five, which has to be priced in.

The decision per account: try path A first. If it fails or the client objects, move to path B. Path C only when paths A and B are both unavailable or the client has a structural reason (data privacy, regional bank limitation, platform cap). Do not start with path C as a default just because it feels safer.

### Opening balance validation

Before the first live transaction posts, the opening balance for every balance sheet account ties to a source document. Bank balance ties to bank statement on cut-off date. AR ties to aging report. AP ties to vendor aging. Fixed assets tie to asset register. Loan balances tie to amortisation schedules. Equity ties to last filed tax return.

Any unreconciled difference at this stage gets a written explanation, signed by the partner, before the first transaction posts. Unexplained opening differences are how onboarding errors live for years.

Gate three passes when all opening balances tie or are signed off, the 30-day backfill batch has been run with full review, and the offshore team is producing daily transaction posting at the agreed cadence with under 2% review-correction rate.

## 5. Gate 4: First-month cut-off control set

The pass criterion for gate four: **the first close passes a defined cut-off control set, the partner has reviewed the deliverable, and the client has acknowledged receipt of the first management-reporting pack.**

Cut-off is where the soft errors hide. The seven controls below are the minimum. Each one runs against the full ledger at month-end before the close is locked.

### First-month cut-off control set

**Control 1: Subsequent events review.** Every payment, receipt, accrual, or invoice dated in the first seven business days after month-end is reviewed against the engagement-letter cut-off rule. Items related to a service period in the close month are accrued in. Items related to the new period are deferred out. The reviewer documents each judgment call.

**Control 2: Bank reconciliation at cut-off.** Bank rec produced as of the cut-off date with zero outstanding items unreviewed. Outstanding cheques over 90 days flagged. Deposits in transit over 7 days flagged. The reconciliation summary is signed off by the offshore reviewer and the onshore partner.

**Control 3: AR cut-off.** Every invoice with a service date in the close month is in AR by the close. Every invoice with a service date in the new month is excluded. Sample 20 invoices spanning the cut-off date for accuracy.

**Control 4: AP cut-off.** Every vendor invoice received with a service date in the close month is recorded, including invoices received after period-end where the goods or services were delivered before period-end. Sample 20 vendor bills spanning the cut-off date.

**Control 5: Inventory and WIP cut-off (if applicable).** Physical count cut-off date matches book cut-off date. Any in-transit inventory accounted for per shipping terms. WIP balances reconcile to project cost reports.

**Control 6: Payroll and accrual cut-off.** Payroll accrued through month-end for any pay period that crosses the cut-off. Vacation, bonus, and commission accruals updated. Reversing entries from prior month documented and reversed.

**Control 7: Tax and statutory cut-off.** Sales tax, GST, payroll tax, and any other statutory liability accrued through month-end. Filing dates flagged in the close calendar. No statutory liability sits in a clearing account at month-end unexplained.

The first close is reviewed line by line by the partner before delivery. The second close is reviewed by exception (variances over a defined threshold). The third close moves to standard review. By the fourth close, the cut-off control set runs as a checklist with the partner reviewing only the exceptions log.

Gate four passes when the first close is delivered, the client acknowledges, and the cut-off control documentation is filed in the client's permanent folder for audit reference.

## 6. The 30-day onboarding plan

The four gates map to a 30-day window that runs from engagement-letter signature (T-30) to first-close delivery (T+5 of the first new accounting period). Numbers shift for clients with complex structures, but the sequence does not.

### Gantt-style 30-day onboarding timeline

| Day window | Gate work | Parallel work | Owner |
|---|---|---|---|
| T-30 | Engagement letter signed; cut-off agreement drafted; client kickoff email sent (Template 1 below) | Internal kickoff with offshore team; client folder structure created | Partner |
| T-29 to T-25 | Gate 1: data handover requests issued; access invitations sent; prior-accountant request letter sent | COA decision matrix run by partner; rebuild-or-shift decision logged | Partner + offshore lead |
| T-24 to T-21 | Gate 1: data inflow with daily validation log | Bank feed connectivity tested per account; path A/B/C decision per account | Offshore preparer |
| T-20 to T-15 | Gate 1 closes; mid-onboarding status email sent (Template 2 below) | Gate 2 begins: COA mapping or rebuild started | Offshore lead |
| T-14 to T-10 | Gate 2: COA mapping sign-off; new-account-request protocol shared with client | Gate 3: bank feeds configured; opening balance source documents collected | Partner + offshore lead |
| T-9 to T-5 | Gate 3: opening balances validated and signed off | 30-day backfill batch run; review variance log produced | Offshore preparer + onshore reviewer |
| T-4 to T-1 | Gate 3 closes; daily transaction posting cadence begins | Cut-off control set rehearsal on backfill data | Offshore team |
| T+1 to T+5 of new period | Gate 4: first close; control set run; partner line-by-line review | First management pack assembled | Offshore team + partner |
| T+5 | First-close delivery email sent (Template 3 below); client acknowledgement received | Onboarding retro scheduled for T+10 | Partner |
| T+10 | Internal retro: which gate slowed; what the next client onboarding does differently | Tracker updated for next client | Partner + offshore lead |

The companion `Raysho_Client_Onboarding_Tracker_v1_0.xlsx` (downloadable on platform launch) reproduces this timeline as a per-client tracker with the four gates, validation log, and cut-off control checklist embedded.

## 7. Client communication during onboarding

The three emails and the kickoff deck below are the minimum communication footprint. They exist to do two things: anchor expectations to the four-gate sequence so the client understands the rhythm, and put the firm's voice on the relationship rather than letting the offshore team be the first contact.

### Email 1: Onboarding kickoff (T-30, day of engagement letter signature)

> **Subject:** Onboarding kickoff: what happens next, and what we need from you
>
> [Client first name],
>
> Thank you for the signed engagement letter. We start onboarding today.
>
> Our onboarding runs as four gates, not a step list. Gate one is data handover and validation. Gate two is the chart of accounts decision. Gate three is bank feed setup and opening balance validation. Gate four is the first close, run against a defined cut-off control set. We do not move from one gate to the next until the prior gate has passed a written validation.
>
> The total window is 30 days from today to the first close delivery. You will hear from me at the start, at the midpoint, and on delivery. Day-to-day work is run by [offshore lead first name], who will be in touch separately to schedule the kickoff call.
>
> Two requests for this week, both in service of gate one:
>
> 1. Admin access invitations to your accounting platform, sent to the addresses in the attached PDF.
> 2. A signed copy of the cut-off agreement, attached. This document defines the date our work begins and how we handle any errors discovered in the period before that date.
>
> [Offshore lead] will follow up with the rest of the data list in the kickoff call.
>
> [Partner first name and last name]
> [Firm name]

### Email 2: Mid-onboarding status (T-15)

> **Subject:** Onboarding status: gate one closed, gate two underway
>
> [Client first name],
>
> Quick midway status on the onboarding.
>
> Gate one is closed. Every artefact from the data-handover list is in hand and validated. The full validation log is filed in your client folder if you would like to see it.
>
> Gate two is underway. Based on the COA decision matrix we ran, we are [lifting and shifting / rebuilding] your chart of accounts. The reasoning is one sentence [for example: "your audit history makes a structural change costly in year one, so the existing structure stays in place with cleanup but no rebuild"]. Mapping document for your sign-off will reach you by [date].
>
> Gate three (bank feeds) starts next week. No action needed from you on that.
>
> First close delivery is on track for [date].
>
> [Partner first name]

### Email 3: First-close delivery (T+5)

> **Subject:** Your first management pack: close for [month, year]
>
> [Client first name],
>
> Your first close under our team is attached. The pack covers [month, year] with the standard P&L, balance sheet, and cash position summary, plus a cover memo on three things worth your attention this month.
>
> All four onboarding gates passed on schedule. The cut-off control set ran clean. Bank reconciliation, AR, AP, payroll, and statutory accruals all reconcile to source. The full close work paper file is in your client folder.
>
> One note on rhythm. The first close was reviewed line by line by me. From close two onward, my review is by exception only, which is the standard cadence. Your monthly delivery date moves to [date of month] starting next month.
>
> If anything in this pack does not read the way you expected it to, please reply directly. The first three closes are when small misalignments are easiest to fix.
>
> [Partner first name]

### Kickoff deck outline (5 slides, 15 minutes)

Slide 1: Cover. Client name, firm name, kickoff call date, three names on the call.

Slide 2: The four gates. One slide visual. Names of the four gates and the pass criterion for each. No detail beyond that.

Slide 3: Who does what. Three columns: client, partner, offshore team. Three or four bullet items per column. The point is to set the expectation that the offshore team is the day-to-day delivery layer, not a back-office function the client never sees.

Slide 4: The 30-day timeline. The Gantt table from Section 6, simplified to gate-level milestones with dates.

Slide 5: Communication rhythm. Three emails from the partner (T-30, T-15, T+5). Daily Slack or email channel with the offshore lead. Monthly close delivery cadence and review cycle.

Fifteen minutes of content. The remaining time on the kickoff call is for client questions, which is where the soft information about the client's actual operation surfaces. That information matters more than the slides.

---

The four-gate model is not a heavier way to run onboarding. The work is the same work most firms try to do, with the gates surfaced and the pass criteria written down. The difference shows up in the fifth client, when the partner is no longer running the onboarding personally and the offshore team needs the rules to be explicit. Step lists do not transfer well from a partner's head to an offshore lead's desk. Gates with written pass criteria do.

Build the gate sequence into your onboarding tracker. Refuse to open gate two until gate one has passed. Refuse to start the first close until gates one through three are written off. A clean first close does not come from the offshore team working harder. It comes from the firm refusing to start the close until everything required to make it clean is already in place.

---

## Further reading on Raysho

- **S-F-001 Offshore Model Playbook for US CPA Firms.** The model decision that this playbook assumes is already made.
- **S-F-004 Transition SOP.** Bringing a new client's books in from a predecessor. The deeper SOP for the gate one and gate three work when the prior accountant is the bottleneck. (Coming in W2.)
- **S-P-016 Close Calendar Prompt Pack.** The Claude prompt set that runs the gate four cut-off control checks. (Coming in W3.)
- **AI Tool Tracker, Onboarding and Transition SaaS Verdicts.** Independent reviews of the platforms that promise to automate the onboarding tracker. (Coming in W5.)
- **Raysho_Client_Onboarding_Tracker_v1_0.xlsx.** Downloadable per-client tracker that operationalises the four gates, the validation log, and the cut-off control set. (Ships with this playbook on platform launch.)

---

## Metadata for SEO and internal use

- **Meta description (155 chars):** Outsourced bookkeeping onboarding fails at four predictable gates. The 30-day plan, COA decision matrix, cut-off control set, and client emails.
- **H1:** Client Onboarding for Outsourced Bookkeeping: The Four Gates From Engagement Letter to First Clean Close
- **Canonical URL path:** `/firms/outsourcing/client-onboarding-for-outsourced-books`
- **Page type:** Playbook
- **Est. read time:** 13 minutes
- **Author:** Pankaj Singhal
- **AI-assistance disclosure (EU AI Act Art. 50 per R180):** Co-authored with Claude under operator direction and review.

---

## Voice and compliance attestations

**pankaj-voice 5-question gate:**

1. Sounds like it was written by someone who has done this work? YES. Four-gate failure modes drawn from live delivery, the petrol-station no-bank-feed pattern drawn from an Australian field engagement (anonymised), the "first close run by partner, second by exception, third standard" cadence from operator practice, the cut-off agreement as a separate document recommendation.
2. Opening statement that lands? YES. First paragraph names the failure mode (step lists) and contradicts the default partner approach.
3. Ending with conviction? YES. Last paragraph commits to a procedural rule, not a motivational close.
4. Forbidden words or structural patterns? Full sweep run against the banned list maintained in the pankaj-voice skill. No matches in body prose. The "X is not Y. It is Z." structural pattern used once (Section 1 opener, thesis line). All other inversions rewritten to alternative forms during voice gate.
5. Would Pankaj put his name on this, unchanged? Confirmed against the S-F-001 voice anchor. Same operator register, same paragraph rhythm, same no-decoration close.

**Em dash usage:** Structural only, matching the S-F-001 v1.0 approved pattern (section headers, bold list labels, metadata lines, cross-link bullets, email subject lines, slide labels). No inline prose em dashes; those converted to hyphens, commas, colons, or restructured sentences during voice gate. Pankaj's v8 preference specifies hyphens only with zero em dashes; this file follows the anchor pattern in S-F-001. Flag for W1 gate review: the written rule and the anchor's actual pattern diverge; alignment decision belongs to Pankaj.

**"Period" as full-stop reference:** Zero. The word "period" appears in body only in its operational finance sense (service period, pay period, new accounting period), which is a term of art, not a punctuation reference.

**S-F-001 dependency:** Referenced explicitly in the second paragraph of the opening, per Content Spec v2.0 dependency rule for S-F-002.

**Required proofs check (per spec):**

| # | Proof | Location in piece |
|---|---|---|
| 1 | Gantt-style 30-day onboarding timeline | Section 6 |
| 2 | Data-handover checklist with fields + owners | Section 2 |
| 3 | COA migration decision matrix (rebuild vs lift-and-shift) | Section 3 |
| 4 | First-month cut-off control set | Section 5 |
| 5 | Client communication templates (3 emails + 1 kickoff deck outline) | Section 7 |
| 6 | Downloadable .xlsx onboarding tracker | Referenced as companion asset; production deferred to platform-launch sprint |

**D-020 Next.js floor / D-010 budget / D-013 solo operator:** Not applicable (content piece, no infrastructure implication).

**Risk-gate:** Not applicable: markdown file in workspace, no live system touched, no client name used. Avant