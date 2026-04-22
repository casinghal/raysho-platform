---
slot-id: S-F-010
title: "Close Automation for CPA Firms: The Dependency-Graph Playbook That Compresses Monthly Close from D+15 to D+5"
section: CPA Firm Hub
sub-hub: /firms/automation/
template: Playbook
version: 1.0
created: 2026-04-21
voice-approved: 2026-04-21 (voice anchor locked on S-F-001 through S-F-009 post-correction state; zero em dashes from draft one)
status: READY FOR PLATFORM INGESTION
length: ~3,250 words (body prose, target 2,500-4,000)
wave: W2 (CPA Firm core wave, seventh of fifteen; /firms/automation/ sub-hub at 4 of 6)
icp-target: "Tier 1 Proactive Practitioner: US, UK, Canadian, or Australian CPA firm operating lead or senior manager running month-end close across a portfolio of ten to sixty clients. Currently running a D+10 to D+15 close with sixty to ninety hours of monthly close time across the book. Senior enough to redesign the close pipeline. Not expected to write scripts themselves."
jtbd: "Compress my monthly close from D+15 to D+5 without adding staff. Show me the dependency graph, the automation layer at each node, the control gates that keep the numbers honest, a worked D+5 calendar, and the three failure modes I will hit with recovery patterns for each."
primary-keyword: month-end close automation
secondary-keywords: close calendar automation cpa, d+5 close, accounting close workflow automation, ai month-end close
angle: "Close compression fails because firms start with the calendar instead of the dependency graph. The calendar is the output of the pipeline, not the pipeline itself. This playbook flips the build order: dependency graph first, control gates second, automation opportunity map third, calendar last. Done in that order, a D+15 close compresses to D+5 on the same team."
dependency: S-P-016 Close calendar Prompt Pack referenced as the deep dive on calendar generation
cross-links-up: (this is a firm-hub piece, no parent)
cross-links-down: S-P-016 Close calendar Prompt Pack (calendar generation deep dive); S-P-017 Flux analysis Prompt Pack (the flux engine at Node 4)
cross-links-across: "/intelligence/tools/ close-platform verdicts (post-W5)"
cross-links-in-hub: S-F-008 Bank feed setup (Node 1 data landing); S-F-009 Report automation (consumes the close output); S-F-012 AI-assisted reconciliation (Node 2 and Node 3 automation layer)
cross-ref: RAYSHO_CONTENT_SPEC_v2_0.md (S-F-010 brief)
voice-gates-cleared: pankaj-voice 4/4
em-dash-check: zero em dashes, written clean from draft one per W1 gate decision (Session 013) to enforce v8 "hyphens only" rule platform-wide
forbidden-word-sweep: clean (banned-word scrub surfaced three instances of "tight / tightening" on first-pass draft, all corrected to "compressing / dense / hardening" pre-commit)
---

# Close Automation for CPA Firms: The Dependency-Graph Playbook That Compresses Monthly Close from D+15 to D+5

A CPA firm running monthly close across a portfolio of fifteen clients spends between sixty and ninety hours per month on close tasks. The bulk of those hours sit between day three and day twelve of the new month. Day one is waiting for bank statements to land. Day fifteen is signing off. Everything in between is the close. When the close runs long, every downstream deadline slips: client packs ship late, advisory conversations move from strategic to reactive, and the firm's senior people spend the middle of every month firefighting what should have been a pipeline.

The fix most firms try first is reworking the calendar. More granular day-by-day tasks. Earlier start times. Overtime on days four and five. These tweaks compress the close by a day or two and then stall. The structural issue is not the calendar. The structural issue is that the calendar was built as a to-do list rather than as a schedule honouring a dependency graph. Tasks wait on other tasks that were not on the critical path. Bottlenecks are invisible because the calendar presents parallel work as if it were independent when it is actually gated on a shared upstream output. Close slippage is a graph problem dressed up as a calendar problem.

This playbook flips the order of the build. Start with the dependency graph. Define the control gates that close each stage. Map the automation opportunity at each node. Then generate the calendar. Done this way, a D+15 close compresses to a D+5 close on the same team, without adding staff, and without cutting the review quality that keeps the partner's name on the sign-off.

Section 1 covers the reframe: the close calendar is the output of the pipeline, not the pipeline itself. Section 2 gives the five-node dependency graph and the four control gates. Section 3 is the automation opportunity map per node. Section 4 is the control gate specifications. Section 5 walks the D+5 example calendar day by day. Section 6 is three failure modes with recovery patterns. Section 7 covers running the pipeline at portfolio scale across a book of ten to sixty clients. Closing names three antipatterns that kill close-compression projects.

## 1. The close calendar is the output, not the input

