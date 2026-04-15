// ─── MASTER PROMPTS — All 80 prompts rewritten for Claude with file upload references
// Optimised for Claude by Anthropic. Upload your data file (Excel, CSV, Word, or PDF)
// alongside each prompt. Do not paste raw data into the prompt box.

export const AP_PROMPTS = [
  {title:"AP KPI Dashboard — Full Performance Analysis",prompt:`You are a senior management consultant with 15 years of F&A transformation experience, specialising in Accounts Payable operations benchmarking and executive reporting. I have uploaded the AP metrics file for this analysis.

Begin by reading the uploaded file carefully. Identify all KPI values, time periods, entity names, and any prior-period comparatives present.

Perform the following analysis in full:

1. METRIC EXTRACTION AND VALIDATION
Extract all available KPI values from the file. For each metric, confirm the unit, time period, and source. Flag any metric where the data appears incomplete, inconsistent, or implausible — do not proceed with analysis on unvalidated figures.

2. BENCHMARKING AGAINST INDUSTRY STANDARDS
For each KPI, state the industry benchmark range for organisations of comparable size and sector (where known). Use these reference points: Invoice Processing Time (best-in-class <3 days, average 8-12 days); Touchless Processing Rate (best-in-class >80%, average 30-50%); 3-Way Match Rate (best-in-class >90%); DPO (sector-dependent — state your assumption); Cost Per Invoice (best-in-class <$3, average $12-15); Duplicate Payment Rate (best-in-class <0.01%).

3. RAG STATUS ASSIGNMENT
For each KPI assign a RAG status: Green (within 10% of best-in-class), Amber (10-30% below best-in-class), Red (>30% below best-in-class or worse than industry average). State the precise threshold you used for each KPI.

4. ROOT CAUSE HYPOTHESIS
For each Red or Amber KPI, provide a structured root cause hypothesis — what AP process failure typically drives this result? What data would confirm the root cause?

5. PRIORITISED IMPROVEMENT RECOMMENDATIONS
Identify the 3 KPIs with the greatest combined improvement potential × feasibility. For each: state the current gap, the realistic improvement target at 6 months, and 3 specific operational actions the AP team should take immediately.

6. EXECUTIVE OUTPUT
Produce a structured AP Performance Summary in this format:
— One-paragraph executive summary (150 words): overall AP health, headline finding, and top priority
— KPI table: metric | current | benchmark | RAG | gap | trend (if prior period available)
— Top 3 improvement initiatives with estimated impact and 30-day first action for each
— Risk flag section: any KPI indicating fraud risk, control weakness, or regulatory exposure

All figures must reference the source file. All improvement estimates must be stated as directional targets, not guarantees. Present this as a draft management deliverable for Finance Director review before circulation.`},

  {title:"Vendor Master Data Audit — Full Population Controls Review",prompt:`You are a Big Four internal controls specialist with deep expertise in procure-to-pay controls, vendor fraud prevention, and SOX compliance. I have uploaded the vendor master data file for this audit.

Read the uploaded file in full. Identify the data structure: column headers, vendor count, fields available (name, address, bank account, tax ID, payment terms, creation date, last transaction date, and any approval fields).

Perform all five control tests as follows:

TEST 1 — DUPLICATE VENDOR DETECTION
Identify potential duplicate vendors using these matching criteria: (a) identical bank account number regardless of name, (b) identical or near-identical address with different vendor names, (c) name variants that likely represent the same entity (Ltd vs Limited, abbreviations, spelling differences). For each duplicate pair: list both records, the matching field, and the financial risk — which record should be retained?

TEST 2 — INCOMPLETE MANDATORY FIELDS
Identify all vendors missing: tax identification number, bank account details, approved payment terms, or vendor approval date/approver. Classify the completeness risk: High (active vendor with payments in last 90 days, incomplete record) / Medium (active, incomplete) / Low (dormant with incomplete record).

TEST 3 — DORMANT VENDOR IDENTIFICATION
Identify all vendors with no transaction in the last 12 months. For each: last transaction date, cumulative spend history, and deactivation recommendation. Note: dormant active vendor records are a ghost vendor fraud vector.

TEST 4 — BANK ACCOUNT CHANGE ANOMALIES
Identify any vendor where bank account details appear to have changed. Flag: the original and new account, the date of change, who made the change, and whether a corresponding approval is documented in the data. Bank account changes without documented dual authorisation are a high-priority fraud indicator.

TEST 5 — EMPLOYEE-VENDOR OVERLAP
Compare vendor address, phone number, and bank account fields against any employee data available in the file. Flag any match. Employee-vendor overlap is a primary indicator of fictitious vendor or self-dealing fraud.

DELIVERABLE FORMAT:
— Test-by-test exception table: vendor ID | field | exception detail | risk classification (High/Medium/Low) | recommended action
— Consolidated risk summary: total exceptions by test, total financial exposure in High-risk exceptions
— Remediation plan: sequenced by risk, with recommended completion timeline
— Audit workpaper sign-off checklist

All exceptions are indicators requiring human investigation — none should be treated as confirmed fraud without independent verification. Escalate all High-risk findings to Finance Director and Internal Audit immediately.`},

  {title:"Early Payment Discount Optimisation — Working Capital Analysis",prompt:`You are a treasury and working capital specialist with expertise in AP payment strategy, supply chain finance, and cost of capital analysis. I have uploaded the supplier payment terms file for this analysis.

Read the uploaded file carefully. Identify the supplier list, current payment terms (standard days), any early payment discount offers (e.g. 2/10 net 30 means 2% discount if paid within 10 days), current DPO by supplier, and annual spend per supplier.

Perform the following analysis:

STEP 1 — ANNUALISED YIELD CALCULATION
For every supplier offering an early payment discount, calculate the annualised cost of not taking the discount using the formula: Annualised Yield = (Discount% ÷ (1 − Discount%)) × (365 ÷ (Standard Payment Days − Discount Days)). Show the formula and result for each supplier. Example: 2/10 net 30 = (0.02 ÷ 0.98) × (365 ÷ 20) = 37.2% annualised yield.

STEP 2 — COST OF CAPITAL COMPARISON
Compare each annualised yield against our cost of capital or cost of funds. I will state our cost of funds rate in the uploaded file or describe it here. For any supplier where the annualised yield exceeds our cost of funds: capturing that discount is economically superior to holding cash. Classify each supplier: Accept discount (yield > cost of funds) / Decline / Borderline (within 5 percentage points of cost of funds).

STEP 3 — STRATEGIC SEGMENTATION
Separately classify each supplier as: Strategic (relationship must be protected — pay on agreed terms regardless of discount economics) / Transactional (payment timing can be optimised purely on financial grounds). This segmentation prevents financial optimisation from damaging critical supply relationships.

STEP 4 — WORKING CAPITAL IMPACT MODEL
For the "Accept" group: calculate the cash outflow acceleration required and the net annual saving after funding cost. Show the 12-month cash flow impact of implementing the optimal early payment strategy.

STEP 5 — NEGOTIATION OPPORTUNITIES
Identify suppliers currently offering no discount where our spend and payment history give us leverage to negotiate a discount offer. Prioritise by: annual spend × hypothetical 2% discount = value of obtaining a discount.

DELIVERABLE FORMAT:
— Decision matrix: supplier | standard terms | discount offer | annualised yield | accept/decline/negotiate recommendation | estimated annual saving
— Total annual saving from optimal strategy (Accept group)
— Working capital impact: cash acceleration required vs annual saving
— Top 5 negotiation targets with suggested opening position
— Implementation note: all payment term changes require Finance Director and Treasury sign-off before any instruction to the payment team.`},

  {title:"3-Way Match Exception Report — Invoice Control Review",prompt:`You are a senior AP controls specialist and internal controls reviewer. I have uploaded the 3-way match data file containing purchase orders, goods receipt notes (GRN), and supplier invoices for review.

Read the entire file. Map the data structure: identify how POs, GRNs, and invoices are linked (common reference numbers), and which fields represent amount, quantity, unit price, dates, and vendor details.

Run all five match tests systematically across the full population:

TEST 1 — INVOICE AMOUNT VS PO APPROVED VALUE
For each invoice-PO pair: compare the invoiced amount to the PO-approved amount. Calculate the variance in absolute terms and as a percentage. Flag all invoices where the variance exceeds 3% of PO value OR exceeds £/$/€500 in absolute terms (use the currency in the file). For flagged items: state the PO amount, invoice amount, variance, and whether it is over-billed or under-billed.

TEST 2 — QUANTITY INVOICED VS GOODS RECEIVED
Compare quantity billed to quantity on the corresponding GRN. Flag where invoiced quantity exceeds received quantity by any amount — this is a direct billing for goods not received. Also flag where GRN quantity significantly exceeds invoiced quantity — possible missed billing.

TEST 3 — UNIT PRICE VARIANCE
Compare unit price on the invoice to the unit price on the approved PO. Any variation above 2% should be flagged. Supplier price increases without PO amendment authorisation should not be paid.

TEST 4 — DATE SEQUENCE ANOMALIES
Check the chronological sequence: GRN date should precede or equal invoice date. PO date should precede GRN date. Flag any invoice dated before the corresponding goods receipt (invoice before delivery is a fraud risk indicator) or before the PO was raised.

TEST 5 — LATE DELIVERY ASSESSMENT
Compare GRN date against PO delivery terms (if stated). Flag any delivery materially outside contracted delivery terms. This supports supplier performance management and potential penalty recovery.

DELIVERABLE FORMAT:
— Exception register: invoice reference | vendor | test failed | exception detail | invoice amount | variance amount | hold-payment recommended (Y/N) | suggested resolution
— Exception summary: count and value of exceptions by test type
— Hold-payment total: total value of invoices recommended for payment hold pending resolution
— Resolution guide: for each exception type, the standard resolution procedure
— Escalation list: any exceptions involving amounts above £/$/€10,000 or patterns suggesting systematic overbilling

All hold-payment recommendations must be approved by the AP Manager before withholding payment. Do not communicate payment holds to suppliers without Finance Director authorisation.`},

  {title:"Cash Disbursement Controls Testing — SOX/ICFR Workpaper",prompt:`You are a senior internal auditor with Big Four audit firm experience, specialising in cash disbursement controls testing in a SOX/ICFR environment. I have uploaded the payment transaction file for controls testing.

Read the uploaded file in full. Identify the data fields available: transaction reference, vendor name/ID, payment amount, payment date, preparer/initiator user ID, approver user ID, supporting document reference, bank account number, and any status or system fields.

Test all six controls across the full population. Document each test as a formal audit workpaper entry.

CONTROL 1 — AUTHORISATION COMPLETENESS
Identify your organisation's approval thresholds from the file or document header. For every payment above the stated threshold: confirm that a named approver is recorded and that the approver is listed in the file as an authorised signatory. Flag any above-threshold payment with no approver recorded, or where the approver name is not in the authorised signatory list.

CONTROL 2 — VENDOR MASTER VALIDITY
For each payment: confirm that the vendor ID was present in the approved vendor master on the date of payment. Payments to vendors not on the approved master on the payment date are unauthorised. Flag all such payments.

CONTROL 3 — SEGREGATION OF DUTIES
Identify every transaction where the Preparer User ID matches the Approver User ID. This is a direct SOD violation. Also flag where both the preparer and approver roles are assigned to the same person per any access control data in the file. Quantify: total SOD violations, total value of transactions with SOD failures.

CONTROL 4 — INVOICE DOCUMENTATION
Identify all transactions where no supporting document reference is recorded. For a statistically valid sample of transactions with references: confirm the reference format is consistent with your organisation's invoice numbering convention. Flag transactions with generic or implausible reference numbers (e.g. "123", "misc", blank).

CONTROL 5 — DUPLICATE PAYMENT DETECTION
Run a duplicate check across the full population: same vendor + same amount within a 60-day window, and same invoice reference number appearing more than once. For each duplicate candidate: list both transactions, the overlap fields, and the combined amount at risk.

CONTROL 6 — BANK ACCOUNT INTEGRITY
For each payment: check that the bank account used matches the bank account on record for that vendor at the time of payment. Flag any payment to a bank account added or changed within 30 days before the payment date.

DELIVERABLE FORMAT:
— Control testing workpaper: for each control — description of test, population tested, sample size (if sampled), exceptions found, exception narrative, risk classification
— Exception schedule: transaction reference | vendor | control failed | amount | description of failure
— Summary table: control | test result (Pass/Fail/Qualify) | exception count | exception value | management recommendation
— This workpaper should be referenced in the audit file. All material exceptions must be escalated to the Audit Committee.`},

  {title:"AP Fraud Risk Scenario Analysis — Forensic Screening",prompt:`You are a forensic accounting specialist and certified fraud examiner (CFE) with extensive experience in accounts payable fraud investigations. I have uploaded the AP transaction data for forensic screening.

Read the entire dataset carefully. Note the population size, date range, vendor count, total disbursements, and any immediately visible anomalies in the data structure before beginning the scheme-by-scheme analysis.

Screen the full population for all six AP fraud schemes:

SCHEME 1 — GHOST VENDOR DETECTION
Identify vendors who were: (a) added to the vendor master within 30 days of receiving their first payment, (b) have fewer than 3 total transactions in the period, (c) show a PO box as their address or a residential address format, (d) have no website domain in their email address or contact details, or (e) have a vendor name that does not appear in any commercial registry format. Compile all vendors meeting 2 or more of these criteria.

SCHEME 2 — FICTITIOUS INVOICE INDICATORS
Screen all invoices for: (a) round-dollar amounts (amounts ending in exactly .00 on invoices that should reflect calculated quantities), (b) invoice descriptions that are generic, vague, or lack a specific deliverable (e.g. "consulting services", "management fee"), (c) invoice numbers that are sequential to previous invoices from the same vendor suggesting a personal invoice book, (d) dates on weekends or public holidays.

SCHEME 3 — DUPLICATE PAYMENT SCREENING
Identify: (a) same vendor + same amount within 60 days, (b) same invoice number appearing twice regardless of payment date, (c) same vendor + same amount paid via two different payment methods or bank accounts. For each duplicate pair: list both transactions and the total duplicate amount.

SCHEME 4 — THRESHOLD SPLITTING ANALYSIS
For each vendor: identify patterns of multiple invoices below a stated approval threshold within a 30-day window that individually avoid the threshold but cumulatively exceed it. Flag any vendor with 3 or more sub-threshold invoices in a month.

SCHEME 5 — EMPLOYEE-VENDOR COLLUSION INDICATORS
Look for: (a) vendor addresses that match employee home addresses or personal email domains, (b) vendor bank account numbers that appear in any HR or payroll-related field, (c) vendors with the same surname as any employee. Flag all potential matches.

SCHEME 6 — PAYMENT REDIRECTION INDICATORS
Identify: (a) vendors whose bank account changed within 30 days before receiving a payment above a material threshold, (b) payments made to a bank account that differs from the account used in prior payments to the same vendor, (c) emergency or urgent payment requests bypassing normal approval workflows.

DELIVERABLE FORMAT:
— Fraud risk heat map: scheme | transactions flagged | total value at risk | risk severity (Critical/High/Medium)
— Exception detail register: transaction/vendor | scheme | specific indicators | amount | investigation priority
— Investigation priority sequence: top 10 items requiring immediate review with rationale
— Estimated financial exposure range: conservative and high-side estimate
— Important: All findings are risk indicators, not conclusions of fraud. Every flagged item requires professional forensic investigation before any disciplinary, legal, or reporting action. Do not communicate these findings to the individuals involved before legal and HR review.`},

  {title:"DPO Optimisation — Working Capital Strategy",prompt:`You are a CFO-level working capital advisor specialising in AP payment strategy, cash flow optimisation, and vendor relationship management. I have uploaded the AP payment behaviour data for analysis.

Read the uploaded file thoroughly. Identify: vendor names, contracted payment terms (days), actual payment dates and invoice dates (to calculate actual DPO), payment amounts, vendor category or spend classification, and any strategic importance indicator if present.

Perform the full DPO analysis:

STEP 1 — ACTUAL VS CONTRACTED DPO CALCULATION
For each vendor: calculate actual DPO = (date of payment − date of invoice) for each transaction, then average across the period. Compare actual DPO to contracted payment terms. Calculate the variance: positive variance means we are paying later than contracted (late payment risk), negative variance means we are paying earlier than required (working capital inefficiency).

STEP 2 — EARLY PAYMENT IDENTIFICATION AND QUANTIFICATION
Identify all vendors where actual DPO is more than 5 days shorter than contracted terms. These represent cash that has left our business before it was legally required to. For each: calculate the average daily excess payment, annualise the working capital inefficiency, and rank by financial value.

STEP 3 — WORKING CAPITAL RELEASE MODELLING
Model two scenarios: (a) align all early-paying vendors to their contracted payment terms, (b) extend payment terms by 10 days where vendors are currently on net-30 or shorter. For each scenario: calculate the one-time working capital release (cash freed in the transition month) and the ongoing annual benefit (assuming stable spend).

STEP 4 — STRATEGIC VENDOR SEGMENTATION
Classify every vendor as: Tier 1 Strategic (cannot afford supply disruption — must maintain relationship, pay on time), Tier 2 Important (important but alternatives exist — optimise DPO, maintain within contracted terms), Tier 3 Transactional (commoditised, alternatives readily available — actively manage DPO to contracted terms and explore extension). Use spend concentration, sole-source risk, and any strategic flags in the data to assign tiers.

STEP 5 — TOTAL WORKING CAPITAL BENEFIT ESTIMATE
Produce a consolidated working capital benefit estimate combining: early payment elimination + term extension opportunities (Tier 3 only). Sensitivity: show impact if 50% of opportunities are implemented vs 100%.

DELIVERABLE FORMAT:
— DPO performance table: vendor | contracted terms | actual DPO | variance | working capital classification
— Tier segmentation: vendor | tier | rationale | recommended payment behaviour
— Working capital release model: scenario | one-time release | annual ongoing benefit
— Implementation plan: sequenced actions by tier with Finance Director and procurement alignment required before any payment term change communication to vendors.`},

  {title:"Invoice Cycle Time — Bottleneck and Efficiency Analysis",prompt:`You are a process improvement specialist with expertise in AP workflow analysis, lean finance operations, and invoice processing transformation. I have uploaded the invoice processing log data for analysis.

Read the file completely. Map the data structure: identify each processing stage recorded, the timestamps for each stage (receipt date, capture date, match date, approval date, payment date), the invoice reference, vendor, amount, and any exception or rejection flags.

Perform the full cycle time analysis:

STEP 1 — STAGE-BY-STAGE ELAPSED TIME CALCULATION
For each invoice, calculate elapsed time in business days between each processing stage:
— Stage A: Invoice Receipt → Data Capture
— Stage B: Data Capture → 3-Way Match Completion
— Stage C: Match Completion → Approval
— Stage D: Approval → Payment Execution
— Total: Invoice Receipt → Payment

For each stage: calculate mean elapsed time, median, 75th percentile, 90th percentile, and maximum. The difference between mean and 90th percentile reveals the impact of exceptions on overall cycle time.

STEP 2 — BOTTLENECK IDENTIFICATION
Identify which stage contributes the largest proportion of total cycle time. Within that stage, identify the specific sub-population (invoice type, vendor, amount band, or department) that drives the longest elapsed times.

STEP 3 — EXCEPTION RATE AND RESOLUTION TIME
Identify all invoices that were rejected, routed to exception queues, or returned during processing. Calculate: exception rate as % of total invoices, average exception resolution time, and the top 3 exception categories by frequency. Exception resolution time is typically the single largest driver of total AP cycle time.

STEP 4 — VENDOR EXCEPTION PROFILE
Identify the top 10 vendors generating the most exceptions or longest average processing times. For each: exception count, exception rate, average resolution time, and total spend. Vendors generating persistent exceptions require a root cause conversation — whether billing format, PO discipline, or contractual terms.

STEP 5 — COST OF PROCESSING
Using the total invoice volume in the file and an assumed fully-loaded AP team cost (I will provide this figure or use a standard benchmark of $65/hour for a mid-market AP function), calculate cost per invoice in the current state. Show how cycle time reduction of 30% would affect cost per invoice.

DELIVERABLE FORMAT:
— Stage timing table: stage | mean days | median | 75th percentile | 90th percentile | % of total cycle
— Bottleneck summary: top 2 stages by elapsed time contribution with root cause hypothesis
— Exception analysis: category | frequency | % of total | average resolution days
— Vendor exception league table: top 10 vendors ranked by exception burden
— Improvement roadmap: 3 targeted interventions (quick wins implementable in <30 days) with estimated cycle time saving for each
— All timing analyses require validation against your ERP or AP system records.`},

  {title:"Month-End AP Accruals — Workpaper Preparation",prompt:`You are a financial controller with deep expertise in period-end close procedures, accruals accounting, and month-end workpaper preparation under IFRS and US GAAP. I have uploaded the AP accruals data file containing outstanding purchase orders, goods receipt notes, and uninvoiced receipts.

Read the entire file. Identify: vendor names, PO references, amounts, GRN dates, invoice receipt status (invoiced or uninvoiced), cost centre or GL account, and any existing accrual entries already posted.

Prepare the complete month-end AP accruals workpaper:

STEP 1 — UNINVOICED RECEIPT IDENTIFICATION
Identify all items where goods or services have been received (GRN exists) but no corresponding invoice has been processed. These are the primary accrual items. For each: confirm the GRN date falls within or before the period end, and that no invoice has been received and processed.

STEP 2 — ACCRUAL AMOUNT ESTIMATION
For each uninvoiced receipt, estimate the accrual amount using the following hierarchy: (1) PO unit price × quantity received — most reliable, (2) rate card or standing order value — if no specific PO, (3) prior month's invoice amount for the same vendor for the same service — for recurring services where no PO exists. State the estimation basis for each item.

STEP 3 — ACCRUAL CLASSIFICATION
Classify each accrual item: Recurring (likely to repeat next month — flag for reversal monitoring), One-time (specific goods received, not expected to recur), Reversing (will reverse automatically when invoice is processed — no manual action required next period).

STEP 4 — DOUBLE-COUNT CHECK
Cross-reference the accrual list against any accruals already posted in the period. For each item: confirm it is not already reflected in a posted journal entry. Duplicate accruals (goods accrued and invoice also processed in the same period) are a common close error.

STEP 5 — JOURNAL ENTRY PREPARATION
Prepare the complete journal entry for the accruals batch:
— Debit: appropriate expense account (reference GL account from the PO or cost centre)
— Credit: Accrued Liabilities / Goods Received Not Invoiced (GRNI) control account
— Narrative for each line: sufficient detail to identify the vendor, PO reference, and period covered
— Total debit must equal total credit

STEP 6 — MOVEMENT COMMENTARY
Compare total accruals to the prior period: has the GRNI balance increased or decreased, and why? Any unusual increase in uninvoiced receipts should be flagged for investigation.

DELIVERABLE FORMAT:
— Accrual schedule: vendor | PO reference | GRN date | amount | estimation basis | GL account | classification
— Journal entry: debit/credit entries in standard journal format ready for posting approval
— GRNI movement summary: prior period total | current period total | movement | explanation
— Sign-off checklist: preparer name field, reviewer name field, Finance Director approval required before posting
— This workpaper is a first draft. All accrual judgements must be reviewed and approved by the Financial Controller or Finance Director before posting.`},

  {title:"AP Process Maturity Assessment — Transformation Readiness",prompt:`You are a management consultant specialising in F&A transformation, AP process design, and shared services centre optimisation. I have uploaded or described our current AP process operation for assessment.

Read the uploaded document thoroughly. It should describe our current AP operation including: invoice volumes, team size, systems used, automation level, current processing metrics, close timeline contribution, and any known pain points.

Conduct a comprehensive maturity assessment:

DIMENSION 1 — INVOICE RECEIPT AND CAPTURE
Score 1-5 and provide narrative evidence: 1=100% paper/manual, 2=some email receipt but manual keying, 3=OCR in place but high exception rate (>20%), 4=intelligent capture with <10% exception rate, 5=straight-through processing >80%. What does the evidence in the uploaded document suggest?

DIMENSION 2 — THREE-WAY MATCHING
Score 1-5: 1=fully manual matching by AP staff, 2=system-assisted but majority manual, 3=automated matching >50% but significant human review, 4=automated matching >80% with AI-assisted exception resolution, 5=>90% auto-matched with exception handling workflow.

DIMENSION 3 — EXCEPTION HANDLING
Score 1-5: 1=no defined exception process (ad hoc resolution), 2=defined process but entirely manual, 3=workflow tool routing exceptions but manual resolution, 4=AI-assisted root cause suggestion with tracked resolution, 5=proactive exception prevention with real-time supplier collaboration portal.

DIMENSION 4 — APPROVAL WORKFLOWS
Score 1-5: 1=paper or email approvals, 2=basic electronic approval with no escalation logic, 3=workflow tool with threshold-based routing, 4=mobile-enabled workflow with SLA tracking, 5=risk-based approval routing using AI transaction scoring.

DIMENSION 5 — PAYMENT EXECUTION
Score 1-5: 1=manual check runs, 2=basic EFT but manually scheduled, 3=automated payment runs with DPO management, 4=dynamic discounting and SCF programme, 5=real-time payment capability with AI-driven payment timing optimisation.

DIMENSION 6 — VENDOR MANAGEMENT
Score 1-5: 1=static master data, manual maintenance, 2=periodic cleanse, basic controls, 3=automated duplicate detection, formal onboarding process, 4=self-service vendor portal, real-time master data validation, 5=AI-driven vendor risk monitoring with proactive alerts.

DIMENSION 7 — REPORTING AND ANALYTICS
Score 1-5: 1=manual reports produced periodically, 2=standard ERP reports, 3=monthly AP dashboard, 4=real-time KPI dashboard with trend analysis, 5=predictive analytics (cash flow forecasting, exception prediction).

DIMENSION 8 — CONTROLS AND COMPLIANCE
Score 1-5: 1=no documented controls, 2=documented but inconsistently applied, 3=controls tested annually, 4=continuous controls monitoring with automated alerts, 5=real-time fraud detection with full audit trail.

DELIVERABLE FORMAT:
— Maturity matrix: dimension | current score (1-5) | evidence basis | best-in-class benchmark | gap | specific next-level requirement
— Overall maturity score and percentile vs industry (approximate)
— Gap analysis: dimensions with largest gap between current and best-in-class
— 90-day roadmap: top 5 initiatives ranked by (impact × feasibility) with effort estimate, expected improvement, and recommended tool or approach
— Investment prioritisation: estimated cost range for each initiative and expected ROI basis
— This assessment is a diagnostic framework. All transformation investment decisions require Finance Director and CFO approval.`},
];

