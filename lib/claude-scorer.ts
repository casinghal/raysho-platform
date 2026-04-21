type RawItem = {
  title: string;
  url: string;
  source: string;
  type: string;
  published_at: string;
  summary: string;
};

type ScoredItem = RawItem & {
  why_it_matters: string;
  score: number;
  tower: string | null;
};

const TOWERS = ['AP','AR','R2R','Payroll','Tax','Audit','JE Analysis','Financial Statements','FP&A','Contracts','AI Tools'];

// Retry wrapper around the Claude API call. Handles two transient conditions
// from Anthropic: 429 (rate limited) and 529 (overloaded). Single retry with
// a 2s backoff — enough to absorb a brief spike without dragging the cron
// past its 300s maxDuration or blowing up the API budget on a sustained outage.
async function callClaudeWithRetry(prompt: string): Promise<Response> {
  const maxRetries = 1;
  const backoffMs  = 2000;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001', // cheapest model — scoring only
        max_tokens: 800,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if ((res.status === 429 || res.status === 529) && attempt < maxRetries) {
      await sleep(backoffMs);
      continue;
    }
    return res;
  }

  // Unreachable in practice — the final attempt always returns — but TS needs it.
  throw new Error('callClaudeWithRetry: exhausted without returning');
}

export async function scoreContent(items: RawItem[]): Promise<ScoredItem[]> {
  if (!items.length) return [];

  const scored: ScoredItem[] = [];

  // Score in batches of 5 to keep token usage manageable
  const batches = chunk(items, 5);

  for (const batch of batches) {
    try {
      const prompt = `You are an expert content curator for Raysho, an AI learning platform for Finance & Accounting (F&A) professionals.

Evaluate each of these ${batch.length} content items. For each, provide:
1. score: 0-10 (F&A relevance and educational value — 7+ means publish, below 7 filter out)
2. why_it_matters: one sentence explaining practical value to an F&A professional (max 20 words)
3. tower: which F&A process tower this best fits, or null if general. Options: ${TOWERS.join(', ')}

Return ONLY a JSON array with ${batch.length} objects. Each object: { "index": N, "score": X, "why_it_matters": "...", "tower": "..." or null }
No preamble, no markdown, no explanation — only the JSON array.

Items to evaluate:
${batch.map((item, i) => `[${i}] Title: ${item.title}\nSource: ${item.source}\nSummary: ${item.summary}`).join('\n\n')}`;

      const res = await callClaudeWithRetry(prompt);

      if (!res.ok) {
        // On API error, assign default scores so items still go to queue
        for (const item of batch) {
          scored.push({ ...item, score: 5, why_it_matters: 'Pending review', tower: null });
        }
        continue;
      }

      const data = await res.json();
      const text = data.content?.[0]?.text || '[]';
      const results = JSON.parse(text.replace(/```json|```/g, '').trim());

      for (const item of batch) {
        const r = results.find((x: { index: number }) => x.index === batch.indexOf(item));
        scored.push({
          ...item,
          score: r?.score ?? 5,
          why_it_matters: r?.why_it_matters ?? '',
          tower: r?.tower ?? null,
        });
      }

      await sleep(500);
    } catch {
      // On parse error, pass items through with default score
      for (const item of batch) {
        scored.push({ ...item, score: 5, why_it_matters: '', tower: null });
      }
    }
  }

  return scored;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
