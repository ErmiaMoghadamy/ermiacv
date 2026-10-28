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
    title: 'Zephrone Game Engine',
    description:
      'A modern scene-graph style game engine built from scratch in Zig: with GameType Injection.',
    tags: ['Zig', 'OpenGL', 'engine', 'DSL'],
    href: 'https://github.com/ErmiaMoghadamy/zephrone',
  },
  {
    title: 'HexOs Operating System',
    description:
      'A Very simple Implementation of MINIX using zig: customized bootloader, basic drivers,  .',
    tags: ['Zig', 'MINIX', 'OS'],
    href: 'https://github.com/ErmiaMoghadamy/hexhub',
  },
  {
    title: 'HexHub Hypervizer',
    description:
      'A Implementation of a Hypervisor with purpose of exploring world of computing.',
    tags: ['Rust', 'Hypervisor'],
    href: '#',
  },
  {
    title: 'Focusizer App (childhood project)',
    description:
      'A creative focus app with built-in feature and society.',
    tags: ['Flutter', 'Riverpod', 'HiveDB'],
    href: 'https://github.com/ErmiaMoghadamy/Focusizer',
  },
  {
    title: 'MathBox (childhood project)',
    description:
      'A physical game box designed to coach students on arithmetics priority.',
    tags: ['Arduino', 'Adafruit', 'C++'],
    href: '#',
  },

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
    role: 'Software Developer',
    company: 'FigAi | FigFit',
    period: '2026 — 2026 (2 months)',
    details:
      'Software development.',
  },
  {
    role: 'Software Engineer',
    company: 'Nabla Academy',
    period: '2022 — 2024',
    details:
      'A features LMS & student tracking platforms with online exams.',
  },
  {
    role: 'Software Engineer & Tech Support (part-time)',
    company: 'Hadaf Clinic',
    period: '2021 — 2023',
    details:
      'Fully featured automation of phsycology clinic .',
  },
  {
    role: 'Freelance',
    company: 'Various Clients',
    period: '2021 — 2024',
    details:
      'Designed and built realtime applications for various people including: Termeeh Botique, Nabla Academy, Gravity Academy, ....',
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
