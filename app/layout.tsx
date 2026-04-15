import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Raysho — AI & F&A Knowledge Platform',
    template: '%s — Raysho',
  },
  description: "The practitioner's guide to AI in Finance and Accounting. Claude-optimised prompt frameworks, real-world case studies, tool comparisons, and daily fresh content.",
  metadataBase: new URL('https://raysho.ai'),
  openGraph: {
    siteName: 'Raysho',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Raysho — AI & F&A Knowledge Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* SKILL_30 v2.0 Typography System */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Lora:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
