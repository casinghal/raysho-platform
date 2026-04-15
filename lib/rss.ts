import Parser from 'rss-parser';

const parser = new Parser({ timeout: 8000 });

const RSS_FEEDS = [
  // High priority — check daily
  { url: 'https://www.journalofaccountancy.com/rss/all.rss',       source: 'Journal of Accountancy' },
  { url: 'https://www.cpapracticeadvisor.com/feed/',               source: 'CPA Practice Advisor' },
  { url: 'https://www.accountingtoday.com/feed',                   source: 'Accounting Today' },
  { url: 'https://www.icaew.com/rss',                              source: 'ICAEW' },
  { url: 'https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/rss', source: 'McKinsey Finance' },

  // Medium priority
  { url: 'https://www.forrester.com/blogs/category/finance-and-accounting/feed/', source: 'Forrester Finance' },
  { url: 'https://kpmg.com/xx/en/home/insights.rss',              source: 'KPMG Insights' },
  { url: 'https://hbr.org/topic/finance/feed',                    source: 'HBR Finance' },
  { url: 'https://feeds.ft.com/rss/home/uk',                      source: 'Financial Times' },
  { url: 'https://www.accountingweb.co.uk/feed',                  source: 'AccountingWeb' },

  // Practitioner / specialist
  { url: 'https://futurefirm.co/blog/feed/',                      source: 'Future Firm' },
  { url: 'https://www.dualentry.com/rss.xml',                     source: 'DualEntry' },
  { url: 'https://karbonhq.com/resources/blog/feed/',             source: 'Karbon (vendor)' },
  { url: 'https://tipalti.com/blog/feed/',                        source: 'Tipalti (vendor)' },
  { url: 'https://www.botkeeper.com/blog/rss.xml',                source: 'Botkeeper (vendor)' },
  { url: 'https://www.abbyy.com/blog/feed/',                      source: 'ABBYY (vendor)' },
  { url: 'https://www.highradius.com/resources/blog/feed/',       source: 'HighRadius (vendor)' },
  { url: 'https://tax.thomsonreuters.com/blog/feed/',             source: 'Thomson Reuters Tax' },
  { url: 'https://goingconcern.com/feed/',                        source: 'Going Concern' },
  { url: 'https://www.cfo.com/feed/',                             source: 'CFO Magazine' },
];

// Keywords that flag an article as likely AI/automation relevant
const AI_KEYWORDS = [
  'artificial intelligence', 'machine learning', 'generative ai', 'genai',
  'chatgpt', 'copilot', 'claude ai', 'automation', 'ai-powered', 'ai tool',
  'large language model', 'llm', 'agentic', 'intelligent automation',
  'robotic process', 'rpa', 'natural language', 'ai in accounting',
  'ai in finance', 'ai in audit', 'ai in tax',
];

type RSSItem = {
  title: string;
  url: string;
  source: string;
  type: 'ARTICLE' | 'REPORT';
  published_at: string;
  summary: string;
};

export async function fetchRSSContent(): Promise<RSSItem[]> {
  const results: RSSItem[] = [];
  const seen = new Set<string>();
  const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000; // 30 days ago

  for (const feed of RSS_FEEDS) {
    try {
      const parsed = await parser.parseURL(feed.url);

      for (const item of parsed.items || []) {
        if (!item.link || seen.has(item.link)) continue;

        // Date filter — only last 30 days
        const pubDate = item.pubDate ? new Date(item.pubDate).getTime() : 0;
        if (pubDate > 0 && pubDate < cutoff) continue;

        // Relevance filter — must mention AI/automation somewhere
        const text = `${item.title} ${item.contentSnippet || item.content || ''}`.toLowerCase();
        const isRelevant = AI_KEYWORDS.some((kw) => text.includes(kw));
        if (!isRelevant) continue;

        seen.add(item.link);
        results.push({
          title: item.title || 'Untitled',
          url: item.link,
          source: feed.source,
          type: feed.source.includes('Report') ? 'REPORT' : 'ARTICLE',
          published_at: item.pubDate ? new Date(item.pubDate).toISOString().split('T')[0] : '',
          summary: (item.contentSnippet || item.content || '').slice(0, 250),
        });
      }

      await sleep(200);
    } catch {
      // Skip failed feed
      continue;
    }
  }

  return results;
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
