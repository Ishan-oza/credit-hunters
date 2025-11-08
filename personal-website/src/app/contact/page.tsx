"use client";
import { Hero } from "@/components/hero";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    const form = e.currentTarget as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setOk(res.ok);
      if (res.ok) form.reset();
    } catch (e) {
      setOk(false);
    } finally {
      setLoading(false);
    }
  }
  return (
    <main>
      <Hero
        eyebrow="Get in touch"
        title="Contact"
        highlight="Let’s build something great"
        subtitle="Tell us about your project—AI automation, web app, or product design."
      />
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 pb-24">
        <form className="grid gap-4" onSubmit={onSubmit}>
          <input name="name" required placeholder="Name" className="h-11 rounded-lg border border-white/15 bg-transparent px-4 outline-none focus:ring-2 focus:ring-indigo-500/40" />
          <input name="email" required type="email" placeholder="Email" className="h-11 rounded-lg border border-white/15 bg-transparent px-4 outline-none focus:ring-2 focus:ring-indigo-500/40" />
          <textarea name="message" required placeholder="Message" rows={5} className="rounded-lg border border-white/15 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500/40" />
          <button disabled={loading} className="inline-flex h-11 items-center justify-center rounded-lg bg-indigo-500 px-5 text-white shadow-sm transition-transform hover:translate-y-[-1px] hover:bg-indigo-400 disabled:opacity-60">
            {loading ? "Sending…" : "Send"}
          </button>
          {ok === true && <div className="text-sm text-emerald-400">Thanks! We received your message.</div>}
          {ok === false && <div className="text-sm text-red-400">Something went wrong. Please try again.</div>}
        </form>
      </section>
    </main>
  );
}
