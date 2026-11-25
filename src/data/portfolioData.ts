export interface NavItem {
  id: 'home' | 'about' | 'services' | 'portfolio' | 'contact';
  label: string;
  href: string;
}

export interface FocusArea {
  index: string;
  title: string;
  summary: string;
}

export interface ServiceArea {
  index: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const PROFILE_IMAGE = {
  src: '/assets/aistudio/1795624828541_fd03dfe7.png',
  alt: 'KingNova — NFT Collaboration Manager and Web3 Growth Strategist',
  caption: 'KingNova — Web3 Growth & Collaboration',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  brand: 'KINGNOVA',
  role: 'NFT Collaboration Manager | Growth Strategist',
  tagline: 'Building Connections. Creating Growth. Driving Results.',
  statement:
    'I help Web3 and NFT projects unlock growth opportunities through strategic collaborations, community development, player acquisition, and targeted growth initiatives.',
  primaryCta: 'Explore My Work',
  secondaryCta: "Let's Connect",
} as const;

export const ABOUT_CONTENT = {
  kicker: 'About',
  heading: 'A Little About Me.',
  paragraphs: [
    'In Web3, sustainable momentum rarely comes from noise alone. It is built through intentional relationships, aligned ecosystems, and disciplined execution that turns early attention into active participation.',
    'As an NFT Collaboration Manager and Growth Strategist, I partner with founders, gaming studios, and digital-collectible teams to bridge high-value communities, structure strategic partnerships, and design acquisition funnels that attract genuine collectors and long-term players.',
    'From coordinating high-converting allowlist campaigns and cross-project activations to shaping community retention loops, my focus is simple: connect the right audiences, strengthen brand credibility, and drive measurable results across every stage of growth.',
  ],
  focusAreas: [
    {
      index: '01',
      title: 'NFT Collaboration Management',
      summary:
        'Structuring vetted cross-community collaborations, allowlist allocations, and co-branded drops that convert engaged collectors.',
    },
    {
      index: '02',
      title: 'Web3 Growth Strategy',
      summary:
        'Designing full-funnel launch and post-mint roadmaps rooted in audience positioning, ecosystem timing, and measurable KPIs.',
    },
    {
      index: '03',
      title: 'Player Acquisition',
      summary:
        'Onboarding active Web3 gamers and guild cohorts into playable ecosystems through targeted quests, creator campaigns, and retention funnels.',
    },
    {
      index: '04',
      title: 'Partnership Development',
      summary:
        'Cultivating high-trust relationships with leading projects, launchpads, tooling partners, and ecosystem leaders for mutual expansion.',
    },
  ] satisfies FocusArea[],
} as const;

export const SERVICES_CONTENT = {
  kicker: 'Services',
  heading: 'What I Bring to a Project.',
  intro:
    'Focused execution across collaboration pipelines, strategic growth planning, and community ecosystems tailored for NFT collections and Web3 games.',
  items: [
    {
      index: '01',
      title: 'NFT Collaboration Management',
      description:
        'End-to-end management of strategic allowlist partnerships, alpha group outreach, and cross-community collaborations. Every outreach effort is vetted for community quality, holder overlap, and conversion potential—ensuring your mint or launch reaches collectors who stay beyond day one.',
      deliverables: ['Partner Vetting', 'Allowlist Allocation', 'Campaign Tracking'],
    },
    {
      index: '02',
      title: 'Growth Strategy',
      description:
        'Comprehensive go-to-market and ecosystem expansion planning tailored to your project stage. I align narrative positioning, campaign sequencing, and incentive mechanics so every announcement, activation, and partnership compounds into lasting traction.',
      deliverables: ['Go-To-Market Planning', 'Campaign Sequencing', 'Conversion Funnels'],
    },
    {
      index: '03',
      title: 'Player Acquisition',
      description:
        'Targeted acquisition programs built specifically for Web3 gaming and interactive platforms. By connecting directly with gaming guilds, competitive player networks, and quest ecosystems, I drive qualified user onboarding and meaningful in-game retention.',
      deliverables: ['Guild Outreach', 'Quest Campaigns', 'Player Onboarding'],
    },
    {
      index: '04',
      title: 'Partnership Development',
      description:
        'High-level business development connecting your team with aligned Web3 brands, infrastructure providers, marketplaces, and ecosystem accelerators. I negotiate mutually beneficial agreements that elevate credibility and unlock new distribution channels.',
      deliverables: ['Ecosystem Alliances', 'Co-Marketing Deals', 'Partner Relations'],
    },
    {
      index: '05',
      title: 'Community Growth',
      description:
        'Organic audience expansion paired with structured community activation frameworks. Beyond growing member counts, I help build engaged Discord and social environments where new entrants become active contributors, advocates, and repeat participants.',
      deliverables: ['Audience Expansion', 'Engagement Loops', 'Retention Systems'],
    },
  ] satisfies ServiceArea[],
} as const;
