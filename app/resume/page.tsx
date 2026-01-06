import Link from 'next/link';
import type { Metadata } from 'next';
import { SEO } from '@/constants';

export const metadata: Metadata = {
  title: SEO.resume.title,
  description: SEO.resume.description,
};

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <h1 className="text-3xl font-semibold tracking-tight text-white">Resume</h1>
      <p className="mt-3 text-base text-white/75">
        The resume pdf file is available for download.
      </p>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm font-semibold text-white">Download</div>
        <div className="mt-2 text-sm text-white/70">
          Last updated: <time dateTime="2026-01-06">Jan 6, 2025</time>.
        </div>
        <Link
          target='_blank'
          href="/resume.pdf"
          className="mt-5 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
        >
          Download CV
        </Link>
      </div>
    </div>
  );
}
