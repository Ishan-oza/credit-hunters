"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-white/10 bg-background/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group inline-flex items-center gap-2">
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-lg font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-indigo-300 to-sky-400"
            >
              Mastersolis Infotech
            </motion.span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
            <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
            <Link href="/resume" className="hover:text-foreground transition-colors">Resume</Link>
            <Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            <Link href="/admin" className="hover:text-foreground transition-colors">Admin</Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
