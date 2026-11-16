export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issuerType: string;
  startDate: string; // ISO date (YYYY-MM-DD)
  endDate?: string; // ISO date (YYYY-MM-DD); leave out if there is no fixed end date
  durationNote?: string; // shown instead of a calculated duration when there is no end date
  issuedOn?: string; // ISO date (YYYY-MM-DD); only when a certificate was issued
  summary: string;
  skills: string[];
  documentUrl?: string; // leave out to show the card without a document
  previewUrl?: string;
  accentColors?: [string, string]; // gradient for the issuer tile
};

export const certificates: Certificate[] = [
  {
    id: 'hitloop-internship',
    title: 'Software Development Intern',
    issuer: 'HITLOOP',
    issuerType: 'Startup',
    startDate: '2024-07-22',
    endDate: '2024-09-30',
    issuedOn: '2024-10-03',
    summary:
      'Completed an internship at HITLOOP, working across full stack web development and mobile application development.',
    skills: ['Full Stack Web Development', 'Mobile App Development'],
    documentUrl: '/certificates/hitloop-internship.pdf',
    previewUrl: '/certificates/hitloop-internship.png',
  },
  {
    id: 'zummit-internship',
    title: 'Junior Web Developer Intern',
    issuer: 'Zummit Infolabs',
    issuerType: 'Remote',
    startDate: '2024-05-20',
    durationNote: 'Short-term',
    summary:
      'Selected for a remote internship after a phone interview, and briefly worked on web design and development tasks.',
    skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    accentColors: ['#e8402c', '#f5a524'],
  },
];
