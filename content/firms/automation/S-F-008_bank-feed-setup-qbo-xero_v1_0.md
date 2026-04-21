---
slot-id: S-F-008
title: "Bank Feed Setup for QBO Australia, QBO US, and Xero: The Three-Path Playbook That Avoids the Six-Week Battle"
section: CPA Firm Hub
sub-hub: /firms/automation/
template: Playbook
version: 1.0
created: 2026-04-21
voice-approved: 2026-04-21 (voice anchor locked on S-F-001 through S-F-007 post-correction state; zero em dashes from draft one)
status: READY FOR PLATFORM INGESTION
length: 3,994 words (body prose, target 2,500-4,000)
wave: W2 (CPA Firm core wave, fifth of fifteen; /firms/automation/ sub-hub at 2 of 6)
icp-target: "Tier 1 Proactive Practitioner: US, UK, Canadian, or Australian CPA firm bookkeeper, senior bookkeeper, or controller setting up bank feeds for a new client across QBO Australia, QBO US, or Xero, and losing two to six weeks on the onboarding because the direct feed either does not connect, drops transactions, or does not exist for the client's bank at all. Technically literate enough to run a CSV import. Not expected to write code."
jtbd: "Set me up a bank feed without the usual six-week battle. Tell me what to request from the client on day one, what to configure in the platform, what the failure modes actually are, and what to do when the client has no bank feed available at all. Give me the decision tree, the per-platform steps, and the prompt that cleans a dirty statement CSV."
primary-keyword: quickbooks bank feed setup for accountants
secondary-keywords: xero bank feed setup checklist, qbo bank feed troubleshooting, manual bank import accountant, no bank feed client workflow
angle: Three paths exist for bank feeds in accounting engagements. The direct feed is path one and it is the path most published checklists stop at. The file import (CSV or QIF) is path two and it is where engagements that should have been live in a week end up spending a month. The no-feed manual import is path three and it is the path nobody writes about because most playbook authors have never had a client whose bank does not offer feeds at all. This piece covers all three, names the triggers for moving between them, and gives the CSV-sanitation prompt template and the 60-rule cap explanation that the platform-native docs skip.
dependency: None (S-P-002 Vendor reconciliation Prompt Pack referenced as the downstream step after feeds are live)
cross-links-up: (this is a firm-hub piece, no parent)
cross-links-down: S-P-002 Vendor reconciliation Prompt Pack (what runs after transactions land); S-P-003 Bank statement sanitation Prompt Pack (the CSV cleaner referenced in Section 6)
cross-links-across: "/intelligence/tools/ accounting-platform verdicts (QBO vs Xero operational comparison, post-W5); /intelligence/insights/ bank-feed reliability benchmarks (post-W5)"
cross-links-in-hub: S-F-007 OCR pipelines (AP capture runs in parallel to bank feeds in the same engagement); S-F-010 Close automation (bank feed reconciliation is a feeder into the close); S-F-012 AI-assisted reconciliation (validation layer that consumes what the feed delivers)
cross-ref: RAYSHO_CONTENT_SPEC_v2_0.md (S-F-008 brief)
voice-gates-cleared: pankaj-voice 4/4
em-dash-check: zero em dashes, written clean from draft one per W1 gate decision (Session 013) to enforce v8 "hyphens only" rule platform-wide
forbidden-word-sweep: clean
---

# Bank Feed Setup for QBO Australia, QBO US, and Xero: The Three-Path Playbook That Avoids the Six-Week Battle

Most firm onboarding timelines assume a bank feed will be live within the first week of the engagement. The reality across a mid-size book is that roughly one in three new clients costs the firm between two and six weeks of unbudgeted time on feed setup alone. The timeline blows out for one of three reasons. The direct feed does not connect on the first try. The feed connects but drops a category of transactions silently. Or the client's bank does not offer a direct feed at all, and nobody flagged that on the scoping call.

