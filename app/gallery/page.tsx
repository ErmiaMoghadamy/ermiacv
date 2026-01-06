import type { Metadata } from 'next';
import { GALLERY_ITEMS, SEO } from '@/constants';

export const metadata: Metadata = {
  title: SEO.gallery.title,
  description: SEO.gallery.description,
};

export default function GalleryPage() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <h1 className="text-3xl font-semibold tracking-tight text-white">Gallery</h1>
      <p className="mt-3 text-base text-white/75">
        A showcase for events and projects.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY_ITEMS.map((item, i) => (
          <div
          key={`${i}`}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/7"
          >
            <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -left-24 -top-24 h-60 w-60 rounded-full bg-indigo-500/15 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-pink-500/10 blur-3xl" />
            </div>

            <div className="relative">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white/70">
                {item.tag}
              </div>

              <div className="mt-4 text-lg font-semibold text-white">
                {item.title}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">
                {item.description}
              </div>

              <div className="mt-5 h-28 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
