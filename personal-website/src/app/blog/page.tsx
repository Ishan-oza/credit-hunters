"use client";
import Link from "next/link";
import { Hero } from "@/components/hero";

const posts = [
  {
    slug: "designing-ai-first-ux",
    title: "Designing AI-first UX",
    excerpt: "How to create user experiences that leverage AI capabilities without overwhelming users.",
    date: "2025-10-10",
    readTime: "5 min read",
    category: "Design"
  },
  {
    slug: "shipping-fast-with-nextjs-16",
    title: "Shipping Fast with Next.js 16",
    excerpt: "New features and optimizations that make development faster and more efficient.",
    date: "2025-11-01",
    readTime: "4 min read",
    category: "Development"
  },
  {
    slug: "ai-automation-case-study",
    title: "AI Automation: Logistics Success Story",
    excerpt: "How we transformed a logistics company's operations with intelligent automation.",
    date: "2025-11-15",
    readTime: "6 min read",
    category: "Case Study"
  },
  {
    slug: "future-of-web-development",
    title: "The Future of Web Development in 2026",
    excerpt: "Trends, technologies, and predictions shaping the next year in web development.",
    date: "2025-12-01",
    readTime: "7 min read",
    category: "Trends"
  },
  {
    slug: "building-scalable-startups",
    title: "Building Scalable Startups with Modern Tech",
    excerpt: "Essential technologies and strategies for startups aiming to scale rapidly.",
    date: "2025-12-15",
    readTime: "8 min read",
    category: "Business"
  }
];

export default function BlogPage() {
  return (
    <main>
      <Hero
        eyebrow="Insights"
        title="Blog & News"
        highlight="Ideas, updates, and guides"
        subtitle="Latest thoughts on AI, development, and digital transformation."
        ctas={<Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-lg bg-indigo-500 px-5 text-white shadow-sm transition-transform hover:translate-y-[-1px] hover:bg-indigo-400">Subscribe</Link>}
      />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-indigo-400/50 hover:bg-white/10 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-zinc-500">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-zinc-400 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-500">{post.date}</span>
                <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors text-sm font-medium">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
