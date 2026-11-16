export type Education = {
  id: string;
  institution: string;
  location: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  note?: string;
};

export const education: Education[] = [
  {
    id: 'rgukt-rk-valley',
    institution: 'Rajiv Gandhi University of Knowledge Technologies',
    location: 'RK Valley, Kadapa',
    degree: 'B.Tech',
    field: 'Computer Science',
    startYear: 2019,
    endYear: 2025,
    note: 'Six-year integrated programme (PUC + B.Tech).',
  },
];
