import Link from 'next/link';
import Image from 'next/image';
import { WHOP_URL } from '@/lib/config';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-white">
          <Image src="/images/icon.png" alt="Bloom Clipper icon" width={32} height={32} className="rounded-lg" />
          <span>Bloom Clipper</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <Link href="/#features" className="hover:text-white">Features</Link>
          <Link href="/#pricing" className="hover:text-white">Pricing</Link>
          <Link href="/download" className="hover:text-white">Download</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/#faq" className="hover:text-white">FAQ</Link>
        </nav>
        <a
          href={WHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-bloom-line px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
        >
          Buy once — $29
        </a>
      </div>
    </header>
  );
}
