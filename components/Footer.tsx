import Link from 'next/link';
import { COMPETITORS, INDUSTRIES, PRODUCT } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Product</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/#features" className="hover:text-white">Features</Link></li>
              <li><Link href="/#pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/download" className="hover:text-white">Download</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Compare</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {COMPETITORS.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link href={`/vs/${c.slug}`} className="hover:text-white">vs {c.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">For You</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {INDUSTRIES.slice(0, 5).map((i) => (
                <li key={i.slug}>
                  <Link href={`/for/${i.slug}`} className="hover:text-white">For {i.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Bloom Family</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="https://bloomrecorder.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">BloomRecorder</a></li>
              <li><a href="https://meet.bloomrecorder.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Bloom Meeting</a></li>
              <li><a href={`mailto:${PRODUCT.supportEmail}`} className="hover:text-white">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 text-xs text-white/40 md:flex-row">
          <span>&copy; {new Date().getFullYear()} Bloom Clipper. Pay once, own it forever.</span>
          <span>Windows desktop app · 100% local · No subscriptions</span>
        </div>
      </div>
    </footer>
  );
}
