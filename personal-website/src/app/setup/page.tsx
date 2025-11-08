"use client";

import { useState } from "react";
import Link from "next/link";

export default function SetupAdminPage() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    setErr(null);

    const form = e.currentTarget as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    const token = (form.elements.namedItem("token") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/setup/create-admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-setup-token": token,
        },
        body: JSON.stringify({ email, password, name }),
      });
      const json = await res.json();
      if (!res.ok || json.ok === false) {
        throw new Error(json.error || "Failed to create admin");
      }
      setMsg(json.message || "Admin user created!");
      form.reset();
    } catch (e: any) {
      setErr(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 pt-24 pb-24">
      <h1 className="text-2xl font-semibold">Initial Setup</h1>
      <p className="text-zinc-400 mt-1 text-sm">Create the first admin account. This form calls the secure setup API.</p>

      <div className="rounded-2xl border border-white/10 p-6 bg-white/5 mt-6">
        <form onSubmit={onSubmit} className="grid gap-3">
          <input name="name" placeholder="Name (optional)" className="h-11 rounded-lg border border-white/15 bg-transparent px-4 outline-none focus:ring-2 focus:ring-indigo-500/40" />
          <input name="email" type="email" required placeholder="Admin email" className="h-11 rounded-lg border border-white/15 bg-transparent px-4 outline-none focus:ring-2 focus:ring-indigo-500/40" />
          <input name="password" type="password" required placeholder="Admin password" className="h-11 rounded-lg border border-white/15 bg-transparent px-4 outline-none focus:ring-2 focus:ring-indigo-500/40" />
          <input name="token" type="password" required placeholder="Setup token (from .env SETUP_TOKEN)" className="h-11 rounded-lg border border-white/15 bg-transparent px-4 outline-none focus:ring-2 focus:ring-indigo-500/40" />
          <button disabled={loading} className="inline-flex h-11 items-center justify-center rounded-lg bg-indigo-500 px-5 text-white shadow-sm transition-transform hover:translate-y-[-1px] hover:bg-indigo-400 disabled:opacity-60">
            {loading ? "Creating…" : "Create admin"}
          </button>
        </form>
        {msg && <div className="mt-3 text-sm text-emerald-400">{msg}</div>}
        {err && <div className="mt-3 text-sm text-red-400">{err}</div>}
      </div>

      <div className="mt-6 text-sm text-zinc-400">
        Already have an account? <Link href="/admin/login" className="underline">Go to Admin Login</Link>
      </div>
    </main>
  );
}
