"use client";

import Link from "next/link";
import { Hero } from "@/components/hero";

export default function SpecPage() {
  return (
    <main>
      <Hero
        eyebrow="Project Brief"
        title="Mastersolis Infotech"
        highlight="Website Specification"
        subtitle="Scope, pages, AI features, and functional enhancements captured in one place."
        ctas={<Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-lg bg-indigo-500 px-5 text-white shadow-sm transition-transform hover:translate-y-[-1px] hover:bg-indigo-400">Discuss this scope</Link>}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20 grid gap-8">
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h2 className="text-xl font-semibold">Objective</h2>
          <p className="mt-2 text-zinc-300">
            Build a modern, dynamic, and responsive company website for Mastersolis Infotech using AI-assisted tools. The website should showcase services, achievements, and culture, while integrating automation and intelligent features.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h2 className="text-xl font-semibold">Core Pages and Features</h2>
          <div className="mt-4 space-y-6 text-zinc-300">
            <div>
              <h3 className="font-medium">1. Home Page</h3>
              <ul className="list-disc pl-5 mt-1 text-zinc-400">
                <li>Hero banner, tagline, and dynamic content (AI-generated)</li>
                <li>Testimonials and service highlights</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">2. About Page</h3>
              <ul className="list-disc pl-5 mt-1 text-zinc-400">
                <li>Mission, vision, and values</li>
                <li>AI-generated team introductions and company milestones</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">3. Services Page</h3>
              <ul className="list-disc pl-5 mt-1 text-zinc-400">
                <li>Service listing with AI-generated descriptions</li>
                <li>Optional AI chatbot for visitor engagement</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">4. Projects Page</h3>
              <ul className="list-disc pl-5 mt-1 text-zinc-400">
                <li>Portfolio of past projects with tag-based search and filtering</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">5. Contact Page</h3>
              <ul className="list-disc pl-5 mt-1 text-zinc-400">
                <li>Contact form storing user submissions in the database</li>
                <li>Automatic email responses using AI-generated messages</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">6. Admin Dashboard</h3>
              <ul className="list-disc pl-5 mt-1 text-zinc-400">
                <li>Admin login to manage site content</li>
                <li>Analytics dashboard with AI-based summaries</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h2 className="text-xl font-semibold">Functional Enhancements</h2>
          <div className="mt-4 space-y-6 text-zinc-300">
            <div>
              <h3 className="font-medium">a. Career Page</h3>
              <ul className="list-disc pl-5 mt-1 text-zinc-400">
                <li>Dynamic job listings (admin-posted)</li>
                <li>Candidate applications stored in database</li>
                <li>Automatic AI-generated email acknowledgments (e.g., “Thank you for applying to Mastersolis…”) </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">b. Blog / News Page</h3>
              <ul className="list-disc pl-5 mt-1 text-zinc-400">
                <li>Admin can add blog posts or company updates</li>
                <li>AI-generated blog summaries or SEO descriptions</li>
                <li>Optional “AI-summarize” button for short summaries of long posts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">c. Testimonials & Case Studies</h3>
              <ul className="list-disc pl-5 mt-1 text-zinc-400">
                <li>AI to generate or rephrase testimonials based on client data</li>
                <li>Case study upload with AI-assisted summary generation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">d. Resume Filtering Tool</h3>
              <p className="mt-1 text-zinc-400">
                Automatically extract candidate information (skills, experience, education) and format it into professional templates, ensuring uniformity for recruiters. Include AI-based resume suggestions, job-fit analysis, and ATS-friendly formatting.
              </p>
              <div className="mt-3">
                <div className="text-sm uppercase tracking-widest text-zinc-400">Key Features</div>
                <ul className="list-disc pl-5 mt-1 text-zinc-400">
                  <li>User-friendly resume creation (drag-and-drop or form-based)</li>
                  <li>Predefined professional templates with customization</li>
                  <li>Smart suggestions for skills/achievements by job role</li>
                  <li>Option to download or submit the resume to selected jobs</li>
                  <li>Integration with careers page and backend ATS</li>
                  <li>Bonus: AI resume scoring or job match percentage</li>
                </ul>
              </div>
              <div className="mt-3">
                <div className="text-sm uppercase tracking-widest text-zinc-400">Expected Outcome</div>
                <p className="mt-1 text-zinc-400">
                  A functional module that helps candidates build and apply with a polished resume — making recruitment smoother, faster, and more engaging.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <Link href="/" className="rounded-lg border border-white/10 px-3 py-1 hover:bg-white/5">Home</Link>
            <Link href="/about" className="rounded-lg border border-white/10 px-3 py-1 hover:bg-white/5">About</Link>
            <Link href="/services" className="rounded-lg border border-white/10 px-3 py-1 hover:bg-white/5">Services</Link>
            <Link href="/projects" className="rounded-lg border border-white/10 px-3 py-1 hover:bg-white/5">Projects</Link>
            <Link href="/careers" className="rounded-lg border border-white/10 px-3 py-1 hover:bg-white/5">Careers</Link>
            <Link href="/blog" className="rounded-lg border border-white/10 px-3 py-1 hover:bg-white/5">Blog</Link>
            <Link href="/contact" className="rounded-lg border border-white/10 px-3 py-1 hover:bg-white/5">Contact</Link>
            <Link href="/admin" className="rounded-lg border border-white/10 px-3 py-1 hover:bg-white/5">Admin</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
