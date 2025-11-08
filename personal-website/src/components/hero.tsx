"use client";

import { motion } from "framer-motion";

export function Hero({
  eyebrow,
  title,
  highlight,
  subtitle,
  ctas,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  ctas?: React.ReactNode;
}) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-14">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent" />
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="space-y-6">
          {eyebrow ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-widest text-zinc-500"
            >
              {eyebrow}
            </motion.div>
          ) : null}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-semibold tracking-tight"
          >
            {title}
            {highlight ? (
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-indigo-300 to-sky-400">
                {highlight}
              </span>
            ) : null}
          </motion.h1>
          {subtitle ? (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-lg text-zinc-600 dark:text-zinc-300 max-w-prose"
            >
              {subtitle}
            </motion.p>
          ) : null}
          {ctas ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              {ctas}
            </motion.div>
          ) : null}
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
                <div className="text-xs uppercase tracking-widest text-zinc-400">Premium Interface</div>
                <div className="mt-2 text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-sky-300">
                  Motion. Polish. Performance.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
