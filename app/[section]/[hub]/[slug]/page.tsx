/**
 * app/[section]/[hub]/[slug]/page.tsx
 *
 * Dynamic route for every content page across the three sections.
 * Static generation at build time via generateStaticParams.
 *
 * Next.js 14.2.x compatible (sync params). If upgrading to Next 15,
 * change `params: RouteParams` to `params: Promise<RouteParams>` and await.
 *
 * Commit at: repo-root/app/[section]/[hub]/[slug]/page.tsx
 */

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getPageByRoute,
  getAllRouteParams,
  resolveCrossLink,
} from '@/lib/content';
import { Playbook } from '@/components/templates/Playbook';

// Force static generation. No runtime DB calls.
export const dynamic = 'force-static';
export const revalidate = false;

type RouteParams = {
  section: string;
  hub: string;
  slug: string;
};

export async function generateStaticParams(): Promise<RouteParams[]> {
  return await getAllRouteParams();
}

export async function generateMetadata({
  params,
}: {
  params: RouteParams;
}): Promise<Metadata> {
  const { section, hub, slug } = params;
  const page = await getPageByRoute(section, hub, slug);
  if (!page) return {};

  const { frontmatter, route } = page;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://raysho.ai';
  const canonical = `${siteUrl}${route.fullPath}`;

  return {
    title: frontmatter.title,
    description: frontmatter.angle || frontmatter.jtbd,
    alternates: { canonical },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.angle || frontmatter.jtbd,
      url: canonical,
      siteName: 'Raysho',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.angle || frontmatter.jtbd,
    },
    keywords: [frontmatter.primaryKeyword, ...frontmatter.secondaryKeywords].filter(
      Boolean,
    ),
  };
}

export default async function ContentPage({
  params,
}: {
  params: RouteParams;
}) {
  const { section, hub, slug } = params;
  const page = await getPageByRoute(section, hub, slug);
  if (!page) notFound();

  // Resolve cross-links from S-ID references into href paths
  const [crossUp, crossDown, crossAcross] = await Promise.all([
    resolveCrossLink(page.frontmatter.crossLinksUp),
    resolveCrossLink(page.frontmatter.crossLinksDown),
    resolveCrossLink(page.frontmatter.crossLinksAcross),
  ]);

  // Template dispatch. Part 1 implements Playbook only.
  // Part 2 adds the remaining six templates.
  const template = page.frontmatter.template;

  if (template === 'Playbook') {
    return (
      <Playbook
        page={page}
        crossUp={crossUp}
        crossDown={crossDown}
        crossAcross={crossAcross}
      />
    );
  }

  // Temporary fallthrough for non-Playbook templates until Part 2 ships.
  // Returns a 404 so unfinished template slugs are not indexed.
  notFound();
}
