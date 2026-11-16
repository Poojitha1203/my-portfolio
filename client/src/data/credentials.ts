// Skill certifications from online platforms (separate from internship certificates).

export type Credential = {
  id: string;
  name: string;
  level: string;
  issuer: string;
  verified: boolean;
  url: string;
};

export const credentials: Credential[] = [
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