export const AR_PROMPTS = [
  {title:"AR Aging Analysis — Collections Priority Matrix",prompt:`You are a senior AR Director with 15 years of experience managing high-volume receivables portfolios for multinational businesses. I have uploaded the aged debtor report for this analysis.

Read the entire file. Map the structure: customer names, invoice references, amounts, invoice dates, due dates, days outstanding, payment history fields, credit limits, and any customer classification or risk flags already present.

Build the complete collections priority model:

STEP 1 — AGING BAND CLASSIFICATION
For every outstanding balance: calculate days overdue from today (state the date you are using). Classify into bands: Current (not yet due), 1-30 days overdue, 31-60 days, 61-90 days, 91-120 days, 121-180 days, >180 days. Calculate the total outstanding and the % in each band.

STEP 2 — PRIORITY SCORING MODEL
Score each overdue account on four weighted dimensions:
— Financial exposure (35%): score 1-10 based on overdue balance as % of total AR and absolute amount
— Days overdue (30%): score 1-10 (1 = 1-7 days, 10 = >90 days)
— Payment pattern (20%): score 1-10 based on payment history — consistent on-time payer scores low risk, habitual late payer or disputed account scores high
— Customer strategic value (15%): score 1-10 — key account relationship scores low (handle carefully) vs transactional customer scores high (less relationship risk in firm collections)

Calculate a composite priority score 0-100 for each account. Higher score = higher collections urgency.

STEP 3 — ACTION SEGMENTATION
Based on the priority score, assign a collections action for each account:
— Score 80-100: Immediate senior contact this week + formal notice if no response within 5 days
— Score 60-79: Collections call within 3 days + email follow-up
— Score 40-59: Email reminder, escalate if no response within 7 days
— Score 20-39: Standard reminder letter, monitor
— Score <20: Automated reminder only

STEP 4 — BAD DEBT THRESHOLD FLAGGING
Identify all accounts where: (a) balance is >90 days overdue, (b) no payment has been received in the last 60 days, (c) the account has been in dispute for more than 45 days without resolution. These require Finance Director escalation for bad debt provision consideration.

STEP 5 — LEGAL REFERRAL ASSESSMENT
Identify accounts where the combination of balance size, days overdue, and payment history suggests legal referral should be considered. State the criteria you are applying.

DELIVERABLE FORMAT:
— Priority-ranked AR table: customer | overdue balance | days overdue | priority score | action | deadline
— Top 10 accounts for immediate contact this week: name | balance | specific recommended first action
— Collections action summary: how many accounts in each action tier, total value in each tier
— Bad debt escalation list: accounts meeting the flagging criteria above
— All escalation decisions (legal referral, bad debt write-off, credit suspension) require AR Manager and Finance Director authorisation.`},

  {title:"Cash Application — Unmatched Receipts Resolution",prompt:`You are a senior cash application specialist with deep expertise in multi-currency receivables reconciliation, ERP cash application workflows, and dispute resolution. I have uploaded a file containing unmatched bank receipts alongside the open invoice ledger.

Read both datasets carefully. The receipts file should contain: receipt reference, receipt date, amount, currency, bank account, and any narrative or reference information from the remittance. The open invoice file should contain: customer name, invoice reference, invoice date, due date, original amount, any partial payments already applied, and balance outstanding.

Perform the full unmatched receipts resolution analysis:

STEP 1 — AUTOMATED MATCHING ATTEMPT
For each unmatched receipt, attempt to identify the most likely customer and invoice using this matching hierarchy:
— Exact amount match to a single open invoice: High confidence match
— Exact amount match to a combination of open invoices from the same customer: High confidence, multi-invoice allocation
— Amount within 2% of a single open invoice (short-pay): Medium confidence — flag as likely short-pay for customer confirmation
— Reference field in the receipt matches an invoice number or customer reference: High confidence regardless of amount
— Amount matches open invoice minus a standard discount (check for early payment discount offers in the file): Medium-high confidence

For each match: state the confidence level (High/Medium/Low) and your matching rationale.

STEP 2 — SHORT-PAY IDENTIFICATION
For receipts where the amount is less than a single invoice but within 2% of it: classify as probable short-pay. Identify the possible reasons: early payment discount taken without authorisation, deduction claimed by customer, banking fee deducted in transit. For each: recommend the specific enquiry to make of the customer.

STEP 3 — OVERPAYMENT IDENTIFICATION
For receipts exceeding any single open invoice amount: identify whether this is likely a payment covering multiple invoices (check for combinations), or a genuine overpayment. For genuine overpayments: identify the customer, the amount, and the appropriate resolution (refund vs credit against future invoice).

STEP 4 — GENUINELY UNRESOLVABLE ITEMS
After completing the above steps, list any receipts you cannot match with reasonable confidence. For each: summarise what information is available and what specific information is needed from the customer to resolve it.

STEP 5 — SUSPENSE ACCOUNT RISK ASSESSMENT
Calculate the total value remaining unmatched after your analysis. Flag if this exceeds 1% of total AR — unresolved cash in suspense represents both a control failure and financial statement risk.

DELIVERABLE FORMAT:
— Matching worksheet: receipt reference | amount | proposed match (customer + invoice) | confidence | allocation recommendation | action required
— Summary: total receipts | matched (high confidence) | matched (medium confidence) | short-pays | overpayments | unresolvable
— Customer contact list: receipts requiring customer clarification with specific questions to ask
— Suspense account status: total remaining unresolved, risk assessment
— All Medium-confidence allocations must be confirmed with the customer before final posting. Low-confidence allocations must not be posted without Finance Manager review.`},

  {title:"DSO Analysis — Improvement Roadmap",prompt:`You are a working capital consultant who has delivered DSO reduction programmes for FTSE 250 and Fortune 500 companies across multiple sectors. I have uploaded the AR balances and revenue data by period for DSO analysis.

Read the file carefully. Identify: period end dates (monthly), closing AR balance by period, revenue billed by period (or month), and ideally customer-level AR breakdown if available.

Perform the complete DSO analysis:

STEP 1 — DSO CALCULATION (MULTIPLE METHODS)
Calculate DSO for each available period using two methods:
— Method A (Period-end AR): DSO = (Closing AR Balance ÷ Revenue in Period) × Number of Days in Period
— Method B (Average AR): DSO = ((Opening AR + Closing AR) ÷ 2) ÷ Daily Revenue
Explain the difference: Method B smooths for seasonal revenue variation but can mask period-end deterioration. Both should trend in the same direction — if they diverge significantly, investigate.

STEP 2 — TREND ANALYSIS
Plot the DSO trend across all available periods. Identify: (a) whether DSO is improving or deteriorating, (b) the rate of change per month, (c) any seasonal patterns, (d) any step-change deterioration that may indicate a specific event (customer concentration issue, billing system change, credit policy change).

STEP 3 — CUSTOMER-LEVEL DECOMPOSITION
If customer-level data is available: calculate DSO contribution by customer (customer AR balance ÷ total AR × overall DSO). Identify the top 5 customers by DSO contribution. For each: their individual payment days, their weight in total AR, and whether they are structurally slow payers or experiencing a current difficulty.

STEP 4 — DSO DECOMPOSITION — STRUCTURAL VS TIMING
Decompose DSO movement into: (a) timing differences (period-end billing concentrations, monthly payment cycles) vs (b) structural deterioration (customers genuinely paying more slowly). Timing differences self-correct; structural deterioration requires intervention.

STEP 5 — CASH FLOW IMPACT QUANTIFICATION
Calculate: if DSO were reduced by 5 days from the current level, how much cash would that release? Formula: (Annual Revenue ÷ 365) × 5 days = cash release. At the current revenue run rate, what is the annual value of a 1-day DSO improvement?

STEP 6 — IMPROVEMENT ROADMAP
Identify 3 specific, actionable interventions with the highest DSO reduction potential based on the analysis findings. For each: expected DSO impact (days), implementation timeline, and assigned function (AR team, commercial team, Finance Director).

DELIVERABLE FORMAT:
— DSO trend table: period | method A DSO | method B DSO | movement | commentary
— Customer decomposition table (if data available): customer | AR balance | payment days | DSO contribution | classification
— Cash flow impact: DSO reduction scenarios (5-day, 10-day) and cash release at current revenue
— 3-action improvement plan: action | DSO impact (days) | timeline | owner
— Present as a management working paper for Finance Director and CFO review.`},

  {title:"Bad Debt Provision Workpaper — IFRS 9 / ASC 310",prompt:`You are a financial controller and technical accounting specialist with expertise in credit loss provisioning under IFRS 9 (Expected Credit Loss model) and US GAAP ASC 310 (Contingency and Receivables). I have uploaded the aged AR by customer for the provision calculation.

Read the file in full. Map: customer name, invoice details, aging bands, total outstanding balance, and any customer-specific risk information or flags included in the data.

Prepare the complete bad debt provision workpaper:

STEP 1 — STANDARD AGING-BASED PROVISION CALCULATION
Apply the following provision rates to the aging bands in the uploaded data (adjust if your entity's approved rates differ — state the rates used):
— Current (not yet due): 0.5% (ECL model requires provisioning even on current balances)
— 1-30 days overdue: 2%
— 31-60 days overdue: 5%
— 61-90 days overdue: 15%
— 91-180 days overdue: 30%
— >180 days overdue: 75%
— In dispute (regardless of age): 50% minimum (flag for individual assessment)

For each customer in each aging band: calculate the standard provision amount.

STEP 2 — MANAGEMENT OVERLAY — SPECIFIC PROVISION ASSESSMENT
Identify any customer where additional specific provision is warranted beyond the standard aging rates. Criteria: (a) known insolvency or administration proceedings, (b) public reports of significant financial difficulty, (c) payment terms disputed and in litigation, (d) customer concentration risk (single customer >10% of total AR), (e) sector stress (e.g. retail, construction — state your assumption). For each specific provision: state the additional amount, the basis, and the evidence.

STEP 3 — PROVISION MOVEMENT ANALYSIS
If prior period provision data is available in the file: calculate the movement. Increase in provision = additional charge to P&L (bad debt expense). Decrease in provision = credit to P&L. Identify the driver of the movement: new overdue balances, specific customer deterioration, or recoveries on previously provisioned balances.

STEP 4 — JOURNAL ENTRY PREPARATION
Debit: Bad Debt Expense (P&L — state the account code or description)
Credit: Provision for Doubtful Debts (Balance Sheet — contra asset)
Narrative: "Month-end bad debt provision — period ended [date] — per attached workpaper"
Net movement only (debit the increase in provision or credit the decrease vs prior period).

STEP 5 — DISCLOSURE NOTE DRAFT
Prepare a draft disclosure note in the format required for IFRS 9 / ASC 310: the accounting policy for credit loss recognition, the movement in provision during the period (opening, charge, releases, write-offs, closing), and the aging analysis of gross AR vs provision.

DELIVERABLE FORMAT:
— Provision schedule: customer | aging band | gross AR | provision rate | standard provision | specific overlay | total provision
— Movement table: opening provision | new provision | releases | write-offs | closing provision
— Journal entry
— Draft disclosure note
— Sign-off: preparer | reviewer | Finance Director approval required — all provision judgements are management estimates and subject to external audit review.`},

  {title:"Revenue Leakage Analysis — Billing Control Review",prompt:`You are a senior revenue assurance analyst with expertise in billing accuracy, contract compliance, and revenue integrity in B2B environments. I have uploaded billing records, contract terms, and credit note data for this revenue leakage analysis.

Read all uploaded files carefully. Understand the billing model: is revenue project-based, recurring subscription, usage-based, or milestone-driven? Identify the mapping between contracts and invoices raised.

Screen for all five categories of revenue leakage:

LEAKAGE 1 — UNBILLED SERVICES
Cross-reference service delivery records (project completion logs, delivery confirmations, time records, or equivalent) against invoices raised in the same period. Identify any delivered service or completed milestone that has no corresponding invoice within the standard billing window (typically 30 days of delivery). For each unbilled item: value the leakage using the contracted rate. Prioritise by value.

LEAKAGE 2 — PRICING VARIANCES BELOW CONTRACT
Compare invoice unit prices to contracted rates for each customer and service line. Any invoice where the billed price is below the contracted rate represents either an intentional discount (which should be documented) or a billing error. For each under-priced invoice: calculate the revenue shortfall (contracted price − billed price × volume). Flag whether there is a documented authorisation for the lower price.

LEAKAGE 3 — UNJUSTIFIED CREDIT NOTES
Review all credit notes issued in the period. For each credit note: identify the stated reason, cross-reference to the original invoice, and assess whether a legitimate service failure or contractual entitlement supports the credit. Flag any credit note where: (a) the reason is vague or missing, (b) there is no corresponding delivery failure or dispute record, or (c) the credit restores cash to a customer who has already been slow to pay.

LEAKAGE 4 — DUPLICATE CREDITS
Identify any invoice that has received more than one credit note, or any customer who has received a credit against an invoice that was already disputed and credited in a prior period. Duplicate crediting represents direct cash leakage.

LEAKAGE 5 — MISSED CONTRACT ENTITLEMENTS
Review contracts for: (a) annual price escalation clauses that have not been applied, (b) volume-based pricing tiers where the customer has exceeded a threshold triggering a higher rate, (c) add-on services or licence fees included in the contract but not appearing in any invoice, (d) renewal price adjustments not reflected in billing.

DELIVERABLE FORMAT:
— Leakage schedule by category: category | number of items | estimated annual value | recovery action | evidence required
— Total estimated annual revenue leakage: sum across all categories
— Top 10 individual leakage items by value: customer | invoice | leakage type | amount | recommended action
— Billing control recommendations: top 3 process changes to prevent recurrence
— Recovery action plan: what can be invoiced or recovered now, what requires commercial discussion, what is time-barred
— All recovery actions require Finance Director and commercial team alignment before customer communication.`},

  {title:"Customer Credit Risk Scoring — Portfolio Review",prompt:`You are a credit risk analyst and portfolio manager with expertise in commercial credit assessment, debtor management, and credit limit governance for B2B businesses. I have uploaded the customer portfolio data for credit risk review.

Read the file carefully. Identify: customer names, current AR balance, approved credit limit, average payment days (or payment history), sector/industry, credit limit last review date, and any notes on financial difficulties or disputes.

Score and classify the full customer portfolio:

STEP 1 — PAYMENT BEHAVIOUR SCORE (40% WEIGHT)
For each customer: score their payment behaviour 1-10.
Score 9-10: consistently pays within terms, no late payments in 12 months
Score 7-8: occasional late payment (<5 days average), no defaults
Score 5-6: regularly pays 6-15 days late, or has one missed payment in 12 months
Score 3-4: consistently pays 15-30 days late, or has 2-3 missed payments
Score 1-2: payments >30 days late routinely, or currently in dispute / default
Also assess trend: is payment behaviour improving or deteriorating over the last 3-6 months? Trend adjustment: +1 for clear improvement, -1 for clear deterioration.

STEP 2 — BALANCE CONCENTRATION SCORE (20% WEIGHT)
Calculate each customer's current AR balance as a % of total AR. Score: <2% = 1 (low concentration risk), 2-5% = 4, 5-10% = 7, >10% = 10 (high concentration risk). Concentration amplifies the impact of any default.

STEP 3 — CREDIT UTILISATION SCORE (20% WEIGHT)
Calculate utilisation = current balance ÷ approved credit limit. Score: <60% = 1, 60-80% = 4, 80-95% = 7, >95% = 10. High utilisation reduces our headroom to absorb a delayed payment and signals potential liquidity stress at the customer.

STEP 4 — EXTERNAL RISK SIGNALS (20% WEIGHT)
Score 1-10 based on any external risk information: 1-3 = no known concerns, sector performing well; 4-6 = sector under some pressure or company has changed ownership/management; 7-9 = publicly known financial difficulty, major customer loss, or covenant breach; 10 = insolvency proceedings commenced or imminent.

STEP 5 — COMPOSITE SCORING AND CLASSIFICATION
Calculate composite score (weighted average of all four dimensions). Classify:
— Green (score 1.0-3.0): maintain current credit limit, standard monitoring
— Amber (score 3.1-6.0): reduce credit limit to 80% of current level, increase payment monitoring frequency, require Finance Manager review
— Red (score 6.1-10.0): suspend new credit, refer to Finance Director, consider legal options or security (personal guarantee, credit insurance)

DELIVERABLE FORMAT:
— Customer risk register: customer | score by dimension | composite score | classification | recommended action
— Action list: all Amber and Red customers with specific action, owner, and deadline
— Credit limit adjustment proposals: for Amber customers — proposed new limit and rationale
— Portfolio summary: number and value of balances in each risk band
— Concentration risk summary: top 5 customers by AR balance and their risk classification
— All credit limit changes require Finance Director approval. Red-rated customers should be discussed with legal counsel before any formal communication.`},

  {title:"Collections Communication Toolkit — Scripts and Templates",prompt:`You are a senior collections specialist and commercial credit manager with 20 years of experience managing receivables across professional services, manufacturing, and technology sectors. I need a complete collections communications toolkit for our business.

Before producing the toolkit, read the business context information in the uploaded file (or use the context I describe): our business type, typical customer profile, invoice values, credit terms, and any specific guidance on relationship sensitivity.

Produce a complete, professionally calibrated collections toolkit with all communications fully written and ready to use:

COMMUNICATION 1 — DAY 7 PHONE CALL SCRIPT (FRIENDLY REMINDER)
Write a complete phone script, word-for-word, for a 3-5 minute call. The tone assumes this is an oversight, not a deliberate non-payment. Include:
— Opening that identifies the caller and purpose without being accusatory
— The specific invoice reference, amount, and original due date to mention
— A clear, direct request for payment or an explanation
— How to handle three common deflections:
  Deflection A: "I haven't received the invoice" — your response, including what to offer to resend and how
  Deflection B: "It's in our payment run / being processed" — your response, how to get a confirmed payment date
  Deflection C: "Our payment terms are different to what you're showing" — your response, how to resolve without conceding
— How to close the call: confirm next action, document the outcome
— What to do if you cannot reach anyone: voicemail script (30 seconds)

COMMUNICATION 2 — DAY 14 EMAIL (WRITTEN FOLLOW-UP)
Write a complete email, fully formatted and ready to send. Subject line included. Contents: reference the prior phone contact, restate the invoice details, attach-instruction for the invoice, firm but professional tone. Close with a specific payment deadline (7 days from the email date) and the consequence if payment is not received.

COMMUNICATION 3 — DAY 30 EMAIL (FORMAL NOTICE)
Write a complete email, formal in tone. Reference all prior contact attempts. State the original due date, the number of days now overdue, and the total amount outstanding. Set a final deadline (7 days). State clearly that the account will be referred for escalation if payment is not received by the deadline. Do not threaten specifically what escalation means — leave that to the next communication.

COMMUNICATION 4 — DAY 60 FORMAL PRE-LEGAL LETTER
Write a complete letter in formal correspondence format (company letterhead placement indicated). This letter should:
— Reference all prior communications by date
— State the specific invoice details and total outstanding
— State the final payment deadline (10 days)
— Reference the right to add statutory interest on overdue commercial debt (state the applicable rate for the jurisdiction — UK: Late Payment of Commercial Debts Act; US: state reference; or use "applicable statutory rate" if jurisdiction not specified)
— State clearly that legal proceedings will be initiated without further notice if payment is not received
— Include signature block for Finance Director

ADAPTATION NOTES:
— Long-term key account: note in each template where to soften language for high-value, strategic relationships
— First-time late payer: note where to use more charitable language assuming genuine oversight

All templates are drafts for Finance Manager and Finance Director review. The Day 60 letter should be reviewed by legal counsel before sending.`},

  {title:"Deduction Management — Classification and Resolution",prompt:`You are an AR process specialist and revenue assurance expert with experience in high-volume deduction management for businesses in retail supply, manufacturing, and professional services. I have uploaded the customer deductions and short-payment register for this analysis.

Read the file completely. Identify: customer name, invoice reference, original invoice amount, amount paid, deduction amount, date of deduction, and any reason code or stated reason provided by the customer.

Perform the full deduction management analysis:

STEP 1 — DEDUCTION CLASSIFICATION
Classify each deduction into one of three categories:

VALID: The deduction is contractually supported — examples include: a documented early payment discount taken within the discount window; a pricing error where the invoice price exceeded the contracted rate; goods returned with a documented returns authorisation; an agreed credit that had not yet been issued. For valid deductions: prepare the credit note recommendation.

DISPUTED: The customer has made a deduction without providing adequate supporting documentation, or the stated reason cannot be verified against our records. For disputed deductions: the burden of proof is on the customer.

FRAUD INDICATOR: A pattern of small recurring deductions from the same customer with different reasons each time; deductions that increase consistently in value; deductions taken immediately before or after a contractual review period. Flag these separately.

STEP 2 — CREDIT NOTE RECOMMENDATIONS FOR VALID DEDUCTIONS
For each Valid deduction: prepare the credit note recommendation including the original invoice reference, the credit amount, the GL account to credit (expense account for pricing errors, returns account for goods returns), and the credit note narrative.

STEP 3 — DISPUTE LETTERS FOR DISPUTED DEDUCTIONS
For each Disputed deduction: write a specific dispute letter (not a template — customised to the reason stated). The letter should: acknowledge receipt of the payment, identify the shortfall and invoice reference, state that the deduction is not supported by our records, request specific documentation to support the claim within 14 days, and state that payment of the outstanding balance is required if documentation is not received.

STEP 4 — PATTERN ANALYSIS
Identify customers with recurring deduction patterns: 3 or more deductions in the period, or deductions representing >5% of their billings. For each: calculate the deduction rate (deductions ÷ total billings), the trend, and whether this warrants a commercial review conversation.

STEP 5 — FINANCIAL EXPOSURE SUMMARY
Calculate: total deductions in the period | valid (expected to be credited) | disputed (uncertain recovery) | fraud indicators (requires escalation). This is the net AR exposure from deductions.

DELIVERABLE FORMAT:
— Deduction register: customer | invoice | deduction amount | classification | resolution action
— Credit note batch: all valid deductions with debit/credit entries
— Dispute letters: drafted for each disputed deduction (fully written, not template)
— Pattern analysis: customers flagged for commercial team review
— All credit note authorisations require AR Manager sign-off. Fraud indicator findings require Finance Director and potentially legal escalation.`},

  {title:"AR Automation — ROI Business Case",prompt:`You are a management consultant specialising in F&A transformation, technology business cases, and AR process design. I have uploaded our current AR operational data for this business case analysis.

Read all data in the file carefully. Extract: current team FTE and cost, invoice and payment volumes, current DSO, error rates, bad debt as % of revenue, and any existing technology costs.

Build the complete AR automation business case:

SECTION 1 — CURRENT STATE BASELINE
Calculate the fully-loaded cost of the current AR operation:
— Personnel cost: FTE × average fully-loaded cost per FTE (salary + benefits + overhead)
— Bad debt cost: bad debt write-off as % of revenue × annual revenue
— Late collection cost: revenue × average DSO days × average cost of funds rate (estimate 6% if not provided)
— Dispute resolution cost: time spent on deductions and disputes × hourly cost
— Total current state cost: sum of all four elements

SECTION 2 — THREE AUTOMATION SCENARIOS
Model three scenarios with distinct scope and investment levels:

Scenario A — Cash Application Automation Only
Scope: AI-powered matching of receipts to invoices, automated exception routing
Investment: estimate £80-150K implementation + £30-60K annual SaaS
Expected benefits: 80% reduction in cash application manual effort, DSO improvement 2-3 days from faster matching

Scenario B — Collections Intelligence Added
Scope: Scenario A plus AI-driven collections prioritisation and automated reminder workflows
Investment: estimate £150-250K implementation + £60-100K annual SaaS
Expected benefits: Scenario A benefits plus DSO improvement 5-7 days total, bad debt reduction 0.1-0.2% of revenue

Scenario C — Full AR Automation
Scope: Scenario B plus automated credit decisioning, real-time risk monitoring, customer self-service portal
Investment: estimate £300-500K implementation + £120-200K annual SaaS
Expected benefits: Scenario B benefits plus 30% AR team headcount reduction, bad debt reduction 0.2-0.3% of revenue

For each scenario: calculate NPV at 8% discount rate over 5 years, IRR, and payback period. Show the year-by-year benefit and cost schedule.

SECTION 3 — SENSITIVITY ANALYSIS
Show the NPV impact for the recommended scenario if: (a) benefits are 20% lower than projected, (b) implementation cost is 25% higher than projected, (c) both simultaneously.

SECTION 4 — IMPLEMENTATION RISK REGISTER
For the recommended scenario: list the top 5 implementation risks, their probability, financial impact, and the mitigation action.

SECTION 5 — RECOMMENDATION
State the recommended scenario with clear rationale based on the financial analysis and risk profile. Identify the critical success factors for achieving the projected benefits.

DELIVERABLE FORMAT:
— Current state cost baseline table
— Scenario comparison: investment | annual benefit | NPV | IRR | payback
— Sensitivity table for recommended scenario
— Risk register
— 300-word executive summary recommendation
— All financial projections are estimates. Finance Director, IT, and procurement must validate before Board submission.`},

  {title:"Month-End AR Pack — Finance Director Commentary",prompt:`You are a senior AR Controller preparing the monthly AR performance pack for the Finance Director. I have uploaded the month-end AR data file.

Read the file completely. Extract: opening and closing AR balance, revenue billed in the period, cash collected in the period, write-offs and provision movements, the aging profile (current and prior period), DSO figures, and details of the top overdue accounts.

Produce the complete month-end AR pack:

SECTION 1 — OPENING-TO-CLOSING AR BRIDGE
Build a full reconciliation of the AR balance movement:
Opening AR + Revenue billed − Cash collected − Write-offs/Credits − FX movements (if applicable) = Closing AR
Present as a bridge table. Any unexplained variance must be investigated and explained before sign-off.

SECTION 2 — COLLECTION EFFICIENCY
Calculate: Cash collected ÷ (Opening AR + Revenue billed) = Collection rate %.
Compare to prior period and target. A declining collection rate is an early warning signal.

SECTION 3 — DSO PERFORMANCE
Current period DSO vs prior period DSO vs target. Explain the movement: volume effect (more revenue = mathematically higher DSO even with same collection speed) vs behavioural change (customers genuinely paying more slowly).

SECTION 4 — AGING PROFILE ANALYSIS
Present the aging profile as: % Current, % 1-30 days, % 31-60 days, % 61-90 days, % >90 days.
Compare to prior period: has the profile aged (more weight in longer buckets = deterioration) or improved? Quantify the absolute movement in each bucket.

SECTION 5 — TOP OVERDUE ACCOUNTS NARRATIVE
For the top 5 overdue accounts by balance: customer name (or anonymised if appropriate), balance outstanding, days overdue, action already taken, expected resolution date, and Finance Director-level risk assessment.

SECTION 6 — BAD DEBT ACTIVITY
Write-offs in period: amount, customers, reason. Provision movement: increase or decrease, driver. Cumulative provision as % of gross AR: is this trending up or down and why?

SECTION 7 — NEXT MONTH FOCUS
Three specific, measurable actions with named owner and deadline. Each action should be directly linked to a finding in the analysis above.

EXECUTIVE COMMENTARY FORMAT:
Write a structured narrative (350-400 words) suitable for Finance Director review that covers all seven sections above. Tone: direct, factual, decision-focused. No jargon. The Finance Director should be able to understand the AR health of the business in 3 minutes.

— This commentary is a first draft. All figures must be reconciled to the ERP before presentation.`},
];

