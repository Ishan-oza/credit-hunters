"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div key={idx}>
            <button
              className="w-full text-left px-6 py-4 hover:bg-white/5"
              onClick={() => setOpen(isOpen ? null : idx)}
            >
              <div className="font-medium">{it.q}</div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="px-6 pb-4 text-zinc-400"
                >
                  {it.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
