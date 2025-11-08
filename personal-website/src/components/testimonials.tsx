"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "Mastersolis delivered beyond expectations — elegant UI, fast performance, and thoughtful details throughout.",
    author: "Aarav Mehta",
    role: "Founder, Nova Commerce",
  },
  {
    quote:
      "Their AI integrations saved our team hours every week. The product feels premium and polished.",
    author: "Priya Sharma",
    role: "Head of Ops, Truline",
  },
  {
    quote:
      "From discovery to ship, the team was proactive and precise. We’d work with them again in a heartbeat.",
    author: "Rahul Verma",
    role: "CTO, Atlas Analytics",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const item = TESTIMONIALS[index];

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 overflow-hidden shine">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <blockquote className="text-xl leading-relaxed text-zinc-200">“{item.quote}”</blockquote>
            <div className="mt-4 text-sm text-zinc-400">
              <span className="text-zinc-300 font-medium">{item.author}</span> • {item.role}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
