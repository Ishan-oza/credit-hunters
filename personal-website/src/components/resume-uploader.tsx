"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type VerifyResult = {
  score: number;
  matchedSkills: string[];
  missingSkills: string[];
  aiSummary?: string;
};

export function ResumeUploader() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<VerifyResult | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const ringGlow = useMemo(
    () =>
      dragActive
        ? "shadow-[0_0_0_3px_rgba(99,102,241,0.5),0_0_40px_rgba(99,102,241,0.35)]"
        : "shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
    [dragActive]
  );

  const onFileSelected = useCallback(async (file: File) => {
    setError(null);
    setResult(null);
    setUploading(true);
    setFileName(file.name);
    try {
      const form = new FormData();
      form.set("file", file);
      const res = await fetch("/api/resume/verify", { method: "POST", body: form });
      if (!res.ok) throw new Error(await res.text());
      const data: VerifyResult = await res.json();
      setResult(data);
    } catch (e: any) {
      setError(e?.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      const file = e.dataTransfer.files?.[0];
      if (file) onFileSelected(file);
    },
    [onFileSelected]
  );

  return (
    <div className="space-y-6">
      <div
        onDragEnter={() => setDragActive(true)}
        onDragOver={(e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = "copy";
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        className={`relative rounded-2xl border border-white/10 bg-white/5 p-8 transition-all ${ringGlow}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col items-center text-center gap-3"
        >
          <div className="text-sm text-zinc-400">
            Drag & drop your resume PDF here
          </div>
          <div className="text-xs text-zinc-500">or</div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => inputRef.current?.click()}
            className="inline-flex h-10 items-center justify-center rounded-lg bg-indigo-500 px-4 text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
          >
            {uploading ? "Uploading…" : "Select PDF"}
          </motion.button>
          <input
            ref={inputRef}
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onFileSelected(f);
            }}
          />
          <AnimatePresence initial={false}>
            {fileName && (
              <motion.div
                key="file"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="text-xs text-zinc-500"
              >
                Selected: {fileName}
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence initial={false}>
            {error && (
              <motion.div
                key="err"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="text-sm text-rose-400"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        {dragActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-inset ring-indigo-400/40"
          />
        )}
      </div>

      <AnimatePresence initial={false}>
        {result && (
          <motion.div
            key="res"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm text-zinc-400">Verification Result</div>
              <div className="text-sm font-medium text-zinc-200">Score: {Math.round(result.score * 100)}%</div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div>
                <div className="text-xs uppercase tracking-wide text-zinc-500">Matched Skills</div>
                <ul className="mt-1 text-sm text-emerald-300 list-disc list-inside">
                  {result.matchedSkills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-zinc-500">Missing Skills</div>
                <ul className="mt-1 text-sm text-rose-300 list-disc list-inside">
                  {result.missingSkills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
            {result.aiSummary && (
              <div className="mt-4">
                <div className="text-xs uppercase tracking-wide text-zinc-500">AI Notes</div>
                <p className="mt-1 text-sm text-zinc-300 whitespace-pre-wrap">{result.aiSummary}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
