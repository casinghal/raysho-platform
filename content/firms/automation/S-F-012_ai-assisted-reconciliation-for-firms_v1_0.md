---
slot-id: S-F-012
title: "AI-Assisted Bank Reconciliation for CPA Firms: The Prompt Pattern That Closes the 95-To-98-Percent Gap"
section: CPA Firm Hub
sub-hub: /firms/automation/
template: Playbook
version: 1.0
created: 2026-04-21
voice-approved: 2026-04-21 (voice anchor locked on S-F-001 through S-F-011 post-correction state; zero em dashes from draft one)
status: READY FOR PLATFORM INGESTION
length: ~2,950 words body prose (target 2,500-4,000)
wave: W2 (CPA Firm core wave, ninth of fifteen; /firms/automation/ sub-hub closed at 6 of 6)
icp-target: "Tier 1 Proactive Practitioner: CPA firm controller, senior bookkeeper, or outsourced-accounting team lead running multi-client monthly bank reconciliations. Manages 15-40 client books. Has a rule-based engine already working inside QBO or Xero, plus a platform like Uncat, Keeper, or the native matching UI. Comfortable pasting structured data into a chat window; does not need to write production code to get value from this playbook."
jtbd: "Replace my rule-based bank rec engine for the hardest 10 percent of exceptions with Claude-driven match logic, with a prompt template I can run today, three rec scenarios where the pattern proves itself, a control review step that keeps a human in the loop, two integration paths (paste-and-go and structured API), and a data-minimisation approach that keeps PII out of the model."
primary-keyword: ai bank reconciliation
secondary-keywords: claude bank rec automation, bank reconciliation machine learning, automated bank matching, bank rec exceptions ai
angle: Rules handle 90 percent of bank reconciliation. Mainstream vendors claim they reach 95 percent. The gap between 95 and 98 is where LLM-driven matching earns its place in a firm's stack. This playbook isolates that gap with numbers, lays out the exact prompt pattern that closes it, shows three concrete scenarios where the pattern proves itself, and names the control review step that keeps the human signoff intact.
dependency: None (standalone playbook)
cross-links-up: (this is a firm-hub piece, no parent)
cross-links-down: S-P-002 Vendor reconciliation Prompt Pack
cross-links-across: /intelligence/tools/ AI-chat verdict (post-W5)
cross-links-in-hub: S-F-008 Bank feed setup (the feed that supplies the transactions); S-F-010 Close automation (Node 2 recon work consumes this pattern); S-F-011 Playwright automation (the script that pulls the bank statement before this pattern runs on it)
cross-ref: RAYSHO_CONTENT_SPEC_v2_0.md (S-F-012 brief)
voice-gates-cleared: pankaj-voice 4/4
em-dash-check: zero em dashes, written clean from draft one per W1 gate decision (Session 013) to enforce v8 "hyphens only" rule platform-wide
forbidden-word-sweep: clean (banned-word scrub verified pre-commit)
---

# AI-Assisted Bank Reconciliation for CPA Firms: The Prompt Pattern That Closes the 95-To-98-Percent Gap

Every serious bank reconciliation workflow inside a CPA firm already has a rules engine. QBO's bank rules, Xero's bank rules, Uncat's categorisation layer, Keeper's match logic. On a clean month for a well-kept book, those rules resolve roughly 90 percent of lines without human intervention. Vendors compete on who gets to 95. Some are honest about the number. Some claim higher with asterisks that disappear under audit.

Between 95 and 98 is a band of 3 percentage points that matters more than it looks. On a book with 4,000 monthly transactions across fifteen clients, that band is 120 exceptions a month. At an average three minutes of human time per exception (pulling up the remittance email, checking the invoice, deciding where to post) that is six hours of controller time every month, per fifteen-client portfolio. Doubled for firms running thirty clients. Tripled for firms running forty-five. The work is slow, repetitive, and the single largest remaining drag on close velocity after the rules engine is tuned.

This playbook is the argument for putting Claude on exactly that band, with the exact prompt pattern, the three scenario types where it proves itself, the control review step that keeps the human signoff intact, two integration paths (paste-and-go and a structured API call), and a data-minimisation approach that keeps client PII out of the model. The pattern is not a replacement for the rules engine. It is the layer that handles the exceptions the rules engine is designed to escalate.

## 1. The 90-95-98 thesis with numbers

The numbers are worth getting right before the pattern gets built on top of them.

Rules engines inside accounting platforms match transactions on explicit criteria: exact amount plus approximate description string, vendor name present in a table, date window, consistent category from prior postings. Given a reasonably stable book (three months of history, categorisation reviewed once), those criteria resolve 88 to 92 percent of transactions without human touch. The number moves with the book's complexity. A pure service business with ten recurring vendors sits closer to 95. A multi-unit operation with card-present retail, ACH, wire, and intercompany transfers sits closer to 85.