export const R2R_PROMPTS = [
  {title:"Month-End Close — Timeline Optimisation",prompt:`You are a management consultant specialising in close transformation with experience reducing close cycles from 10+ days to 5 days or fewer across multinational finance functions. I have uploaded our current month-end close process documentation.

Read the uploaded document in full. Map all close activities, their sequence, the teams responsible, the systems involved, and any known bottlenecks or late-close causes described.

Perform the complete close transformation analysis:

STEP 1 — CLOSE ACTIVITY MAPPING
List every distinct close activity identified in the documentation. For each activity: assign an estimated duration (hours or days), the responsible team, the system or tool used, and the dependencies (what must be completed before this can start). Build this into a chronological activity register from day -1 (pre-close prep) through to final sign-off.

STEP 2 — CRITICAL PATH IDENTIFICATION
Identify the critical path: the sequence of dependent activities that determines the earliest possible close date. Activities on the critical path have zero float — any delay directly extends the close. Activities off the critical path have float — they can be delayed without extending the close date. Highlight which activities are on the critical path.

STEP 3 — AUTOMATION POTENTIAL SCORING
For each close activity: score its automation potential: High (>70% of effort automatable with current technology), Medium (30-70% automatable), Low (<30% automatable or requires significant judgment). For each automatable activity: identify the specific tool or approach (examples: BlackLine for reconciliations, Vena or Planful for management accounts consolidation, RPA for data extraction, Claude for commentary drafting).

STEP 4 — HIGH-EFFORT / LOW-VALUE IDENTIFICATION
Identify the 5 activities consuming the most elapsed time with the lowest strategic value (activities that do not require senior judgment and produce outputs used only for process compliance rather than decision-making). These are the priority targets for elimination or automation.

STEP 5 — THREE-SCENARIO CLOSE TIMELINE MODEL
Model the close timeline under three scenarios:
— Current state: baseline from the documentation
— Quick win scenario (30% reduction): achievable within 90 days with process changes alone, no significant technology investment
— Transformed scenario (50%+ reduction): achievable within 6-12 months with automation investment

DELIVERABLE FORMAT:
— Close activity register: activity | duration | team | dependencies | critical path (Y/N) | automation potential | recommended tool
— Critical path diagram: described as a clear sequential narrative
— Quick win roadmap: 5 specific changes, each with: current time spent, expected saving, implementation effort, and first action this week
— Transformation roadmap: sequenced initiatives for 50%+ reduction, with investment required and expected close-day saving
— Present as a Finance Director deliverable suitable for sharing with CFO.`},

  {title:"Bank Reconciliation — Exception Report and Sign-Off",prompt:`You are a financial controller with expertise in cash management, bank reconciliation controls, and period-end close procedures. I have uploaded the bank reconciliation data including the bank statement, GL cash account ledger, and reconciling items list.

Read all data in the uploaded file. Identify: the bank and account name, the period end date, the closing balance per bank statement, the closing balance per GL, and all reconciling items with their dates, amounts, descriptions, and ages.

Perform the complete bank reconciliation review:

STEP 1 — BALANCE RECONCILIATION
Confirm the arithmetic: Bank Statement Balance ± Reconciling Items = GL Balance. If the reconciliation does not balance (i.e. there is an unexplained difference), flag this immediately as a material exception requiring urgent investigation before any other analysis proceeds.

STEP 2 — RECONCILING ITEM CLASSIFICATION
For each reconciling item: classify into one of five categories:
— Timing difference (normal): items that will clear automatically in the next few days (outstanding cheques, deposits in transit). These are expected and acceptable.
— GL adjustment required: items where a journal entry is needed to correct the GL (bank charges not posted, interest income not recorded). Prepare the journal entry for each.
— Bank error: discrepancies attributable to a bank processing error. Flag for bank notification.
— GL error: duplicate postings, incorrect amounts, or mispostings in the GL. Prepare correcting entries.
— Unexplained: items that cannot be categorised above. These require immediate investigation — unexplained items should not appear on a controlled bank reconciliation.

STEP 3 — AGED ITEMS ANALYSIS
Identify all reconciling items outstanding beyond 30 days. An item outstanding for more than 30 days on a bank reconciliation represents a control failure — it means either: (a) a genuine transaction has not been posted to the GL, or (b) a phantom item is on the reconciliation masking an error or misappropriation. For each aged item: state the date first appearing, the amount, the category, and the required action.

STEP 4 — CORRECTING JOURNAL ENTRIES
For all items requiring GL adjustment: prepare the complete journal entry. Debit/credit | Account code (if available in file) | Amount | Narrative sufficient for audit file.

STEP 5 — RECONCILIATION HEALTH ASSESSMENT
Rate the overall reconciliation: Clean (no unexplained items, no items >30 days, reconciliation balances), Minor Exceptions (some timing items >30 days but all categorised, no unexplained), Material Exceptions (unexplained items present, or reconciliation does not balance — escalate to Finance Director).

DELIVERABLE FORMAT:
— Reconciling items schedule: item | description | date | amount | classification | action required
— Correcting journal entries: debit | credit | amount | narrative
— Aged items register: items >30 days with investigation status
— Reconciliation health assessment and sign-off status
— Do not sign off this reconciliation if unexplained items remain. Finance Director review required for all Material Exception reconciliations.`},

  {title:"Intercompany Elimination — Consolidation Workpaper",prompt:`You are a group financial controller with expertise in multi-entity consolidation, intercompany eliminations, and group reporting under IFRS 10 and US GAAP ASC 810. I have uploaded the entity trial balances and intercompany transaction schedule for the consolidation period.

Read the uploaded file thoroughly. Identify: all entities in the consolidation group, the intercompany account codes or descriptions, the recorded balances in each entity's books for intercompany items, and the transaction schedule (if provided separately).

Perform the complete intercompany elimination workpaper:

STEP 1 — INTERCOMPANY BALANCE MATCHING
For each intercompany relationship pair (Entity A ↔ Entity B): identify the intercompany receivable in Entity A and the corresponding intercompany payable in Entity B. Record both balances and calculate the difference (mismatch). Perform this for all entity pairs in both directions.

STEP 2 — MISMATCH INVESTIGATION AND EXPLANATION
For each mismatch: quantify the difference and identify the most likely cause from this list:
— Timing: one entity has recorded a transaction that the counterparty will record in the next period (common for period-end invoices in transit)
— FX translation: entities reporting in different functional currencies — the same transaction translates at different rates at each end
— Accounting treatment difference: entities have applied different accounting policies to the same transaction
— Error: one entity has misposted or omitted the transaction
For each mismatch: state the cause, the amount, and the resolution required.

STEP 3 — REVENUE-COST ELIMINATION
Identify all intercompany revenue in any entity's P&L and the corresponding intercompany cost in the purchasing entity's P&L. These must be eliminated in full on consolidation. For each: confirm the amounts match (if they do not match, investigate before eliminating).

STEP 4 — INTERCOMPANY PROFIT ELIMINATION
Identify any unrealised profit on intercompany transactions (e.g. where one entity has sold goods to another at a mark-up and those goods remain in inventory or as fixed assets at period end). Calculate the unrealised profit to eliminate.

STEP 5 — CONSOLIDATION JOURNAL ENTRIES
Prepare all elimination journal entries:
— Intercompany balance elimination: Dr IC Payable / Cr IC Receivable (for each matched pair)
— Intercompany revenue/cost elimination: Dr IC Revenue / Cr IC Cost
— Unrealised profit elimination: Dr Group retained earnings (or current year P&L) / Cr Inventory/Asset

STEP 6 — FX TRANSLATION ADJUSTMENT
If entities report in different currencies: prepare the FX translation adjustment entries. Note the exchange rates applied (closing rate for balance sheet, average rate for P&L) and the translation difference recognised in OCI.

DELIVERABLE FORMAT:
— Intercompany matching schedule: entity pair | IC receivable | IC payable | difference | cause | resolution
— Revenue/cost elimination schedule: entity pair | IC revenue | IC cost | difference | elimination entry
— Consolidation journal entries: all eliminations in standard debit/credit format
— Unresolved items register: mismatches requiring further investigation with deadline and owner
— This workpaper is a required audit file document. All material unresolved intercompany mismatches must be investigated and resolved before signing off the group financial statements.`},

  {title:"Fixed Asset Roll-Forward — Period-End Schedule",prompt:`You are a fixed asset accountant and financial controller with expertise in property, plant and equipment accounting under IAS 16, IFRS 5, and US GAAP ASC 360. I have uploaded the fixed asset register and supporting transaction data for the period.

Read the entire file. Identify: asset classes (land, buildings, plant, equipment, vehicles, IT, etc.), opening balances (cost and accumulated depreciation), additions and disposals in the period, and depreciation rates or useful life by asset class.

Prepare the complete fixed asset roll-forward schedule:

STEP 1 — COST ROLL-FORWARD BY ASSET CLASS
For each asset class: Opening cost + Additions − Disposals (at cost) − Impairments = Closing cost. Present as a table with each movement line separately identified. Verify the arithmetic for each class.

STEP 2 — DEPRECIATION ROLL-FORWARD BY ASSET CLASS
For each asset class: Opening accumulated depreciation + Charge for the period − Depreciation on disposals = Closing accumulated depreciation.

Depreciation charge calculation check: apply the stated depreciation rate to the opening cost (or average cost for additions mid-year). Use the half-year convention for additions in the current period if that is the stated policy. Flag any asset class where the depreciation charge appears inconsistent with the stated policy.

STEP 3 — NET BOOK VALUE CALCULATION
For each asset class: Closing cost − Closing accumulated depreciation = Net book value. Present the complete fixed asset note table in financial statement format.

STEP 4 — DISPOSAL GAIN/LOSS CALCULATION
For each disposal in the period: Net book value at disposal date = Cost − Accumulated depreciation at disposal date. Gain or loss = Sale proceeds − Net book value. Prepare the disposal journal entry: Dr Accumulated Depreciation, Dr Cash/Debtor (proceeds), Cr Cost of Asset, Dr/Cr P&L (gain or loss).

STEP 5 — CAPITALISATION REVIEW
Review additions: do all additions meet the capitalisation threshold stated in the accounting policy? Any items below the threshold should be expensed, not capitalised. Flag any addition where the description suggests it may be a repair or maintenance item rather than a capital improvement.

STEP 6 — IMPAIRMENT INDICATORS
Review the asset register for impairment indicators: assets no longer in use, assets with carrying value significantly above market value, assets in a business unit generating consistent losses. Flag for impairment review — impairment testing is required under IAS 36 / ASC 360 when indicators exist.

DELIVERABLE FORMAT:
— Full roll-forward schedule: asset class | opening cost | additions | disposals | closing cost | opening depreciation | charge | on disposals | closing depreciation | NBV
— Disposal schedule: asset | cost | accumulated depreciation | NBV | proceeds | gain/(loss)
— Depreciation calculation workpaper
— Impairment indicator register
— Capital commitments note (contracted but not yet acquired)
— This schedule is a primary audit file document. Finance Director sign-off required before closing the fixed asset ledger.`},

  {title:"Lease Accounting Workpaper — IFRS 16 / ASC 842",prompt:`You are a technical accountant specialising in lease accounting under IFRS 16 (Leases) and ASC 842 (Leases). I have uploaded the lease contracts and/or lease data schedule for accounting treatment.

Read all lease documents or data in the uploaded file. Identify for each lease: commencement date, lease term (including any extension options), monthly/quarterly lease payments, any initial direct costs, any lease incentives received, and the applicable discount rate (incremental borrowing rate or implicit rate if known).

Prepare the complete lease accounting workpaper for each identified lease:

STEP 1 — LEASE IDENTIFICATION AND CLASSIFICATION
Apply the IFRS 16 / ASC 842 definition: does the contract convey the right to control the use of an identified asset for a period of time in exchange for consideration? Confirm: (a) the asset is identified (specific, not substitutable), (b) lessee has the right to obtain substantially all of the economic benefits, (c) lessee has the right to direct the use of the asset. Classify as: Lease (full IFRS 16/ASC 842 treatment) or Service arrangement (off balance sheet).

STEP 2 — LEASE TERM DETERMINATION
Determine the non-cancellable period. Add extension periods if it is reasonably certain (IFRS 16) / reasonably certain (ASC 842) that the option will be exercised based on: significant leasehold improvements, below-market renewal terms, business importance of the location, costs of relocation. State the assumed lease term and the basis for including or excluding extension periods.

STEP 3 — LEASE LIABILITY — PRESENT VALUE CALCULATION
Calculate the present value of future lease payments using the lessee's incremental borrowing rate (state the rate used and the source). Show the discounting schedule: payment date | lease payment | discount factor | present value of payment. Total present value = initial lease liability recognition amount.

STEP 4 — RIGHT-OF-USE ASSET CALCULATION
Initial ROU asset = Lease liability + Initial direct costs + Prepayments made − Lease incentives received. Record the ROU asset value.

STEP 5 — SUBSEQUENT MEASUREMENT — AMORTISATION SCHEDULE
Prepare the full amortisation schedule for the lease term:
— Lease liability: opening balance + interest (at IBR × opening liability) − payment = closing balance. Show for each payment period.
— ROU asset: opening NBV − depreciation charge (straight-line over lease term) = closing NBV. Show for each period.

STEP 6 — JOURNAL ENTRIES
Commencement date: Dr Right-of-Use Asset / Cr Lease Liability (initial recognition amount)
Each period: Dr Interest Expense / Cr Lease Liability (interest), Dr Lease Liability / Cr Cash (payment), Dr Depreciation / Cr Accumulated Depreciation on ROU Asset (depreciation)

STEP 7 — DISCLOSURE REQUIREMENTS
Draft the lease note disclosure: maturity analysis of lease liabilities (undiscounted), total interest expense and depreciation for the period, carrying amount of ROU assets by class.

DELIVERABLE FORMAT:
— Lease identification table
— PV calculation schedule
— Amortisation schedule (full term)
— Journal entries (commencement and first three periods)
— Disclosure note draft
— All material lease accounting judgements (lease term, IBR selection, extension option assessment) require Finance Director review and external auditor notification for new significant leases.`},

  {title:"Revenue Recognition Assessment — IFRS 15 / ASC 606",prompt:`You are a technical accounting specialist with deep expertise in revenue recognition under IFRS 15 (Revenue from Contracts with Customers) and ASC 606. I have uploaded the contract or transaction description for revenue recognition assessment.

Read all contract documents or transaction descriptions in the uploaded file. Note the parties, the nature of goods and services, all payment terms, any variable consideration, and any bundled deliverables.

Apply the complete 5-step revenue recognition model:

STEP 1 — CONTRACT IDENTIFICATION
Does this contract meet all five criteria to be a valid contract under IFRS 15.9 / ASC 606-10-25-1?
(a) Approval and commitment by both parties? (b) Identifiable rights of each party? (c) Payment terms identifiable? (d) Commercial substance? (e) Probable collection of consideration? If all five are met: proceed. If any fail: assess whether a contract exists and the implications.

STEP 2 — PERFORMANCE OBLIGATION IDENTIFICATION
Identify each distinct performance obligation in the contract. A good or service is distinct if: (a) the customer can benefit from it on its own or together with other readily available resources, AND (b) it is separately identifiable from other promises in the contract. List each distinct obligation separately. For bundled obligations (a software licence + implementation + support): analyse whether they are highly interdependent (one obligation) or distinct (multiple obligations).

STEP 3 — TRANSACTION PRICE DETERMINATION
Identify the total transaction price. Address each of the following if present:
— Variable consideration (volume discounts, rebates, penalties, royalties): estimate using expected value or most likely amount method; apply constraint (include only amount it is highly probable will not be reversed)
— Significant financing component: if payment is received significantly before or after performance, adjust for the time value of money using the contract discount rate
— Non-cash consideration: measure at fair value
— Consideration payable to customer: reduce transaction price (e.g. slotting fees, volume rebates paid to customer)

STEP 4 — TRANSACTION PRICE ALLOCATION
Allocate the transaction price to each performance obligation in proportion to standalone selling prices (SSP). If SSP is not directly observable: estimate using adjusted market assessment, expected cost plus margin, or residual approach (for highly variable SSP only). Show the allocation calculation.

STEP 5 — REVENUE RECOGNITION TIMING
For each performance obligation: determine whether revenue is recognised at a point in time or over time.
Over time recognition applies if ANY ONE of these criteria is met: (a) customer simultaneously receives and consumes benefits, (b) performance creates or enhances an asset the customer controls, (c) performance creates an asset with no alternative use AND the entity has an enforceable right to payment for work completed to date.
Point in time recognition: identify the point at which the customer obtains control (typically delivery acceptance).
For over time obligations: identify the appropriate progress measure (input method: costs incurred, or output method: milestones, units delivered).

DELIVERABLE FORMAT:
— Step-by-step assessment for this contract
— Revenue recognition conclusion: obligation | recognition timing | amount | period
— Journal entries for key recognition events
— Disclosure requirements for this contract
— Risks and uncertainties: judgements that may be challenged by auditors
— This assessment is a technical analysis framework. Complex revenue arrangements must be reviewed by a qualified technical accountant before any journal posting or financial statement inclusion.`},

  {title:"Consolidated Board Pack Commentary — Group P&L",prompt:`You are a Group Financial Controller with 20 years of experience preparing board-level financial commentary for complex, multi-entity groups. I have uploaded the consolidated P&L and management accounts data for the period.

Read the file completely. Extract: consolidated revenue, gross profit, EBITDA, EBIT, net income — for the current period and prior period (and budget if available). Also extract any entity-level breakdown, exceptional items, and cash flow data if included.

Write the complete consolidated board commentary package:

SECTION 1 — EXECUTIVE HEADLINE (ONE PARAGRAPH, 80 WORDS)
Write a single paragraph a non-finance board member can read in 30 seconds and walk away with the single most important thing to know about the financial performance this period. No jargon. No hedging. State the financial reality plainly.

SECTION 2 — REVENUE COMMENTARY (150 WORDS)
Cover: total revenue vs prior period and budget (amounts and %). Revenue bridge: organic growth (same customers, same products) vs new customer revenue vs lost customer impact vs price vs volume vs mix vs FX (if multi-currency). Identify the single largest driver of revenue movement and whether it is sustainable.

SECTION 3 — GROSS MARGIN AND COST COMMENTARY (150 WORDS)
Cover: gross margin % current vs prior vs budget. COGS drivers — what caused margin to expand or compress? Operating cost: total and % of revenue vs prior. Identify any cost line growing materially faster than revenue. Flag any exceptional or one-time costs and their nature.

SECTION 4 — EBITDA BRIDGE (WATERFALL NARRATIVE)
Describe the EBITDA bridge from prior period (or budget) to current period, item by item: volume effect, price effect, mix effect, cost efficiency, inflation, one-time items, FX. Each bridge item with: amount, direction (favourable/adverse), and whether management could control it.

SECTION 5 — ENTITY PERFORMANCE (2 SENTENCES PER ENTITY)
For each reporting entity or business unit: state performance vs prior period, whether it is above or below plan, and the key reason for the variance.

SECTION 6 — CASH AND LIQUIDITY (100 WORDS)
Cash generated from operations this period. Cash position at period end vs prior period and any covenant requirement. Any significant working capital movement. Expected cash position in 90 days.

SECTION 7 — OUTLOOK AND BOARD DECISION (100 WORDS)
Forward-looking statement with appropriate uncertainty caveats. Any assumption changes vs prior forecast. One to two specific decisions or approvals required from the Board this period.

TONE AND STYLE:
Group CFO level. Direct. No passive voice. No "it can be seen that." Own the narrative — explain what is happening and why. First draft for Finance Director and CEO review. All forward-looking statements require legal review before board circulation.`},

  {title:"GL Account Substantiation — Balance Sheet Certification",prompt:`You are a financial controller conducting balance sheet substantiation as part of the month-end close process. I have uploaded the GL account detail for the account(s) requiring substantiation.

Read the uploaded file carefully. Identify: the account name, account code, the period-end balance, and the individual transactions comprising the balance (with dates, amounts, descriptions, and any reference numbers).

Perform the complete substantiation review for each account:

STEP 1 — BALANCE DECOMPOSITION
Break down the account balance into its components. For each significant item (define significance as: individual items >5% of the account balance, or items >£/$/€1,000 — use the scale appropriate to the file): identify the nature, the originating transaction, the date, and whether it has a corresponding business justification documented in the file.

STEP 2 — AGE ANALYSIS
For every item in the balance: calculate how long it has been outstanding. Items outstanding longer than your organisation's stated clearance period (typically 30-90 days depending on account type) require specific explanation. An aged item on a clearing account or accrual account typically signals either: (a) a transaction not yet matched/reversed as expected, or (b) an error or omission.

STEP 3 — EXPECTED BALANCE ASSESSMENT
Based on business context (the nature of the account and the activity in the period): what should the balance be? Is the actual balance within a reasonable range of the expected balance? If the actual balance is materially different from the expected balance — quantify the difference and investigate the cause.

STEP 4 — MISCLASSIFICATION CHECK
Review the individual transactions: are all items correctly classified to this account? Red flags: P&L items in a balance sheet account (or vice versa), items that belong to a different entity, items coded to this account in error as a holding code.

STEP 5 — DOCUMENTATION ADEQUACY
For each significant item: what documentation exists to support it (invoice, contract, journal entry with approval, reconciliation to source system)? If documentation is missing: flag the item as unsupported and state what documentation is required.

STEP 6 — CLEARANCE ACTIONS
For any item that should not remain on the account at period end: prepare the clearing action required. This may be: a reversing journal (for accruals that have now invoiced), a correcting journal (for mispostings), a write-off recommendation (for amounts irrecoverable), or a management overlay decision (for disputed items).

DELIVERABLE FORMAT:
— Account substantiation workpaper: item | amount | age (days) | nature | documentation status | action required
— Exception register: items that cannot be substantiated, misclassified, or aged beyond policy
— Clearing journal entries: for all items requiring correction
— Substantiation sign-off: account is (a) fully substantiated, (b) substantially substantiated with minor exceptions noted, or (c) not signed off — material items unresolved
— Finance Director or Financial Controller sign-off required before this account is closed.`},

  {title:"R2R Automation Opportunity — Process Assessment",prompt:`You are a process transformation consultant with expertise in Record-to-Report automation, shared services centre design, and finance technology implementation. I have uploaded our current R2R process documentation.

Read the document thoroughly. Map all R2R activities, their current method (manual, semi-automated, or system-driven), estimated time per period, error rates where documented, and any existing tool or system used.

Conduct the complete R2R automation opportunity assessment:

DIMENSION 1 — JOURNAL ENTRY AUTOMATION POTENTIAL
Current state: what % of journals are system-generated vs manually prepared? What is the error rate on manual journals? Assessment: which recurring standard journal types are candidates for full automation (depreciation, prepayment amortisation, accrual reversal, intercompany recharges)? Which require human judgment and cannot be automated? Estimate the time saving from automating all standard-recurring entries.

DIMENSION 2 — RECONCILIATION AUTOMATION POTENTIAL
Current state: how many accounts are reconciled per period? What is the average time per reconciliation? What % are currently template-driven vs fully manual? Assessment: which account types are best suited to automated reconciliation (bank, intercompany, payroll control, VAT control) vs those requiring human judgment (accruals, provisions, complex derivatives)? Estimate the time saving from reconciliation automation.

DIMENSION 3 — CONSOLIDATION AND CLOSE MANAGEMENT POTENTIAL
Current state: is consolidation done in spreadsheets or a dedicated tool? How much time is spent on intercompany matching, elimination entries, and FX translation? Assessment: what is the automation potential in each sub-process? Which close management tool would best fit the described environment?

DIMENSION 4 — MANAGEMENT REPORTING AND COMMENTARY
Current state: is the management pack produced manually from multiple data sources? How long does it take to compile data vs write commentary? Assessment: how much of the data compilation is automatable with Power BI, Vena, or similar? Can AI assist with commentary generation? Estimate time saving.

DIMENSION 5 — CONTROLS AND AUDIT TRAIL AUTOMATION
Current state: are controls tested manually or continuously? Is there an automated audit trail of journal approvals and reconciliation sign-offs? Assessment: which controls are candidates for continuous monitoring (duplicate journal detection, SOD monitoring, reconciliation completion tracking)?

FOR EACH DIMENSION: score current automation maturity 1-5, estimate effort to reach the next level, recommended tool or approach, and estimated annual FTE saving.

DELIVERABLE FORMAT:
— Automation opportunity register: process | current maturity (1-5) | automation potential | recommended tool | implementation effort | estimated FTE saving
— Prioritisation matrix: opportunities ranked by (impact × feasibility)
— 12-month transformation roadmap: phased with quick wins (0-3 months), medium-term (3-9 months), and structural (9-12 months)
— Total estimated FTE saving and close-day reduction from full implementation
— All transformation investment decisions require Finance Director and CFO approval.`},

  {title:"Period-End Journal Entry — Preparation and Review Pack",prompt:`You are a financial controller responsible for period-end journal preparation, reviewing, and posting governance. I have uploaded the period-end data including the prepayments schedule, accruals list, depreciation run, payroll postings, tax estimates, revaluations, and intercompany charges.

Read the entire file. Understand the entities, the chart of accounts references (if provided), and the period being closed.

Prepare the complete period-end journal entry pack:

JOURNAL CATEGORY 1 — PREPAYMENT AMORTISATION
For each prepayment on the schedule: calculate the current period amortisation (prepayment ÷ remaining periods). Debit the appropriate expense account. Credit the prepayment balance sheet account. Ensure the closing prepayment balance agrees to the schedule.

JOURNAL CATEGORY 2 — ACCRUALS
For each accrued expense: Debit the expense account. Credit Accrued Liabilities. Narrative must identify: the vendor or nature, the period accrued, and whether this is a new accrual or a continuation of a standing accrual. Flag any accrual >10% different from the prior period — this requires a note explaining the change.

JOURNAL CATEGORY 3 — DEPRECIATION
Confirm the depreciation run has been executed and agrees to the fixed asset register. Post: Debit Depreciation Expense (by cost centre if required). Credit Accumulated Depreciation (by asset class). Confirm total agrees to the fixed asset roll-forward schedule.

JOURNAL CATEGORY 4 — PAYROLL
Confirm the payroll control account clears: the payroll system should have posted the gross payroll and employer costs. Post any manual adjustments identified in the file (bonus accruals, redundancy provisions, outstanding expense claims). Confirm the payroll control account balance agrees to the payroll run total.

JOURNAL CATEGORY 5 — TAX PROVISIONS
Post the current period income tax estimate: Debit Income Tax Expense. Credit Current Tax Liability. Post any deferred tax movement: Debit/Credit Deferred Tax Liability/Asset (per the deferred tax calculation). Post any VAT/GST adjustment if a manual correction is required.

JOURNAL CATEGORY 6 — FX REVALUATION
For all monetary balance sheet items denominated in foreign currency: revalue to the closing exchange rate. The revaluation gain or loss goes to: P&L (for trading receivables/payables) or OCI (for qualifying hedged items). Show the calculation for each material item.

JOURNAL CATEGORY 7 — INTERCOMPANY CHARGES
Post all intercompany management charges, shared service recharges, or loan interest in both the charging entity and the receiving entity. Confirm the intercompany accounts balance to zero across the group before consolidation.

DELIVERABLE FORMAT:
— Complete journal entry schedule: journal category | debit account | credit account | amount | narrative | reference
— Total debit = total credit verification (critical — this must balance before any posting)
— Journal entry checklist: all categories present and accounted for
— Preparer sign-off field | Reviewer sign-off field | Finance Director approval required before posting
— All journals above a material threshold (state the threshold from the file or use 5% of monthly revenue as a default) require dual authorisation before posting.`},
];

