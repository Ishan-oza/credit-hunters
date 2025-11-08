"use client";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Commerce Platform", summary: "Multi-tenant storefront with subscriptions and AI assist.", tags: ["Next.js", "Stripe", "RAG AI"] },
  { title: "Analytics Suite", summary: "Data pipelines + dashboards + anomaly alerts.", tags: ["Dashboards", "ETL", "LLM"] },
  { title: "Portfolio Site", summary: "Fast, SEO-first company website with blog and CMS.", tags: ["Design", "CMS", "SEO"] },
  { title: "Ops Automation", summary: "Email triage and summarization for ops team.", tags: ["Automation", "AI", "Workers"] },
  { title: "Support Chatbot", summary: "Retrieval-augmented assistant with handoff.", tags: ["RAG AI", "Chat", "Search"] },
];

export default function ProjectsPage() {
  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const filtered = useMemo(() => {
    if (activeTags.length === 0) return projects;
    return projects.filter((p) => activeTags.every((t) => p.tags.includes(t)));
  }, [activeTags]);

  function toggleTag(tag: string) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  return (
    <main>
      <Hero
        eyebrow="Selected work"
        title="Projects"
        highlight="we're proud of"
        subtitle="A few examples—more to come with filtering and tags."
        ctas={<Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-lg bg-indigo-500 px-5 text-white shadow-sm transition-transform hover:translate-y-[-1px] hover:bg-indigo-400">Work with us</Link>}
      />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-wrap gap-2">
          {allTags.map((t) => {
            const isActive = activeTags.includes(t);
            return (
              <button
                key={t}
                onClick={() => toggleTag(t)}
                className={`text-xs rounded-full px-3 py-1 border transition-colors ${
                  isActive
                    ? "border-indigo-400 text-indigo-300 bg-indigo-500/10"
                    : "border-white/10 text-zinc-400 hover:bg-white/5"
                }`}
              >
                {t}
              </button>
            );
          })}
          {activeTags.length > 0 && (
            <button
              onClick={() => setActiveTags([])}
              className="text-xs rounded-full px-3 py-1 border border-white/10 text-zinc-400 hover:bg-white/5"
            >
              Clear
            </button>
          )}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20 grid gap-6 md:grid-cols-3">
        {filtered.map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35 }}
            whileHover={{ y: -2 }}
            className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-zinc-400 text-sm">{p.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs rounded-full border border-white/10 px-2 py-1 text-zinc-400">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
