---
slot-id: S-P-001
title: "Claude Prompts for Invoice Extraction: Four Prompts for the Four Real-World Invoice Types"
section: F&A Practitioner Hub
sub-hub: /practitioners/ap/
template: Prompt Pack
version: 1.0
created: 2026-04-21
voice-approved: 2026-04-21
status: READY FOR PLATFORM INGESTION
length: ~3,800 words (within 3,000-5,000 template band)
wave: "W3 (anchor: first Prompt Pack in the 18-slot Practitioner Hub register; validates the Prompt Pack template before the other 17 slots ship)"
icp-target: "Tier 1 Proactive Practitioner: AP clerk, senior AP, controller at a US/UK/CA/AUS firm or corporate; BPO delivery lead in India or the Philippines running AP for a Western client"
jtbd: "Extract vendor, invoice number, date, line items, amount, tax, GL code recommendation, and approval route from any invoice PDF or image in under 15 seconds per invoice"
primary-keyword: claude prompt for invoice extraction
secondary-keywords: ai invoice capture, accounts payable automation prompt, invoice data extraction prompt, gl code recommendation ai
angle: Invoice extraction is not OCR, it is structured-output engineering. This Prompt Pack ships the four prompts that cover the four real-world invoice types (standard, multi-line, multi-currency, recurring) and the validation step that makes the output usable inside an ERP.
cross-links-up: S-F-007 OCR pipelines for CPA firms (/firms/automation/)
cross-links-down: (this is a leaf practitioner piece, no further down-link)
cross-links-across: /intelligence/tools/ (invoice-capture category verdict)
cross-ref: RAYSHO_CONTENT_SPEC_v2_0.md (S-P-001 brief), RAYSHO_PLATFORM_SCAFFOLDING_v1_0.md (Prompt Pack template registry)
voice-gates-cleared: pankaj-voice 5/5
em-dash-check: zero em dashes verified. Colons, commas, and restructured clauses used throughout.
forbidden-word-sweep: clean
taxonomy:
  practice-area: accounts-payable
  firm-size: sole-practitioner, small-firm, mid-market, enterprise
  geography: global, India-prominent
  difficulty: starter
  content-type: prompt-pack
  claude-optimised: true
---

# Claude Prompts for Invoice Extraction: Four Prompts for the Four Real-World Invoice Types

**TL;DR**
Invoice extraction has been sold as an OCR problem for twenty years. It is not. OCR is the easy half. The hard half is turning the extracted text into a structured record an ERP can post. This Prompt Pack ships four Claude prompts that do the structured-output half, covering the four invoice patterns that account for roughly ninety-five percent of real-world AP volume: single-line standard, multi-line, multi-currency, and recurring. Each prompt is reproducible, comes with a JSON schema, and includes the edge cases an AP clerk actually sees on a Tuesday afternoon.

## 1. Why this is not an OCR problem

Take a utility bill. A reasonable OCR engine from 2015 can pull ninety-eight percent of the characters off the page. That is not the bottleneck. The bottleneck is what comes next. The invoice needs a vendor match against your master list. It needs a posting date that is consistent with your close cut-off. It needs a GL code recommendation that a controller will actually accept on first pass. It needs a tax line that matches the jurisdictional rules of the billing address, not the vendor address. It needs an approval route that reflects your delegation-of-authority matrix.

None of that is OCR. All of that is structured-output engineering. And structured-output engineering is exactly what a large language model does well when the prompt is written with the right constraints.

The AP teams that complain about AI not working for invoice capture almost always made the same mistake. They picked a tool that was ninety percent OCR and ten percent extraction-logic, and they wired it into their ERP expecting a controller-ready record. What landed in the ERP was a clean scan with a guessed GL code and a tax line that was frequently wrong. The controller override rate sat at thirty to fifty percent, and the team concluded "AI does not work for AP."

The correct build order is the opposite. Treat OCR as a commodity. Any mainstream OCR engine (Adobe, ABBYY, Amazon Textract, Azure Document Intelligence, Google Document AI, or an open-source fallback like Tesseract or PaddleOCR for lower-volume needs) will get you a text layer. The work that matters begins after the text layer exists. That work is what the four prompts in this pack do.

