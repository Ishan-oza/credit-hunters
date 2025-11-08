"use client";
import Link from "next/link";
import { Hero } from "@/components/hero";

export default function AboutPage() {
  return (
    <main>
      <Hero
        eyebrow="Who we are"
        title="About"
        highlight="Mastersolis Infotech"
        subtitle="Mission-driven team building exceptional software and AI-powered experiences."
        ctas={
          <>
            <Link href="/services" className="inline-flex h-11 items-center justify-center rounded-lg bg-indigo-500 px-5 text-white shadow-sm transition-transform hover:translate-y-[-1px] hover:bg-indigo-400">Our Services</Link>
            <Link href="/projects" className="inline-flex h-11 items-center justify-center rounded-lg border border-white/15 px-5 hover:bg-white/5">Projects</Link>
          </>
        }
      />
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20 grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h3 className="text-lg font-semibold">Mission</h3>
          <p className="mt-2 text-zinc-400">Create meaningful digital products with craftsmanship, speed, and empathy.</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h3 className="text-lg font-semibold">Vision</h3>
          <p className="mt-2 text-zinc-400">Enable businesses with AI-first solutions that are accessible and delightful.</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h3 className="text-lg font-semibold">Values</h3>
          <p className="mt-2 text-zinc-400">Quality, curiosity, transparency, and long-term partnership.</p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-zinc-300 leading-relaxed mb-6 text-lg">
            Mastersolis Infotech was born from a simple idea: <span className="text-indigo-400 font-medium">technology should empower, not complicate</span>. Founded in 2023 by a team of passionate engineers and designers, we started as a small consultancy helping local businesses digitize their operations.
          </p>
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-l-4 border-indigo-400 pl-6 py-4 my-8 rounded-r-lg">
            <blockquote className="text-indigo-200 italic text-xl leading-relaxed">
              "What began as custom web development quickly evolved when we discovered the transformative power of AI. We witnessed firsthand how intelligent automation could turn hours of manual work into minutes of insight."
            </blockquote>
          </div>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Our first major breakthrough came when we built an AI-driven analytics platform for a logistics company. What used to take a team of analysts a week to process now happened in real-time, revealing patterns that saved thousands in operational costs. That success story became our blueprint.
          </p>
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-indigo-300 mb-3">Innovation Focus</h4>
              <p className="text-zinc-400">Blending human creativity with machine intelligence to solve real-world problems.</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-indigo-300 mb-3">Client Success</h4>
              <p className="text-zinc-400">From startups scaling to enterprises modernizing, we've helped innovators bring ideas to life.</p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Today, Mastersolis stands at the forefront of the AI revolution, crafting solutions that blend human creativity with machine intelligence. We've helped startups scale, enterprises modernize, and innovators bring their wildest ideas to life. But our story isn't just about technology—it's about partnership.
          </p>
          <p className="text-zinc-300 leading-relaxed text-lg font-medium">
            Every project is a collaboration, every solution a shared victory. We don't just build software; we <span className="text-indigo-400">build futures</span>. And we're just getting started.
          </p>
        </div>
      </section>
    </main>
  );
}
