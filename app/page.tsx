import GeometricAvatar from '@/components/GeometricAvatar';
import { PROFILE, SITE } from '@/constants';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className='order-last lg:order-first'>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white/75">
              AI<span className='hidden lg:inline'>/&nbsp;  ML</span> Engineer
              <span className="h-1 w-1 rounded-full bg-white/40" />
              Data Scientist
              <span className="h-1 w-1 rounded-full bg-white/40" />
              Fullstack<span className='hidden lg:inline'>+ &nbsp; DevOps</span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {SITE.name}
              <span className="block bg-gradient-to-r from-indigo-300 via-fuchsia-200 to-pink-200 bg-clip-text text-transparent">
                {SITE.tagline}
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
              {SITE.DESCRIPTION}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-500/90 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="mx-auto w-fit lg:mx-0">
            <GeometricAvatar
              src={PROFILE.imageSrc}
              alt={PROFILE.imageAlt}
              size={200}
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm font-semibold text-white">Reseach Interest</div>
            <div className="mt-2 text-sm text-white/70">
              Graphics Programming, Platform architechture, Analog Computing. 
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm font-semibold text-white">Stack</div>
            <div className="mt-2 text-sm text-white/70">
              Typescript, Python, Go, Flutter. <br />
              FT, PyTorch, ...
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm font-semibold text-white">Education</div>
            <div className="mt-2 text-sm text-white/70">
              Currently studying at SUT.
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <div className="text-sm font-semibold text-white">Featured work</div>
          <div className="mt-2 text-sm text-white/70">
            See selected projects and case studies.
          </div>
          <a
            href="/projects"
            className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          >
            Browse projects
          </a>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <div className="text-sm font-semibold text-white">Gallery</div>
          <div className="mt-2 text-sm text-white/70">
            UI explorations, motion studies, and visual experiments.
          </div>
          <a
            href="/gallery"
            className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          >
            Open gallery
          </a>
        </div>
      </div>
    </div>
  );
}