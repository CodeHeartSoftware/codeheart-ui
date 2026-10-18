export const SharedStrings = {
  BRAND_NAME: "CodeHeart",
  BRAND_HOME_LABEL: "CodeHeart home",
  BACK_HOME: "Back to home",
} as const;

/** Per-page <title> and meta description. Case-study meta lives with each case study in caseStudies.ts. */
export const PageMetaStrings = {
  HOME: {
    title: "CodeHeart — Product Design and Engineering",
    description:
      "CodeHeart helps small companies and digital agencies turn product designs into polished, production-ready web and mobile apps with React, React Native, and full-stack engineering.",
  },
  HOW_WE_WORK: {
    title: "How We Work | CodeHeart",
    description:
      "How CodeHeart runs a project: define, scope, build, and hand off. Clearly scoped engagements with written progress updates and no agency overhead.",
  },
  CONTACT: {
    title: "Discuss a Project | CodeHeart",
    description:
      "Tell CodeHeart about your product: approved designs that need building, an experience that needs improving, an application that needs an engineering review, or an AI-built app that needs rescuing.",
  },
} as const;

export const HomeStrings = {
  nav: {
    ARIA_LABEL: "Main navigation",
    CTA: "Contact",
    MENU_TOGGLE_LABEL: "Toggle menu",
  },
  hero: {
    EYEBROW: "Product design & engineering",
    TITLE_LEAD: "We ship software",
    TITLE_EMPHASIS: "with heart.",
    SUBTITLE: "Digital products, real results.",
    COPY: "We help small companies and digital agencies turn product designs into polished, production-ready web and mobile apps.",
    PRIMARY_CTA: "Discuss a project",
    SECONDARY_CTA: "Explore selected work",
  },
  showcase: {
    REGION_LABEL: "Featured project preview",
    TABLIST_LABEL: "Featured projects",
    featuredKicker: (number: string) => `Featured · ${number}`,
    CTA: "See how we built it",
    VIEW_CODE_CTA: "View the code",
    CASE_STUDY_CTA: "Read the case study",
    nextProject: {
      TITLE: "Your next project",
      DESCRIPTION: "Approved designs that need building, a product experience that needs work, or an app that needs a second opinion. Tell us what you’re working on.",
      TAGS: ["Design to production", "Senior engineering", "Zero overhead"],
      KICKER: "Up next",
      CTA: "Discuss a project",
    },
    statusBuilding: (title: string) => `Building ${title}…`,
    STATUS_LIVE: "Live · ready to explore",
    CODE_MODULE: "@codeheart/studio",
    CODE_CARE: "obsessive",
    CODE_COMMENT: "// shipped with heart",
  },
  heroFooter: {
    STUDIO: "Independent product studio",
    LOCATION: "Chicago · Working everywhere",
    SCROLL: "Scroll to discover",
  },
  intro: {
    KICKER: "What we believe",
    STATEMENT_LEAD: "Impact doesn’t scale with headcount.",
    STATEMENT_EMPHASIS: "It scales with heart.",
    ASIDE: "One experienced engineer, close to the work, can move a product further than a crowded team. That’s our model: senior product design and engineering, delivered as clearly defined projects — without the fees and red tape of a traditional agency.",
    HOW_WE_WORK_LINK: "How we work",
  },
  services: {
    KICKER: "Services",
    TITLE: "Some ways to work together.",
    SUMMARY: "Every project is scoped around clear deliverables and agreed expectations, so you know what you’re getting before any work begins.",
    OTHER_WAYS: "Need something different? We’re happy to shape a project around what your team needs.",
    HINT: "Hover or tap a card to see what’s included.",
    IDEAL_FOR_LABEL: "Ideal for",
    spineLabel: (kicker: string, title: string) => `${kicker}: ${title}`,
  },
  work: {
    KICKER: "Selected work",
    TITLE: "Made with purpose.",
    SUMMARY: "Real systems, built end to end. Developed lean, with no additional layers or handoffs between the idea and the code.",
    askAboutLabel: (title: string) => `Ask us about ${title}`,
    viewSourceLabel: (title: string) => `View ${title} source code on GitHub (opens in a new tab)`,
    caseStudyLabel: (title: string) => `Read the case study: ${title}`,
  },
  /** Mirrors the real Quant Fusion UI: its header, tab bar, and a model’s simulation detail. */
  financeArt: {
    APP_NAME: "⫸ QUANT FUSION",
    SIMULATIONS_BADGE: "2 FORWARD SIMULATIONS",
    TABS: ["FLEET", "LIVE", "SIMULATION", "RESEARCH", "JOBS"],
    ACTIVE_TAB: "SIMULATION",
    MODEL_NAME: "quant-v0",
    MODEL_STATUS: "Active",
    SIMULATION_DETAILS: "64 trading days",
    CHART_LABEL: "Daily P&L",
  },
  mobileArt: {
    DATE: "Tuesday, 24 June",
    PROMPT: "How are you feeling?",
    AVATAR_INITIALS: "AM",
    APPOINTMENT_TITLE: "Check-in with Amy",
    APPOINTMENT_TIME: "Today · 2:30 PM",
    WEEK_LABEL: "This week",
  },
  terminalArt: {
    WINDOW_TITLE: "thunderdome — zsh",
    PROMPT: "$",
    COMMAND: "thunderdome tournament --format round-robin ./bots",
    LOADING: "✔ Loaded 8 bots · 28 matches scheduled",
    MATCH_LABEL: "▸ Match 12/28",
    MATCH_BOT_A: "minimax-mia",
    MATCH_VERSUS: "vs",
    MATCH_BOT_B: "greedy-gus",
    LEADERBOARD_HEADING: "Leaderboard",
  },
  travelArt: {
    DESTINATION: "MADEIRA",
    TRIP_DETAILS: "7 days · 8 people",
    TAGLINE: "Wild coast, warm nights.",
    EXTRA_TRAVELERS: "+5",
  },
  contact: {
    KICKER: "Your idea, our next chapter",
    TITLE_LEAD: "Let’s make something",
    TITLE_EMPHASIS: "people care about.",
    CTA: "Discuss a project",
  },
} as const;