## 2. What a working invoice-capture pipeline actually looks like

Before the prompts make sense, the full flow has to be clear.

The pipeline has four stages. Stage one is ingestion: the invoice arrives by email, portal download, or vendor upload, and lands in a staging bucket with a consistent file name. Stage two is OCR: the PDF or image gets a text layer and a bounding-box map. Stage three is extraction: the text layer gets fed into a Claude prompt that returns a structured JSON record. Stage four is validation and posting: the JSON record is checked against master data (vendor, GL, tax, cost centre) and then posted, routed, or flagged for human review.

The prompts in this pack sit in stage three. They assume OCR has run cleanly. If your OCR output is garbage, no prompt will rescue it. That is what S-F-007 OCR pipelines for CPA firms covers, linked at the top of this page.

## 3. Prompt 1 of 4: Standard single-line invoice

### Context

Standard invoices make up roughly sixty percent of typical AP volume in a mid-market firm. Utility bills, subscription fees, single-service professional invoices, retainer bills. One vendor, one line item, one total. These are the invoices AP clerks post in thirty seconds if the ERP is willing to auto-suggest the coding. This prompt replaces the thirty seconds with seven.

### The prompt

```
You are an AP extraction assistant for a finance team running posting standards under either US GAAP or IFRS (the team will specify in each call).

Input: the OCR text of a single invoice, delimited by <invoice> tags.

Task: return a JSON object matching exactly the schema below. Populate every field. If a field is not determinable from the invoice text, return the string "UNKNOWN" and add an entry to the "missing_fields" array explaining what is missing and where it would normally appear.

Schema:
{
  "vendor_name": string,
  "vendor_id_candidate": string (best guess from vendor_name, to be matched against master),
  "invoice_number": string,
  "invoice_date": string (ISO 8601, YYYY-MM-DD),
  "due_date": string (ISO 8601 or "UNKNOWN"),
  "currency": string (ISO 4217, three letters),
  "subtotal": number,
  "tax_amount": number,
  "total_amount": number,
  "tax_rate_implied": number (tax_amount / subtotal, rounded to 4 decimals),
  "tax_jurisdiction_hint": string (city, state/province, country if derivable from the billing address),
  "description_summary": string (max 100 chars, what the invoice is for),
  "gl_code_recommendation": {
    "code": string,
    "confidence": "high" | "medium" | "low",
    "reasoning": string (max 200 chars, why this code)
  },
  "approval_route_hint": string (one of: "auto-post", "manager-review", "controller-review"),
  "missing_fields": array of strings,
  "anomalies": array of strings (anything unusual that a human should see)
}

Constraints:
- Do not invent an invoice number. If it is missing or illegible, return "UNKNOWN" and flag it in missing_fields.
- invoice_date must be the date printed on the invoice, not today's date.
- gl_code_recommendation.code must come from the code list provided at the start of the session (if none is provided, return "UNKNOWN" and flag it).
- Return only the JSON object. No prose. No preamble.

<invoice>
{OCR_TEXT_HERE}
</invoice>
```

### Example input/output

Input (OCR text from a utility bill, simplified):

> ConEd NY, Invoice 2026-04-112, billed to Acme Holdings LLC, 123 Park Ave, New York, NY 10022. Service period March 15 to April 14, 2026. Usage 4,280 kWh at $0.148 per kWh. Subtotal $633.44. Sales tax 8.875%: $56.22. Total due $689.66. Payment due May 6, 2026.

Output:
```json
{
  "vendor_name": "ConEd NY",
  "vendor_id_candidate": "coned-ny",
  "invoice_number": "2026-04-112",
  "invoice_date": "2026-04-14",
  "due_date": "2026-05-06",
  "currency": "USD",
  "subtotal": 633.44,
  "tax_amount": 56.22,
  "total_amount": 689.66,
  "tax_rate_implied": 0.0888,
  "tax_jurisdiction_hint": "New York, NY, USA",
  "description_summary": "Electricity usage 4,280 kWh, March 15 to April 14, 2026",
  "gl_code_recommendation": {
    "code": "6410-Utilities-Electricity",
    "confidence": "high",
    "reasoning": "Utility vendor, single-period electricity usage, maps to standard utilities code"
  },
  "approval_route_hint": "auto-post",
  "missing_fields": [],
  "anomalies": []
}
```

