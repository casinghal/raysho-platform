import type { Metadata } from 'next';
import './globals.css';

// Root layout metadata - acts as fallback for pages that don't set their own
export const metadata: Metadata = {
  title: {
    default: 'Raysho — AI & F&A Knowledge Platform',
    template: '%s — Raysho',
  },
  description: 'The practitioner\'s guide to AI in Finance & Accounting. Structured prompt frameworks, real-world case studies, tool comparisons and weekly fresh content.',
  metadataBase: new URL('https://raysho.ai'),
  openGraph: {
    siteName: 'Raysho',
    type: 'website',
    images: [
      {
        url: '/og-image.png',       // Place your 1200x630 screenshot of og-image-source.html here
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
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
