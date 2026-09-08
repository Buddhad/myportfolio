export const profile = {
  name: 'Alex Morgan',
  initials: 'AM',
  role: 'Staff Software Engineer',
  company: 'Northwind Labs',
  companyUrl: '#',
  tagline:
    'I build developer tools, AI infrastructure, and open-source software that helps teams ship faster and more reliably.',
  bio: `I'm a Staff Software Engineer at Northwind Labs, where I lead the developer platform team. I focus on build systems, AI-assisted tooling, and the infrastructure that lets small teams punch above their weight. Before Northwind, I co-founded two startups and spent time at large-scale infrastructure companies.`,
  email: 'hello@alexmorgan.dev',
  location: 'San Francisco, CA',
  social: [
    { label: 'GitHub', url: 'https://github.com' },
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'X', url: 'https://x.com' },
  ],
};

export const latestWriting = [
  {
    date: '2026-08-14',
    source: 'Northwind Blog',
    title: 'Why your build cache is probably lying to you',
    excerpt:
      'Most remote cache implementations have a subtle correctness bug around content-addressed keys. Here is how to find it and fix it.',
    url: '#',
  },
  {
    date: '2026-06-02',
    source: 'On this site',
    title: 'Notes on shipping 1,000+ PRs with AI coding tools',
    excerpt:
      'Lessons from a year of parallel AI-assisted development: planning workflows, verification loops, and where humans still matter most.',
    url: '#writing',
  },
  {
    date: '2026-03-20',
    source: 'On this site',
    title: 'The hidden cost of microservices no one talks about',
    excerpt:
      'Latency budgets, ownership boundaries, and the organizational tax that does not show up in any architecture diagram.',
    url: '#writing',
  },
];

export const essays = [
  {
    date: '2026-08-14',
    title: 'Why your build cache is probably lying to you',
    excerpt:
      'Most remote cache implementations have a subtle correctness bug around content-addressed keys. Here is how to find it and fix it.',
  },
  {
    date: '2026-06-02',
    title: 'Notes on shipping 1,000+ PRs with AI coding tools',
    excerpt:
      'Lessons from a year of parallel AI-assisted development: planning workflows, verification loops, and where humans still matter most.',
  },
  {
    date: '2026-03-20',
    title: 'The hidden cost of microservices no one talks about',
    excerpt:
      'Latency budgets, ownership boundaries, and the organizational tax that does not show up in any architecture diagram.',
  },
  {
    date: '2025-11-08',
    title: 'How we cut our CI pipeline from 40 minutes to 6',
    excerpt:
      'A practical playbook for finding the slowest parts of your CI: sharding, remote execution, and ruthless trimming.',
  },
  {
    date: '2025-07-15',
    title: 'Designing APIs that developers actually enjoy',
    excerpt:
      'Ergonomics, error messages, and the small details that separate a tool people tolerate from one they love.',
  },
];

export const selectedWriting = [
  {
    date: '2026-05-01',
    source: 'InfoQ',
    title: 'The state of AI-assisted code review in 2026',
    url: '#',
  },
  {
    date: '2026-01-20',
    source: 'Northwind Blog',
    title: 'Announcing Northwind Build v3: 10x faster cold starts',
    url: '#',
  },
  {
    date: '2025-09-10',
    source: 'ACM Queue',
    title: 'Content-addressed storage for build systems',
    url: '#',
  },
  {
    date: '2025-04-03',
    source: 'Northwind Blog',
    title: 'We open-sourced our test runner. Here is what we learned.',
    url: '#',
  },
];

export const experience = [
  {
    period: '2023 – Present',
    company: 'Northwind Labs',
    role: 'Staff Software Engineer',
    url: '#',
    description:
      'Lead the developer platform team. Built the remote build execution system now used by 200+ engineers. Drove the adoption of AI-assisted code review across the org.',
  },
  {
    period: '2020 – 2023',
    company: 'Cobalt Systems',
    role: 'Senior Engineer',
    url: '#',
    description:
      'Designed and shipped the distributed task scheduler powering Cobalt CI. Grew the platform team from 3 to 12 engineers.',
  },
  {
    period: '2018 – 2020',
    company: 'Lattice AI',
    role: 'Co-founder & CTO',
    url: '#',
    description:
      'Co-founded an ML observability startup. Built the core pipeline and data infrastructure. Acquired by Northwind Labs in 2023.',
  },
  {
    period: '2015 – 2018',
    company: 'Foundry Inc.',
    role: 'Software Engineer',
    url: '#',
    description:
      'Worked on the core build system and internal developer tooling. Shipped the first incremental compilation pipeline for the monorepo.',
  },
  {
    period: '2014 – 2015',
    company: 'University Research Lab',
    role: 'Research Assistant',
    url: '#',
    description:
      'Published on distributed systems and content-addressed storage. TA for the advanced compilers course.',
  },
];

export const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'Stanford University',
    year: '2015',
    url: 'https://stanford.edu',
  },
  {
    degree: 'B.S. Computer Science',
    school: 'University of Washington',
    year: '2013',
    url: 'https://uw.edu',
  },
];

export const skills = [
  { category: 'Languages', items: ['TypeScript', 'Go', 'Rust', 'Python'] },
  { category: 'Infrastructure', items: ['Kubernetes', 'Terraform', 'Bazel', 'gRPC'] },
  { category: 'Databases', items: ['PostgreSQL', 'Redis', 'ClickHouse'] },
  { category: 'AI / ML', items: ['PyTorch', 'LLM tooling', 'Evals', 'RAG pipelines'] },
];

export const history = [
  {
    year: '1995',
    text: 'My parents brought home a Packard Bell running Windows 95. I spent more time in MS Paint than was healthy.',
  },
  {
    year: '1999',
    text: 'Built my first website on GeoCities — a fan page for a video game that did not exist. Learned HTML from a library book.',
  },
  {
    year: '2007',
    text: 'Started college. Switched from electrical engineering to computer science after realizing I preferred compilers to circuits.',
  },
  {
    year: '2013',
    text: 'Graduated, moved to the Bay Area, and joined a small infrastructure startup. Discovered that build systems are surprisingly fun.',
  },
  {
    year: '2018',
    text: 'Co-founded my first company. Learned that building the product is the easy part; everything else is the hard part.',
  },
  {
    year: '2023',
    text: 'Joined Northwind Labs after the acquisition. Back to building developer tools at scale, which is where I am happiest.',
  },
];