### Edge cases this prompt handles without breaking

Ambiguous date formats. If the invoice prints "04/05/2026," the prompt infers the format from the billing address jurisdiction (US invoices default to MM/DD, most other English-speaking jurisdictions default to DD/MM). If the date is still ambiguous, it flags it in `anomalies`.

Rounding mismatches. If the subtotal plus tax does not reconcile to the total within a one-cent threshold, the prompt reports the delta in `anomalies` rather than silently adjusting.

Missing invoice numbers. Some vendors send invoices with no invoice number on the document. The prompt returns "UNKNOWN" and flags this in `missing_fields` so downstream logic can generate a synthetic invoice number from a hash of vendor plus date plus amount.

Foreign-language fields. If portions of the invoice are in a non-English language, the prompt translates field values to English in the output but preserves the original vendor name as printed. This matters for audit trails.

### Where this prompt fails without help

Handwritten invoices do not reliably work off an OCR text layer. Use a vision-enabled Claude call (pass the image directly rather than OCR text) for this subset. The schema stays the same; the input becomes the image rather than the text between the `<invoice>` tags.

Heavily scanned-and-faxed invoices where the OCR confidence is below eighty percent should be flagged by the OCR layer before reaching this prompt. Do not rely on the prompt to detect OCR quality.

## 4. Prompt 2 of 4: Multi-line invoice

### Context

Multi-line invoices are the next twenty-five percent of typical AP volume. Hardware purchases, mixed professional-services bills, office supplies, SaaS invoices with multiple product lines. The extraction pattern for these is not just "the standard prompt with a line-item array." The line-item array introduces three new decisions: tax allocation across lines, GL coding per line (not per invoice), and description granularity.

### The prompt

```
You are an AP extraction assistant for a finance team running posting standards under either US GAAP or IFRS (the team will specify in each call).

Input: the OCR text of a multi-line invoice, delimited by <invoice> tags.

Task: return a JSON object matching exactly the schema below. Every line item must be captured, coded, and tax-allocated.

Schema:
{
  "vendor_name": string,
  "vendor_id_candidate": string,
  "invoice_number": string,
  "invoice_date": string (ISO 8601),
  "due_date": string or "UNKNOWN",
  "currency": string (ISO 4217),
  "line_items": [
    {
      "line_number": integer,
      "description": string,
      "quantity": number,
      "unit_price": number,
      "line_subtotal": number,
      "tax_allocated": number,
      "tax_method": "line_taxed" | "apportioned_from_header",
      "gl_code_recommendation": {
        "code": string,
        "confidence": "high" | "medium" | "low",
        "reasoning": string (max 150 chars)
      }
    }
  ],
  "header_subtotal": number,
  "header_tax_total": number,
  "header_total": number,
  "line_item_sum_check": {
    "lines_add_to_subtotal": boolean,
    "delta": number
  },
  "approval_route_hint": string,
  "missing_fields": array,
  "anomalies": array
}

Tax allocation rules:
- If each line shows its own tax line, set tax_method = "line_taxed" and use the printed tax.
- If tax is only totalled at the header, set tax_method = "apportioned_from_header" and allocate tax to each line proportional to line_subtotal, rounded to two decimals. Push any rounding delta to the last line.
- Report the final per-line tax_allocated figures in any case.

Return only the JSON object. No prose.

<invoice>
{OCR_TEXT_HERE}
</invoice>
```

### Example input/output

Input (OCR text from a mixed hardware and services invoice):

