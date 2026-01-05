import type { Metadata } from 'next';
import { EXPERIENCE, SEO } from '@/constants';

export const metadata: Metadata = {
  title: SEO.experience.title,
  description: SEO.experience.description,
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <h1 className="text-3xl font-semibold tracking-tight text-white">Experience</h1>
      <p className="mt-3 text-base text-white/75">
        Selected roles and collaborations that shaped my approach to building.
      </p>

      <div className="mt-8 grid gap-4">
        {EXPERIENCE.map((item) => (
          <div
            key={`${item.company}-${item.period}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <div className="text-base font-semibold text-white">{item.role}</div>
                <div className="text-sm text-white/70">{item.company}</div>
              </div>
              <div className="text-sm font-medium text-white/60">{item.period}</div>
            </div>
            <div className="mt-3 text-sm leading-relaxed text-white/70">
              {item.details}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
