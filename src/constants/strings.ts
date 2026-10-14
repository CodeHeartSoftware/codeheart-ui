export const SharedStrings = {
  BRAND_NAME: "CodeHeart",
  BRAND_HOME_LABEL: "CodeHeart home",
  BACK_HOME: "Back to home",
} as const;

export const HomeStrings = {
  nav: {
    ARIA_LABEL: "Main navigation",
    CTA: "Start a project",
    MENU_TOGGLE_LABEL: "Toggle menu",
  },
  hero: {
    EYEBROW: "Digital products, made personal",
    TITLE_LINE_ONE: "We put heart",
    TITLE_LINE_TWO: "into making",
    TITLE_EMPHASIS: "digital art.",
    COPY: "Product engineering, team leadership, or a senior hand on your existing team — we plug in wherever your project needs us. No agency overhead, no management fees. Just experience you can put to work.",
    CTA: "Explore our work",
  },
  showcase: {
    REGION_LABEL: "Featured project preview",
    TABLIST_LABEL: "Featured projects",
    featuredKicker: (number: string) => `Featured · ${number}`,
    CTA: "See how we built it",
    VIEW_CODE_CTA: "View the code",
    nextProject: {
      TITLE: "Your next project",
      DESCRIPTION: "A new product, a team that needs leading, or a senior hand on the one you have. Tell us what you’re building.",
      TAGS: ["Your idea", "Senior engineering", "Zero overhead"],
      KICKER: "Up next",
      CTA: "Start a project",
    },
    statusBuilding: (title: string) => `Building ${title}…`,
    STATUS_LIVE: "Live · ready to explore",
    CODE_MODULE: "@codeheart/studio",
    CODE_CARE: "obsessive",
    CODE_COMMENT: "// shipped with heart",
  },
  heroFooter: {
    STUDIO: "Independent digital studio",
    LOCATION: "Chicago · Working everywhere",
    SCROLL: "Scroll to discover",
  },
  intro: {
    KICKER: "What we believe",
    STATEMENT_LEAD: "Impact doesn’t scale with headcount.",
    STATEMENT_EMPHASIS: "It scales with heart.",
    ASIDE: "One experienced engineer, plugged in where it matters, can move a product further than a crowded team. That’s our model: product engineering, team leadership, or senior help on your existing team — without the fees and red tape of a traditional agency.",
    HOW_WE_WORK_LINK: "How we work",
  },
  work: {
    KICKER: "Selected work",
    TITLE: "Made with purpose.",
    SUMMARY: "Real systems, built end to end. Developed lean, with no layers or handoffs between the idea and the code.",
    askAboutLabel: (title: string) => `Ask us about ${title}`,
    viewSourceLabel: (title: string) => `View ${title} source code on GitHub (opens in a new tab)`,
  },
  financeArt: {
    HEADING_KICKER: "Your overview",
    GREETING: "Good morning, Maya",
    BALANCE_LABEL: "Total balance",
    BALANCE: "£24,680",
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
    CTA: "Start a project",
  },
} as const;

export const ContactStrings = {
  hero: {
    EYEBROW: "Start a project",
    TITLE_LEAD: "Let’s build",
    TITLE_EMPHASIS: " something together.",
    COPY: "Whether it’s a new product, a team that needs leading, or a senior hand on the one you already have, it starts with a quick note. Tell us what you’re working on and we’ll take it from there.",
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
    COPY: "CodeHeart is a lean engineering studio that plugs into whatever your project needs — building the product, leading the team, or strengthening the one you already have — without the weight of a traditional agency.",
    PORTRAIT_ALT: "Portrait of Tom Sarver, founder of CodeHeart",
    FOUNDER_NAME: "Tom Sarver",
    PORTRAIT_ROLE: "Founder & engineer",
    ESTABLISHED: "Est. 2026",
  },
  whoWeAre: {
    KICKER: "Who we are",
    TITLE: "A small software studio with deep experience.",
    LEAD: "CodeHeart was founded in early 2026 by a software engineer with more than seven years of experience in the technology industry.",
    BODY: "You work directly with the person doing the work — designing the technical approach, writing the code, or running the team. That means fewer handoffs, faster decisions, and a partner who understands the whole picture, not just one piece of it.",
  },
  capabilities: {
    KICKER: "What we do",
    TITLE: "Configured to what your project needs.",
    SUMMARY: "Bring CodeHeart in for one of these, or all three. Either way, you’re paying for experience — not overhead.",
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
    KICKER: "A simple process",
    TITLE: "Plug in. Ship. Adapt.",
  },
  contact: {
    KICKER: "Have something in mind?",
    TITLE_LEAD: "Let’s make the complicated",
    TITLE_EMPHASIS: " feel simple.",
    CTA: "Tell us about your project or team",
  },
} as const;
