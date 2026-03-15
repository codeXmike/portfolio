export const SKILLS = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 88 },
      { name: 'JavaScript', level: 86 },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'React', level: 86 },
      { name: 'Node.js', level: 88 },
      { name: 'Express', level: 84 },
      { name: 'JavaFX', level: 72 },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MongoDB', level: 84 },
      { name: 'PostgreSQL', level: 78 },
    ],
  },
  {
    title: 'Other',
    items: [
      { name: 'AES encryption', level: 78 },
      { name: 'scikit-learn', level: 74 },
      { name: 'Model training', level: 72 },
      { name: 'API development', level: 86 },
      { name: 'REST APIs', level: 88 },
      { name: 'System architecture', level: 82 },
    ],
  },
]

export const PROJECTS = [
  {
    title: 'POS & Inventory Management System',
    description:
      'A retail POS system designed to manage sales, inventory, and business analytics in real time.',
    tech: ['React', 'Node.js', 'MongoDB'],
    categories: ['Full Stack', 'Backend'],
    featured: true,
    highlights: [
      'Real-time sales processing and receipt generation',
      'Inventory tracking with product management',
      'Analytics dashboard for business insights',
    ],
  },
  {
    title: 'Cloud File Management System',
    description:
      'A cloud-based file management system for storing, organizing, and securely sharing files.',
    tech: ['React', 'Node.js', 'MongoDB', 'Cloud storage'],
    categories: ['Full Stack', 'Security'],
    featured: true,
    highlights: [
      'Secure access control and sharing links',
      'Folder organization with fast search',
      'Upload pipeline with scalable storage',
    ],
  },
  {
    title: 'Student Wallet System',
    description:
      'A campus digital wallet enabling secure student payments and transaction tracking.',
    tech: ['React', 'Node.js', 'MongoDB'],
    categories: ['Full Stack', 'Security'],
    featured: true,
    highlights: [
      'Balance management and transaction logging',
      'Payment verification and audit trails',
      'Secure wallet flows for campus usage',
    ],
  },
  {
    title: 'Chess Engine Modules',
    description:
      'Core chess-engine algorithms: board representation, move generation, evaluation, and search.',
    tech: ['Python', 'Java'],
    categories: ['Algorithms', 'AI'],
    featured: true,
    highlights: [
      'Move generation and legality checks',
      'Minimax with alpha-beta pruning',
      'Evaluation heuristics for positions',
    ],
  },
  {
    title: 'Fast APIs (Weather & Readings Getter)',
    description:
      'Optimized APIs that fetch and aggregate external data with caching for minimal latency.',
    tech: ['Node.js', 'Express', 'REST APIs'],
    categories: ['Backend'],
    featured: false,
    highlights: [
      'External data aggregation with response caching',
      'High-speed endpoints built for reliability',
    ],
  },
  {
    title: 'Mental Health ChatBot',
    description:
      'An AI chatbot designed to support mental wellness through conversational intelligence.',
    tech: ['Python', 'NLP', 'Node.js API'],
    categories: ['AI', 'Full Stack'],
    featured: false,
    highlights: [
      'Emotion-aware responses and conversation tracking',
      'Wellness suggestions with safety guardrails',
    ],
  },
  {
    title: 'Education Pin Gateway',
    description:
      'A gateway platform for purchasing and managing education result pins via integrated vending APIs.',
    tech: ['Node.js', 'React', 'Payment APIs'],
    categories: ['Full Stack', 'Backend'],
    featured: false,
    highlights: [
      'Payment + vending integration with API-based architecture',
      'Result access portal with secure flows',
    ],
  },
]
