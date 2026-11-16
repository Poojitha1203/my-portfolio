export type Education = {
  id: string;
  degree: string;
  field?: string;
  institution?: string;
  location?: string;
  startYear?: number; // leave out for a single-year result such as Class 10
  endYear: number;
  score?: string; // e.g. "8.3 CGPA"; leave out to hide
  note?: string;
};

// Newest first.
export const education: Education[] = [
  {
    id: 'rgukt-btech',
    institution: 'Rajiv Gandhi University of Knowledge Technologies',
    location: 'RK Valley, Kadapa',
    degree: 'B.Tech',
    field: 'Computer Science',
    startYear: 2021,
    endYear: 2025,
    score: '8.3 CGPA',
  },
  {
    id: 'rgukt-puc',
    institution: 'Rajiv Gandhi University of Knowledge Technologies',
    location: 'RK Valley, Kadapa',
    degree: 'PUC',
    field: 'Science',
    startYear: 2019,
    endYear: 2021,
    score: '9.3 CGPA',
  },
  {
    id: 'ssc-class-10',
    institution: 'Vivekananda Municipal High School (VMHS)',
    location: 'Madanapalle, Andhra Pradesh',
    degree: 'Class 10',
    field: 'SSC',
    endYear: 2019,
    score: '10 CGPA',
  },
];
