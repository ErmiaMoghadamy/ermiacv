import Link from 'next/link';
import type { Metadata } from 'next';
import { CONTACT, SEO } from '@/constants';

export const metadata: Metadata = {
  title: SEO.contact.title,
  description: SEO.contact.description,
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <h1 className="text-3xl font-semibold tracking-tight text-white">Contact</h1>
      <p className="mt-3 text-base text-white/75">
        Tell me about your project, timeline, and what success looks like.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold text-white">Email</div>
          <div className="mt-2 text-sm text-white/70">{CONTACT.email}</div>
          <div className="mt-4 text-xs text-white/60">
            I'm reaching for mails, feel free to reach out!
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold text-white">Social</div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href={CONTACT.socials.github}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            >
              GitHub
            </Link>
            <Link
              href={CONTACT.socials.linkedin}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            >
              LinkedIn
            </Link>
            <Link
              href={CONTACT.socials.x}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            >
              X
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm font-semibold text-white">Quick brief</div>
        <div className="mt-2 text-sm text-white/70">
          If you want a contact form, tell me what service you prefer (Resend,
          Formspree, or a custom API route).
        </div>
      </div>
    </div>
  );
}
