"use client";

import { motion } from "framer-motion";

export function Marquee({ items }: { items: React.ReactNode[] }) {
  const row = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden py-6">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: [0, -600] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {row.map((item, i) => (
          <div key={i} className="shrink-0 opacity-80 hover:opacity-100 transition-opacity">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