The compounding effect on engagement economics is larger than it looks on a single client. A bookkeeper priced at AUD or CAD $500 a month who loses seven unbudgeted hours on feed setup has consumed roughly half the first month's revenue before a reconciliation runs. Across a book of fifty new clients a year, the feed-related unbudgeted time sits between 150 and 400 hours, which is a full-time month of senior bookkeeper capacity on a recurring annual basis.

The fix is not a better single checklist. The fix is recognising that three paths exist, choosing the right path on day one based on what the client's bank and transaction profile actually support, and running the path end to end without switching midway. This playbook names the three paths, gives the decision tree that selects between them, walks the per-platform configuration for QBO Australia, QBO US, and Xero on each path, covers the 60-rule cap and how to think about rule design before it binds, and closes with the CSV-sanitation prompt template that converts a messy bank statement export into a clean import file.

What follows is in eight parts. Section 1 names the three paths and the decision tree that selects between them. Section 2 covers the day-one client request list. Section 3 walks Path 1 (direct feed) setup across QBO AU, QBO US, and Xero. Section 4 walks Path 2 (file import) for the same three platforms. Section 5 walks Path 3 (manual import for no-feed clients) using an anonymised Australian petrol-station pattern as the worked example. Section 6 gives the CSV-sanitation prompt template. Section 7 covers the 60-rule cap in QBO and how to think about rule design. Section 8 closes with the five failure modes that recur and how to pre-empt them.

## 1. The three paths and the decision tree that picks between them

Path 1 is the direct bank feed. The client authorises the accounting platform to connect to the bank via Open Banking (Australia, UK), Yodlee or Plaid (US, Canada), or Xero's direct bank feed partnerships (AU, NZ, UK, US). Transactions flow into the platform automatically, usually daily. This is the path published checklists assume. It works well when the client's bank is one of the larger institutions with good feed coverage and when the client has only one or two accounts to connect.

Path 2 is the file import. The client downloads a CSV, QIF, OFX, or bank-specific export from their internet banking and hands it to the bookkeeper, who imports it manually into QBO or Xero. This path runs when the direct feed either is not available for the client's bank (smaller credit unions, some fintech accounts, some foreign-currency accounts), or when the direct feed is available but fails repeatedly for a reason that the platform support team cannot resolve inside a week. File import is the reliable fallback. It is more work per cycle than a direct feed, but the work is predictable.

Path 3 is the manual import for no-feed clients. This is the path that runs when the client's bank does not offer any accountant-accessible export at all, or when the transaction profile is so complex (multiple merchant settlement accounts, fuel-card settlements, EFTPOS settlements, foreign-currency wires) that a single bank feed would give a misleading picture even if it connected. The classic example is an Australian petrol and convenience-store operator whose bank statement is a ledger of net settlement deposits from seven or eight different card networks and fuel-card providers, where the gross revenue is reconciled against the forecourt POS rather than the bank feed.

The decision tree that selects between the three paths runs in this order:

Does the client's bank appear in the direct-feed supported list for the chosen platform, and does the client have administrator access to authorise the feed? If no, go to Path 2 or Path 3.

If yes, does the client have fewer than four accounts (operating, payroll, credit card, savings) to connect? If more, consider Path 2 for the lower-volume accounts to reduce reauthorisation maintenance.

Does the client's transaction profile include merchant settlement flows (petrol stations, retail with integrated EFTPOS, hospitality with POS tender reconciliation, e-commerce with Stripe or Square)? If yes, Path 1 can still run but must be paired with a POS reconciliation workflow or routed to Path 3 depending on complexity.

Does the client's bank offer a reliable CSV or OFX export with at least thirty days of history? If yes, Path 2 is the safe default when Path 1 fails. If no, Path 3 is the remaining option and the engagement pricing needs to reflect the additional manual time.

The decision tree runs on the scoping call before the engagement letter goes out. Getting it wrong at that point is where the six-week battle starts.

## 2. The day-one client request list

On engagement kickoff, the bookkeeper sends a single structured request to the client. The request covers everything needed to run the decision tree and to execute whichever path it selects. The request list is six items.

Item one: a list of every bank account, credit card, and merchant or settlement account that appears in the business's financial operations, with the bank name and the last four digits of the account number. This identifies which accounts are candidates for Path 1 versus Path 2 or 3.