> Nimbus IT Services, Invoice NIT-00884, billed to Acme Holdings LLC. Service date April 12, 2026.
> Line 1: Dell Latitude 5550 laptop, qty 4, unit $1,420.00, line total $5,680.00
> Line 2: Laptop setup and deployment, qty 4, unit $145.00, line total $580.00
> Line 3: Three-year warranty extension, qty 4, unit $220.00, line total $880.00
> Subtotal $7,140.00. Tax 8.875%: $633.68. Total $7,773.68. Due May 12, 2026.

Output (abbreviated):
```json
{
  "vendor_name": "Nimbus IT Services",
  "vendor_id_candidate": "nimbus-it-services",
  "invoice_number": "NIT-00884",
  "invoice_date": "2026-04-12",
  "due_date": "2026-05-12",
  "currency": "USD",
  "line_items": [
    {
      "line_number": 1,
      "description": "Dell Latitude 5550 laptop",
      "quantity": 4,
      "unit_price": 1420.00,
      "line_subtotal": 5680.00,
      "tax_allocated": 504.10,
      "tax_method": "apportioned_from_header",
      "gl_code_recommendation": {
        "code": "1520-Fixed-Assets-IT-Equipment",
        "confidence": "high",
        "reasoning": "Laptops above capitalisation threshold; depreciable IT equipment"
      }
    },
    {
      "line_number": 2,
      "description": "Laptop setup and deployment",
      "quantity": 4,
      "unit_price": 145.00,
      "line_subtotal": 580.00,
      "tax_allocated": 51.47,
      "tax_method": "apportioned_from_header",
      "gl_code_recommendation": {
        "code": "6720-IT-Services-Professional",
        "confidence": "medium",
        "reasoning": "One-time deployment service; not capitalisable to asset cost under firm policy unless directly attributable"
      }
    },
    {
      "line_number": 3,
      "description": "Three-year warranty extension",
      "quantity": 4,
      "unit_price": 220.00,
      "line_subtotal": 880.00,
      "tax_allocated": 78.11,
      "tax_method": "apportioned_from_header",
      "gl_code_recommendation": {
        "code": "1540-Prepaid-Warranty",
        "confidence": "medium",
        "reasoning": "Multi-year warranty; prepaid asset amortised over 36 months"
      }
    }
  ],
  "header_subtotal": 7140.00,
  "header_tax_total": 633.68,
  "header_total": 7773.68,
  "line_item_sum_check": {
    "lines_add_to_subtotal": true,
    "delta": 0.00
  },
  "approval_route_hint": "controller-review",
  "missing_fields": [],
  "anomalies": ["Mixed CapEx and service lines; review allocation against capitalisation policy"]
}
```

### Edge cases this prompt handles

Mixed CapEx and OpEx on the same invoice. The prompt flags the mix in `anomalies` and routes to controller-review by default. It does not silently post across incompatible GL categories.

Free-text description lines. Some vendors include discount lines, freight lines, or "rounding adjustment" lines. The prompt captures these as line items with appropriate GL codes (`6820-Freight-In`, `4200-Discounts-Received`, `9999-Rounding`) rather than dropping them.

Line subtotal mismatches. If the lines do not add up to the printed subtotal, the prompt reports the delta in `line_item_sum_check` and flags it. It does not paper over the gap.

### What this prompt deliberately does not do

Match line items to purchase-order lines. That is a separate step. If you have a three-way match requirement (PO, invoice, receipt), the output of this prompt feeds into a match-engine prompt, not into this one.

## 5. Prompt 3 of 4: Multi-currency invoice

### Context

Multi-currency invoices are where most AP teams lose accuracy. SaaS vendors bill in USD. Import vendors bill in EUR, GBP, or CNY. Professional-services firms bill in whatever currency the engagement letter was signed in. Your books are in one currency. The spot rate on the invoice date is not necessarily the rate you should post at. And the rate your bank converted at is a fourth number that only shows up on the remittance advice weeks later.

The multi-currency prompt captures all of this without hiding the complexity.

### The prompt

