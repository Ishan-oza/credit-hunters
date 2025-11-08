"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Testimonials } from "@/components/testimonials";
import { ParallaxBlobs } from "@/components/parallax-blobs";
import { Marquee } from "@/components/marquee";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <ParallaxBlobs />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent" />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl font-semibold tracking-tight"
            >
              Building delightful digital products for
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-indigo-300 to-sky-400">
                Mastersolis Infotech
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-lg text-zinc-600 dark:text-zinc-300 max-w-prose"
            >
              We craft modern web experiences, powerful backends, and intelligent automations that grow your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-indigo-500 px-5 text-white shadow-sm transition-transform hover:translate-y-[-1px] hover:bg-indigo-400"
              >
                Explore Services
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-white/15 px-5 hover:bg-white/5"
              >
                View Projects
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-1 shadow-2xl">
              <div className="h-full w-full rounded-xl bg-black/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs uppercase tracking-widest text-zinc-400">AI-powered experiences</div>
                  <div className="mt-2 text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-sky-300">
                    Fast. Elegant. Intelligent.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center text-sm uppercase tracking-widest text-zinc-400 mb-4">Trusted by teams</div>
        <Marquee
          items={["Nova", "Truline", "Atlas", "Aster", "Zephyr"].map((name) => (
            <div key={name} className="rounded-xl border border-white/10 px-4 py-2 bg-white/5">{name}</div>
          ))}
        />
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[ 
            { h: "Design to Delivery", p: "From discovery and UX to production-grade apps — one tight loop." },
            { h: "AI as a Co-pilot", p: "Integrations that summarize, generate, automate, and scale workflows." },
            { h: "Performance & SEO", p: "Lighthouse-friendly, accessible, and fast by default." },
          ].map((f) => (
            <motion.div
              key={f.h}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
            >
              <div className="text-sm uppercase tracking-widest text-zinc-400">Feature</div>
              <h3 className="mt-2 text-lg font-semibold">{f.h}</h3>
              <p className="mt-2 text-zinc-400">{f.p}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Call to action */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-2xl border border-white/10 p-8 bg-gradient-to-r from-indigo-600/20 to-sky-600/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Ready to build?</h3>
              <p className="text-zinc-400">Tell us about your goals — we’ll propose a crisp plan and timeline.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-lg bg-indigo-500 px-5 text-white shadow-sm transition-transform hover:translate-y-[-1px] hover:bg-indigo-400">Start a project</Link>
              <Link href="/services" className="inline-flex h-11 items-center justify-center rounded-lg border border-white/15 px-5 hover:bg-white/5">See our services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