Item two: administrator or owner-level login access confirmation, or the explicit confirmation that the client's partner or internal bookkeeper has that access and can sit through the feed authorisation flow. Without administrator rights, most direct feeds will not authorise.

Item three: a recent statement (the most recent full month) from each account, in PDF form. This gives the bookkeeper the transaction profile before any feed or import has been attempted, and it surfaces merchant settlement patterns, foreign-currency activity, and unusual payment structures that might route the engagement to Path 3.

Item four: the client's accountant access setup in their internet banking, if the bank supports accountant-scoped access (most AU and NZ banks do, some US banks do, most UK banks do not). This lets the bookkeeper pull statements and CSVs directly without asking the client each cycle.

Item five: confirmation of the target accounting platform (QBO AU, QBO US, QBO CA, or Xero) and whether the firm or the client holds the subscription. This determines which feed partnerships are in scope.

Item six: a sample of the highest-volume recurring transaction types (supplier payments, payroll runs, merchant settlements, recurring subscriptions) with one example of each. This feeds the rule-design work in Section 7 before the feed goes live.

The six items together run to a single email or short form. The time saved downstream is measured in weeks.

## 3. Path 1: direct bank feed setup across QBO AU, QBO US, and Xero

### 3.1 QBO Australia

In QBO Australia, the direct feed is established through the Banking screen. The bookkeeper opens the Banking screen, clicks Connect Account, and searches for the client's bank. If the bank appears, the flow redirects to the bank's Open Banking consent page. The client (or the authorised administrator) logs in on that page, selects the accounts to share, and consents to the data-sharing arrangement under the Consumer Data Right framework. Consent lasts twelve months by default and requires renewal at that cadence.

Three configuration points matter at this step. First, the default transaction-history backfill is ninety days, which is usually enough but occasionally needs extending via a manual import for the gap. Second, the consent scope is per account, so adding a new account later means running the consent flow again, not just adding an account to an existing consent. Third, the feed imports pending transactions by default, which can cause mismatches when the pending transaction clears and re-posts under a slightly different descriptor. Most firms turn pending-transaction import off in the account settings within the first week, unless the client specifically needs real-time visibility.

### 3.2 QBO US

In QBO US, the direct feed runs through the Banking screen via one of two integrations. The default integration is Plaid, which covers the majority of US banks and credit unions. A secondary path runs through Yodlee for banks Plaid does not support. The client-facing authorisation flow is materially identical to the Australian version, except that consent duration is typically longer (the client does not re-authorise every year by default) and the backfill history can go up to two years depending on the bank.

Two configuration points differ from the Australian setup. First, Plaid connections can silently drop without surfacing an error in the QBO UI. The correct monitoring pattern is a weekly check that the most recent transaction in the feed is within two business days of current. An automated version of this check is trivial to write and is the kind of workflow that gets added to the firm's standard internal-ops checklist after the second or third time it bites. Second, US credit cards fed through Plaid frequently import the statement descriptor rather than the merchant name, which means rule design (Section 7) does more work in US engagements than in AU or NZ engagements.

### 3.3 Xero (AU, NZ, UK, and US)

Xero's direct bank feed architecture differs from QBO in one significant way: feeds are negotiated bank-by-bank rather than through a unified aggregator. In Australia and New Zealand, Xero has direct feeds with all four major banks plus most of the mid-tier and credit-union segments. In the UK, Xero uses both its direct partnerships and Open Banking. In the US, Xero's direct-feed coverage is narrower than QBO's Plaid-backed coverage, so more US engagements on Xero end up running Path 2 by default.

The Xero setup flow runs through Accounting, Bank Accounts, Add Bank Account, and then through the bank-specific authorisation page. Each direct feed requires the client to sign a physical or electronic authorisation form that the bank processes on its side. That form takes between two and ten business days depending on the bank, which is why a Xero direct-feed onboarding in AU or NZ often lags a QBO setup by a full week. The upside is that once the Xero direct feed is live, it is materially more reliable than a Plaid or Open Banking connection.