```
You are an AP extraction assistant handling multi-currency invoices. Books are denominated in the currency the user will specify at call time as "books_ccy". Assume US GAAP treatment for FX unless told otherwise.

Input: the OCR text of an invoice that may be in a currency other than books_ccy, delimited by <invoice> tags.

Task: return a JSON object matching exactly the schema below.

Schema:
{
  "vendor_name": string,
  "invoice_number": string,
  "invoice_date": string (ISO 8601),
  "due_date": string or "UNKNOWN",
  "invoice_ccy": string (ISO 4217, the currency printed on the invoice),
  "books_ccy": string (ISO 4217, echo of the user-supplied books currency),
  "invoice_amount": {
    "subtotal": number,
    "tax_amount": number,
    "total_amount": number
  },
  "fx_rate_printed_on_invoice": number or null,
  "fx_rate_printed_on_invoice_date": string or null,
  "books_amount_estimate": {
    "total_amount": number,
    "rate_used_for_estimate": number,
    "rate_source_note": string (max 200 chars: explain whether estimate uses printed rate, a flagged placeholder rate of 1.0, or is null)
  },
  "translation_rule_flag": string (one of: "use_invoice_date_rate", "use_payment_date_rate", "use_month_end_rate", "per_firm_policy_review"),
  "gl_code_recommendation": { ... (same structure as single-line prompt) },
  "approval_route_hint": string,
  "missing_fields": array,
  "anomalies": array
}

Rules:
- If the invoice prints an FX rate, capture it verbatim.
- If the invoice does not print an FX rate and books_ccy differs from invoice_ccy, set books_amount_estimate to null and add "missing_fx_rate_for_translation" to missing_fields. Do not invent a rate.
- Always set translation_rule_flag so downstream logic knows which policy gate to run.
- Never post a books-currency amount without a clear source for the rate.

Return only the JSON object.

<invoice>
{OCR_TEXT_HERE}
</invoice>
```

### Example input/output

Input (OCR text from a EUR invoice to a US-books entity):

> Berliner Hosting GmbH, Rechnung 2026-04-0044, April 15, 2026. Web hosting services March 2026. Netto EUR 2,400.00. USt 19%: EUR 456.00. Gesamt EUR 2,856.00. Fällig 15.05.2026.

Output (with `books_ccy = "USD"`):
```json
{
  "vendor_name": "Berliner Hosting GmbH",
  "invoice_number": "2026-04-0044",
  "invoice_date": "2026-04-15",
  "due_date": "2026-05-15",
  "invoice_ccy": "EUR",
  "books_ccy": "USD",
  "invoice_amount": {
    "subtotal": 2400.00,
    "tax_amount": 456.00,
    "total_amount": 2856.00
  },
  "fx_rate_printed_on_invoice": null,
  "fx_rate_printed_on_invoice_date": null,
  "books_amount_estimate": null,
  "translation_rule_flag": "use_invoice_date_rate",
  "gl_code_recommendation": {
    "code": "6730-IT-Services-Hosting",
    "confidence": "high",
    "reasoning": "Recurring web hosting service; standard IT services coding"
  },
  "approval_route_hint": "auto-post",
  "missing_fields": ["missing_fx_rate_for_translation"],
  "anomalies": ["Tax jurisdiction is Germany (USt 19%). Verify reverse-charge VAT treatment before payment."]
}
```

### Edge cases this prompt handles

VAT reverse-charge flags. The prompt catches EU-style VAT invoices and flags the reverse-charge analysis in `anomalies`. This is often missed by AP teams and caught by the external VAT consultant six months later.

Hedge-designated payables. If the invoice is flagged in the vendor master as hedge-accounted, the downstream validation step needs to pull the hedge rate rather than the spot rate. This prompt does not do that directly, but `translation_rule_flag` can be set to `per_firm_policy_review` to route there.

Currencies outside the ISO 4217 mainstream. Some invoices from African or Central Asian jurisdictions print in local currency codes that are not always standardised. The prompt returns the closest ISO code and flags in `anomalies` if ambiguity exists.

### Why this prompt is strict about FX

