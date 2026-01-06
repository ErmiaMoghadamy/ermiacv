import Link from 'next/link';
import type { Metadata } from 'next';
import { PROJECTS, SEO } from '@/constants';

export const metadata: Metadata = {
  title: SEO.projects.title,
  description: SEO.projects.description,
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white">Projects</h1>
          <p className="mt-3 text-base text-white/75">
            A curated set of work—product Apps, creative experiments, and shipped
            systems.
          </p>
        </div>
        <Link
          href="/contact"
          className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 sm:inline-flex"
        >
          Start a project
        </Link>
      </div>

      <div className="mt-8 grid gap-4">
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/7"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-lg font-semibold text-white">{p.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">
                  {p.description}
                </div>
              </div>

              <Link
                href={p.href}
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-indigo-500/0 px-3 py-2 text-sm font-semibold text-indigo-200/90 transition hover:bg-indigo-500/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 sm:mt-0"
              >
                View
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
