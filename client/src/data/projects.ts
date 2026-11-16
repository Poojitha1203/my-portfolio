export type ProjectLink = { label: string; url: string };

export type Project = {
  id: string;
  name: string;
  context: string; 
  tagline: string;
  description: string;
  role?: string;
  featureGroups: { title: string; items: string[] }[];
  stack: string[];
  isPrivate: boolean;
  privateNote?: string;
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: 'everest-canteen',
    name: 'Everest Canteen',
    context: 'Work project · Internal tool',
    tagline: 'Online ordering and payments for our office canteen.',
    description:
      'A cross-platform app (Android, iOS and web) that lets office staff browse the canteen menu, pay online and track orders live, while the chef manages the menu and handles orders. Built by a team using spec-driven development.',
    role: 'Worked across the client and backend: features, Firebase integration and Razorpay payments.',
    featureGroups: [
      {
        title: 'For staff',
        items: [
          'Menu with search and live availability',
          'Razorpay checkout with clear success and failure states',
          'Live order tracking: ongoing, delivered, cancelled',
          'Automatic refunds via Razorpay, credited in 2–7 days',
        ],
      },
      {
        title: 'For the chef',
        items: [
          'Accept, cancel and deliver orders',
          'Manage menu items, images and availability',
          'Push alerts for every new paid order',
          'Open or pause ordering when the canteen is closed',
        ],
      },
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Firebase Cloud Functions', 'Firestore', 'Firebase Auth', 'Razorpay'],
    isPrivate: true,
    privateNote: 'Code is private (company internal project).',
  },
  {
    id: 'portfolio',
    name: 'Personal Portfolio',
    context: 'Personal project · Open source',
    tagline: 'This website: my work, experience and certifications in one place.',
    description:
      'A fast, responsive single-page site built with React and TypeScript. Content is kept in typed data files and served from Firestore, and the site is deployed on Firebase Hosting.',
    featureGroups: [
      {
        title: 'Features',
        items: [
          'Responsive layout for phone, tablet and desktop',
          'Internship timeline with certificate previews',
          'Verified certification cards with expiry dates',
          'Resume download and contact links',
        ],
      },
      {
        title: 'How it’s built',
        items: [
          'React 19, TypeScript and Vite',
          'One CSS file per component, shared design tokens',
          'Firestore with built-in data as a fallback',
          'One-command deploy to Firebase Hosting',
        ],
      },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Firebase', 'Firestore', 'Firebase Hosting'],
    isPrivate: false,
    links: [
      { label: 'Live site', url: 'https://poojitha-portfolio.web.app' },
      { label: 'Source code', url: 'https://github.com/Poojitha1203/my-portfolio' },
    ],
  },
];