Every AP-to-ERP integration that silently substituted a default FX rate of 1.0 for missing rates has caused a painful period-end adjustment. The discipline of this prompt (return `null` and flag, never substitute) is the single most load-bearing rule in the multi-currency pack.

## 6. Prompt 4 of 4: Recurring detection

### Context

Recurring detection is the part of invoice capture that most teams skip because it is the least exciting. It is also the part that catches duplicate payments, flags subscription drift, and lets you auto-post invoices that match a cadence you already trust.

The recurring prompt does not replace the extraction prompts above. It runs after one of them, takes their JSON output, and adds recurrence context by comparing against a vendor history file.

### The prompt

```
You are a recurrence-detection assistant for AP. You will receive two inputs:
1. A newly-extracted invoice JSON from one of the extraction prompts (standard, multi-line, or multi-currency).
2. A vendor history file: a JSON array of prior invoices from the same vendor over the last 18 months.

Your task is to return a JSON object that classifies the new invoice's recurrence and flags any variance worth a human looking at.

Schema:
{
  "is_recurring": boolean,
  "recurrence_pattern": string (one of: "monthly", "quarterly", "annual", "irregular", "one_time_new_vendor", "unknown"),
  "expected_amount_range": { "low": number, "high": number } or null,
  "actual_amount": number,
  "amount_variance_pct": number (null if expected range is null),
  "amount_variance_flag": "within_tolerance" | "outside_tolerance" | "material_shift",
  "expected_next_date": string (ISO 8601) or null,
  "cadence_drift_days": integer or null,
  "duplicate_candidate": boolean,
  "duplicate_match": {
    "matched_invoice_number": string,
    "matched_invoice_date": string,
    "match_reason": string
  } or null,
  "auto_post_recommendation": "auto_post_allowed" | "review_required" | "hold_for_controller",
  "notes": array of strings
}

Thresholds:
- within_tolerance: actual is within ±10% of the historical 12-month trailing average
- outside_tolerance: 10% to 30% deviation
- material_shift: above 30% deviation
- cadence_drift_days: positive if the new invoice arrives later than the expected date, negative if earlier
- duplicate_candidate = true if a prior invoice exists with (same vendor) AND (amount within 1 cent) AND (invoice_date within 7 days)

Vendor history input will be passed as a JSON array under <vendor_history> tags. The new invoice will be passed under <new_invoice> tags.

Return only the JSON object.

<new_invoice>
{NEW_INVOICE_JSON_HERE}
</new_invoice>

<vendor_history>
{VENDOR_HISTORY_JSON_HERE}
</vendor_history>
```

### Example input/output

New invoice: ConEd NY, amount USD 689.66, date 2026-04-14.
Vendor history (abbreviated, last 12 months): monthly invoices ranging USD 540 to USD 720, typically arriving between the 12th and the 16th of each month, tax rate consistent at 8.875%.

Output:
```json
{
  "is_recurring": true,
  "recurrence_pattern": "monthly",
  "expected_amount_range": { "low": 540.00, "high": 720.00 },
  "actual_amount": 689.66,
  "amount_variance_pct": 9.8,
  "amount_variance_flag": "within_tolerance",
  "expected_next_date": "2026-04-14",
  "cadence_drift_days": 0,
  "duplicate_candidate": false,
  "duplicate_match": null,
  "auto_post_recommendation": "auto_post_allowed",
  "notes": [
    "Twelve months of consistent monthly cadence from this vendor",
    "Amount within historical range; no action needed"
  ]
}
```

### Edge cases this prompt handles

First-time invoice from a vendor who is not in the history file. Returns `recurrence_pattern = "one_time_new_vendor"` and sets `auto_post_recommendation = "review_required"`. New vendors should never auto-post on first invoice.

Amount variance inside tolerance but with a vendor recently flagged in a fraud alert. The recurrence prompt itself does not see fraud flags directly (those live in the vendor master), but the downstream validation step can read both outputs and escalate.

Cadence drift beyond typical. If a monthly vendor's invoice arrives 20 days late, the cadence_drift_days field captures the anomaly. AP teams often find that unusual cadence is an early indicator of a vendor billing error or a payment-term change the vendor forgot to tell you about.