export const JE_PROMPTS = [
  {title:"Benford's Law Analysis — Full Population Journal Entry Test",prompt:`You are a senior data analytics auditor and forensic accountant with expertise in quantitative fraud detection, statistical anomaly analysis, and journal entry testing under ISA 240 and PCAOB AS 2401. I have uploaded the full population of journal entry amounts for the period.

Read the uploaded file in full. Note the total number of transactions, the total value, the currency, and the date range covered. This is a population-level test — every transaction in the file will be analysed.

Perform the complete Benford's Law analysis:

STEP 1 — FIRST-DIGIT FREQUENCY ANALYSIS
Extract the first significant digit (1-9) from every transaction amount, using absolute values (ignore negative signs — the test applies to the magnitude). Count the actual frequency of each digit 1-9 across the entire population.

Compare to Benford's expected frequencies: 1→30.1%, 2→17.6%, 3→12.5%, 4→9.7%, 5→7.9%, 6→6.7%, 7→5.8%, 8→5.1%, 9→4.6%.

Calculate: for each digit — actual count, actual %, expected %, absolute deviation, and the Z-statistic (Z = |observed proportion − expected proportion| ÷ √(expected proportion × (1−expected proportion) / n)). Flag digits where Z > 1.96 (95% confidence interval) as statistically significant deviations.

STEP 2 — SECOND-DIGIT FREQUENCY ANALYSIS
Perform the same analysis on the second significant digit (0-9). Second-digit Benford's expected frequencies: 0→11.97%, 1→11.39%, 2→10.88%, 3→10.43%, 4→10.03%, 5→9.67%, 6→9.34%, 7→9.04%, 8→8.76%, 9→8.50%. Calculate Z-statistics and flag significant deviations.

STEP 3 — DIGIT COMBINATION ANALYSIS
For the two digits with the highest Z-statistics from Steps 1 and 2: identify the specific transaction amounts beginning with those digits. List the top 20 by value. Do any patterns emerge (same vendor, same preparer, same date, same account)?

STEP 4 — AMOUNT CLUSTERING ANALYSIS
Identify any concentration of amounts in a specific range that appears disproportionate to the population. Common manipulation patterns: amounts clustering just below round-number thresholds (e.g. £9,950-£9,999 if the approval threshold is £10,000), or amounts clustering in a narrow range that would not be expected for genuine business transactions.

STEP 5 — QUANTITATIVE RISK SCORING
For each flagged digit or amount cluster: calculate the number and total value of transactions in the anomalous zone. Prioritise by: transaction value × statistical significance × proximity to any known approval threshold.

DELIVERABLE FORMAT:
— Benford's table: digit | expected % | actual count | actual % | deviation | Z-statistic | flag (Y/N)
— Second-digit table: same format
— Anomalous amount register: amounts in flagged ranges — top 20 by value with vendor, date, preparer, account
— Investigation priority list: top 10 most suspicious transactions based on combined criteria
— Quantitative summary: what % of the population by count and value falls in anomalous ranges
— Critical note: Benford's Law is a risk-screening tool, not a fraud conclusion. Statistically significant deviations may have innocent explanations (genuine round-number transactions, authorised accruals, standard payments). Every flagged item requires professional audit investigation before any action or conclusion.`},

  {title:"After-Hours and Weekend Posting Analysis",prompt:`You are a senior internal auditor specialising in journal entry risk, segregation of duties, and timing-based fraud indicators. I have uploaded the journal entry population including posting timestamps and user IDs.

Read the file thoroughly. Identify the data fields: journal entry reference, posting date, posting time (with timezone if stated), user ID who posted, amount, account, GL description, and any approval fields.

Perform the complete after-hours and off-day posting analysis:

STEP 1 — OFF-HOURS DEFINITION AND CLASSIFICATION
Define standard business hours as 07:00-21:00 local time (adjust if the file states a different policy or jurisdiction). Classify every journal entry as:
— Standard hours (07:00-21:00 on a weekday): normal, low risk
— Extended hours (21:00-23:59 or 05:00-06:59 on a weekday): flag for review
— After midnight (00:00-04:59 on any day): high-priority flag
— Weekend (Saturday or Sunday): flag for review, higher risk if it is not month-end close
— Public holiday: flag (identify the holiday calendar applicable — state your assumption)

STEP 2 — OFF-HOURS FREQUENCY ANALYSIS
Calculate: total journal entries | off-hours entries | off-hours as % of total | off-hours value as % of total value. By user: which users have the highest rate of off-hours posting? A user with significantly more off-hours activity than peers warrants investigation.

STEP 3 — ACCOUNT-SENSITIVITY WEIGHTING
Not all after-hours postings carry the same risk. Weight the risk by account type:
— Revenue accounts: highest risk (revenue manipulation most common near period end)
— Provision and accrual accounts: high risk (management estimate manipulation)
— Intercompany accounts: high risk (potential misappropriation masking)
— Asset accounts: medium risk
— Expense accounts: standard risk
— Clearing and suspense accounts: medium risk

STEP 4 — PERIOD-END CONCENTRATION
Are off-hours postings concentrated in the final 3 days of the accounting period? Period-end off-hours postings to revenue or provision accounts are the highest risk combination in this analysis. Quantify: % of off-hours postings occurring in the final 3 days vs distributed across the month.

STEP 5 — BUSINESS EXPLANATION ASSESSMENT
For each high-priority flagged entry: is there a plausible business explanation? Examples of legitimate off-hours postings: month-end close batch processing (system-generated), automated depreciation runs, timezone differences for global entities, emergency payment runs with documented authorisation. Distinguish between system-automated posts and user-initiated posts.

DELIVERABLE FORMAT:
— Off-hours summary: category | count | value | % of total | risk level
— User off-hours league table: user ID | total journals | off-hours count | off-hours % | risk flag
— High-priority exception register: journal reference | time | user | amount | account sensitivity | risk classification
— Period-end concentration analysis: final 3 days off-hours vs rest of period
— Investigation priority list with recommended audit procedure for each high-priority item
— All findings are indicators requiring professional audit judgment. Do not take action or communicate findings to individuals involved without Audit Director and legal counsel review.`},

  {title:"Round-Dollar Amount Detection — Manual Override Risk",prompt:`You are an internal audit data analyst specialising in journal entry testing, round-number hypothesis testing, and management override risk assessment under ISA 240. I have uploaded the journal entry population for round-dollar analysis.

Read the entire file. Note the population size, the range of amounts, and any visible clustering before beginning the structured analysis.

STEP 1 — ROUND-NUMBER IDENTIFICATION BY THRESHOLD
Screen the entire population for these round-number patterns:
— Exactly divisible by £/$/€10,000 (with an amount > £/$/€5,000)
— Exactly divisible by £/$/€1,000 (with amount > £/$/€1,000)
— Exactly divisible by £/$/€100
— Amounts ending in .00 where the account type should logically produce a calculated (non-round) amount — e.g. depreciation charges, accruals based on rates, usage-based expenses

For each category: count the transactions, total the value, and calculate as a % of the full population. Compare this to what would be expected statistically — in a genuine population of business transactions, very few should be exactly round.

STEP 2 — ACCOUNT-TYPE CONTEXT TEST
Apply a context filter: round amounts are more suspicious in some account types than others. High suspicion: revenue accounts, provision accounts, management fee accounts, discretionary expense accounts. Lower suspicion: fixed-amount contractual payments (rent, fixed loan payments), salary runs. For each round-amount entry: assess whether the round amount is contextually suspicious given the account.

STEP 3 — PREPARER AND APPROVER ANALYSIS
For round-amount entries above a material threshold: identify the preparer and approver. Are round-amount postings concentrated among specific users? Do any round-amount entries lack an approver (unapproved management overrides are the highest risk)?

STEP 4 — PERIOD-END CLUSTERING
Are round-amount entries disproportionately concentrated in the final 3 days of the accounting period? Period-end round entries to revenue or provision accounts represent the core management override risk pattern.

STEP 5 — SAMPLING RECOMMENDATION
For the round-amount entries identified as high-suspicion (round amount + sensitive account + period-end + high value): recommend a testing sample. State the number of items, the selection criteria, and the audit procedure to apply to each sampled item (obtain and review original supporting documentation, confirm the business rationale for the rounded figure).

DELIVERABLE FORMAT:
— Round-number distribution table: threshold band | count | value | % of population | contextual risk level
— High-suspicion exception register: journal reference | amount | account | date | preparer | approver | risk basis
— User concentration analysis: any user with disproportionate round-amount posting frequency
— Sample selection recommendation: specific items for detailed testing
— This analysis identifies risk — round amounts frequently have legitimate explanations. Every flagged item requires professional investigation and supporting documentation review before any conclusion.`},

  {title:"Segregation of Duties Violation Scan",prompt:`You are a SOX compliance specialist and IT audit expert with deep expertise in segregation of duties controls, access right analysis, and ICFR testing under SOX Section 404. I have uploaded the journal entry population with preparer and approver user IDs.

Read the file completely. Identify: journal entry reference, preparer user ID, approver user ID, posting date, amount, account, and any system versus manual entry indicator.

STEP 1 — DIRECT SOD VIOLATIONS — SAME PERSON PREPARED AND APPROVED
Identify every transaction where the Preparer User ID is identical to the Approver User ID. These are direct SOD violations — no further analysis required to classify them. For each: list the transaction reference, user, amount, date, account, and the dollar value of the SOD violation population.

STEP 2 — EFFECTIVE SOD — SHARED ROLE ACCESS
If the file includes access rights data: identify any cases where both the preparer and approver have the same system access role (i.e. either of them could have performed both actions). Even if the same individual did not technically do both, shared access represents an SOD design failure. Classify: (a) confirmed violation (same individual) and (b) access-level design risk (different individuals but both have dual access capability).

STEP 3 — AUTOMATED SYSTEM-GENERATED ENTRIES
Distinguish between: (a) user-initiated manual journal entries (high SOD relevance) and (b) system-automated entries (depreciation runs, accrual reversals, etc.). For automated entries: SOD is controlled by the system configuration, not individual user actions. Separate these from the manual journal population and note what controls govern the automated process.

STEP 4 — THRESHOLD ANALYSIS
For the confirmed SOD violations: break down by amount band. What is the total value of transactions with confirmed SOD failures? What % of the journal entry population (by count and by value) has a SOD violation? Report separately for: high-value (>£/$/€10,000), medium (£/$/€1,000-10,000), low (<£/$/€1,000).

STEP 5 — REMEDIATION ASSESSMENT
For each confirmed SOD violation: assess the remediation options. Compensating controls may reduce residual risk (e.g. independent finance director review of all journal entries, regardless of approval). For the highest-value violations: recommend whether the entries should be re-reviewed by an independent approver and whether corrective action to the transaction itself is warranted.

DELIVERABLE FORMAT:
— SOD violation register: journal reference | preparer | approver | amount | account | date | violation type (same individual / access design risk)
— Summary statistics: total violations | % of population | total value in violation entries
— By-value breakdown: violation count and value in each amount band
— User summary: which user IDs appear most frequently in violations
— Remediation recommendations: by violation type
— Escalation requirement: all material SOD violations (above-threshold amounts) must be reported to the Audit Committee and Internal Audit Director. Findings must not be communicated to the individuals involved before legal and HR review.`},

  {title:"Management Override and Topside Entry Review",prompt:`You are a senior auditor conducting a focused review of management override risk in accordance with ISA 240 (The Auditor's Responsibilities Relating to Fraud) and PCAOB AS 2401. I have uploaded the journal entry population with distinction between manual and system-generated entries.

Read the file completely. Identify the fields available: journal entry reference, entry type (manual vs automated), user ID, date, amount, account, description/narrative, and approval.

Perform the structured management override assessment:

STEP 1 — MANUAL AND TOPSIDE ENTRY ISOLATION
From the full population: separate all manual journal entries (user-initiated) from system-generated entries (automated batch processes). Within the manual population: identify "topside" entries — those posted directly to P&L accounts (revenue, expense) by senior management level users, without originating from a sub-ledger or operational system. These carry the highest management override risk.

STEP 2 — RISK CRITERIA SCORING
Score each manual journal entry against ISA 240 management override risk criteria. Higher risk score for entries that are:
— Posted by CFO, Finance Director, or VP-level user IDs (if identifiable from the file)
— Posted in the final 3 working days of the accounting period
— Posted to revenue accounts, provisions, or goodwill/intangibles
— Reversing automatically in the next period (may indicate income smoothing)
— Without a sub-ledger origination (no corresponding AP, AR, or payroll entry)
— With a vague, generic, or missing narrative description
— Without a recorded approver

Score each criterion 0 (absent) or 1 (present). Total score 0-7. High risk ≥ 4.

STEP 3 — REVERSING ENTRY ANALYSIS
Identify all journal entries that reverse in the subsequent period. For each reversing entry: was the reversal automatic (system-controlled) or manual? Manual reversals that are not immediately paired with a re-entry may indicate earnings management (boosting one period's results at the expense of the next).

STEP 4 — NARRATIVE QUALITY ASSESSMENT
For the high-risk entry population: assess description quality. Classify each narrative as: Adequate (identifies vendor, service period, calculation basis) / Inadequate (generic terms like "accrual", "adjustment", "reclass" without specifics) / Missing. Inadequate or missing narratives on high-value entries are a significant audit finding.

STEP 5 — AUDIT PROCEDURE DESIGN
For the top 15 highest-scoring entries: design a specific audit procedure for each. The procedure should state: what documentation to request, who to request it from, what the evidence should demonstrate, and what an unsatisfactory response would indicate.

DELIVERABLE FORMAT:
— Management override risk register: journal reference | user | date | amount | account | risk score (0-7) | narrative quality | recommended procedure
— Topside entry population: isolated and scored
— Reversing entry analysis: entries with reversal pattern flagged
— Top 15 investigation priority list with audit procedures
— Summary statistics: % of manual entries scoring 4+, total value in high-risk population
— Going concern note: if a significant proportion of period-end revenue or positive EBITDA is attributable to high-risk manual entries, this warrants discussion with the engagement partner or Audit Committee.`},

  {title:"Unusual Account Combination Detection",prompt:`You are a data analytics auditor with expertise in journal entry pattern analysis, account combination testing, and detection of misclassification and financial statement manipulation. I have uploaded the journal entry population with debit and credit account codes.

Read the full population. Map the account structure: identify account codes and whether each is a Balance Sheet or P&L account, and its type (asset, liability, equity, revenue, expense).

STEP 1 — KNOWN HIGH-RISK COMBINATION CATALOGUE
Screen the entire population for these specific high-risk account combinations:

Combination A — Cash Debited with Revenue Debited: A cash account and a revenue account both appear on the debit side of a single entry. This reverses a normal cash receipt and is highly unusual.

Combination B — Expense Bypassing Payables: An expense account is debited directly with a liability account credited that is NOT Accounts Payable or Accrued Liabilities (e.g. directly to Cash or to an unusual liability). This may indicate circumvention of the AP control environment.

Combination C — Equity Account in Operational Journal: An equity or retained earnings account appears in a journal entry that is not a year-end closing entry, a dividend entry, or a share issuance entry. Equity accounts should only move in specific, controlled circumstances.

Combination D — Intercompany Account with External Party: An intercompany account code is used in a transaction where the counterparty appears to be an external party (identifiable from the vendor ID or narrative in the entry).

Combination E — Asset Account Credited Without Disposal or Impairment: A fixed asset account is credited in a journal entry without any corresponding disposal or impairment documentation in the description. This may represent unrecorded write-downs or asset stripping.

Combination F — Revenue Recognised Without Trade Receivable: Revenue is credited in an entry where the debit is not to Accounts Receivable, Cash, or Deferred Revenue — e.g. a direct debit to an expense or clearing account.

STEP 2 — ACCOUNTING POLICY COMPARISON
For the combinations identified: assess whether any could be explained by the entity's specific accounting policies. Some combinations that appear unusual may be legitimate under specific circumstances (e.g. direct-to-cash sales if no credit terms exist). For each identified combination: state whether a legitimate explanation is plausible and what evidence would confirm it.

STEP 3 — MATERIALITY ASSESSMENT
For each identified combination: calculate the total value of entries with this combination. Rank by value. Combinations with high total value warrant priority investigation.

DELIVERABLE FORMAT:
— Combination test results: combination type | entries found | total value | % of population | risk assessment
— Exception detail register: journal reference | debit account | credit account | amount | date | preparer | narrative | risk assessment
— Policy-consistent exclusions: combinations with legitimate explanations noted
— Investigation priority ranking
— All unusual account combinations require review of original supporting documentation before any audit conclusion. Refer to accounting policy and discuss with Financial Controller before escalation.`},

  {title:"Suspense Account Analysis — Clearance Review",prompt:`You are a financial controller conducting a comprehensive suspense account review as part of the month-end close process. I have uploaded the transactions in all suspense and clearing accounts for the period.

Read the file in full. Identify all suspense and clearing account codes, the transactions posted to each, their dates, amounts, descriptions, and ages.

STEP 1 — ACCOUNT INVENTORY
List all suspense and clearing accounts in the data. For each: the account name, account code, current balance, the number of open items, and the oldest item date. A suspense account should ideally have a zero balance at period end. Non-zero balances require explanation.

STEP 2 — ITEM-LEVEL CLASSIFICATION
For every individual item in each suspense account: classify it into one of these categories:

Timing — Normal: Item posted and expected to clear automatically within the next 5-7 days (e.g. an intercompany transaction that will be matched next period, a payment in transit). This is acceptable.

Action Required — Known: The item has been identified and a specific person has a clear action to clear it. There is a plan, it just has not been executed yet.

Action Required — Unknown: The item has no clear owner, no explanation, and no clearing plan. This is a control failure.

Write-Off Candidate: The item has been in the account for an extended period (state the age threshold from the policy, or use 90 days as a default), no clearing is expected, and the amount may need to be written off or reclassified.

Investigate: The item cannot be categorised above — the description is insufficient or the amount does not correspond to any identifiable business transaction.

STEP 3 — AGED ITEM ANALYSIS
Items outstanding beyond your organisation's policy clearance period (state the policy from the file, or use: 30 days for payment clearing, 60 days for expense suspense, 90 days for unidentified receipts) represent control failures. For each aged item: calculate the exact age, the financial amount, and whether the original transaction can be identified.

STEP 4 — CLEARING JOURNAL ENTRIES
For items in the "Action Required — Known" category: prepare the clearing journal entry (or draft for preparer completion):
— Debit: the correct balance sheet or P&L account where the item should reside
— Credit: the suspense account to clear the balance
— Narrative: sufficient to identify the original transaction, the clearing reason, and the preparer

STEP 5 — ESCALATION REGISTER
For items in "Action Required — Unknown" and "Investigate" categories: escalate to the Finance Director with: account name, item description, amount, age, and the question that needs answering before it can be cleared.

DELIVERABLE FORMAT:
— Account summary: account | total balance | items count | oldest item | balance target (should be zero) | current status
— Item-level register: account | item description | amount | age | classification | action required | owner
— Clearing journal entries (for known items)
— Escalation register (for unknown / investigate items)
— Policy statement: no suspense account should carry an unexplained balance at period close. Finance Director sign-off required for any balance carried forward at period end with a documented explanation.`},

  {title:"Journal Entry Description Quality Assessment",prompt:`You are an internal quality assurance reviewer and finance operations specialist conducting a journal entry description quality audit. I have uploaded the journal entry population with narrative descriptions.

Read all journal entries in the file. Focus particularly on the description/narrative field for each entry.

STEP 1 — QUALITY SCORING CRITERIA
Score each journal entry description on three dimensions, each scored 0-4:

Specificity (0-4):
0 = Blank or single generic word ("accrual", "adjustment", "misc")
1 = Generic category only ("monthly payroll accrual" — which month? which cost centre?)
2 = Category + partial reference ("October payroll accrual — Finance department")
3 = Category + specific reference ("October 2024 payroll accrual — Finance dept — per payroll run ref PR2024-10-31")
4 = Fully specific — entity, period, amount basis, reference number all present

Source Reference (0-3):
0 = No supporting document referenced
1 = Document type mentioned but no reference number
2 = Document type and reference number present
3 = Document type, reference number, and cross-reference to where document is filed

Completeness (0-3):
0 = Description too vague to understand the transaction without additional investigation
1 = Basic understanding possible but gaps remain
2 = Transaction understandable, minor gaps
3 = Description complete — a reviewer unfamiliar with the transaction could understand and verify it entirely from the description alone

Total score: 0-10. Classification:
— 8-10: Adequate (no action required)
— 5-7: Needs improvement (standard remediation — update description, refile)
— 0-4: Inadequate (escalate — audit risk, inability to substantiate if challenged)

STEP 2 — POPULATION ANALYSIS
Apply the scoring to all journal entries in the file. Calculate: distribution of entries in each quality band (adequate / needs improvement / inadequate) by count and by value. A high % of high-value entries in the Inadequate band represents a material audit quality risk.

STEP 3 — WORST EXAMPLES IDENTIFICATION
Identify the 15 most inadequate descriptions in the file. For each: show the original description, the quality score, the amount, and the account. Inadequate descriptions on material entries (e.g. above 5% of monthly revenue) are highest priority.

STEP 4 — REWRITE EXAMPLES
For the top 5 worst descriptions: write a replacement description that would score 8-10. Demonstrate the standard that should be applied.

STEP 5 — PROPOSED DESCRIPTION STANDARD
Based on the analysis, write a one-page Journal Entry Description Standard for adoption by the finance team. The standard should: state the required components, give examples by journal type (payroll, accrual, prepayment, manual adjustment, intercompany), and state the consequence of non-compliance (journal will not be approved until description meets standard).

DELIVERABLE FORMAT:
— Distribution analysis: quality band | count | % | total value | % of total value
— Top 15 inadequate descriptions with scores
— 5 rewrite examples
— Draft Journal Entry Description Standard (ready for Finance Director approval)
— This quality assessment should be repeated quarterly until the Adequate rate exceeds 90% by value.`},

  {title:"Period Boundary Testing — Cut-Off Accuracy",prompt:`You are a senior auditor and financial controller specialist conducting a revenue and expense cut-off test. I have uploaded journal entries and transaction data for the final 5 working days of the period and the first 5 working days of the subsequent period.

Read the entire dataset. Identify: the precise period-end date, the transactions in the final 5 days before period end, and the transactions in the first 5 days of the new period. Note any reversing entries in the new period that originated in the old period.

Conduct the complete cut-off testing programme:

TEST 1 — GOODS AND SERVICES RECEIVED BEFORE PERIOD END
Identify all goods receipts, service completion records, or delivery confirmations dated on or before the period end date. Cross-reference against: (a) invoices received — has the expense been recorded? (b) accruals — if no invoice, has an accrual been raised? Flag any instance where goods or services were received before period end but no expense or accrual is in the accounting records for that period. These are cut-off understatements.

TEST 2 — GOODS AND SERVICES RECEIVED AFTER PERIOD END INCLUDED IN PRIOR PERIOD
Identify any expense or accrual recorded in the closing period where the goods or services were received after the period end date (i.e. the GRN or service completion is dated after period end). These are cut-off overstatements — expenses recorded too early.

TEST 3 — REVENUE CUT-OFF — INVOICES NEAR PERIOD END
Identify all sales invoices dated in the final 3 days of the period. For each: confirm that delivery or service completion occurred before the period end date. Revenue recognised on invoices raised before delivery constitutes premature revenue recognition.

TEST 4 — BACKDATED ENTRIES
Identify any journal entries with a posting date in the closing period but with a journal entry date (or a document date referenced in the narrative) that falls before the accounting period start. Backdated entries — entries posted in the period but dated prior to the period — may indicate prior period errors being corrected without proper disclosure.

TEST 5 — REVERSING ACCRUALS — CORRECT PERIOD
Identify accruals from the closing period that reverse in the new period. Confirm: (a) the reversal date is the first day of the new period (correct timing), (b) the reversal amount matches the original accrual exactly, and (c) the corresponding invoice has been received and posted. If the invoice has not been received and the reversal has happened, the accrual has reversed into a gap — the expense is no longer recorded anywhere.

DELIVERABLE FORMAT:
— Cut-off exception table: entry reference | type of exception | amount | description | impact (overstatement/understatement) | correcting entry required
— Total value of cut-off misstatements identified: overstated expenses, understated expenses, premature revenue
— Correcting journal entries for each confirmed misstatement
— Recommendation: are any misstatements material enough to require a prior period correction or restatement? (Apply the entity's stated materiality threshold — if not provided, use 5% of profit before tax as a reference)
— Cut-off findings are a primary external audit concern. All material cut-off adjustments must be approved by the Financial Controller and discussed with external auditors.`},

  {title:"Journal Entry Sampling — Risk-Based Methodology Design",prompt:`You are a senior auditor and audit methodology specialist with expertise in statistical sampling, risk-based journal entry testing, and ISA 530 (Audit Sampling) compliance. I have uploaded the journal entry population summary for this period.

Read the population data: total number of entries, total value, breakdown by journal type, and any available risk stratification data (entry type, preparer, account).

Design the complete risk-based journal entry testing strategy:

COMPONENT 1 — FULL POPULATION TESTS (NON-SAMPLING)
These tests apply to 100% of the population because sampling cannot provide sufficient comfort on these risks:
— Duplicate payment detection: same vendor + same amount within 60 days (all entries)
— SOD violation scan: same preparer and approver user ID (all manual entries)
— Large and unusual items: all entries above a defined threshold (state the threshold as a multiple of materiality — typically 5-10× component materiality)
— Describe what these full-population tests will cover and why they cannot be sampled

COMPONENT 2 — RISK-STRATIFIED SAMPLE
Identify the highest-risk sub-populations based on the uploaded data:
— Period-end entries (final 3 days): all above a minimum value threshold
— Revenue account entries by senior management user IDs
— Round-number amounts in provision or estimate accounts
— Entries without sub-ledger origination (pure manual top-level entries)

For each risk stratum: state the population, the proposed sample size (100% of the stratum if it is small enough to be practical; otherwise use 25-item minimum), the selection method (systematic, judgmental, or random), and the specific audit objective for that stratum.

COMPONENT 3 — RANDOM SAMPLE
Calculate a statistically valid random sample of the remaining (non-stratified) population for background risk coverage. Use: desired confidence level = 95%, tolerable misstatement rate = 2% of component materiality, expected error rate = 0% (if no prior year errors found) or 1% (if prior year had exceptions). Apply the attribute sampling formula: n = (Z²×p×(1-p)) / e² where Z=1.96, p=expected error rate, e=tolerable error rate.

COMPONENT 4 — TARGETED JUDGMENTAL SAMPLE
Based on your professional judgment from reviewing the population data: identify any specific items or clusters that should be tested judgmentally regardless of quantitative scoring. Explain the rationale for each.

COMPONENT 5 — AUDIT PROCEDURES FOR SAMPLED ITEMS
State the audit procedures to apply to each sampled item:
— Obtain and inspect original supporting documentation
— Confirm the business rationale for the entry
— Verify preparer and approver authorisation
— Confirm account classification is correct
— For estimates: assess the reasonableness of the assumptions used

DELIVERABLE FORMAT:
— Sampling strategy summary table: component | population | sample size | selection method | audit objective
— Full-population tests: description and expected outputs
— Stratified sample design: strata | population size | sample size | rationale
— Random sample calculation: show the formula and result
— Combined sample: total entries to be tested, total value
— This methodology document should be included in the audit planning file and approved by the Audit Manager before testing commences.`},
];

