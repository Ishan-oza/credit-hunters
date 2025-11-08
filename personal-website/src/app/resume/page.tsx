import { ResumeUploader } from "@/components/resume-uploader";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-24 pb-24">
      <h1 className="text-2xl font-semibold">Resume Verification</h1>
      <p className="text-zinc-400 mt-1 text-sm">
        Upload your resume PDF to verify it against the required skills.
      </p>
      <div className="mt-6">
        <ResumeUploader />
      </div>
    </main>
  );
}
