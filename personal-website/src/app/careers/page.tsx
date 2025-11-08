"use client";
import Link from "next/link";
import { Hero } from "@/components/hero";

const jobs = [
  { title: "Frontend Engineer (Next.js)", location: "Remote", type: "Full-time" },
  { title: "Backend Engineer (Node/AI)", location: "Remote", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <main>
      <Hero
        eyebrow="Join us"
        title="Careers"
        highlight="Build the future with us"
        subtitle="We’re assembling a product-minded, AI-curious team."
        ctas={<Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-lg bg-indigo-500 px-5 text-white shadow-sm transition-transform hover:translate-y-[-1px] hover:bg-indigo-400">Say hello</Link>}
      />
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20 grid gap-4">
        {jobs.map((j) => (
          <div key={j.title} className="rounded-2xl border border-white/10 p-6 bg-white/5 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{j.title}</h3>
              <p className="text-sm text-zinc-400 mt-1">{j.location} • {j.type}</p>
            </div>
            <Link href="#apply" className="inline-flex h-10 items-center justify-center rounded-lg border border-white/15 px-4 hover:bg-white/5">Apply</Link>
          </div>
        ))}
      </section>
    </main>
  );
}
