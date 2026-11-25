export interface CaseStudyNarrativeBlock {
  label: string;
  body: string;
}

export interface ProjectCaseStudy {
  slug: 'arkaseeker' | 'bo';
  route: `/projects/${'arkaseeker' | 'bo'}`;
  index: string;
  name: string;
  category?: string;
  role: string;
  highlightValue: string;
  highlightLabel: string;
  summary: string;
  imageSrc?: string;
  imageAlt?: string;
  projectUrl?: string;
  projectUrlLabel?: string;
  sections: CaseStudyNarrativeBlock[];
}

export interface FrameworkStep {
  number: string;
  title: string;
  description: string;
}

export interface AdvantageItem {
  index: string;
  title: string;
  description: string;
}

export interface ContactChannel {
  id: 'telegram' | 'x' | 'email';
  platform: string;
  handle: string;
  href: string;
  external: boolean;
}

export const FEATURED_PROJECTS_CONTENT = {
  kicker: 'Featured Projects',
  heading: 'Results Speak Through the Work.',
  intro:
    'Selected Web3 growth and collaboration engagements focused on measurable community traction and strategic ecosystem partnerships.',
  projects: [
    {
      slug: 'arkaseeker',
      route: '/projects/arkaseeker',
      index: '01',
      name: 'ARKASEEKER',
      role: 'Community Growth & Player Acquisition.',
      highlightValue: '0 → 40+',
      highlightLabel: 'PLAYERS GROWN',
      summary:
        'Built initial player adoption from the ground up through targeted outreach, direct onboarding, and active community coordination.',
      imageSrc: '/assets/aistudio/IMG_20261125_174136_404_741264bf.jpg',
      imageAlt: 'ArkaSeeker game challenge result screen',
      projectUrl: 'https://t.me/Arkaseeker',
      projectUrlLabel: 'https://t.me/Arkaseeker',
      sections: [
        {
          label: 'The Starting Point',
          body: 'Arkaseeker started with zero active players and needed an initial core of engaged Web3 participants to enter the ecosystem and establish early momentum.',
        },
        {
          label: 'The Objective',
          body: 'Acquire an initial player base from zero by reaching active Web3 gaming audiences and guiding interested users into the project cleanly.',
        },
        {
          label: 'The Growth Effort',
          body: 'Executed targeted community outreach, introduced Arkaseeker to aligned gaming circles, and supported direct onboarding through the project’s Telegram channel.',
        },
        {
          label: 'The Result',
          body: 'Grew from zero players to over 40 players.',
        },
      ],
    },
    {
      slug: 'bo',
      route: '/projects/bo',
      index: '02',
      name: 'BO',
      category: 'NFT Project.',
      role: 'NFT Collaboration & Partnership Management.',
      highlightValue: 'NFT PARTNERSHIP SECURED',
      highlightLabel: 'COLLABORATION OUTCOME',
      summary:
        'Managed collaboration outreach and partnership alignment to connect BO with an aligned NFT ecosystem partner.',
      sections: [
        {
          label: 'The Opportunity',
          body: 'BO needed strategic collaboration alignment within the NFT space to expand ecosystem visibility and connect with an active collector audience.',
        },
        {
          label: 'The Contribution',
          body: 'Led collaboration outreach, evaluated community fit, and managed partnership discussions on behalf of BO to establish mutual alignment.',
        },
        {
          label: 'The Result',
          body: 'Secured an NFT partnership for BO, strengthening cross-community presence and positioning the project for collaborative growth.',
        },
      ],
    },
  ] satisfies ProjectCaseStudy[],
} as const;

export const GROWTH_FRAMEWORK_CONTENT = {
  kicker: 'Growth Framework',
  heading: 'How I Approach Growth.',
  intro:
    'A structured, five-stage process built to turn ecosystem research into disciplined outreach and measurable outcomes.',
  steps: [
    {
      number: '01',
      title: 'Research',
      description:
        'Assess the project, target audience, and Web3 landscape to identify where aligned players and collectors are already active.',
    },
    {
      number: '02',
      title: 'Positioning',
      description:
        'Shape clear messaging around the project’s value so partners and communities immediately understand why it matters.',
    },
    {
      number: '03',
      title: 'Connection',
      description:
        'Engage vetted projects, gaming groups, and NFT communities through direct, relationship-first outreach.',
    },
    {
      number: '04',
      title: 'Execution',
      description:
        'Coordinate collaboration terms, onboarding flows, and campaign timing with consistent follow-through.',
    },
    {
      number: '05',
      title: 'Results',
      description:
        'Focus on real participation—tracking player onboarding, partnership delivery, and meaningful community traction.',
    },
  ] satisfies FrameworkStep[],
} as const;

export const WHY_KINGNOVA_CONTENT = {
  kicker: 'Why Work With KingNova?',
  heading: 'More Than Connections. A Focus on Growth.',
  intro:
    'Collaboration only creates value when it connects the right communities with clear purpose and reliable delivery.',
  items: [
    {
      index: '01',
      title: 'Growth-focused thinking',
      description:
        'Every outreach effort and collaboration is approached with clear intent—building toward real user and community expansion rather than surface-level noise.',
    },
    {
      index: '02',
      title: 'Strategic networking',
      description:
        'Relationships are cultivated intentionally across aligned NFT projects, gaming circles, and Web3 communities where genuine overlap exists.',
    },
    {
      index: '03',
      title: 'Practical execution',
      description:
        'Organized coordination from initial introduction through onboarding and partnership delivery, keeping communication direct and dependable.',
    },
    {
      index: '04',
      title: 'Results awareness',
      description:
        'A constant focus on tangible outcomes—whether growing an active player base from zero or securing partnerships that strengthen project momentum.',
    },
  ] satisfies AdvantageItem[],
} as const;

export const CONTACT_CONTENT = {
  kicker: 'Contact',
  heading: "Let's Build Something Valuable.",
  description:
    "Have a Web3 project, NFT initiative, gaming project, or growth opportunity? I'm open to collaborations, partnerships, and opportunities to help projects grow.",
  primaryCta: "Let's Work Together",
  channels: [
    {
      id: 'telegram',
      platform: 'Telegram',
      handle: 'novar',
      href: 'https://t.me/novar',
      external: true,
    },
    {
      id: 'x',
      platform: 'X (Twitter)',
      handle: 'king____nova',
      href: 'https://x.com/king____nova',
      external: true,
    },
    {
      id: 'email',
      platform: 'Email',
      handle: 'Bee45415@gmail.com',
      href: 'mailto:Bee45415@gmail.com',
      external: false,
    },
  ] satisfies ContactChannel[],
} as const;