Category-leader bank rec tools (Uncat, Keeper, Relay's automation layer, Karbon's close module) report match rates in the 93 to 96 percent range against the same books, with asterisks. The asterisks cover bulk-categorised "Ask My Client" buckets (which are not actually matched, just parked), batched adjustments that clear groups of lines without identifying the right transaction per line, and aggressive default-to-vendor-table rules that sometimes book to the wrong expense account. Net-of-asterisks, the honest number is closer to 93 than 96.

Between the rules-engine floor at 90 and the honest software ceiling at 93, there is another 2 percentage points of easy gain from better rules hygiene (quarterly rules audit, stricter description regex, vendor-table consolidation). That is work every firm should do and most firms do not. Assume a firm has done the hygiene work and sits at 93. The remaining 7 percent is the exception band. Of that 7 percent, roughly 5 percent is actually resolvable by an LLM with structured context, and 2 percent needs a human (ambiguous on the face of the data, missing source documents, client confirmation required). That is where the 95 figure and the 98 figure come from. Claude cannot solve everything. It can solve five of every seven exception lines that remain after a clean rules engine has had its pass.

On a 4,000-transaction book that is 200 exceptions dropped to 80. At 3 minutes per exception that is 6 controller-hours saved per month per 4,000 transactions. Fifteen clients averaging 4,000 transactions a month saves 90 controller-hours monthly, which at a $75 blended internal rate is $6,750 in freed capacity every month. The cost side is Claude API usage in the range of $40 to $90 per month for that volume. The ROI is not subtle.

## 2. What rules solve, what they do not, and why

The reason rules engines stall at 93 percent is structural. Rules resolve transactions on local evidence: the transaction's own amount, description, date, and any vendor-table lookup. They cannot reason across transactions. They cannot see that a deposit two days ago and three smaller withdrawals today make up a payroll run with a fee. They cannot read a client email thread and infer that a "JPMC DDA XFER" is this month's intercompany transfer. They cannot recognise that an invoice paid in two tranches three days apart is still the same invoice.

The failure modes that characterise the 93-to-98 band almost always involve one of three patterns: a pattern that requires cross-transaction context, a pattern that requires timing tolerance the rule engine will not grant, or a pattern that requires semantic understanding of a description string the rule engine reads as raw text. Those three categories cover every rec scenario worth handling with Claude. Section 3 walks through one concrete example of each.

## 3. The three scenarios where the pattern proves itself

### Scenario A: duplicate-but-not-match

A client's bank statement shows two identical $2,450 ACH debits on the 15th and 17th, both to the same vendor string "VENDOR-ABC 2450.00 REF". The rules engine flags both for review because the vendor-table rule books it to one expense account but the duplicate pattern triggers a clearing-account fallback. A human reviewer pulling up the vendor portal sees that one is a legitimate monthly subscription and the other is a duplicate charge the vendor has already reversed on the 19th (which is after the cutoff date of the reconciliation window, so the reversal does not appear in this month's bank data).

The rule engine cannot solve this. It has no visibility into next month's data. The human solves it in four minutes: open the vendor portal, confirm the reversal, note it as an outstanding item, park it to a specific clearing account so next month's reversal auto-matches. Claude solves it in twenty seconds if given: (a) the two transactions, (b) a list of outstanding items from prior months, (c) the vendor's last 90 days of postings. Claude returns "duplicate pattern, book first entry to vendor-expense account, book second entry to duplicate-charge-receivable clearing account with memo flagging a reversal expected by day-25, confidence 0.92." The controller signs off in five seconds.

### Scenario B: delayed-post

The client paid a $14,200 insurance invoice on the 28th of the prior month. The bank shows the cleared debit on the 3rd of the current month. The rules engine matches on exact amount against the insurance-vendor rule and books it correctly. But it books it on the 3rd, which is the wrong accounting period. The client's books expect the expense in the prior month (accrual basis or matching principle). The rules engine cannot reason about period placement; that is a human judgement.

Claude, given the full prior-month close status, the unpaid invoice schedule carried forward, and the current month's bank activity, identifies this as a period-shift candidate in the second pass and recommends: book the debit on the 3rd to match the bank, reverse the prior-month accrual the firm had already posted, net effect zero but the books now reconcile cleanly to the bank with a traceable audit trail. Confidence 0.94.

### Scenario C: split-payment

