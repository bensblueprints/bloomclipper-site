import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { INDUSTRIES, PRODUCT, WHOP_URL, SITE_URL } from '@/lib/config';

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

function getIndustry(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) return {};
  const title = `${PRODUCT.name} for ${i.name}: ${i.headline}`;
  const description = `${i.headline}. ${PRODUCT.name} is a one-time-purchase, 100% local vertical video clipper built for ${i.name.toLowerCase()}.`;
  return {
    title,
    description,
    alternates: { canonical: `/for/${i.slug}` },
    openGraph: { title, description, url: `${SITE_URL}/for/${i.slug}` },
  };
}

export default async function ForPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-4 text-sm text-white/40">
        <Link href="/" className="hover:text-white">Home</Link> / <span>For {i.name}</span>
      </div>
      <h1 className="text-4xl font-bold text-white sm:text-5xl">{PRODUCT.name} for {i.name}</h1>
      <p className="mt-4 text-lg text-white/60">{i.headline}</p>

      <div className="mt-10">
        <h2 className="mb-4 text-xl font-semibold text-white">Where {i.name.toLowerCase()} lose time on clipping</h2>
        <ul className="space-y-3">
          {i.painPoints.map((p) => (
            <li key={p} className="card flex gap-3 p-4 text-sm text-white/60">
              <span className="text-pink">•</span>{p}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mb-3 text-xl font-semibold text-white">How it works for {i.name.toLowerCase()}</h2>
          <p className="text-sm leading-relaxed text-white/60">{i.workflow}</p>
        </div>
        <div className="card overflow-hidden shadow-glow">
          <Image src="/images/clipper-editor-full.png" alt={`${PRODUCT.name} editor for ${i.name}`} width={900} height={560} className="w-full" />
        </div>
      </div>

      <div className="mt-12 card border-pink/20 p-6">
        <div className="text-xs font-semibold uppercase tracking-wide text-pink-soft">In practice</div>
        <p className="mt-2 text-white/70">{i.useCase}</p>
      </div>

      <blockquote className="mt-10 border-l-2 border-pink pl-6 text-lg italic text-white/70">
        &ldquo;{i.quote}&rdquo;
      </blockquote>

      <div className="mt-14 card p-8 text-center shadow-glow">
        <h2 className="text-2xl font-bold text-white">Buy {PRODUCT.name} once — {PRODUCT.priceDisplay}</h2>
        <p className="mt-2 text-white/60">100% local. No subscription. No watermark.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-bloom-line px-8 py-3 text-sm font-semibold text-white hover:opacity-90">
            Buy once — {PRODUCT.priceDisplay}
          </a>
          <Link href="/download" className="rounded-full border border-white/15 px-8 py-3 text-sm font-semibold text-white hover:bg-white/5">
            Download latest build
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/40">More industries</h2>
        <div className="flex flex-wrap gap-2">
          {INDUSTRIES.filter((x) => x.slug !== i.slug).slice(0, 8).map((x) => (
            <Link key={x.slug} href={`/for/${x.slug}`} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60 hover:border-pink/40 hover:text-white">
              {x.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
