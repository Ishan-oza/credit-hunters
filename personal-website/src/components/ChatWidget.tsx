"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm your site assistant. Ask me simple questions about this site, services, or general info.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault();
    if (!canSend) return;

    const userText = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userText }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userText }),
      });
      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }
      const data = (await res.json()) as { text?: string; error?: string };
      const answer = data.text ?? data.error ?? "Sorry, I couldn't process that.";
      setMessages((prev) => [...prev, { role: "assistant", content: answer }]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "There was an error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      return;
    }
  }

  return (
    <>
      <button
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        style={{
          position: "fixed",
          right: 16,
          bottom: 16,
          zIndex: 1000,
          width: 56,
          height: 56,
          borderRadius: 28,
          border: "none",
          background: "#111827",
          color: "#fff",
          boxShadow: "0 6px 24px rgba(0,0,0,0.2)",
          cursor: "pointer",
        }}
      >
        {open ? "✕" : "💬"}
      </button>

      {open && (
        <div
          ref={panelRef}
          style={{
            position: "fixed",
            right: 16,
            bottom: 80,
            width: 340,
            maxWidth: "calc(100vw - 32px)",
            height: 420,
            maxHeight: "calc(100vh - 120px)",
            background: "var(--color-elevated-bg, #ffffff)",
            color: "inherit",
            borderRadius: 12,
            boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              padding: "10px 12px",
              background: "#111827",
              color: "white",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Assistant</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{
                background: "transparent",
                color: "white",
                border: "none",
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>

          <div
            style={{
              flex: 1,
              padding: 12,
              overflowY: "auto",
              background: "#f9fafb",
            }}
          >
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: 10,
                  display: "flex",
                  justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "8px 10px",
                    borderRadius: 10,
                    background: m.role === "user" ? "#111827" : "white",
                    color: m.role === "user" ? "white" : "#111827",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    fontSize: 14,
                    lineHeight: 1.35,
                  }}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ fontSize: 12, color: "#6b7280" }}>Thinking…</div>
            )}
          </div>

          <form onSubmit={sendMessage} style={{ padding: 10, background: "white", borderTop: "1px solid #e5e7eb" }}>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask something simple..."
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                disabled={!canSend}
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "none",
                  background: canSend ? "#111827" : "#9ca3af",
                  color: "white",
                  cursor: canSend ? "pointer" : "not-allowed",
                }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
