export type ProfileLink = {
  id: string;
  kind: 'email' | 'linkedin' | 'github' | 'leetcode' | 'hackerrank';
  label: string;
  handle: string;
  url: string;
  note?: string;
};

export const links: ProfileLink[] = [
  {
    id: 'email',
    kind: 'email',
    label: 'Email',
    handle: 'bojanapupoojitha@gmail.com',
    url: 'mailto:bojanapupoojitha@gmail.com',
  },
  {
    id: 'linkedin',
    kind: 'linkedin',
    label: 'LinkedIn',
    handle: 'Poojitha B',
    url: 'https://www.linkedin.com/in/poojitha-b-15a2b2261/',
  },
  {
    id: 'github',
    kind: 'github',
    label: 'GitHub',
    handle: '@Poojitha1203',
    url: 'https://github.com/Poojitha1203',
  },
  {
    id: 'leetcode',
    kind: 'leetcode',
    label: 'LeetCode',
    handle: '@Poojitha_programmer',
    url: 'https://leetcode.com/u/Poojitha_programmer/',
  },
  {
    id: 'hackerrank',
    kind: 'hackerrank',
    label: 'HackerRank',
    handle: '@bojanapupoojitha',
    url: 'https://www.hackerrank.com/profile/bojanapupoojitha',
    note: 'Badges: Problem Solving · Java · SQL',
  },
];
