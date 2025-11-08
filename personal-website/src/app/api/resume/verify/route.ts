import { NextRequest, NextResponse } from "next/server";
export const runtime = "nodejs";
import { requiredSkills } from "@/config/skills";

// Lazy import to keep edge compatibility concerns minimal; route runs on node.
let pdfParse: any | null = null;
async function getPdfParse() {
  if (!pdfParse) {
    const mod = await import("pdf-parse");
    pdfParse = (mod as any).default || (mod as any);
  }
  return pdfParse;
}

function normalize(text: string) {
  return text.toLowerCase();
}

function computeMatch(text: string, skills: string[]) {
  const t = normalize(text);
  const matched: string[] = [];
  const missing: string[] = [];
  for (const s of skills) {
    const token = s.toLowerCase();
    if (t.includes(token)) matched.push(s);
    else missing.push(s);
  }
  const score = skills.length ? matched.length / skills.length : 0;
  return { score, matched, missing };
}

async function aiSummarize(resumeText: string, matched: string[], missing: string[]) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return undefined;
  const prompt = `You are evaluating a developer resume.\nMatched skills: ${matched.join(", ")}\nMissing skills: ${missing.join(", ")}\n\nResume text (truncated to 4000 chars):\n${resumeText.slice(0, 4000)}\n\nProvide a short assessment (3-5 sentences) focusing on strengths, gaps, and suggestions. Avoid repeating the lists verbatim.`;
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a concise technical recruiter assistant." },
          { role: "user", content: prompt },
        ],
        temperature: 0.2,
        max_tokens: 250,
      }),
    });
    if (!res.ok) return undefined;
    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content;
    if (typeof content === "string") return content;
    return undefined;
  } catch {
    return undefined;
  }
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get("file");
    if (!file || !(file instanceof Blob)) {
      return NextResponse.json({ error: "Missing file" }, { status: 400 });
    }
    if (file.type !== "application/pdf") {
      return NextResponse.json({ error: "Only PDF is supported" }, { status: 400 });
    }
    const ab = await file.arrayBuffer();
    if (!ab || ab.byteLength === 0) {
      return NextResponse.json({ error: "Uploaded file is empty" }, { status: 400 });
    }
    // Prefer Node Buffer for pdf-parse; fall back to alternative shapes if needed
    const buf = Buffer.from(ab);

    const pdf = await getPdfParse();
    let parsed: any;
    try {
      parsed = await pdf(buf);
    } catch (err) {
      // Retry with a shape some environments prefer
      try {
        parsed = await pdf(new Uint8Array(ab));
      } catch (err2) {
        throw err2 || err;
      }
    }
    const text: string = String(parsed?.text || "");

    const { score, matched, missing } = computeMatch(text, requiredSkills);
    const aiSummary = await aiSummarize(text, matched, missing);

    return NextResponse.json({
      score,
      matchedSkills: matched,
      missingSkills: missing,
      aiSummary,
    });
  } catch (e: any) {
    // TEMP: for debugging
    console.error('resume/verify error:', e);
    const message = typeof e?.message === "string" ? e.message : "Failed to verify";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
