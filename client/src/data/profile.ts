// Static profile content used by the header, hero and about sections.

export const profile = {
  name: 'Poojitha B',
  initials: 'PB',
  // Profile photo (DP). Put the image in client/public/ and set its path here, e.g. '/profile.jpg'.
  // Leave it empty to show the initials instead.
  photoUrl: '/profile.jpg',
  // Website copy of the resume (phone number removed). Lives in client/public/.
  resumeUrl: '/Poojitha-B-Resume.pdf',
  role: 'Software Developer',
  education: 'B.Tech CSE, RGUKT',
  openToWork: true,
};

export const navSections = ['About', 'Education', 'Projects', 'Certificates', 'Contact'];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', items: ['React', 'React Native', 'TypeScript', 'JavaScript', 'HTML & CSS'] },
  { title: 'Backend & data', items: ['Node.js', 'Express', 'Firebase', 'Firestore', 'SQL', 'Java'] },
  { title: 'Payments', items: ['Stripe', 'Razorpay'] },
];
