"use client";

import { useMemo } from "react";
import Link from "next/link";

export default function EnvSetupPage() {
  const template = useMemo(
    () => `# --- Core ---
MONGODB_URI=
MONGODB_DB=mastersolis

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
SETUP_TOKEN=

# --- Email (optional for local) ---
RESEND_API_KEY=
MAIL_FROM=Mastersolis <no-reply@localhost>
NOTIFY_TO=

# --- Uploads (later) ---
UPLOADTHING_APP_ID=
UPLOADTHING_SECRET=
`,
    []
  );

  function downloadFile() {
    const blob = new Blob([template], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = ".env.local";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-24 pb-24">
      <h1 className="text-2xl font-semibold">Environment Setup</h1>
      <p className="text-zinc-400 mt-1 text-sm">
        Create a <code>.env.local</code> file in the project root with the following values. Then restart the dev server.
      </p>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 mt-6">
        <div className="flex items-center justify-between">
          <div className="text-sm text-zinc-400">Copy & paste into <code>.env.local</code></div>
          <button onClick={downloadFile} className="inline-flex h-9 items-center justify-center rounded-lg bg-indigo-500 px-4 text-white hover:bg-indigo-400">
            Download .env.local
          </button>
        </div>
        <pre className="mt-3 whitespace-pre-wrap break-all text-sm text-zinc-200">{template}</pre>
      </div>

      <section className="mt-6 grid gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="font-medium">Steps</div>
          <ol className="mt-2 list-decimal pl-5 text-sm text-zinc-400 space-y-1">
            <li>Click "Download .env.local" or copy the template above.</li>
            <li>Place the file in your project root (same folder as package.json).</li>
            <li>Fill values for <code>MONGODB_URI</code>, <code>NEXTAUTH_SECRET</code> (random string), and <code>SETUP_TOKEN</code> (choose any long random string).</li>
            <li>Restart dev server: <code>npm run dev</code>.</li>
            <li>Go to <Link href="/setup" className="underline">/setup</Link> to create your admin account.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