A client invoices a customer $18,500. The customer pays $10,000 by wire on the 8th and $8,500 by ACH on the 11th. The bank shows two deposits with different reference strings. The rules engine has no way to tie them together. A receivable is still open for the full $18,500 because neither payment matches the AR exactly.

Claude, given the open AR list, the two deposits, and the customer's historical payment patterns (split payments around wire-limit thresholds are typical for this customer), identifies the pair as a single invoice payoff: apply $10,000 to the invoice on the 8th and $8,500 on the 11th, mark the AR as fully paid, flag for controller confirmation given it is a first-time split for this customer. Confidence 0.88, below the auto-post threshold, so the suggestion sits in the review queue with both deposits linked to the AR. The controller confirms in ten seconds.

Each of the three scenarios is a standing pattern. Each recurs dozens of times across a multi-client book in any given month. Once Claude has been shown the pattern through the prompt template in Section 4, the next occurrence is resolved without fresh instruction.

## 4. The prompt template

The prompt below is the canonical pattern. It is designed for a paste-and-go chat interface on day one, and for a structured API call on day thirty once the firm's team is comfortable with the outputs. Everything between the triple-brace markers is replaced at runtime from the data-layer step in Section 7.

```
You are a senior reconciliation analyst for a CPA firm. Your job is to resolve bank reconciliation exceptions the firm's rules engine could not match. You do not invent information. You cite which provided evidence supports each recommendation. You never recommend auto-posting above your stated confidence threshold of 0.90 without a human review flag.

CONTEXT
Client: {{client_code}}
Period: {{period_start}} to {{period_end}}
Book basis: {{basis}} (cash or accrual)
GL balance to reconcile to: {{gl_balance}}
Bank balance target: {{bank_balance}}

EXCEPTIONS TO RESOLVE ({{count}} items)
{{exceptions_table}}

SUPPORTING CONTEXT
Outstanding items carried from prior period: {{outstanding_list}}
Open AR list: {{ar_list}}
Open AP list: {{ap_list}}
Active vendor-table rules: {{vendor_rules}}
Last 90 days of postings for each vendor referenced in exceptions: {{vendor_history}}
Client communication excerpts (email subject lines + dates only, no body text): {{comms_index}}

TASK
For each exception, return:
1. Pattern classification (duplicate-but-not-match / delayed-post / split-payment / multi-line-batch / intercompany-transfer / client-confirmation-required / ambiguous)
2. Recommended posting (account debit, account credit, amount, memo)
3. Supporting evidence (which line in supporting context backs this)
4. Confidence score (0.00 to 1.00)
5. Review flag (AUTO-POST if confidence >= 0.95 and pattern is not client-confirmation-required; REVIEW if confidence 0.80 to 0.94; ESCALATE if confidence < 0.80 or pattern is client-confirmation-required or ambiguous)

Return output as a JSON array, one object per exception, in the order provided. No prose before or after the JSON.
```

Three specifications in this template earn their place. First, the confidence-threshold ladder is explicit (0.95 for auto-post, 0.80 for review, anything below for escalate). Tuning this to the firm's risk tolerance is a ten-minute exercise. Second, the pattern classification list is finite. A model that proposes a pattern outside this list is either misunderstanding the taxonomy or has found a novel pattern the firm should add to the list. Third, the output is strict JSON. That makes the integration path in Section 5 trivial.

## 5. Integration paths: paste-and-go and structured API

Two paths, two time horizons.

