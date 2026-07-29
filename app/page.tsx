import Image from 'next/image';
import Link from 'next/link';
import Faq from '@/components/Faq';
import { PRODUCT, WHOP_URL, COMPETITORS } from '@/lib/config';

const FEATURES = [
  {
    title: 'Mark your own cuts',
    body: 'Scrub the source timeline, hit Set start / Set end, and every cut becomes an editable row — tweak to the tenth of a second, preview in place, delete.',
    image: '/images/clipper-home.png',
    alt: 'Bloom Clipper library and source picker',
  },
  {
    title: 'Full 9:16, your way',
    body: 'One draggable, aspect-locked, zoomable crop box per cut. Drag to move, drag the corner to zoom — a live readout shows exactly how tight you\'re framed.',
    image: '/images/clipper-editor.png',
    alt: 'Bloom Clipper Full 9:16 editor with crop box and phone preview',
  },
  {
    title: 'Half 9:16 for interviews',
    body: 'Two aspect-locked boxes, one per speaker. Bloom Clipper stacks angle 1 over angle 2 automatically — both faces visible, no whip-panning, no guessing.',
    image: '/images/clipper-editor-full.png',
    alt: 'Bloom Clipper Half 9:16 stacked interview mode',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-bloom-glow">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 text-center md:pt-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-pink-soft">
            Windows desktop app · 100% local · No watermark · No credits
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Turn any landscape video into <span className="text-gradient">vertical 9:16 clips</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            {PRODUCT.shortPitch}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-bloom-line px-8 py-3.5 text-base font-semibold text-white shadow-glow transition hover:opacity-90"
            >
              Buy once — {PRODUCT.priceDisplay}
            </a>
            <Link
              href="/download"
              className="rounded-full border border-white/15 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/5"
            >
              Download latest build
            </Link>
          </div>
          <p className="mt-4 text-sm text-white/40">vs {PRODUCT.priceDisplay}/mo for Opus Clip. Own it after one payment.</p>
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20">
          <div className="card overflow-hidden shadow-glow">
            <Image
              src="/images/clipper-editor.png"
              alt="Bloom Clipper editor — cut timeline on the left, live 9:16 phone preview on the right"
              width={1600}
              height={950}
              className="w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">One panel to cut. One panel to see exactly what you&apos;ll post.</h2>
          <p className="mt-4 text-white/60">
            Left: your source video with a cut timeline. Right: a live phone-mock preview of the exact 9:16 output. That&apos;s the whole app.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="card overflow-hidden">
              <Image src={f.image} alt={f.alt} width={900} height={560} className="w-full border-b border-white/5" />
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why local */}
      <section className="border-y border-white/5 bg-panel/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-white">100% local. No exceptions.</h2>
            <p className="mt-4 text-white/60">
              Your source video never leaves your machine. Cuts, crop framing, and the final 1080x1920 MP4 render all
              happen with a locally bundled ffmpeg — no upload, no cloud processing queue, no account required to render
              a single clip.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex gap-3"><span className="text-pink">✓</span> Zero telemetry, zero network calls to cut or export</li>
              <li className="flex gap-3"><span className="text-pink">✓</span> Reads straight from BloomRecorder / Bloom Meeting libraries, or any video file</li>
              <li className="flex gap-3"><span className="text-pink">✓</span> No watermark on any export, ever</li>
              <li className="flex gap-3"><span className="text-pink">✓</span> No monthly credits or processing-minute caps</li>
            </ul>
          </div>
          <div className="card overflow-hidden shadow-glow">
            <Image src="/images/clipper-editor-full.png" alt="Bloom Clipper Half 9:16 stacked interview mode" width={900} height={560} className="w-full" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">One price. No meter.</h2>
        <p className="mt-4 text-white/60">Compare that to what a subscription clipping tool costs over a year.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card border-pink/30 p-8 shadow-glow">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-pink-soft">Bloom Clipper</div>
            <div className="mb-4 text-5xl font-extrabold text-white">
              {PRODUCT.priceDisplay}
              <span className="ml-1 text-base font-medium text-white/50">{PRODUCT.priceSuffix}</span>
            </div>
            <ul className="mb-8 space-y-2 text-left text-sm text-white/70">
              <li>✓ Own it forever, one payment</li>
              <li>✓ Unlimited cuts, unlimited exports</li>
              <li>✓ Full 9:16 and Half 9:16 interview mode</li>
              <li>✓ 100% local rendering, no uploads</li>
              <li>✓ No watermark, no credits, no meter</li>
            </ul>
            <a
              href={WHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-bloom-line px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Buy once — {PRODUCT.priceDisplay}
            </a>
          </div>
          <div className="card p-8 text-left">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/50">A typical subscription tool</div>
            <div className="mb-4 text-5xl font-extrabold text-white/70">
              ~$29<span className="ml-1 text-base font-medium text-white/40">/month</span>
            </div>
            <ul className="mb-8 space-y-2 text-sm text-white/50">
              <li>✗ $348+/year, forever, while you use it</li>
              <li>✗ Metered minutes or credits, resets monthly</li>
              <li>✗ Footage uploaded to a third-party cloud</li>
              <li>✗ Auto-reframe only — no manual crop control</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {COMPETITORS.slice(0, 4).map((c) => (
                <Link
                  key={c.slug}
                  href={`/vs/${c.slug}`}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60 hover:border-pink/40 hover:text-white"
                >
                  vs {c.name} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </div>
  );
}
