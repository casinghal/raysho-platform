/**
 * components/shared/CrosslinkStrip.tsx
 *
 * "Next" strip. Renders up to three cross-links:
 *   - up (to Firms or parent)
 *   - across (to Intelligence — mandatory per scaffolding 5.1)
 *   - down (to Practitioner Prompt Packs)
 *
 * Anti-AI-trace rule 4: no numbered inset boxes. No "1." "2." "3." visual numbering.
 * Anti-AI-trace rule 7: no badge clusters of 3+ on a single element. No Claude-optimised badge.
 * Max 3 cross-links total per scaffolding 5.2.
 *
 * Commit at: repo-root/components/shared/CrosslinkStrip.tsx
 */

import Link from 'next/link';
import type { CrossLink } from '@/lib/content';

export interface CrosslinkStripProps {
  up?: CrossLink;
  across?: CrossLink;
  down?: CrossLink;
}

interface Renderable {
  direction: 'Up' | 'Across' | 'Down';
  label: string;
  href: string;
  reason?: string;
}

function toRenderable(direction: 'Up' | 'Across' | 'Down', link?: CrossLink): Renderable | null {
  if (!link || !link.href) return null;
  return {
    direction,
    label: link.label || link.href,
    href: link.href,
    reason: link.reason,
  };
}

export function CrosslinkStrip({ up, across, down }: CrosslinkStripProps) {
  const items: Renderable[] = [
    toRenderable('Up', up),
    toRenderable('Across', across),
    toRenderable('Down', down),
  ].filter((x): x is Renderable => x !== null);

  if (items.length === 0) return null;

  return (
    <aside
      aria-labelledby="next-heading"
      className="mt-16 border-t border-[rgba(255,255,255,0.08)] pt-10"
    >
      <h2
        id="next-heading"
        className="text-[clamp(1.25rem,2vw,1.5rem)] font-[family-name:'Plus_Jakarta_Sans'] font-extrabold text-[#E8E8E4] mb-6 tracking-tight"
      >
        Next
      </h2>
      <ul className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <li key={item.direction}>
            <Link
              href={item.href}
              className="block h-full rounded-lg p-5 bg-[#0A0C12] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(130,132,135,0.4)] transition-colors"
              style={{
                boxShadow:
                  '-8px -8px 16px rgba(255,255,255,0.03), 8px 8px 16px rgba(0,0,0,0.6)',
              }}
            >
              <span className="block text-xs text-[rgba(232,232,228,0.5)] mb-2">
                {item.direction}
              </span>
              <span className="block text-base text-[#E8E8E4] leading-snug">
                {item.label}
              </span>
              {item.reason && (
                <span className="block text-sm text-[rgba(232,232,228,0.65)] mt-2 leading-relaxed">
                  {item.reason}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
