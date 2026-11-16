export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issuerType: string;
  startDate: string; // ISO date (YYYY-MM-DD)
  endDate: string; // ISO date (YYYY-MM-DD)
  issuedOn: string; // ISO date (YYYY-MM-DD)
  summary: string;
  skills: string[];
  documentUrl: string;
  previewUrl: string;
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
];
