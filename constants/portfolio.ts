export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export type TimelineItem = {
  role: string;
  company: string;
  period: string;
  details: string;
};

export type GalleryItem = {
  title: string;
  description: string;
  tag: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'Nebula Studio',
    description:
      'A creative landing system with animated sections, conversion-focused layout, and ultra-fast performance.',
    tags: ['Next.js', 'Design System', 'Motion'],
    href: '#',
  },
  {
    title: 'Atlas Dashboard',
    description:
      'A data-heavy dashboard with accessible components, smart filtering, and responsive layouts.',
    tags: ['React', 'UX', 'Accessibility'],
    href: '#',
  },
  {
    title: 'Pulse Commerce',
    description:
      'E-commerce UI with robust product pages, SEO-friendly routing, and clean checkout flows.',
    tags: ['Performance', 'SEO', 'UI'],
    href: '#',
  },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    role: 'Frontend Engineer',
    company: 'Studio / Agency',
    period: '2024 — Present',
    details:
      'Leading UI development for product marketing sites and web apps. Built component libraries and improved performance budgets.',
  },
  {
    role: 'Full‑Stack Developer',
    company: 'Startup',
    period: '2022 — 2024',
    details:
      'Shipped features end-to-end, owned UX improvements, and delivered maintainable systems with strong DX.',
  },
  {
    role: 'Freelance',
    company: 'Various Clients',
    period: '2020 — 2022',
    details:
      'Designed and built landing pages, portfolios, and dashboards with a focus on clarity, speed, and conversion.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: 'Aurora Cards',
    description: 'Soft gradients + glassmorphism UI cards.',
    tag: 'UI',
  },
  {
    title: 'Motion Studies',
    description: 'Micro-interactions and transitions that feel natural.',
    tag: 'Motion',
  },
  {
    title: 'Typography System',
    description: 'Type scales and rhythm for long-form readability.',
    tag: 'Design',
  },
  {
    title: 'Dashboard Blocks',
    description: 'Reusable blocks for dense product UIs.',
    tag: 'Product',
  },
  {
    title: 'Landing Page Concepts',
    description: 'Layouts focused on clarity and conversion.',
    tag: 'Marketing',
  },
  {
    title: 'Icon & Detail Pass',
    description: 'Small details that make interfaces feel premium.',
    tag: 'Polish',
  },
];

export const CONTACT = {
  email: 'ermia.arc@gmail.com',
  socials: {
    github: '#',
    linkedin: '#',
    x: '#',
  },
};