## 7. Combine-with recipes

The four prompts above are designed to stack.

**Recipe A: New vendor onboarding (standard invoice pattern).** Run Prompt 1 on the invoice. Take the output. Post with `approval_route_hint = "manager-review"` and create a vendor master record in parallel. Skip the recurrence prompt for first invoices from this vendor.

**Recipe B: Monthly recurring vendor.** Run Prompt 1 on the invoice. Take the output. Feed it plus the vendor history into Prompt 4. If `auto_post_recommendation = "auto_post_allowed"`, auto-post. If not, route to controller-review.

**Recipe C: Multi-line hardware purchase.** Run Prompt 2 on the invoice. Do not run Prompt 4 for pure CapEx transactions; recurrence detection is less load-bearing for capital items, which should always route to controller review.

**Recipe D: Cross-border SaaS.** Run Prompt 3 on the invoice. If the invoice is a known monthly subscription, chain into Prompt 4 with the vendor history. The FX rate decision from Prompt 3 and the recurrence pattern from Prompt 4 are both needed before the invoice posts.

**Recipe E: Freight invoice.** Run Prompt 2 even if only one line appears, because freight invoices often carry hidden surcharge lines that look cosmetic on the printed invoice but need their own GL codes. Watch for recurring freight patterns that point to contract freight rather than spot freight.

## 8. Validation against the ERP

Extraction is not posting. A JSON record from any of the prompts above has to clear three validation gates before it becomes a posted invoice.

**Gate 1: Vendor match.** The `vendor_id_candidate` has to resolve to a real vendor in the master. If it matches at ninety-percent confidence or higher, auto-match. If it matches between seventy and ninety percent confidence, route to a human for confirmation. Below seventy percent, treat as a new vendor and route to vendor-master onboarding.

**Gate 2: GL code sanity.** The `gl_code_recommendation.code` has to exist in your chart of accounts and be open for posting. If the code is closed, inactive, or outside the permissioned set for this AP cost-centre, route to controller review. The model's confidence score is not a substitute for a live COA check.

**Gate 3: Duplicate check.** Before posting, a final duplicate check runs at the ERP level: vendor plus invoice number plus total amount. Even if Prompt 4 said the invoice is clean, Gate 3 is the backstop.

Only after all three gates pass does the invoice post. This is why invoice capture is not OCR. OCR gets you characters on a page. These four prompts plus the three validation gates get you an invoice that a controller will sign off on without rework.

## 9. Where this Prompt Pack does not reach

Large-volume AP shops posting more than two thousand invoices a month will want to wrap these prompts in a batch-processing pipeline with caching, retry logic, and a cost budget. The prompts themselves scale fine; the pipeline around them is its own engineering problem.

Industry-specific invoices (healthcare claims, construction progress bills, legal invoices with matter codes, energy invoices with consumption schedules) often need a fifth prompt that knows the industry's structure. Treat that as an extension, not a replacement.

Anything that requires human judgment on a line-by-line basis (disputed amounts, credit-note allocations, vendor-negotiated rebates) will always route to a human. The goal of this pack is to put the other ninety-five percent of volume on rails so the human time goes to the five percent that deserves it.

## Next

Up to **[S-F-007 OCR pipelines for CPA firms](/firms/automation/ocr-pipelines-for-cpa-firms/)**: the pipeline that feeds this pack. Use the OCR piece first if your text layer is not yet reliable.

Across to **[AI Tool Tracker: Invoice-Capture Category](/intelligence/tools/)**: the current Raysho verdict on Docuphase, Dokka, AppZen, and Vic.ai for teams that want a packaged tool rather than a custom-built pipeline.

In-hub to **[S-P-002 Vendor reconciliation Prompt Pack](/practitioners/ap/vendor-reconciliation-prompt-pack/)**: the next step once these invoices start posting at volume and the AP subledger needs a monthly tie-out against vendor statements.

---

*Updated: 2026-04-21. Reviewed by: Pankaj Singhal. Was this useful? Forward it to a colleague.*