A typical small-firm close calendar lists roughly forty tasks across fifteen days. Day one: request bank statements, credit card statements, loan statements. Day two: post opening balances, begin payroll accrual. Day three: bank reconciliation start. Day five: post accruals. Day seven: intercompany matching. Day eight: review. Day ten: flux analysis. Day twelve: partner review. Day fifteen: sign-off and pack production.

This calendar reads clean. It is also wrong in the ways that matter. Bank reconciliation on day three depends on statements having landed on day one, which they often have not. Intercompany matching on day seven depends on both entities having posted their side by day six, which is not always true. Flux analysis on day ten depends on the trial balance being stable, which it is not if late journals land on day eleven. Each dependency that was not made explicit becomes an invisible bottleneck that surfaces as a missed deadline rather than as a gap in the pipeline design.

The calendar is a schedule. The schedule must honour the pipeline. The pipeline is the dependency graph plus the control gates. Build the graph first. The calendar falls out of the graph automatically, anchored to when each dependency resolves.

## 2. The close dependency graph: five nodes, four gates

The pipeline has five nodes. Each node produces a defined output. Each transition between nodes passes through a control gate that confirms the upstream output is complete and stable before the downstream work begins.

```
[NODE 1: DATA LANDING]
  bank / card / loan statements
  AR / AP aging
  payroll register
  subledger extracts
         |
         | GATE 1: DATA COMPLETENESS
         v
[NODE 2: ACCRUAL AND RECONCILIATION]
  bank rec
  card rec
  loan rec (interest, principal split)
  payroll accrual
  AP accrual
  prepaid amortisation
  deferred revenue roll
         |
         | GATE 2: TRIAL BALANCE STABILITY
         v
[NODE 3: REVIEW AND ADJUSTMENT]
  journal review
  reclass pass
  intercompany match (if group)
  fixed-asset depreciation post
  final reconciliation recheck
         |
         | GATE 3: NUMBERS LOCKED
         v
[NODE 4: FLUX AND COMMENTARY]
  month-over-month variance
  variance classification (timing / volume / correction / new activity)
  commentary drafting
  material-item callout list
         |
         | GATE 4: REVIEW COMPLETE
         v
[NODE 5: SIGN-OFF AND PACK PRODUCTION]
  partner review
  client pack assembly
  delivery
```

The graph is the spine of the pipeline. Every close task in the calendar maps to exactly one node. Every inter-node handover passes exactly one gate. A task that does not map to a node is scope creep. A gate that is skipped is a defect waiting to surface at partner review or, worse, at client delivery.

A few specifications on the graph that save hours once honoured. Node 1 is passive from the firm's side: statements either land or they do not. The firm's job at Node 1 is to minimise the time between month-end and statements landing. Bank feeds, card feeds, and automated statement retrieval (covered in S-F-008 Bank Feed Setup) collapse Node 1 from three days to four hours. Node 2 is where the largest block of time sits and where the automation payoff is strongest. Node 3 is the review loop and cannot be fully automated, but it can be accelerated by an AI-assisted review layer that flags anomalies. Node 4 is where Claude earns its keep: variance classification and commentary drafting compress from a day to an hour. Node 5 is the moment of truth: everything upstream has to be solid, because the partner's sign-off is auditing the whole pipeline by reviewing the output.

## 3. Automation opportunity map per node

Each node on the graph has a different automation profile. Treating them uniformly is the most common reason close-compression projects stall.

At **Node 1 (Data Landing)** the opportunity is feed coverage. Bank feeds, card feeds, payroll platform APIs, and loan-servicer portals reduce the data-landing gap from three days to under four hours for firms with clean feed infrastructure. Where feeds do not exist (community banks, older loan servicers, tax-authority statements for compliance reporting), automated portal retrieval via a scheduled browser script collapses the manual gap. The aim at Node 1 is full data arrival by D+1 end-of-day.

At **Node 2 (Accrual and Reconciliation)** the opportunity is rules-based automation plus pattern matching. Bank rules (with the 60-rule cap from S-F-008) categorise the bulk of transactions automatically. Remaining transactions route to a short exception queue. Payroll accrual is driven by a fixed formula (days worked since last pay period, multiplied by the daily rate, scaled to the accrual calendar). AP accrual against open POs runs from the subledger. Prepaid amortisation is a roll-forward. Deferred revenue is a roll-forward. The human time at Node 2 should be reconciling the exception queue and validating the roll-forward outputs. Time target: four hours per client, down from ten.

At **Node 3 (Review and Adjustment)** the opportunity is anomaly flagging. Claude with a review prompt anchored to the prior six months of data flags unusual journal patterns, missing recurring entries, and GL lines whose monthly movement sits outside the statistical band. The partner or senior reviewing is looking at a pre-filtered anomaly list rather than a raw GL dump. Time target: ninety minutes per client, down from three hours.

