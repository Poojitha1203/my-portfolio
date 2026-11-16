// Static profile content used by the header, hero and about sections.

export const profile = {
  name: 'Poojitha B',
  initials: 'PB',
  role: 'Software Developer',
  education: 'B.Tech CSE, RGUKT',
  openToWork: true,
};

export const navSections = ['About', 'Education', 'Projects', 'Certificates', 'Contact'];

export const heroTags = ['React', 'TypeScript', 'Node.js', 'Firebase', 'React Native', 'Stripe'];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', items: ['React', 'React Native', 'TypeScript', 'JavaScript', 'HTML & CSS'] },
  { title: 'Backend & data', items: ['Node.js', 'Express', 'Firebase', 'Firestore', 'SQL', 'Java'] },
  { title: 'Payments', items: ['Stripe', 'Razorpay'] },
];
