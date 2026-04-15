import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FintelliQ Platform — AI Tools, Prompts & Case Studies for F&A Professionals',
  description: '80+ AI prompt frameworks, 5 tool deep-dives, Big Four case studies, and live content discovery — the practitioner\'s toolkit for AI in Finance & Accounting.',
  openGraph: {
    title: 'FintelliQ — AI & F&A Knowledge Platform',
    description: '80+ AI prompt frameworks, case studies, tool comparisons and weekly fresh content for Finance & Accounting professionals.',
    type: 'website',
    url: 'https://fintelliQ.com/platform',
  },
  // Platform is interactive content — index the page but tell Google it's an app
  robots: {
    index: true,
    follow: true,
  },
};

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