Path one is paste-and-go. The controller exports the exceptions report from the rules engine (QBO's Bank Rules review, Xero's Bank Reconciliation exceptions screen, Uncat's unreviewed queue) as a CSV. Exports the open AR, open AP, and outstanding-items lists the same way. Drops all of it into the prompt template in a chat window (Claude.ai in a project set up with the system prompt above, or the Raysho chat interface once Live Discovery ships). Gets the JSON back. Reviews the AUTO-POST items by eye, accepts the REVIEW items after quick confirmation, escalates the ESCALATE items into the firm's usual client-query workflow. Total cycle time for 200 exceptions: roughly 25 minutes, versus the 6 hours the rules engine alone would require.

Path one is available today, needs no engineering, and captures most of the ROI. Most firms should start here and stay here for the first three months.

Path two is structured API. Once the firm is comfortable with the output shape, the same prompt is wrapped in an API call using Anthropic's messages endpoint. Inputs are pulled directly from QBO or Xero via API, outputs are posted back as staged journal entries that sit in a review queue. Human approval converts a REVIEW or AUTO-POST item into a committed posting. ESCALATE items auto-create a client-query task in the firm's practice-management system (Karbon, Canopy, TaxDome).

Path two needs roughly two weeks of engineering for a firm with light technical capacity, or one week with a developer who knows the accounting-platform APIs. It compounds the path-one savings by removing the CSV-export and paste steps, which on a daily cadence saves another 10 minutes per client per day.

A firm that runs path two against fifteen clients on a daily basis frees roughly 120 controller-hours monthly on top of the rules-engine baseline. A firm that runs path one on a monthly cadence frees 90. The delta between the two paths is not trivial, but the engineering cost to move from one to the other is recouped in the first month.

## 6. The control review step: keeping the human signoff intact

Nothing in this playbook removes the human. The design is deliberately conservative.

The control review step sits between Claude's output and the committed posting. Its job is three specific things. First, it verifies that every AUTO-POST item has a confidence score of at least 0.95 and a pattern classification that is not client-confirmation-required. Anything that fails either test is re-routed to REVIEW regardless of what Claude said. Second, it spot-checks five percent of AUTO-POST items on every run (random sample, logged) as a standing audit. Third, it maintains a running count of AUTO-POST items that were later found wrong downstream and uses that count to tune the confidence threshold monthly. If two AUTO-POST items come back wrong in a month, the threshold goes up to 0.97. If zero come back wrong for three consecutive months, the threshold can drop to 0.93 with a corresponding widen of the sample rate.

The evidence trail is non-negotiable. Every posting touched by Claude carries a memo field that records: the pattern classification, the confidence score, the date of Claude's recommendation, and the name of the human reviewer who signed off. An auditor looking at the books sees exactly what decision each posting carries and can reconstruct the reasoning. This is what separates a defensible AI-in-the-loop practice from a risky black-box automation.

## 7. Data minimisation: no PII in the prompt

The risk that trips firms up is PII exposure. The prompt above is designed to keep that risk controlled.

Three disciplines hold. First, the exceptions table sent to Claude contains transaction amounts, dates, and description strings only. Customer names, vendor contact details, account numbers, and any free-text narrative that might carry PII are stripped or replaced with codes (CUSTOMER_001, VENDOR_017) at the data-preparation step. The code-to-name map stays inside the firm's systems and never leaves. Second, client communication excerpts in the context block are subject lines and dates only, never body text. Subject lines rarely carry PII; bodies almost always do. Third, the GL balance and bank balance go in as round numbers so the model can reason about reconciliation targets without the amounts themselves becoming identifiable leaks.

A ten-line Python or SQL transform at the data-prep stage enforces all three disciplines. Reviewing it once per quarter on a sample of prompts (actual content sent to the model) is enough to verify the discipline holds. A firm that has done this transform correctly can answer the cyber-insurance underwriter question ("what client data are you sending to third-party AI vendors?") with a documented, auditable answer: transaction amounts, generic codes, dates, subject lines. Nothing that identifies a client's customer or a client's vendor.

## 8. Portfolio scale and the break-even point

On a single-client book, the pattern saves four to six hours a month. On fifteen clients, 60 to 90. On forty clients, 160 to 240. The gain is roughly linear in transaction volume because exception lines scale with transaction count, while the prompt-and-review workflow scales sublinearly (one prompt per client per month in the paste-and-go path; one API call per client per day in the structured path).

The break-even point for a firm introducing this pattern is the first client above ten. Below ten clients, the setup cost (rules-hygiene pass + prompt template tuning + control-review definition) is higher than the first year of savings. Above ten, the pattern pays for itself inside the first quarter and compounds every quarter after. Firms at fifteen or more should treat this as table-stakes work for 2026. Firms below ten should finish the rules-hygiene pass first and revisit when the book count crosses ten.

## Closing

The question the firm is answering with this pattern is not whether AI can do bank reconciliation. It cannot. What AI can do is resolve the exceptions a clean rules engine has already isolated, at a level of accuracy that clears a documented confidence threshold, inside a control structure that keeps human signoff intact and maintains the evidence trail an auditor expects.

That framing protects three things the firm cannot afford to lose: the regulatory posture (every posting is traceable to a human-approved reasoning chain), the liability posture (nothing auto-commits without passing an explicit confidence test), and the operational posture (the controller's role becomes review and exception-management, which is where their time is highest-value anyway, not rote matching).

The firms that implement this pattern in 2026 are going to run 50 percent larger client books with the same controller headcount. The firms that do not are going to be bid against by firms that have. The sequencing for a firm starting today runs in a fixed order: rules-hygiene pass in week one, prompt template tuned against a single pilot client in week two, paste-and-go workflow deployed across the full book in weeks three and four, control-review logging live by end of month one, decision on path-two API integration at the end of month three based on the measured monthly saving. The ROI is visible from month one. The discipline to hold through month three is the harder part, and it is the part that separates firms that capture the compounding gain from firms that abandon the pattern at the first surprise exception.
