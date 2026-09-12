/**
 * Structured resume content. Pasting in a real resume is a data edit only —
 * Resume.jsx and Skills.jsx branch on empty arrays to render placeholder
 * notices instead of blank sections.
 */

export const resumeData = {
  name: 'PENDING',
  title: 'PENDING',
  summary: '',

  experience: [
    // {
    //   company: 'Acme SaaS Co.',
    //   role: 'Senior Customer Success Manager, Enterprise',
    //   location: 'Remote',
    //   startDate: '2022',
    //   endDate: 'Present',
    //   bullets: ['Owned a $12M enterprise book of business...'],
    // },
  ],

  education: [
    // { school: '', credential: '', year: '' },
  ],

  skills: {
    'Customer Success': [],
    'Tools & Platforms': [],
    'Domain Knowledge': [],
  },

  certifications: [],
};
