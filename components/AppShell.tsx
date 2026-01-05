'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Briefcase,
  Code,
  FileText,
  Home,
  Image,
  Mail,
  Menu,
  Sparkles,
  User,
  X,
} from 'lucide-react';
import { useMemo, useState } from 'react';

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpenPath, setMobileOpenPath] = useState<string | null>(null);
  const mobileOpen = mobileOpenPath === pathname;
  const [inspireOpen, setInspireOpen] = useState(false);

  const navItems = useMemo<NavItem[]>(
    () => [
      { href: '/', label: 'Home', icon: Home },
      { href: '/about', label: 'About', icon: User },
      { href: '/projects', label: 'Projects', icon: Code },
      { href: '/gallery', label: 'Gallery', icon: Image },
      { href: '/experience', label: 'Experience', icon: Briefcase },
      { href: '/contact', label: 'Contact', icon: Mail },
      { href: '/resume', label: 'Resume', icon: FileText },
    ],
    [],
  );

  return (
    <div className="min-h-dvh bg-[radial-gradient(80rem_40rem_at_10%_-10%,rgba(99,102,241,0.18),transparent),radial-gradient(60rem_30rem_at_90%_0%,rgba(236,72,153,0.12),transparent)]">
      <div className="mx-auto flex min-h-dvh max-w-6xl">
        <aside className="hidden w-72 flex-col gap-6 border-r border-white/10 bg-black/20 p-6 backdrop-blur xl:flex">
          <div className="flex items-center justify-between">
            <Link href="/" className="group">
              <div className="text-sm font-medium text-white/70">Portfolio</div>
              <div className="text-xl font-semibold tracking-tight text-white group-hover:text-white/90">
                Ermia
              </div>
            </Link>
          </div>

          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
                    active
                      ? 'bg-white/10 text-white'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 ${active ? 'text-indigo-300' : 'text-white/60 group-hover:text-white/80'}`}
                  />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-semibold text-white">Available for work</div>
            <div className="mt-1 text-sm text-white/70">
              Product-minded developer & creative technologist.
            </div>
            <Link
              href="/contact"
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-indigo-500/90 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            >
              Let&apos;s collaborate
            </Link>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-white/10 bg-black/25 px-4 py-3 backdrop-blur xl:hidden">
            <button
              type="button"
              onClick={() => setMobileOpenPath(pathname)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
              Menu
            </button>

            <Link href="/" className="text-sm font-semibold text-white">
              Ermia
            </Link>

            <Link
              href="/contact"
              className="rounded-xl bg-indigo-500/90 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            >
              Contact
            </Link>
          </header>

          <main className="min-w-0 flex-1 px-4 py-8 xl:px-10 xl:py-12">
            {children}
          </main>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-50 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden={!mobileOpen}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/60"
              onClick={() => setMobileOpenPath(null)}
              aria-label="Close menu"
            />

            <motion.aside
              className="absolute left-0 top-0 h-full w-[min(22rem,85vw)] border-r border-white/10 bg-[#070712]/90 p-5 backdrop-blur"
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -24, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 420, damping: 36 }}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="group">
                  <div className="text-xs font-medium text-white/70">Portfolio</div>
                  <div className="text-lg font-semibold text-white group-hover:text-white/90">
                    Ermia
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileOpenPath(null)}
                  className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-1">
                {navItems.map((item) => {
                  const active = isActivePath(pathname, item.href);
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
                        active
                          ? 'bg-white/10 text-white'
                          : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <Icon
                        className={`h-4 w-4 ${
                          active
                            ? 'text-indigo-300'
                            : 'text-white/60 group-hover:text-white/80'
                        }`}
                      />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold text-white">
                  Build something bold.
                </div>
                <div className="mt-1 text-sm text-white/70">
                  Tell me what you&apos;re shipping and I&apos;ll help you launch.
                </div>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-indigo-500/90 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                >
                  Start a project
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setInspireOpen(true)}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-white/10 bg-indigo-500/90 px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_-20px_rgba(99,102,241,0.55)] transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        aria-haspopup="dialog"
        aria-expanded={inspireOpen}
      >
        <Sparkles className="h-4 w-4" />
        Inspire me
      </button>

      <AnimatePresence>
        {inspireOpen ? (
          <motion.div
            className="fixed inset-0 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/70"
              onClick={() => setInspireOpen(false)}
              aria-label="Close modal"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Inspiration modal"
              className="absolute left-1/2 top-1/2 w-[min(42rem,92vw)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#070712]/90 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur"
              initial={{ y: 14, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 14, scale: 0.98, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 420, damping: 36 }}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="text-sm font-semibold text-white">Inspiration</div>
                <button
                  type="button"
                  onClick={() => setInspireOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-6">
                <div className="h-52 rounded-2xl border border-white/10 bg-white/5" />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
