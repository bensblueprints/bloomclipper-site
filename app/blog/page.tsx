import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import { PRODUCT } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Blog',
  description: `Guides and comparisons on vertical video clipping from the ${PRODUCT.name} team.`,
  alternates: { canonical: '/blog' },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold text-white">Blog</h1>
      <p className="mt-3 text-white/60">Guides, comparisons, and workflow breakdowns for vertical clipping.</p>
      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card block p-6 transition hover:border-pink/30">
            <div className="text-xs text-white/40">{post.date}</div>
            <h2 className="mt-1 text-xl font-semibold text-white">{post.title}</h2>
            <p className="mt-2 text-sm text-white/60">{post.description}</p>
          </Link>
        ))}
        {posts.length === 0 && <p className="text-white/50">No posts yet — check back soon.</p>}
      </div>
    </div>
  );
}
