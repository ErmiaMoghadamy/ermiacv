import Link from 'next/link';
import type { Metadata } from 'next';
import GeometricAvatar from '@/components/GeometricAvatar';
import { COPY, PROFILE, SEO } from '@/constants';

export const metadata: Metadata = {
  title: SEO.about.title,
  description: SEO.about.description,
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white">About</h1>
          <p className="mt-3 text-base leading-relaxed text-white/75">
            {COPY.about.intro}
          </p>
        </div>

        <div className="mx-auto w-fit lg:mx-0">
          <GeometricAvatar
            src={PROFILE.imageSrc}
            alt={PROFILE.imageAlt}
            size={200}
          />
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold text-white">What I do 🚀</div>
          <div className="mt-2 text-sm leading-relaxed text-white/70">
            I design & build systems, ship product, and create real time apps
            that convert. I love clean components and strong information
            hierarchy.
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold text-white">How I work 🧠</div>
          <div className="mt-2 text-sm leading-relaxed text-white/70">
            I underestand product, manage time, and focus on architecture.
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold text-white">Stack ⚙️</div>
          <div className="mt-2 text-sm text-white/70">
            Next.js, React, TypeScript, Tailwind, Flutter, Go. <br />
            Django, PyTorch, Tensorflow
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold text-white">Strength 💪</div>
          <div className="mt-2 text-sm text-white/70">
            I build systems, ship product, AI workflows, ML Models.
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold text-white">Vibe 🎧</div>
          <div className="mt-2 text-sm text-white/70">
            Calm, focused, and obsessed with details.
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7">
        <div className="text-sm font-semibold text-white">Currently 🌙</div>
        <div className="mt-2 text-sm leading-relaxed text-white/70">
          Open to freelance and part-time opportunities. If you&apos;re building
          something ambitious, I&apos;d love to help you ship it. <br />
          CS Researches relevant to the mentioned interests are welcome. 
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-500/90 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            Reach out
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          >
            See projects
          </Link>
        </div>
      </div>
    </div>
  );
}