At **Node 4 (Flux and Commentary)** the opportunity is commentary drafting (covered in depth in S-F-009). Variance classification runs from a triggering rules engine (variance above ten percent, ratio shifts beyond a threshold, new GL activity, bank-versus-P&L drift). Commentary drafts from Claude against the classification. Time target: thirty minutes per client, down from two hours.

At **Node 5 (Sign-off and Pack Production)** the opportunity is pack assembly. Template-driven production builds the PDF from the finalised numbers and commentary in under five minutes. Partner review of a clean pack with pre-flagged anomalies and pre-drafted commentary takes fifteen to twenty minutes. Time target: twenty-five minutes per client, down from an hour.

Summed across a client, the pre-automation close uses between fourteen and eighteen hours per client per month. The post-automation close uses between six and seven hours per client per month. On a book of fifteen clients the total monthly saving is roughly one hundred and twenty to one hundred and sixty hours. That is the equivalent of one full-time headcount at typical firm utilisation rates.

## 4. Control gate definitions

Control gates are the quiet backbone of a D+5 close. A gate defines the exact criteria that must be met before the downstream node starts work. No task in the downstream node starts until its upstream gate has passed. A closed gate visible on a dashboard stops thirty minutes of rework a week later.

**Gate 1: Data Completeness.** Passes when all bank statements, card statements, loan statements, payroll registers, and subledger extracts for the period have arrived and been uploaded or fetched. Failure mode: a feed misfire or a missing statement. Dashboard check: a row per data source with a green tick or a red flag.

**Gate 2: Trial Balance Stability.** Passes when all accruals, reconciliations, and roll-forwards have been posted and the trial balance ties. Failure mode: a late journal that reopens the trial balance after Node 3 has started. Dashboard check: trial-balance snapshot with a timestamp and a hash; any change to the hash before Gate 3 triggers an alert.

**Gate 3: Numbers Locked.** Passes when journal review is complete, reclasses are posted, intercompany is matched, depreciation is posted, and a final reconciliation recheck has been done. Failure mode: an anomaly flagged at Node 4 that should have been caught at Node 3. Dashboard check: a signed-off review checklist per client, timestamped by the reviewer.

**Gate 4: Review Complete.** Passes when flux analysis is done, variance classifications are locked, commentary drafts are produced, and the material-item callout list is finalised. Failure mode: new material variances surface at partner review that were not pre-flagged. Dashboard check: a review-complete stamp per client and a pre-read pack ready for the partner.

The gates exist to stop the close from paying the same debt twice. Without gates, errors introduced at Node 2 surface at Node 5 and cost three hours to unwind per occurrence. With gates, errors surface at the gate they belong to and cost fifteen minutes to fix in place.

## 5. The D+5 example calendar

Anchored to the graph and the gates, the D+5 calendar writes itself. The calendar below is for a single client. The portfolio version (Section 7) runs the same calendar in parallel across a book of clients with a shared tooling layer.

**Day 0 (month-end date, close of business).**
Trigger: period closes. Scheduled tasks fire overnight: feed pulls, subledger extracts, payroll register download. Human time: zero.

**Day 1 (morning to end of day).**
Gate 1 check: data-completeness dashboard. Any red flags escalate to a one-off retrieval task. Gate 1 passes by 11am. Node 2 work begins: bank rules run, accruals post, roll-forwards execute. By end of Day 1 the trial balance ties or the exceptions are identified. Human time per client: two to three hours on the exception queue.

**Day 2.**
Gate 2 check: trial-balance stability. Passes when exceptions are cleared and the hash locks. Node 3 work begins: Claude-assisted anomaly scan surfaces the review queue. Senior reviews the flagged items, posts reclasses, depreciation posts automatically from the fixed-asset register. Human time per client: ninety minutes to two hours.

**Day 3.**
Gate 3 check: numbers-locked checklist signed by the senior. Node 4 work begins: variance classification runs, commentary drafts, material items flag. Senior edits commentary. Human time per client: thirty to forty-five minutes.

**Day 4.**
Gate 4 check: review-complete stamp. Node 5 work begins: pack assembly runs, partner review loads the pre-flagged callout list and the drafted commentary, partner edits for voice and final nuance. Human time per client: twenty to thirty minutes partner review, five minutes pack assembly.

**Day 5.**
Delivery. Packs go to clients by end of Day 5. Any client meetings scheduled between Day 6 and Day 10 now happen on time.

The total human time on this calendar is roughly five to six hours per client against a pre-automation baseline of fourteen to eighteen. The schedule is dense. It is not brittle. The gates absorb the small shocks (a late statement, a missing subledger) because they stop the downstream work from committing before the upstream is clean.

## 6. Three failure modes with recovery patterns

Every firm running this pipeline will hit the same three failure modes. Each has a clean recovery pattern if the pipeline was built as a graph.