Three operational notes matter. First, Xero bank rules (the equivalent of QBO's rules) are per-account, not per-organisation, so a rule that applies to multiple accounts needs to be set up against each one. Second, Xero's reconciliation experience treats the bank feed as an authoritative ledger and will not allow a reconciliation that contradicts a bank line unless the line is manually reclassified. Third, Xero's multi-currency bank accounts require a specific feed setup that some banks do not support, so a client with a foreign-currency account may need to run Path 2 for that account even when Path 1 is live on their main AUD or USD operating account.

## 4. Path 2: file import for QBO AU, QBO US, and Xero

File import is the path that runs when a direct feed is unavailable, when it has failed repeatedly, or when a short-term backfill is needed to cover a gap. All three target platforms support file import natively, but the accepted file formats and the expected column structures differ.

QBO (all regions) accepts CSV files with a specific column structure (Date, Description, Amount with either a single signed column or separate Credit and Debit columns). QBO also accepts QIF and OFX for legacy formats and QBO-specific .qbo files for banks that offer the Web Connect format. The import is run from Banking, Update, File Upload. The platform will attempt to match columns automatically, which succeeds roughly half the time and fails the other half on account of ambiguous date formats (DD/MM/YYYY versus MM/DD/YYYY is the classic trap), decimal separators in non-US locales, and descriptions that span multiple columns in the source file.

Xero accepts CSV and OFX. Xero's column-matching is stricter than QBO's, so the source CSV generally needs to be pre-cleaned to match Xero's expected column names (Date, Amount, Payee, Description, Reference, Cheque Number, Analysis Code). Getting the CSV right on the first attempt saves a meaningful amount of rework time, which is why Section 6 covers the Claude-driven CSV sanitation step.

Two operational patterns separate good file-import workflows from bad ones. The first is a weekly or monthly cadence that the bookkeeper runs on a fixed day, with a named place where the client's downloaded statements land (a shared drive folder, a SharePoint folder, or an agreed email inbox). Drift in the cadence is where file-import engagements turn into the classic "the last statement I imported was six weeks ago" problem. The second is a standard naming convention for the statement files so that the import history is auditable in a month when the statements need to be reconstructed for a BAS review or a tax year close.

## 5. Path 3: the no-feed manual import pattern (anonymised AU petrol-station worked example)

Path 3 applies to clients whose bank does not offer a direct feed that covers the relevant accounts, or whose transaction profile is so layered with merchant settlement flows that a bank feed alone would give a misleading picture. The canonical example is a multi-entity petrol and convenience-store operator in Australia whose bank account receives net settlement deposits from multiple card networks (Visa, Mastercard, American Express, EFTPOS), multiple fuel-card providers (Motorpass, WEX, FuelCard, BP Plus, Shell Card), and occasional direct EFTPOS deposits from delivery platform settlements, while the gross revenue is measured at the forecourt point-of-sale system and not at the bank.

Against that profile, the bank account is a net cashflow ledger, not a revenue ledger. A direct feed into QBO AU would import the net settlement deposits but would not reconstruct the gross revenue, card-network fees, fuel-card fees, or the two-to-three-day timing difference between POS transactions and bank settlements. The accountant needs a separate revenue reconstruction from the POS system and a fee reconciliation from each provider's monthly statement, with the bank used as the final cash-settlement check.

The manual import pattern has four pieces. First, a monthly POS revenue export (gross sales by card type, fuel type, and shop category) posts as revenue journals with clearing-account postings for each card network and fuel-card type. Second, the card-network and fuel-card monthly statements post as fee journals against the clearing accounts, from which the expected bank settlement is calculated. Third, the actual bank statement (CSV or OFX from internet banking) imports via Path 2, and settlement lines reconcile against the clearing accounts. Fourth, residual unreconciled lines (ATM deposits, non-card revenue, owner transfers) get classified in the normal way.

The time cost on a five-entity petrol-and-c-store group running this pattern is roughly six to ten hours per entity per month, dropping to three to five hours once rule-based journal templates and a clean clearing-account chart are in place after the first three months. The critical operational discipline is a two-gate control: gate one is the POS-to-clearing posting, gate two is the bank-to-clearing reconciliation, and no journal posts that has not passed both gates. The two-gate control is what keeps the pattern stable over time.

The client-facing framing matters too. A Path 3 engagement costs more than a Path 1 engagement because it is structurally more work, and the engagement letter needs to name that. Pricing a Path 3 engagement at Path 1 rates is the fastest way to run a loss-making bookkeeping book.

## 6. The CSV sanitation prompt template

Most bank-statement CSV exports are not clean. Dates arrive in mixed formats. Descriptions contain extraneous metadata (reference numbers, bank internal codes, merchant category codes). Amounts sometimes appear in a single signed column and sometimes in separate Credit and Debit columns. The header row is occasionally missing. Foreign-currency accounts introduce additional columns for conversion rates and original amounts. Running an import against a dirty CSV triggers the platform's auto-matching failure path, which burns time on line-by-line manual classification.

The Claude-driven sanitation prompt produces a clean, import-ready CSV in one pass. The template below is structured as a system prompt plus a user message carrying the raw CSV content.

```
SYSTEM:
You are a bank-statement CSV sanitation assistant for a professional bookkeeping
engagement. You receive a raw CSV exported from a bank's internet banking
interface. Your job is to produce a single cleaned CSV that matches the target
accounting platform's import specification exactly, preserving every original
transaction, and flagging any ambiguity for a human reviewer.

Target platform: {QBO_AU | QBO_US | QBO_CA | XERO_AU | XERO_NZ | XERO_UK | XERO_US}
Target columns: {platform-specific column list; e.g. for Xero AU: Date, Amount,
Payee, Description, Reference}
Date format required: {YYYY-MM-DD for Xero, or platform native for QBO}
Amount convention required: {signed single-column for Xero; separate
credit/debit or single-column for QBO}

Rules:
1. Preserve every original line. Do not drop, merge, or collapse transactions.
2. Do not infer missing amounts or dates. If a line has a missing critical field,
   include it in the output with the field blank and add an entry to the
   "flagged_lines" list in the summary block at the end of the CSV.
3. Normalise date format to the target. If the source is ambiguous (DD/MM versus
   MM/DD) and the statement spans a period that cannot resolve the ambiguity,
   stop and ask. Do not guess.
4. Strip extraneous metadata from descriptions (internal reference codes,
   merchant category codes, trailing reference numbers) but preserve the
   merchant or payee name.
5. Normalise amount convention to the target. Credits are positive. Debits are
   negative. Apply the sign consistently.
6. Return only the cleaned CSV. At the end, add a commented block (lines
   starting with #) listing any flagged lines with their row number and the
   reason for flagging.

USER:
Raw CSV content follows below between the --- markers.
Target platform: {platform}
Account type: {operating | credit card | merchant settlement | foreign currency}
Statement period: {YYYY-MM-DD to YYYY-MM-DD}
---
{raw CSV}
---
```

The prompt runs at Claude Sonnet or Haiku tier depending on CSV size. For a 300-line statement, the run cost sits below one cent per sanitation on either tier. The output is piped directly into the platform's import screen without further manual intervention in roughly eighty percent of cases. The remaining twenty percent go through the flagged-lines review queue, which takes under ten minutes.

The S-P-003 Bank statement sanitation Prompt Pack referenced in the cross-links covers the full prompt with per-platform variants, the error-handling and ambiguity-resolution logic, and three worked examples (AU petrol-station settlement, UK credit-card statement, US Plaid-aggregated export).

## 7. The 60-rule cap in QBO and how to think about rule design

QBO applies a soft cap of 60 active bank rules per company file. Xero does not publish a hard cap but rules begin to interfere with each other past roughly 100. In both platforms, the operational failure mode is the same: a bookkeeper adds rules reactively as new transaction patterns appear, the rule set grows past the soft cap, and either new rules stop applying or existing rules start matching transactions they were not intended to match.

The correct pattern is not to delete rules when the cap approaches. The correct pattern is to design the rule set with category priority in mind from day one. The working allocation for a typical mid-size engagement looks like this.

Roughly twenty rules go to high-frequency recurring payments (payroll runs, rent, loan repayments, standard utility providers, subscription software). Roughly fifteen rules cover merchant settlement lines (card network fees, fuel-card settlements, e-commerce platform payouts) where the descriptor pattern is predictable. Roughly ten rules cover supplier payments where the descriptor cleanly identifies the supplier. Roughly ten rules cover transfer patterns between the client's own accounts and owner drawings or shareholder loan activity. That leaves roughly five rules in reserve for ad-hoc patterns that appear mid-engagement.

Two design principles separate rule sets that work from rule sets that bind. First, rules should match on descriptor patterns, not on amounts, except where the amount is reliably diagnostic (a fixed $4,500 monthly rent, a standard loan-repayment amount). Amount-based rules break the moment the amount changes. Second, rules should post to accounts, not to sub-accounts. Sub-account postings via rules are brittle to chart-of-accounts changes that happen every year or two.

When the rule set does approach the 60-rule cap, the remediation is a consolidation pass, not a deletion pass. A consolidation pass reviews every rule, retires rules that have not fired in the last three months, and merges rules that cover adjacent patterns into single rules with broader descriptor matches. A properly consolidated rule set for a mid-size engagement tends to stabilise at around forty-five rules and stays below the cap indefinitely.

## 8. The five failure modes that recur, and how to pre-empt them

Five failure modes account for roughly ninety percent of the unbudgeted time that bank-feed setups consume. Each has a preventable cause.

The first is the silent feed drop, where the direct feed stops importing transactions but no error appears in the platform UI. The pre-emption is the weekly feed-health check (Section 3.2) that flags any account whose most recent transaction is more than two business days stale. The check takes thirty seconds per engagement and catches silent drops within a week rather than at month-end close.

The second is the duplicate-import problem, where a bookkeeper runs a file import (Path 2) to cover a short gap and the direct feed (Path 1) then imports the same transactions again once connectivity resumes. The pre-emption is a transaction-date boundary in the file import that matches the earliest confirmed direct-feed date, plus a review of the first post-gap direct-feed day for duplicates. Duplicate imports are easier to prevent than to clean up.

The third is the multi-currency account mismatch, where a foreign-currency bank account connects via direct feed in the base currency and loses the original-currency detail. The pre-emption is to check at setup whether the direct feed on that account carries the foreign-currency columns (most do not), and to route the account to Path 2 with a Claude-sanitised CSV if the columns are missing.

The fourth is the credit-card statement-descriptor problem (Section 3.2), where the feed imports a cryptic statement descriptor instead of the merchant name. The pre-emption is not to fight the descriptors but to design the rule set (Section 7) around the descriptor patterns, with the rules doing the merchant-name normalisation.

The fifth is the no-feed surprise, where the engagement is priced and scoped assuming Path 1 will run, and the discovery that the client's bank does not offer feeds happens three weeks in. The pre-emption is the day-one request list (Section 2) that surfaces the bank and transaction profile before the engagement letter goes out. The scoping call is the last point at which repricing is clean.

Getting all five pre-empted is the difference between a bank-feed setup that takes a week and one that takes six.

## Closing

The bank feed is the foundational piece of the monthly bookkeeping cycle. The reconciliation work that follows, the AP capture that runs in parallel, the month-end close, and the client reporting that goes out at the end all assume that the feed has delivered a complete and accurate transaction set. The feed is not the engagement. The feed is the condition under which the engagement runs.

The three paths are three operating modes for three different client profiles, and the six-week battle happens when a firm runs a client on the wrong path. Select the path on day one, run it end to end, and the feed setup becomes a one-week step rather than a recurring source of engagement drag.

S-F-010 Close automation covers the monthly pipeline that consumes the feed output. S-P-002 Vendor reconciliation Prompt Pack covers the reconciliation that runs after the feed transactions land. S-F-012 AI-assisted reconciliation closes the loop on the validation layer. This playbook is the setup layer. Get it right, and the rest of the stack gets easier.
