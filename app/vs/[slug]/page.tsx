import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { COMPETITORS, PRODUCT, WHOP_URL, SITE_URL } from '@/lib/config';

export function generateStaticParams() {
  return COMPETITORS.map((c) => ({ slug: c.slug }));
}

function getCompetitor(slug: string) {
  return COMPETITORS.find((c) => c.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCompetitor(slug);
  if (!c) return {};
  const title = `${PRODUCT.name} vs ${c.name}: One-Time Price vs Subscription (2026)`;
  const description = `${PRODUCT.name} ($29 once) vs ${c.name} (${c.pricingSummary}). Honest feature and pricing comparison for vertical video clipping.`;
  return {
    title,
    description,
    alternates: { canonical: `/vs/${c.slug}` },
    openGraph: { title, description, url: `${SITE_URL}/vs/${c.slug}` },
  };
}

export default async function VsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCompetitor(slug);
  if (!c) notFound();

  const yearlyCompetitor = Math.round((c.annualEffectiveMonthly ?? c.monthlyPrice) * 12);
  const yearlyCompetitorMonthly = Math.round(c.monthlyPrice * 12);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-4 text-sm text-white/40">
        <Link href="/" className="hover:text-white">Home</Link> / <span>vs {c.name}</span>
      </div>
      <h1 className="text-4xl font-bold text-white sm:text-5xl">
        {PRODUCT.name} vs {c.name}
      </h1>
      <p className="mt-4 text-lg text-white/60">{c.verdict}</p>

      {/* Price comparison */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card border-pink/30 p-6 shadow-glow">
          <div className="text-sm font-semibold uppercase tracking-wide text-pink-soft">{PRODUCT.name}</div>
          <div className="mt-2 text-4xl font-extrabold text-white">$29 <span className="text-base font-medium text-white/50">one-time</span></div>
          <p className="mt-3 text-sm text-white/60">Local desktop app. Manual cut + crop control. Full 9:16 and Half 9:16 interview mode.</p>
          <div className="mt-4 text-xs text-white/40">Cost after 1 year: <strong className="text-white">$29</strong></div>
        </div>
        <div className="card p-6">
          <div className="text-sm font-semibold uppercase tracking-wide text-white/50">{c.name}</div>
          <div className="mt-2 text-4xl font-extrabold text-white/70">
            ${c.monthlyPrice}<span className="text-base font-medium text-white/40">/mo</span>
          </div>
          <p className="mt-3 text-sm text-white/50">{c.pricingSummary}</p>
          <div className="mt-4 text-xs text-white/40">
            Cost after 1 year (monthly billing): <strong className="text-white/70">${yearlyCompetitorMonthly}</strong>
            {c.annualEffectiveMonthly && (
              <> · annual plan: <strong className="text-white/70">${yearlyCompetitor}</strong></>
            )}
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-white/30">Pricing note: {c.pricingSourceNote}</p>

      {/* Strengths / weaknesses */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-xl font-semibold text-white">Where {c.name} is genuinely strong</h2>
          <ul className="space-y-2 text-sm text-white/60">
            {c.strengths.map((s) => (
              <li key={s} className="flex gap-2"><span className="text-emerald-400">+</span>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-xl font-semibold text-white">Where it falls short for clipping</h2>
          <ul className="space-y-2 text-sm text-white/60">
            {c.whereItFalls.map((s) => (
              <li key={s} className="flex gap-2"><span className="text-pink">−</span>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Differentiators */}
      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-white">How {PRODUCT.name} is different</h2>
        <ul className="space-y-3">
          {c.differentiators.map((d) => (
            <li key={d} className="card flex gap-3 p-4 text-sm text-white/70">
              <span className="text-pink-soft">✓</span>{d}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 card overflow-hidden">
        <Image src="/images/clipper-editor.png" alt={`${PRODUCT.name} editor screenshot`} width={1400} height={820} className="w-full" />
      </div>

      <div className="mt-8">
        <h2 className="mb-2 text-xl font-semibold text-white">Best for</h2>
        <p className="text-sm text-white/60"><strong className="text-white/80">{c.name}:</strong> {c.bestFor}</p>
      </div>

      <div className="mt-14 card p-8 text-center shadow-glow">
        <h2 className="text-2xl font-bold text-white">Try {PRODUCT.name} for {PRODUCT.priceDisplay}, once</h2>
        <p className="mt-2 text-white/60">No monthly bill to cancel. 30-day refund if it&apos;s not for you.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-bloom-line px-8 py-3 text-sm font-semibold text-white hover:opacity-90">
            Buy once — {PRODUCT.priceDisplay}
          </a>
          <Link href="/download" className="rounded-full border border-white/15 px-8 py-3 text-sm font-semibold text-white hover:bg-white/5">
            Download latest build
          </Link>
        </div>
      </div>
    </div>
  );
}
