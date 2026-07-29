import type { Metadata } from 'next';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import { getAllBlogSlugs, getBlogPost } from '@/lib/blog';
import { PRODUCT, WHOP_URL, SITE_URL } from '@/lib/config';

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { title: post.title, description: post.description, url: `${SITE_URL}/blog/${slug}`, type: 'article' },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-4 text-sm text-white/40">
        <Link href="/blog" className="hover:text-white">Blog</Link> / <span>{post.title}</span>
      </div>
      <h1 className="text-4xl font-bold text-white">{post.title}</h1>
      <div className="mt-3 text-sm text-white/40">{post.date} · {post.author}</div>
      <div className="prose-bloom mt-10">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      <div className="mt-14 card p-8 text-center shadow-glow">
        <h2 className="text-2xl font-bold text-white">Try {PRODUCT.name} — {PRODUCT.priceDisplay}, once</h2>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-bloom-line px-8 py-3 text-sm font-semibold text-white hover:opacity-90">
            Buy once — {PRODUCT.priceDisplay}
          </a>
          <Link href="/download" className="rounded-full border border-white/15 px-8 py-3 text-sm font-semibold text-white hover:bg-white/5">
            Download latest build
          </Link>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { '@type': 'Organization', name: post.author },
          }),
        }}
      />
    </div>
  );
}
