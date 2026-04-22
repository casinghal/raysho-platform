/**
 * components/templates/Playbook.tsx
 *
 * Playbook template per scaffolding 3.1:
 *   Problem → Why it matters → Step-by-step → Prompts embedded → Downloadable artefact → Related content
 *
 * Wordcount target 2,500-4,000 (governed at content layer, not enforced here).
 *
 * Voice per scaffolding 8.1:
 *   Operator voice. Opens with problem. Specific numbers. Hyphens only. "Full stop" not "period".
 *   Ends with conviction, not a motivational wrap-up.
 *
 * Commit at: repo-root/components/templates/Playbook.tsx
 */

import type { Page, CrossLink } from '@/lib/content';
import { PageShell } from '@/components/shared/PageShell';
import { CrosslinkStrip } from '@/components/shared/CrosslinkStrip';

export interface PlaybookProps {
  page: Page;
  crossUp: CrossLink;
  crossDown: CrossLink;
  crossAcross: CrossLink;
}

export function Playbook({ page, crossUp, crossDown, crossAcross }: PlaybookProps) {
  return (
    <PageShell page={page}>
      {/* schema.org HowTo — Playbook is a HowTo per scaffolding 6.2 */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: page.frontmatter.title,
            description: page.frontmatter.angle || page.frontmatter.jtbd,
            datePublished: page.frontmatter.created,
            dateModified: page.updatedAt,
            author: {
              '@type': 'Person',
              name: 'Pankaj Singhal',
            },
          }),
        }}
      />

      {/* Body — compiled HTML from markdown */}
      <div
        className="raysho-prose"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: page.bodyHtml }}
      />

      {/* Cross-link strip — mandatory per scaffolding 5.1 */}
      <CrosslinkStrip up={crossUp} across={crossAcross} down={crossDown} />
    </PageShell>
  );
}
