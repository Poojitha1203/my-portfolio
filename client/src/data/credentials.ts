// Skill certifications from online platforms (separate from internship certificates).

export type Credential = {
  id: string;
  name: string;
  level: string;
  issuer: string;
  verified: boolean;
  url: string;
  issuedOn?: string; // ISO date (YYYY-MM-DD)
  expiresOn?: string; // ISO date (YYYY-MM-DD); leave out if it never expires
};

export const credentials: Credential[] = [
  {
    id: 'openai-codex-solutions-practitioner',
    name: 'Codex Solutions Practitioner',
    level: 'Partner Network',
    issuer: 'OpenAI',
    verified: true,
    url: 'https://oaipartnernetwork.credential.net/3aece5d7-d724-4672-bd79-30fdd45f9554',
    issuedOn: '2026-10-21',
    expiresOn: '2027-10-21',
  },
  {
    id: 'stripe-professional-billing-developer',
    name: 'Professional Billing Developer',
    level: 'Billing',
    issuer: 'Stripe',
    verified: true,
    url: 'https://stripecertifications.credential.net/80c09265-9021-4456-856b-a762e858b11d',
    issuedOn: '2026-05-25',
  },
  {
    id: 'stripe-professional-payments-developer',
    name: 'Professional Payments Developer',
    level: 'Payments',
    issuer: 'Stripe',
    verified: true,
    url: 'https://stripecertifications.credential.net/bbf5c83d-8f6f-4301-9390-1c9638e088b0',
    issuedOn: '2026-05-11',
  },
  {
    id: 'stripe-associate-developer',
    name: 'Associate Developer',
    level: 'Payments',
    issuer: 'Stripe',
    verified: true,
    url: 'https://stripecertifications.credential.net/bff31926-5438-4b82-904a-7ce260b7040f',
    issuedOn: '2026-04-13',
  },
  {
    id: 'hackerrank-javascript-basic',
    name: 'JavaScript',
    level: 'Basic',
    issuer: 'HackerRank',
    verified: true,
    url: 'https://www.hackerrank.com/profile/bojanapupoojitha',
  },
  {
    id: 'hackerrank-sql-intermediate',
    name: 'SQL',
    level: 'Intermediate',
    issuer: 'HackerRank',
    verified: true,
    url: 'https://www.hackerrank.com/profile/bojanapupoojitha',
  },
];
