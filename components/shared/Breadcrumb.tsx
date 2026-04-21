/**
 * components/shared/Breadcrumb.tsx
 *
 * Schema.org BreadcrumbList + visual breadcrumb.
 * No eyebrow pills (anti-AI-trace rule 1). No mono uppercase (rule 3).
 *
 * Commit at: repo-root/components/shared/Breadcrumb.tsx
 */

import Link from 'next/link';

const SECTION_LABELS: Record<string, string> = {
  firms: 'CPA Firms',
  practitioners: 'Practitioners',
  intelligence: 'Intelligence',
};

const HUB_LABELS: Record<string, Record<string, string>> = {
  firms: {
    outsourcing: 'Outsourcing',
    automation: 'Automation',
    advisory: 'Advisory',
    india: 'India',
  },
  practitioners: {
    ap: 'Accounts Payable',
    ar: 'Accounts Receivable',
    r2r: 'Record to Report',
    fpa: 'FP&A',
    audit: 'Audit',
    close: 'Close',
  },
  intelligence: {
    insights: 'Insights',
    videos: 'Videos',
    tools: 'Tools',
  },
};

export interface BreadcrumbProps {
  section: string;
  hub: string;
  pageTitle: string;
}

export function Breadcrumb({ section, hub, pageTitle }: BreadcrumbProps) {
  const sectionLabel = SECTION_LABELS[section] || section;
  const hubLabel = HUB_LABELS[section]?.[hub] || hub;

  const items = [
    { name: sectionLabel, href: `/${section}` },
    { name: hubLabel, href: `/${section}/${hub}` },
    { name: pageTitle, href: null as string | null },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      ...(item.href ? { item: item.href } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="text-sm text-[rgb(232,232,228,0.65)]"
      >
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-[#E8E8E4] transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-[rgb(232,232,228,0.8)] line-clamp-1">
                  {item.name}
                </span>
              )}
              {idx < items.length - 1 && (
                <span aria-hidden className="text-[rgb(232,232,228,0.4)]">
                  /
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
