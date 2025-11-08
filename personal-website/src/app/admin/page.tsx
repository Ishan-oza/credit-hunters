"use client";
import { Hero } from "@/components/hero";

export default function AdminPage() {
  return (
    <main>
      <Hero
        eyebrow="Backstage"
        title="Admin Dashboard"
        highlight="Content, careers, and analytics"
        subtitle="Manage content, careers, and view analytics."
      />
    </main>
  );
}