**Failure mode one: Gate 1 fails on Day 1.** A feed misfire, a bank portal outage, or a client who has not forwarded a loan statement. The pipeline is blocked at Node 1 for that specific input. Recovery: the gate dashboard identifies the single missing input. An alternate retrieval path (portal script, manual pull, client email template) triggers. The gate reopens by end of Day 1 or, if the blocker is external, the close for that client shifts to a D+6 exception track while the rest of the book continues on D+5. Keeping the exception track separate from the main flow prevents one client's delay from propagating to the portfolio.

**Failure mode two: Gate 2 reopens after Node 3 has started.** A late journal lands. Recovery: the hash check catches the trial-balance change and fires an alert. Node 3 work for that client pauses. The new journal routes through the exception queue, the trial balance reties, the hash locks, and Gate 2 re-passes. Node 3 resumes where it left off. Cost: forty-five minutes to an hour. Cost without the hash check: three to four hours of rework because the reviewer was working against a moving trial balance without realising it.

**Failure mode three: Gate 4 fails at partner review.** The partner flags a material variance the pre-read did not surface. Recovery: the variance routes back to Node 4. Variance classification updates, commentary redrafts, material-item list updates, Gate 4 re-passes, and partner re-reviews. Cost: one to two hours. This is the most expensive failure mode and the one most worth engineering against. The countermeasure is a lower trigger threshold on the Node 4 classification engine (variance above five percent rather than ten percent for high-signal lines) and an explicit partner-preference layer that captures which line items this partner always wants commentary on.

The common pattern across all three failure modes is that the gate catches the defect at the node where it was introduced, not three days later at the client's inbox. Every hour spent hardening the gates pays back twenty-to-one in avoided rework.

## 7. Running the pipeline at portfolio scale

A single client running a D+5 close is a tactical win. A portfolio of fifteen clients running D+5 in parallel is the operating model the firm actually sells to itself. Three structural pieces make portfolio scale work.

First, the tooling layer is shared. Feed configuration, bank-rules libraries, accrual templates, variance-trigger rules, commentary prompts, and pack templates live in a central knowledge layer. A new client picks up the template and clones the configuration. The marginal setup cost per new client drops from two weeks to two days.

Second, the dashboard layer is client-by-client. Each client has its own row on the close dashboard showing the current gate state (green, yellow, or red), the hours consumed so far in the cycle, the exceptions outstanding, and the day number in the cycle. The dashboard is the close lead's command centre. A partner glancing at the dashboard at 4pm on Day 3 sees instantly whether the book is on track or whether two clients are sliding.

Third, the roles layer is specialised. Pre-automation firms run every task from data retrieval to partner review through the same senior. That is expensive and slow. Post-automation the senior works the exception queue and the Node 3 review. A less senior accountant works Node 4 commentary edits with Claude support. The partner works Node 5 review only. Each role is doing work matched to its cost-per-hour. The portfolio throughput lifts because the bottleneck moves off the senior and onto the automated nodes.

A firm that lands this operating model is running a D+5 close on a fifteen-client book with six to seven hours per client per month. The total close work is roughly one hundred hours a month across the book, down from two hundred and fifty. The freed time is not a cost saving alone. It is the space that allows advisory conversations with clients to move from the end of the cycle to the middle. That is the point where close compression stops being a back-office project and starts showing up on the firm's top line.

## Closing: three antipatterns that kill close-compression projects

Close-compression projects fail in three recognisable ways. Naming them early saves the project.

The first antipattern is starting with the calendar instead of the graph. The firm rewrites the close calendar, re-sequences tasks, shaves a day by squeezing review windows, and claims the compression. Six cycles later the pipeline is under the same stress it was before because the graph was never built. The diagnostic signal: the firm cannot draw the dependency graph on a whiteboard in under fifteen minutes. If the graph is not visible, the calendar is decoration.

The second antipattern is skipping the control gates because they feel bureaucratic. A senior accustomed to running the close by feel resists the idea that a gate dashboard is worth the overhead. Three cycles in, the close hits a failure mode that a gate would have caught, rework consumes the saved time, and the senior concludes that the pipeline does not work. The honest read is that the pipeline was not run. Gates are the pipeline. Skipping gates is equivalent to turning off the compression itself.

The third antipattern is automating Node 2 and Node 4 while leaving Node 1 manual. Firms pour engineering effort into bank rules and commentary prompts while statements still land by email on Day 3 or Day 4. The automation downstream is throttled by the data-landing gap upstream. The fix is unglamorous: feeds, feeds, feeds, then portal scripts for the stragglers, then the Node 2 automation. Done in that order, the compression compounds. Done in the reverse order, it stalls.

A D+5 close is the natural output of a pipeline built as a graph, gated properly, automated at the right nodes, and run at portfolio scale by roles doing work matched to their seniority. The calendar falls out of the pipeline. The compression falls out of the gates. The margin lift falls out of both.
