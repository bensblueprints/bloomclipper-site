import type { Metadata } from 'next';
import DownloadsClient from './downloads-client';
import { PRODUCT, GITHUB_REPO } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Download',
  description: `Download the latest ${PRODUCT.name} build for ${PRODUCT.platform} — pulled live from GitHub releases.`,
  alternates: { canonical: '/download' },
};

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-white">Download {PRODUCT.name}</h1>
        <p className="mt-4 text-white/60">
          Builds are published straight from{' '}
          <a href={`https://github.com/${GITHUB_REPO}`} target="_blank" rel="noopener noreferrer" className="text-pink-soft underline">
            github.com/{GITHUB_REPO}
          </a>
          . This page always shows the current release — no separate download page to maintain.
        </p>
      </div>
      <DownloadsClient />
    </div>
  );
}