/** The site footer, shown on every page. */
export const FooterStrings = {
  TAGLINE: "Senior product design and engineering, without the agency overhead.",
  NAV_LABEL: "Footer",
  EXPLORE_HEADING: "Explore",
  ELSEWHERE_HEADING: "Elsewhere",
  HOW_WE_WORK: "How we work",
  CONTACT: "Contact",
  GITHUB: "GitHub",
  LOCATION: HomeStrings.heroFooter.LOCATION,
  copyright: (year: number) => `© ${year} CodeHeart`,
} as const;

export const ContactStrings = {
  hero: {
    EYEBROW: "Discuss a project",
    TITLE_LEAD: "Let’s build",
    TITLE_EMPHASIS: " something together.",
    COPY: "Whether you have approved designs that need building, a product experience that needs work, an application that needs a second opinion, or an AI-built app that’s stuck before launch, it starts with a quick note. Tell us what you’re working on and we’ll take it from there.",
    EMAIL_CTA: "Email us about your project",
    EMAIL_SUBJECT: "New project inquiry",
  },
  include: {
    KICKER: "What to include",
    TITLE: "A few details go a long way.",
  },
  nextSteps: {
    KICKER: "What happens next",
    TITLE: "Simple from the first message.",
  },
} as const;

export const HowWeWorkStrings = {
  hero: {
    EYEBROW: "How we work",
    TITLE_LEAD: "Senior expertise.",
    TITLE_EMPHASIS: " A smaller footprint.",
    COPY: "CodeHeart is a lean product design and engineering studio. We take on clearly defined projects — building features from approved designs, improving product experiences, assessing existing applications, or stabilizing AI-built software — without the weight of a traditional agency.",
    PORTRAIT_ALT: "Portrait of Tom Sarver, founder of CodeHeart",
    FOUNDER_NAME: "Tom Sarver",
    PORTRAIT_ROLE: "Founder & engineer",
    ESTABLISHED: "Est. 2026",
  },
  whoWeAre: {
    KICKER: "Who we are",
    TITLE: "A small software studio with deep experience.",
    LEAD: "CodeHeart was founded in early 2026 by a software engineer with more than seven years of experience in the technology industry.",
    BODY: "You work directly with the person doing the work — shaping the technical approach, designing the interface, and writing the code. That means fewer handoffs, faster decisions, and a partner who understands the whole picture, not just one piece of it.",
  },
  capabilities: {
    KICKER: "What we do",
    TITLE: "Design and engineering, in one pair of hands.",
    SUMMARY: "Product design, front-end craft, and the systems behind them: the combination that turns a design file into software people can use.",
    TAGS_LABEL: "Our capabilities",
  },
  why: {
    KICKER: "Why we do it",
    TITLE: "Lean by design.",
    PARAGRAPH_ONE: "We do this to make the biggest possible impact. When the person who understands your product is also the one building it, nothing gets lost in translation, decisions take hours instead of weeks, and every hour of work moves your product forward.",
    PARAGRAPH_TWO: "It’s also why we can price competitively. There are no account managers, sales teams, or agency markups to fund, so there’s almost no overhead. Your budget pays for senior engineering, not the layers around it.",
    RELAY_LABEL: "How a request reaches the person building it",
    AGENCY_LABEL: "Traditional agency",
    CODEHEART_LABEL: "How we work",
    peopleInBetween: (count: number) => (count === 0 ? "No one in between" : `${count} people in between`),
  },
  process: {
    KICKER: "How a project runs",
    TITLE: "Define. Scope. Build. Hand off.",
    SUMMARY: "Every engagement follows the same four stages, so you always know where things stand, what’s next, and what you’ll have at the end.",
    NOTE: "Ongoing maintenance, emergency support, and additional features aren’t part of a project by default. We’re happy to arrange them under a separate agreement, or build them into the original scope.",
  },
  contact: {
    KICKER: "Have something in mind?",
    TITLE_LEAD: "Let’s make the complicated",
    TITLE_EMPHASIS: " feel simple.",
    CTA: "Tell us about your project",
  },
} as const;

export const CaseStudyStrings = {
  EYEBROW: "Case study",
  FACTS_LABEL: "Project details",
  STACK_LABEL: "Technologies",
  REPO_CTA: "View the source on GitHub",
  API_REPO_CTA: "View the API source on GitHub",
  UI_REPO_CTA: "View the UI source on GitHub",
  REPOS_LABEL: "Source code",
  DIAGRAM_LABEL: "Architecture overview",
  status: {
    implemented: "Implemented",
    inProgress: "In development",
    planned: "Planned",
  },
  next: {
    KICKER: "Next case study",
  },
  contact: {
    KICKER: "Have something in mind?",
    TITLE_LEAD: "Building something technically challenging?",
    TITLE_EMPHASIS: " Let’s talk about your project.",
    CTA: "Discuss a project",
    SERVICES_LINK: "See our services",
  },
} as const;
