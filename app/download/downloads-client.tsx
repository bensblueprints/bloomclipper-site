'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { GITHUB_RELEASES_API, GITHUB_REPO } from '@/lib/config';

type Asset = {
  name: string;
  browser_download_url: string;
  size: number;
  content_type: string;
};

type Release = {
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  assets: Asset[];
  html_url: string;
};

function formatBytes(bytes: number) {
  if (!bytes) return '';
  const mb = bytes / (1024 * 1024);
  if (mb > 1024) return `${(mb / 1024).toFixed(2)} GB`;
  return `${mb.toFixed(1)} MB`;
}

function detectOS(): 'windows' | 'mac' | 'linux' | 'unknown' {
  if (typeof navigator === 'undefined') return 'unknown';
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('win')) return 'windows';
  if (ua.includes('mac')) return 'mac';
  if (ua.includes('linux')) return 'linux';
  return 'unknown';
}

function assetKind(name: string): 'windows' | 'mac' | 'linux' | 'other' {
  const n = name.toLowerCase();
  if (n.endsWith('.exe') || n.includes('win')) return 'windows';
  if (n.endsWith('.dmg') || n.includes('mac') || n.includes('darwin')) return 'mac';
  if (n.endsWith('.appimage') || n.endsWith('.deb') || n.includes('linux')) return 'linux';
  return 'other';
}

export default function DownloadsClient() {
  const [releases, setReleases] = useState<Release[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [os, setOs] = useState<'windows' | 'mac' | 'linux' | 'unknown'>('unknown');

  useEffect(() => {
    setOs(detectOS());
    fetch(GITHUB_RELEASES_API, { headers: { Accept: 'application/vnd.github+json' } })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);
        return res.json();
      })
      .then((data: Release[]) => setReleases(Array.isArray(data) ? data : []))
      .catch((e) => setError(e.message || 'Failed to load releases'));
  }, []);

  if (error) {
    return (
      <div className="card p-8 text-center">
        <p className="text-white/70">Couldn&apos;t reach GitHub releases right now.</p>
        <p className="mt-2 text-sm text-white/40">{error}</p>
        <a
          href={`https://github.com/${GITHUB_REPO}/releases`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-full border border-white/15 px-6 py-2 text-sm font-semibold text-white hover:bg-white/5"
        >
          View releases on GitHub
        </a>
      </div>
    );
  }

  if (!releases) {
    return (
      <div className="card p-8 text-center text-white/50">Loading latest builds…</div>
    );
  }

  if (releases.length === 0) {
    return (
      <div className="card p-8 text-center">
        <p className="text-white/70">No published releases yet.</p>
        <a
          href={`https://github.com/${GITHUB_REPO}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-full border border-white/15 px-6 py-2 text-sm font-semibold text-white hover:bg-white/5"
        >
          View source on GitHub
        </a>
      </div>
    );
  }

  const latest = releases[0];
  const olderReleases = releases.slice(1, 6);

  return (
    <div className="space-y-10">
      <div className="card p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-pink-soft">Latest release</div>
            <h2 className="text-2xl font-bold text-white">{latest.name || latest.tag_name}</h2>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
            {new Date(latest.published_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {latest.assets
            .slice()
            .sort((a, b) => {
              const rank = (n: string) => (assetKind(n) === os ? 0 : 1);
              return rank(a.name) - rank(b.name);
            })
            .map((asset) => (
              <a
                key={asset.name}
                href={asset.browser_download_url}
                className={`flex min-w-0 items-center justify-between gap-3 rounded-xl border px-5 py-4 transition ${
                  assetKind(asset.name) === os
                    ? 'border-pink/50 bg-bloom-line/10 hover:opacity-90'
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                <div className="min-w-0">
                  <div className="break-all font-medium text-white">{asset.name}</div>
                  <div className="text-xs text-white/40">{formatBytes(asset.size)}</div>
                </div>
                {assetKind(asset.name) === os && (
                  <span className="shrink-0 rounded-full bg-pink px-2 py-1 text-[10px] font-semibold uppercase text-white">
                    For your OS
                  </span>
                )}
              </a>
            ))}
          {latest.assets.length === 0 && (
            <p className="text-sm text-white/50">No binary assets attached to this release yet — check back soon or build from source.</p>
          )}
        </div>

        {latest.body && (
          <div className="mt-6 border-t border-white/5 pt-6">
            <h3 className="mb-2 text-sm font-semibold text-white/70">Changelog</h3>
            <div className="prose-bloom text-sm">
              <ReactMarkdown>{latest.body}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>

      <div className="card border-yellow-500/20 bg-yellow-500/5 p-6 text-sm text-white/70">
        <strong className="text-white">First launch on Windows:</strong> Bloom Clipper is an independent app and the
        installer isn&apos;t yet code-signed with a paid Microsoft certificate, so Windows SmartScreen may show
        &quot;Windows protected your PC&quot;. Click <strong>More info</strong>, then <strong>Run anyway</strong>. This is
        standard for unsigned indie desktop apps and doesn&apos;t affect how the app runs — it never phones home
        regardless.
      </div>

      {olderReleases.length > 0 && (
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Previous releases</h3>
          <div className="space-y-3">
            {olderReleases.map((r) => (
              <a
                key={r.tag_name}
                href={r.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center justify-between px-5 py-4 hover:border-white/20"
              >
                <span className="font-medium text-white">{r.name || r.tag_name}</span>
                <span className="text-xs text-white/40">
                  {new Date(r.published_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
