"use client";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { TiltCard } from "@/components/tilt-card";
import { motion } from "framer-motion";
import { Bot, Cog, LayoutDashboard, Palette, Rocket, Shield } from "lucide-react";

const services = [
  { title: "Product Engineering", icon: Rocket, desc: "Design to delivery — robust web apps, portals, and dashboards.", bullets: ["Next.js app router", "TypeScript APIs", "Testing & CI"] },
  { title: "AI Integrations", icon: Bot, desc: "Chat, summarize, classify, automate with LLMs.", bullets: ["RAG search", "Workflows & agents", "Observability"] },
  { title: "Design & UX", icon: Palette, desc: "Design systems, prototyping, premium UI.", bullets: ["Design tokens", "Components", "Motion & micro-interactions"] },
  { title: "Automation & Ops", icon: Cog, desc: "Internal tools and automations to save hours.", bullets: ["Back-office tools", "Data syncs", "Email triage"] },
  { title: "Analytics & Dashboards", icon: LayoutDashboard, desc: "KPIs, funnels, cohorts with clean UX.", bullets: ["ETL & modeling", "Charts & drilldowns", "Export & alerts"] },
  { title: "Security & Quality", icon: Shield, desc: "Hardening, perf, accessibility, SEO.", bullets: ["Auth & roles", "Audits", "Sentry/monitoring"] },
];

export default function ServicesPage() {
  return (
    <main>
      <Hero
        eyebrow="What we do"
        title="Services tailored for"
        highlight="growth and impact"
        subtitle="Strategy, design, engineering, and AI—delivered as a cohesive product."
        ctas={
          <>
            <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-lg bg-indigo-500 px-5 text-white shadow-sm transition-transform hover:translate-y-[-1px] hover:bg-indigo-400">Start a project</Link>
            <Link href="/projects" className="inline-flex h-11 items-center justify-center rounded-lg border border-white/15 px-5 hover:bg-white/5">See work</Link>
          </>
        }
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <TiltCard key={s.title}>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-indigo-300" />
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-2 text-zinc-400">{s.desc}</p>
              <ul className="mt-3 space-y-1 text-sm text-zinc-400">
                {s.bullets.map((b: string) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </motion.div>
          </TiltCard>
        ))}
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h3 className="text-xl font-semibold mb-4">How we work</h3>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { n: "01", h: "Discover", p: "Goals, constraints, success metrics." },
            { n: "02", h: "Design", p: "Flows, wireframes, visuals, motion." },
            { n: "03", h: "Build", p: "Sprints, reviews, QA, hardening." },
            { n: "04", h: "Launch", p: "Ship, measure, iterate." },
          ].map((st) => (
            <div key={st.n} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="text-sm text-zinc-400">{st.n}</div>
              <div className="font-medium mt-1">{st.h}</div>
              <div className="text-zinc-400 mt-1 text-sm">{st.p}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 grid gap-6 md:grid-cols-3">
        {[
          { plan: "Starter", price: "$", points: ["Landing or prototype", "2–3 weeks", "Fixed scope"] },
          { plan: "Growth", price: "$$", points: ["Core product + AI", "4–8 weeks", "Sprints"] },
          { plan: "Enterprise", price: "$$$", points: ["Complex systems", "Security & SSO", "Support"] },
        ].map((p) => (
          <div key={p.plan} className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-sm uppercase tracking-widest text-zinc-400">{p.plan}</div>
            <div className="mt-2 text-2xl font-semibold">{p.price}</div>
            <ul className="mt-3 space-y-1 text-sm text-zinc-400">
              {p.points.map((pt) => (
                <li key={pt}>• {pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
