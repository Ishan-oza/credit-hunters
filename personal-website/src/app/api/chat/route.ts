import { NextRequest } from "next/server";

// Simple server-side handler that calls Gemini's generateContent REST API
export async function POST(req: NextRequest) {
  try {
    const { prompt } = (await req.json()) as { prompt?: string };
    if (!prompt || typeof prompt !== "string") {
      return Response.json({ error: "Invalid prompt" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY || "";
    if (!apiKey) {
      return Response.json(
        { error: "Server is missing GEMINI_API_KEY. Set it in .env.local" },
        { status: 500 }
      );
    }

    const model = "gemini-1.0-pro";
    const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`;

    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: sanitizePrompt(prompt) }],
        },
      ],
      safetySettings: [
        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
      ],
      generationConfig: {
        temperature: 0.6,
        maxOutputTokens: 256,
      },
    } as const;

    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const text = await resp.text();
      console.error("Gemini API error:", resp.status, text);
      return Response.json({ error: `Upstream error: ${resp.status} ${text}` }, { status: 502 });
    }

    const data = (await resp.json()) as any;
    const text = extractText(data) || "I couldn't find an answer to that.";
    return Response.json({ text });
  } catch (err: any) {
    return Response.json({ error: "Unexpected error" }, { status: 500 });
  }
}

function sanitizePrompt(p: string) {
  // Keep it simple, ensure short and general Q&A
  const trimmed = p.trim().slice(0, 1000);
  return `Answer briefly and simply. Question: ${trimmed}`;
}

function extractText(resp: any): string | undefined {
  try {
    const candidates = resp?.candidates;
    if (!Array.isArray(candidates) || candidates.length === 0) return undefined;
    const parts = candidates[0]?.content?.parts;
    if (!Array.isArray(parts) || parts.length === 0) return undefined;
    const firstText = parts.find((pt: any) => typeof pt?.text === "string")?.text;
    return typeof firstText === "string" ? firstText : undefined;
  } catch {
    return undefined;
  }
}
