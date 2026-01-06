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
    title: 'Focusizer App',
    description:
      'A creative focus app with built-in feature and society.',
    tags: ['Flutter', 'Riverpod', 'HiveDB'],
    href: '#',
  },
  {
    title: 'MathBox',
    description:
      'A game box designed to coach students on arithmetics priority.',
    tags: ['Arduino', 'Adafruit', 'C++'],
    href: '#',
  },
  // TODO: AI powered tech Comminity 
  // {
  //   title: 'Pulse Commerce',
  //   description:
  //     'E-commerce UI with robust product pages, SEO-friendly routing, and clean checkout flows.',
  //   tags: ['Performance', 'SEO', 'UI'],
  //   href: '#',
  // },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    role: 'Instructor',
    company: 'Iran TVET Organization',
    period: '2022 — Present',
    details:
      'Software development, programming & IT-Solutions instructor.',
  },
  {
    role: 'Full-stack Developer',
    company: 'Nabla Academy',
    period: '2022 — 2024',
    details:
      'A features LMS & student tracking platforms with online exams.',
  },
  {
    role: 'Full‑Stack Developer',
    company: 'Hadaf Clinic',
    period: '2021 — 2023',
    details:
      'Fully Featured Study Tracking system & social media design for Hadaf Clinic.',
  },
  {
    role: 'Freelance',
    company: 'Various Clients',
    period: '2021 — 2024',
    details:
      'Designed and built full-stack realtime applications for various people.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { title: '', description: '', tag: '', },
  { title: '', description: '', tag: '', },
  { title: '', description: '', tag: '', },
];

export const CONTACT = {
  email: 'ermia.arc@gmail.com',
  socials: {
    github: 'https://github.com/ErmiaMoghadamy',
    linkedin: 'https://linkedin.com/in/ermia-moghadamy',
    x: 'https://x.com/ermia_codev',
  },
};
