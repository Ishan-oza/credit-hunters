import Link from "next/link";
import { Hero } from "@/components/hero";

const posts = {
  "designing-ai-first-ux": {
    title: "Designing AI-first UX",
    excerpt: "How to create user experiences that leverage AI capabilities without overwhelming users.",
    date: "2025-10-10",
    readTime: "5 min read",
    category: "Design",
    content: `
      <h2>The Challenge of AI in UX Design</h2>
      <p>As AI becomes more integrated into our digital experiences, designers face a unique challenge: how do we leverage AI's power without making users feel overwhelmed or confused?</p>

      <h2>Principles for AI-first UX</h2>
      <ul>
        <li><strong>Transparency:</strong> Users should always know when AI is involved in their experience</li>
        <li><strong>Control:</strong> Give users the ability to override or adjust AI suggestions</li>
        <li><strong>Progressive disclosure:</strong> Introduce AI features gradually</li>
        <li><strong>Context awareness:</strong> AI should understand and adapt to user context</li>
      </ul>

      <h2>Practical Implementation</h2>
      <p>When designing AI-first experiences, start by mapping out the user journey and identifying where AI can add value without complexity.</p>
    `
  },
  "shipping-fast-with-nextjs-16": {
    title: "Shipping Fast with Next.js 16",
    excerpt: "New features and optimizations that make development faster and more efficient.",
    date: "2025-11-01",
    readTime: "4 min read",
    category: "Development",
    content: `
      <h2>What's New in Next.js 16</h2>
      <p>Next.js 16 brings significant improvements to the developer experience and application performance.</p>

      <h2>Key Features</h2>
      <ul>
        <li>Improved build performance with Rust-based compiler</li>
        <li>Enhanced React Server Components support</li>
        <li>Better TypeScript integration</li>
        <li>Optimized bundle splitting</li>
      </ul>

      <h2>Migration Guide</h2>
      <p>Upgrading to Next.js 16 is straightforward with minimal breaking changes.</p>
    `
  },
  "ai-automation-case-study": {
    title: "AI Automation: Logistics Success Story",
    excerpt: "How we transformed a logistics company's operations with intelligent automation.",
    date: "2025-11-15",
    readTime: "6 min read",
    category: "Case Study",
    content: `
      <h2>The Challenge</h2>
      <p>Our client, a mid-sized logistics company, was struggling with manual route optimization and delayed deliveries.</p>

      <h2>The Solution</h2>
      <p>We implemented an AI-powered route optimization system that learned from historical data and real-time conditions.</p>

      <h2>Results</h2>
      <ul>
        <li>30% reduction in delivery times</li>
        <li>25% decrease in fuel costs</li>
        <li>50% fewer customer complaints</li>
      </ul>

      <h2>Key Learnings</h2>
      <p>The success depended on clean data, iterative training, and close collaboration with operations teams.</p>
    `
  },
  "future-of-web-development": {
    title: "The Future of Web Development in 2026",
    excerpt: "Trends, technologies, and predictions shaping the next year in web development.",
    date: "2025-12-01",
    readTime: "7 min read",
    category: "Trends",
    content: `
      <h2>Emerging Technologies</h2>
      <p>Several technologies are poised to reshape web development in the coming year.</p>

      <h2>AI Integration</h2>
      <p>AI will become a standard part of the development workflow, from code generation to testing.</p>

      <h2>WebAssembly Growth</h2>
      <p>WebAssembly will enable more complex applications to run in the browser.</p>

      <h2>Edge Computing</h2>
      <p>Edge functions will become more prevalent for better performance and reduced latency.</p>
    `
  },
  "building-scalable-startups": {
    title: "Building Scalable Startups with Modern Tech",
    excerpt: "Essential technologies and strategies for startups aiming to scale rapidly.",
    date: "2025-12-15",
    readTime: "8 min read",
    category: "Business",
    content: `
      <h2>Foundation Technologies</h2>
      <p>Choose technologies that can grow with your business.</p>

      <h2>Cloud Infrastructure</h2>
      <p>Leverage cloud services for scalability and reliability.</p>

      <h2>Development Practices</h2>
      <p>Implement practices that support rapid iteration and quality.</p>

      <h2>Team Scaling</h2>
      <p>Build processes that work as your team grows.</p>
    `
  }
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return (
      <main className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 pt-24 pb-24">
        <h1 className="text-2xl font-semibold">Post not found</h1>
        <Link href="/blog" className="text-indigo-400 hover:text-indigo-300">← Back to blog</Link>
      </main>
    );
  }

  return (
    <main>
      <Hero
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
      />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex items-center gap-4 mb-8 text-sm text-zinc-400">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/blog" className="text-indigo-400 hover:text-indigo-300 font-medium">
            ← Back to all posts
          </Link>
        </div>
      </article>
    </main>
  );
}
