import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE_URL, PRODUCT } from '@/lib/config';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PRODUCT.name} — Turn Landscape Video Into Vertical 9:16 Clips`,
    template: `%s — ${PRODUCT.name}`,
  },
  description: PRODUCT.shortPitch,
  keywords: [
    'vertical video editor',
    'landscape to vertical video',
    '9:16 clip maker',
    'Opus Clip alternative',
    'podcast clipping software',
    'interview video editor',
    'one-time purchase video software',
    'local video clipping app',
  ],
  authors: [{ name: 'Bloom Clipper' }],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: PRODUCT.name,
    title: `${PRODUCT.name} — Turn Landscape Video Into Vertical 9:16 Clips`,
    description: PRODUCT.shortPitch,
    images: [{ url: '/images/clipper-editor.png', width: 1200, height: 700, alt: 'Bloom Clipper editor screenshot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PRODUCT.name} — Turn Landscape Video Into Vertical 9:16 Clips`,
    description: PRODUCT.shortPitch,
    images: ['/images/clipper-editor.png'],
  },
  icons: {
    icon: '/images/icon.png',
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ink font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: PRODUCT.name,
              applicationCategory: 'MultimediaApplication',
              operatingSystem: 'Windows',
              description: PRODUCT.shortPitch,
              offers: {
                '@type': 'Offer',
                price: PRODUCT.price,
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
              },
              url: SITE_URL,
            }),
          }}
        />
      </body>
    </html>
  );
}