export const FSA_PROMPTS = [
  {title:"Full Ratio Analysis Dashboard — Comprehensive Financial Assessment",prompt:`You are a senior financial analyst and investment-grade credit analyst with 20 years of experience in financial statement analysis across multiple sectors. I have uploaded the financial statements (P&L, Balance Sheet, Cash Flow Statement) for analysis.

Read all three statements carefully. Identify the reporting currency, the period covered (annual or quarterly), and any restatement notes in the data.

Calculate and interpret the complete ratio suite:

PROFITABILITY RATIOS (with interpretation):
— Gross Margin %: Gross Profit ÷ Revenue × 100. Trend vs prior period. Industry benchmark comparison.
— EBITDA Margin %: EBITDA ÷ Revenue × 100
— EBIT Margin %: EBIT ÷ Revenue × 100
— Net Profit Margin %: Net Income ÷ Revenue × 100
— Return on Equity (ROE): Net Income ÷ Average Shareholders' Equity × 100
— Return on Assets (ROA): Net Income ÷ Average Total Assets × 100
— Return on Capital Employed (ROCE): EBIT ÷ (Total Assets − Current Liabilities) × 100

LIQUIDITY RATIOS:
— Current Ratio: Current Assets ÷ Current Liabilities (adequate: >1.5, minimum: >1.0)
— Quick Ratio (Acid Test): (Current Assets − Inventories) ÷ Current Liabilities (adequate: >1.0)
— Cash Ratio: Cash and Equivalents ÷ Current Liabilities
— Operating Cash Flow Ratio: Operating Cash Flow ÷ Current Liabilities

EFFICIENCY RATIOS:
— Asset Turnover: Revenue ÷ Average Total Assets
— Receivables Days (DSO): (Average Trade Receivables ÷ Revenue) × 365
— Inventory Days: (Average Inventory ÷ COGS) × 365
— Payables Days (DPO): (Average Trade Payables ÷ COGS) × 365
— Cash Conversion Cycle: DSO + Inventory Days − DPO

LEVERAGE RATIOS:
— Debt-to-Equity: Total Debt ÷ Shareholders' Equity
— Net Debt ÷ EBITDA: (Total Debt − Cash) ÷ EBITDA
— Interest Coverage: EBIT ÷ Interest Expense
— Debt Service Coverage: (EBIT + Depreciation) ÷ (Interest + Principal Repayments)

For each ratio: (1) calculate the figure precisely, (2) state whether it indicates strength or weakness, (3) compare to prior period (if available), (4) state the industry benchmark or rule-of-thumb, and (5) write one sentence of interpretation.

OVERALL ASSESSMENT:
Write a 250-word financial health summary: what does this entity's combined ratio profile say about its financial position? What are the 3 key strengths and 3 key risks visible in the ratios?

DELIVERABLE FORMAT:
— Complete ratio table: ratio | formula | current period | prior period (if available) | benchmark | assessment
— Trend commentary for any ratio that has moved significantly (>20%) between periods
— 250-word financial health summary
— All calculations must reference the specific line items used from the uploaded statements.`},

  {title:"DuPont Decomposition — ROE Driver Analysis",prompt:`You are a senior equity analyst and management consultant specialising in performance decomposition, value driver analysis, and strategic financial assessment. I have uploaded the financial statements for DuPont analysis.

Read the P&L, Balance Sheet, and Cash Flow Statement in the uploaded file. Extract all line items needed for the decomposition.

Perform the complete 3-level DuPont analysis:

LEVEL 1 — BASIC 3-FACTOR DUPONT
ROE = Net Profit Margin × Asset Turnover × Equity Multiplier
— Net Profit Margin = Net Income ÷ Revenue
— Asset Turnover = Revenue ÷ Average Total Assets
— Equity Multiplier = Average Total Assets ÷ Average Shareholders' Equity
Calculate each component. ROE = the product of all three. Verify this equals Net Income ÷ Average Shareholders' Equity directly.

LEVEL 2 — EXTENDED 5-FACTOR DUPONT
ROE = (Net Income ÷ EBT) × (EBT ÷ EBIT) × (EBIT ÷ Revenue) × (Revenue ÷ Assets) × (Assets ÷ Equity)
Factor 1 — Tax burden: Net Income ÷ EBT (how much profit survives after tax)
Factor 2 — Interest burden: EBT ÷ EBIT (how much operating profit survives after interest)
Factor 3 — Operating margin: EBIT ÷ Revenue (operating efficiency)
Factor 4 — Asset efficiency: Revenue ÷ Assets (how effectively assets generate revenue)
Factor 5 — Leverage: Assets ÷ Equity (financial gearing)
Calculate each factor precisely. Verify ROE = product of all five factors.

LEVEL 3 — DRIVER ANALYSIS AND STRATEGIC INTERPRETATION
For each of the five factors: (a) state whether it is above or below a typical industry reference, (b) identify what management actions would improve this factor, and (c) identify the risk of over-optimising this factor.

PERIOD COMPARISON (if prior period data is available):
Calculate all five factors for both periods. Show which factor drove ROE improvement or deterioration most. A company that improves ROE by increasing leverage (Factor 5) is taking a very different strategic path than one improving ROE through operating margin improvement (Factor 3) — both show the same ROE change but carry very different risk profiles.

PEER BENCHMARKING (if peer data provided):
Compare each factor to the peer median. This isolates where the entity is genuinely better or worse than peers vs simply having different capital structure choices.

DELIVERABLE FORMAT:
— 3-factor DuPont table with calculations
— 5-factor DuPont table with calculations and verification
— Period comparison (if data available): factor | prior year | current year | direction | strategic interpretation
— 200-word narrative: what does the DuPont decomposition reveal about where this entity creates and destroys value, and what are the highest-leverage improvement opportunities?`},

  {title:"Earnings Quality Assessment — Beneish M-Score Analysis",prompt:`You are a forensic financial analyst and audit specialist with expertise in earnings quality analysis, accruals-based manipulation detection, and the Beneish M-Score framework. I have uploaded the financial statements for earnings quality review.

Read the income statement, balance sheet, and cash flow statement for both the current period and prior period (two periods of data are required for M-Score calculation).

Perform the complete earnings quality assessment:

PART 1 — BENEISH M-SCORE CALCULATION
Calculate all eight Beneish ratios. Show the formula and the result for each:

DSRI (Days Sales Receivable Index): (Receivables_t ÷ Revenue_t) ÷ (Receivables_t-1 ÷ Revenue_t-1)
A value >1 indicates receivables growing faster than revenue — potential premature revenue recognition.

GMI (Gross Margin Index): Gross Margin%_t-1 ÷ Gross Margin%_t
A value >1 indicates deteriorating gross margins — may pressure earnings manipulation.

AQI (Asset Quality Index): (1 − (Current Assets_t + PP&E_t) ÷ Total Assets_t) ÷ (1 − (Current Assets_t-1 + PP&E_t-1) ÷ Total Assets_t-1)
A value >1 indicates increasing proportion of intangible or deferred assets.

SGI (Sales Growth Index): Revenue_t ÷ Revenue_t-1
A value >1 indicates growth — growing companies are under more pressure to manipulate.

DEPI (Depreciation Index): (Depreciation_t-1 ÷ (PP&E_t-1 + Depreciation_t-1)) ÷ (Depreciation_t ÷ (PP&E_t + Depreciation_t))
A value >1 indicates falling depreciation rate — assets being depreciated more slowly.

SGAI (SGA Expense Index): (SGA_t ÷ Revenue_t) ÷ (SGA_t-1 ÷ Revenue_t-1)
A value >1 indicates SGA growing faster than revenue.

LVGI (Leverage Index): ((Total Debt_t + Current Liabilities_t) ÷ Total Assets_t) ÷ ((Total Debt_t-1 + Current Liabilities_t-1) ÷ Total Assets_t-1)
A value >1 indicates increasing leverage.

TATA (Total Accruals to Total Assets): (Net Income − Operating Cash Flow) ÷ Total Assets
The higher the accruals component of earnings, the lower the earnings quality.

M-SCORE FORMULA: M = −4.84 + (0.920×DSRI) + (0.528×GMI) + (0.404×AQI) + (0.892×SGI) + (0.115×DEPI) − (0.172×SGAI) + (4.679×TATA) − (0.327×LVGI)

INTERPRETATION: M-Score < −2.22 = unlikely manipulator. M-Score > −2.22 = higher manipulation risk. M-Score > −1.78 = strong manipulation flag.

PART 2 — ACCRUALS QUALITY ASSESSMENT
Calculate the accruals ratio: (Net Income − Operating Cash Flow) ÷ Average Net Operating Assets. High accruals relative to assets (>5-10%) indicate low earnings quality — reported earnings are significantly ahead of cash generation.

PART 3 — ADDITIONAL RED FLAGS
Assess: revenue growth significantly exceeding industry peers without explanation; receivables growing faster than revenue; inventory build without corresponding revenue growth; auditor changes in the past 3 years; qualified audit opinions; unusual related party transactions.

DELIVERABLE FORMAT:
— M-Score components table: ratio | formula | value | interpretation | risk direction
— M-Score total: value and interpretation
— Accruals ratio: value and assessment
— Additional red flags inventory
— Overall earnings quality classification: High / Medium / Low — with evidence summary
— Critical caveat: M-Score is a probabilistic screening tool based on publicly available data. A high score does not prove manipulation. A low score does not confirm integrity. Professional investigation is required for any elevated-risk finding.`},

  {title:"Cash Flow Quality Analysis — Sustainability Assessment",prompt:`You are a senior financial analyst and credit analyst specialising in cash flow statement analysis, working capital assessment, and cash generation sustainability evaluation. I have uploaded the cash flow statement and supporting financial data.

Read the uploaded file in full. Identify: the cash flow statement structure (direct or indirect method), the reporting period, and the three sections (operating, investing, financing). Also note the P&L net income figure for reconciliation.

Perform the complete cash flow quality analysis:

STEP 1 — OPERATING CASH FLOW QUALITY
Calculate the Cash Flow from Operations to Net Income ratio (CFO ÷ Net Income). A ratio consistently above 1.0 indicates high earnings quality — cash is backing reported profits. A ratio below 0.8 or volatile across periods indicates low quality.

Identify the major working capital movements driving the difference between net income and operating cash flow. Classify each working capital movement:
— Favourable one-time: e.g. customer prepayment, temporary creditor extension — will reverse
— Favourable structural: e.g. improving collection practices, supply chain finance — sustainable
— Unfavourable: e.g. inventory build, debtor growth — cash being consumed by the business

STEP 2 — FREE CASH FLOW CALCULATION
Free Cash Flow (FCF) = Operating Cash Flow − Capital Expenditure. Calculate FCF for the period. Classify capex as: maintenance capex (sustaining existing assets) vs growth capex (expanding capacity). If the split is disclosed or estimable from the notes, separate them. Maintenance capex-adjusted FCF is the most conservative measure of sustainable cash generation.

STEP 3 — CASH CONVERSION ANALYSIS
Operating profit (EBITDA) to FCF conversion: FCF ÷ EBITDA × 100 = conversion rate. A conversion rate of 60-80% is typical for capital-light businesses. Below 40% warrants investigation — where is the cash going between EBITDA and FCF?

STEP 4 — FINANCING SECTION ANALYSIS
Assess the financing activities: is the business consuming external capital (raising debt, issuing equity) or returning capital (repaying debt, buying back shares, paying dividends)? A business consistently consuming external finance is dependent on capital markets — a vulnerability if markets tighten.

STEP 5 — SUSTAINABILITY ASSESSMENT
Combine the above into a cash generation sustainability rating: High (operating cash flow consistently above net income, positive FCF, no dependency on external financing), Medium (generally positive but some concerns), Low (FCF negative or dependent on working capital timing, reliant on financing activities).

DELIVERABLE FORMAT:
— CFO to Net Income bridge: each working capital and non-cash item quantified
— Free cash flow calculation with capex split if available
— Conversion ratio table: EBITDA | Operating CF | FCF | conversion %
— Financing activity summary: net capital raised or returned
— Sustainability assessment with evidence
— 200-word cash quality narrative for inclusion in credit or audit analysis
— Flag any period where reported profit materially exceeds cash generation without a clearly explained and temporary cause.`},

  {title:"Balance Sheet Strength Assessment — Credit and Resilience Review",prompt:`You are a senior credit analyst and balance sheet specialist with expertise in asset quality analysis, liability structure assessment, and financial resilience testing. I have uploaded the balance sheet for review.

Read the balance sheet carefully. Note all line items, their values, and any notes disclosures referenced in the file.

STEP 1 — ASSET QUALITY ANALYSIS
Assess the quality and recoverability of assets in a stress scenario:

Current assets: What % are cash and near-cash (highest quality) vs trade receivables (quality depends on debtor credit quality) vs inventory (quality depends on liquidity of goods) vs other (prepayments, deferred taxes — limited realisable value)?

Non-current assets: What % are tangible fixed assets (PP&E — realisable in liquidation) vs intangibles and goodwill (limited realisable value in most scenarios) vs financial investments (quality depends on investee) vs deferred tax assets (no realisable value in liquidation)?

Asset quality score: calculate tangible assets (cash + receivables + PP&E) as a % of total assets. Above 70% is high quality; below 50% indicates goodwill/intangible-heavy balance sheet.

STEP 2 — LIABILITY STRUCTURE ANALYSIS
Short-term debt (due within 12 months): identify all current maturities of long-term debt and short-term facilities. Refinancing risk exists where material debt falls due within 12 months.

Long-term debt: total quantum, interest rate (if disclosed), earliest maturity, any financial covenants disclosed (leverage ratio, interest cover minimum — are these currently met with headroom?).

Off-balance sheet: any operating lease commitments, contingent liabilities, or guarantees disclosed in notes? Quantify the total off-balance sheet exposure.

STEP 3 — WORKING CAPITAL ASSESSMENT
Current ratio and quick ratio (calculated from balance sheet). Working capital = Current Assets − Current Liabilities. Is working capital positive? Is the trend improving or deteriorating? Does the working capital position appear sustainable at current revenue levels?

STEP 4 — STRESS TEST — 20/30 SCENARIO
Apply a stress test: assume (a) trade receivables are written down 20% (credit losses in a stress scenario) and (b) inventory is written down 30% (forced realisation discount). What is the impact on net assets? Does the entity remain technically solvent after this stress?

Show: current net assets | receivables write-down | inventory write-down | stressed net assets | remaining leverage headroom.

STEP 5 — CAPITAL ADEQUACY
Equity as % of total assets (gearing). Compare to sector norms. High equity % = conservative capital structure; low equity % = highly levered.

DELIVERABLE FORMAT:
— Asset quality table: asset class | value | quality tier | realisable value estimate (stressed)
— Liability structure: debt maturity profile, covenant headroom
— Working capital position and trend
— Stress test results
— Capital adequacy ratio vs sector reference
— Overall balance sheet strength score: Strong / Adequate / Stretched / Concerning — with evidence
— This analysis uses only information available in the uploaded statements. A complete credit assessment requires management accounts, forecasts, and discussion with management.`},

  {title:"Management Commentary — Financial Statements",prompt:`You are a Group Financial Controller with 20 years of experience preparing management commentary for published financial statements under UK Companies Act, IFRS Practice Statement 1, and SEC MD&A requirements. I have uploaded the financial data and any key narrative points for this commentary.

Read all financial data in the file. Extract: revenue, gross profit, operating expenses, EBITDA, EBIT, net income, cash position, debt, and any segment or geographic breakdown. Note the comparative period figures.

Write the complete management commentary:

BUSINESS OVERVIEW (100 words)
State: what the entity does, its principal markets, and its business model in plain English. No jargon. Write for a reader who has not encountered this entity before. One sentence on the principal business risk (not the full risk section — that comes later).

FINANCIAL PERFORMANCE REVIEW (300 words)
Cover in this sequence:
1. Revenue: total, movement vs prior, and the primary drivers of change (volume, price, mix, new customers, lost customers, FX — attribute the movement to specific causes, do not simply restate the numbers)
2. Gross margin: % current and prior, explanation of movement (input cost changes, pricing decisions, mix effects)
3. Operating expenses: total, key movements, any one-time items, management efficiency metrics
4. EBITDA and EBIT: % margin and movement
5. Net income: movement and key differences from EBIT (interest, tax)

KEY PERFORMANCE INDICATORS (150 words)
Select 4-6 KPIs most relevant to the business model from the data. For each: current value, prior period comparison, and one sentence of explanation. KPIs must be directly derivable from the uploaded financial data.

CASH FLOW AND LIQUIDITY (150 words)
Cover: operating cash generation, relationship to profit (conversion quality), capex, net debt movement, period-end cash and liquidity headroom. Any covenant compliance statement if relevant.

PRINCIPAL RISKS (150 words)
Identify 3-5 principal risks from the financial data and context. For each risk: what it is, how it could crystallise, and what mitigation is in place. Balance quantification with appropriate uncertainty.

FORWARD-LOOKING STATEMENT (75 words)
Include a standard forward-looking statement caveat. State the outlook based on current trading and market conditions. Use measured language: "the Board is cautiously optimistic" / "current order books support" / "management expects" — not unqualified forecasts.

TONE REQUIREMENTS:
— Plain, direct English. No passive voice.
— This is a first draft for Finance Director, CEO, and legal review.
— All forward-looking statements must be reviewed against applicable regulatory requirements.
— The commentary should add insight to the numbers — do not simply repeat what the financial statements already show.`},

  {title:"Segment Performance Analysis — Multi-Division Assessment",prompt:`You are a senior management consultant and financial analyst with expertise in multi-segment business performance evaluation, strategic portfolio analysis, and capital allocation advisory. I have uploaded the segment financial data.

Read the uploaded file. Identify: the segments or divisions, the financial metrics available for each (revenue, gross profit, EBIT, assets, capex), and the number of reporting periods covered.

Perform the complete segment performance analysis:

STEP 1 — SEGMENT REVENUE MIX AND GROWTH
For each segment: (a) revenue as % of total group revenue, (b) revenue growth rate vs prior period, (c) whether the segment's share of total group revenue is growing or declining. Identify the growth engine (fastest growing segment) and the revenue anchor (largest by absolute value). A segment can be large but declining — or small but fast-growing — each has different strategic implications.

STEP 2 — SEGMENT PROFITABILITY RANKING
For each segment: calculate gross margin %, EBIT margin %, and EBITDA margin % (where available). Rank segments from most to least profitable. The most important analysis: is the most profitable segment also the largest and fastest-growing? If the least profitable segment is growing fastest, the group margin will structurally compress over time.

STEP 3 — RETURN ON ASSETS BY SEGMENT
Calculate EBIT ÷ Segment Assets for each segment. This shows capital efficiency — which segments generate the most profit per unit of capital invested. Compare to group ROA and to industry benchmark if provided.

STEP 4 — CAPITAL ALLOCATION EFFICIENCY
Capex as % of segment revenue: is investment being directed to the highest-return segments? A segment with high ROA receiving low capex may be being under-invested. A segment with low ROA receiving high capex may be in a turnaround investment phase — or may be a capital trap.

STEP 5 — GROWTH VS PROFITABILITY MATRIX
Plot each segment on a 2×2 matrix:
— High growth + High margin: Stars (protect and invest)
— High growth + Low margin: Question marks (invest to improve margin, or harvest)
— Low growth + High margin: Cash cows (extract cash to fund Stars and Question marks)
— Low growth + Low margin: Dogs (restructure or exit)
Describe the matrix verbally with each segment positioned.

STEP 6 — STRATEGIC RECOMMENDATION
Based on the above analysis: which segments warrant increased investment? Which warrant margin improvement focus? Which should be considered for rationalisation? State the analytical basis for each recommendation.

DELIVERABLE FORMAT:
— Segment performance table: segment | revenue | revenue % | growth % | gross margin | EBIT margin | ROA | capex % revenue
— Growth vs profitability matrix (described)
— Capital allocation assessment
— Strategic recommendation memo (250 words) — suitable for Board discussion
— This is analytical output for management review. Strategic decisions require Board-level discussion and cannot be made on financial analysis alone.`},

  {title:"Going Concern Assessment — ISA 570 Framework",prompt:`You are a senior audit partner with 25 years of experience conducting going concern assessments under ISA 570 (Going Concern) and AS 2415. I have uploaded the financial statements and relevant context for going concern analysis.

Read all uploaded documents carefully. Extract: the financial position, trading performance, debt structure, covenant information, and any other relevant factors described.

Conduct the structured going concern assessment:

PHASE 1 — INDICATOR IDENTIFICATION

Financial indicators — scan for each and note if present:
— Net liability position (liabilities > assets on the balance sheet)
— Negative working capital (current liabilities > current assets)
— Fixed-term borrowings approaching maturity without clear refinancing route
— Indication of withdrawal of financial support by lenders or creditors
— Negative operating cash flows (sustained, not one-off)
— Adverse key financial ratios relative to covenant requirements
— Substantial operating losses over multiple periods
— Arrears or discontinuation of dividend payments
— Inability to pay creditors on time
— Material change in the terms of borrowing facilities

Operational indicators:
— Loss of key management without replacement
— Loss of a significant market, key customer, or key supplier
— Labour difficulties or threats
— Regulatory action, litigation, or investigations with uncertain outcome
— Technology obsolescence or major disruption to business model

Other indicators:
— Non-compliance with capital or regulatory requirements
— Changes in legislation materially adversely affecting the entity
— Catastrophic uninsured loss

For each indicator identified: state whether it is present, the evidence basis, and a severity classification: Individually Material / Contributing Factor / Minor.

PHASE 2 — MANAGEMENT MITIGATION ASSESSMENT
For each material or contributing indicator: identify management's stated mitigation plan (from the data or documents provided). Assess each mitigation on: feasibility (is it realistic?), control (is it within management's control to execute?), evidence (is there evidence the plan is progressing?), and sufficiency (even if executed, will it address the indicator?).

PHASE 3 — LOOK-FORWARD PERIOD ANALYSIS
ISA 570 requires assessment for at least 12 months from the date of the financial statements. Based on the available data: project the cash position for the next 12 months under a base case and a downside scenario. Are there any points in the next 12 months where the entity may not have sufficient cash to meet obligations?

PHASE 4 — CONCLUSION
State the going concern conclusion using ISA 570 language:
— No material uncertainty: the entity can continue as a going concern for at least 12 months
— Material uncertainty exists: significant doubt about the entity's ability to continue as a going concern — disclosure required in the financial statements
— Going concern basis is inappropriate: the entity should prepare statements on a break-up basis

DELIVERABLE FORMAT:
— Indicator register: indicator | present (Y/N) | evidence | severity | management mitigation | mitigation assessment
— Cash flow projection summary (12-month look-forward)
— Going concern conclusion with ISA 570 paragraph reference
— Disclosure requirement: if material uncertainty exists, draft the required disclosure note
— This assessment is a framework. Going concern conclusions are a Senior Partner decision and must not be finalised without audit engagement partner review and, in many cases, specialist consultation.`},

  {title:"Peer Benchmarking Report — Industry Comparison",prompt:`You are a financial benchmarking analyst and equity research specialist with access to industry databases and experience producing investment-grade peer comparison reports. I have uploaded the entity financials and any peer data provided.

Read all data in the file. If peer data is provided, use it directly. If not: I will describe the industry, and you should apply known sector benchmarks with clear sourcing notes.

Perform the complete peer benchmarking analysis:

STEP 1 — BENCHMARK SELECTION AND PEER GROUP DEFINITION
Define the peer group: same industry (using the SIC or GICS classification applicable to this entity), similar scale (±50% of revenue), similar business model (product vs service, B2B vs B2C). State the peers included and the basis for inclusion.

STEP 2 — REVENUE GROWTH BENCHMARKING
Entity revenue growth rate vs: peer median, peer top-quartile, industry average. Classify: Top-quartile performer / Median / Below-median / Bottom-quartile. Interpretation: is the entity growing faster or slower than peers, and what does this suggest about market share trajectory?

STEP 3 — MARGIN BENCHMARKING
Gross margin, EBITDA margin, and net margin vs peer median and top-quartile. For any margin metric where the entity is significantly below the median: identify the most likely structural cause (higher input costs, lower pricing power, more labour-intensive model, higher fixed cost base).

STEP 4 — WORKING CAPITAL BENCHMARKING
DSO, DPO, Inventory Days, and Cash Conversion Cycle vs sector averages. Identify if the entity's working capital efficiency is above or below sector norm. For any metric significantly worse than peers: quantify the cash flow improvement opportunity from closing the gap.

STEP 5 — LEVERAGE AND COVERAGE BENCHMARKING
Net Debt/EBITDA and Interest Coverage vs sector median. Is the entity more or less leveraged than peers? Is it within or outside the typical leverage range for investment-grade companies in this sector?

STEP 6 — OVERALL PERFORMANCE POSITIONING
Assign a percentile rank for each dimension. Construct a benchmarking summary: where does the entity lead, where does it lag, and what are the two or three most actionable areas for improvement?

DELIVERABLE FORMAT:
— Benchmarking table: metric | entity value | peer median | top quartile | entity percentile rank | assessment (above/at/below median)
— Performance heatmap (RAG status: Green = top quartile, Amber = median, Red = bottom quartile)
— Gap analysis: the 3 metrics with the largest gap to median and the improvement opportunity each represents
— 250-word benchmarking narrative
— All peer data should be noted with source and date. Benchmarks derived from sector knowledge should be clearly labelled as indicative.`},

  {title:"Financial Red Flags and Fraud Indicators — M-Score and Forensic Screen",prompt:`You are a forensic financial analyst, certified fraud examiner (CFE), and audit specialist with expertise in financial statement fraud detection, earnings manipulation, and the Beneish M-Score framework. I have uploaded the financial statements for forensic screening.

Read all statements carefully. Note the entity type, auditor details if disclosed, any restatements, any changes in accounting policy, and the auditor's opinion.

PART 1 — BENEISH M-SCORE (see FSA-03 for full methodology)
Calculate all 8 Beneish ratios and the M-Score. For any component with a value indicating elevated risk: identify the specific financial statement line items driving that component.

PART 2 — REVENUE RECOGNITION RED FLAGS
Screen for: (a) revenue growing materially faster than accounts receivable collections (DSO increasing while revenue grows — potential premature recognition), (b) revenue growth significantly exceeding industry peers without disclosed explanation, (c) channel-stuffing indicators (revenue spikes in final quarter with returns in the following Q1), (d) related party revenue as a % of total revenue (if disclosed).

PART 3 — ACCRUALS AND ESTIMATES RED FLAGS
Screen for: (a) large changes in estimates year-over-year (depreciation lives changed, provision rates changed) — quantify the P&L impact, (b) significant accrued liabilities or deferred revenue movements without clear explanation, (c) accounts payable growing slower than COGS (potential liability understatement), (d) goodwill impairment consistently avoided despite declining performance in acquired units.

PART 4 — ASSET QUALITY RED FLAGS
Screen for: (a) significant and unexplained goodwill write-ups, (b) capitalisation of expenditure that peers expense (artificially low COGS/OPEX), (c) growing intangible assets without corresponding revenue growth, (d) related party receivables or loans to management/major shareholders.

PART 5 — CASH FLOW RED FLAGS
Screen for: (a) net income consistently exceeding operating cash flow over multiple periods (high accruals quality risk), (b) financing activities consistently funding operating activities (borrowing to fund operations), (c) investing outflows not matched by disclosed acquisition or capital projects.

PART 6 — AUDITOR AND GOVERNANCE FLAGS
Note: (a) auditor change in last 3 years — without disclosed reason is a red flag, (b) qualified, emphasis of matter, or going concern opinion, (c) significant related party transactions not at arm's length, (d) high management turnover in CFO role.

DELIVERABLE FORMAT:
— M-Score table and interpretation
— Red flag inventory: flag | evidence | severity (High/Medium/Low) | financial statement impact estimate
— Overall risk classification: Low (0-2 Medium flags, no High) / Medium (3+ Medium or 1 High) / High (2+ High flags)
— Investigation priority list: the 5 most important areas requiring further investigation with specific questions to answer
— Critical note: This is a quantitative screening tool only. Red flags require investigation to determine if they represent fraud, aggressive but legal accounting, or legitimate business factors. No conclusion of fraud should be drawn without complete forensic investigation.`},
];
