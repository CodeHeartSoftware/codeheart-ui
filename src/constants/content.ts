import type {
  Capability,
  LeaderboardEntry,
  NavItem,
  ProcessStep,
  Project,
  RelayNodeData,
  Service,
  ShowcaseItem,
} from "@/types/content";
import {projectToShowcaseItem} from "@/utils/showcaseItem";
import {HomeStrings} from "./strings";
import {ExternalLinks, Routes, SectionIds} from "./routes";

export const NAV_ITEMS: NavItem[] = [
  { label: "Approach", sectionId: SectionIds.APPROACH },
  { label: "Services", sectionId: SectionIds.SERVICES },
  { label: "Work", sectionId: SectionIds.WORK },
];

export const PROJECTS: Project[] = [
  {
    id: "thunderdome-engine",
    title: "The Thunderdome Engine",
    description: "A platform for building, running, and competing autonomous game-playing bots, in any language, under the same rules.",
    tags: ["TypeScript", "Node.js", "Docker", "Game engine design"],
    tone: "blush",
    art: "terminal",
    repoUrl: ExternalLinks.THUNDERDOME_REPO,
    caseStudyRoute: Routes.WORK_THUNDERDOME,
  },
  {
    id: "quant-fusion",
    title: "Quant Fusion",
    description: "A research-driven investing simulation built on the Thunderdome Engine. Trading bots manage a portfolio of real stocks against replayed market data, informed by a curated research model. No real money involved.",
    tags: ["React", "TypeScript", "Express", "Quantitative analytics"],
    tone: "rose",
    art: "finance",
    repoUrl: ExternalLinks.QUANT_FUSION_API_REPO,
    caseStudyRoute: Routes.WORK_QUANT_FUSION,
  },
];

export const SERVICES: Service[] = [
  {
    id: "design-to-production",
    kicker: "Build",
    title: "Design-to-Production Sprint",
    headline: "From approved designs to production-ready features.",
    summary: "Turn product designs and requirements into polished, working web and mobile experiences. From implementation and integration to testing and deployment, we take defined features from design to production.",
    details: [
      "React and React Native development",
      "Responsive UI and reusable components",
      "API and backend integration",
      "UX refinement and interaction details",
      "Testing, deployment support, and handoff",
    ],
    idealFor: "SaaS teams and digital agencies with approved designs or defined product requirements that need experienced engineering capacity to ship them.",
    ctaLabel: "Discuss a project",
  },
  {
    id: "ui-ux-improvement",
    kicker: "Design",
    title: "UI/UX Improvement Sprint",
    headline: "Research, design, and development for better product experiences.",
    summary: "Understand usability problems, improve workflows, and create more intuitive interfaces. Start from an existing app, a known user problem, or a new feature, with research, design, and implementation scoped to what you need.",
    details: [
      "UX reviews and usability assessments",
      "User-flow and interaction design",
      "UI design and visual refinement",
      "Design-system and component improvements",
      "Prototyping and usability validation",
      "Implementation of targeted UX/UI improvements",
    ],
    idealFor: "Product teams that need to improve usability, refine a workflow, or turn an inconsistent interface into a polished experience.",
    ctaLabel: "Improve your product",
  },
  {
    id: "engineering-assessment",
    kicker: "Architect",
    title: "Product Engineering Assessment",
    headline: "Understand what’s holding your application back.",
    summary: "Get an experienced engineering perspective on your application, identify technical risks and bottlenecks, and leave with a prioritized plan for improvement.",
    details: [
      "Codebase and architecture review",
      "Frontend, backend, and integration assessment",
      "Technical risk identification",
      "AWS/Azure architecture and deployment review, where relevant",
      "Prioritized recommendations and an implementation roadmap",
    ],
    idealFor: "SaaS companies and software teams that need clarity on technical debt, architecture, delivery risks, or the next engineering investment to make.",
    ctaLabel: "Assess your application",
  },
  {
    id: "vibe-code-rescue",
    kicker: "Rescue",
    title: "Vibe Code Rescue",
    headline: "Built fast with AI. Stuck before launch?",
    summary: "Turn an AI-built application into reliable, maintainable software. We help founders understand what needs fixing, then get their product across the finish line.",
    process: {
      label: "Diagnostic first",
      note: "Every rescue starts with a short diagnostic, so fixes are scoped to what your app actually needs.",
      steps: ["Diagnose", "Prioritize", "Stabilize", "Hand off"],
    },
    details: [
      "Debugging and stabilization",
      "Refactoring fragile or duplicated code",
      "Cleaner, more maintainable component structure",
      "Fixing integration and deployment problems",
      "Targeted tests and better reliability",
      "Identifying common security and data-handling risks",
      "Completing unfinished features",
    ],
    idealFor: "Founders and teams who built with tools like Claude Code, Cursor, Lovable, or Replit and are stuck on bugs, fragile architecture, failed deployments, or the last steps to a dependable launch.",
    ctaLabel: "Rescue your application",
    isFeatured: true,
  },
];

/** Projects featured in the hero showcase, in order. Everything else still appears in the Work section. */
const HERO_SHOWCASE_PROJECT_IDS = ["thunderdome-engine", "quant-fusion"];

const NEXT_PROJECT_SHOWCASE_ITEM: ShowcaseItem = {
  id: "your-next-project",
  title: HomeStrings.showcase.nextProject.TITLE,
  description: HomeStrings.showcase.nextProject.DESCRIPTION,
  tags: HomeStrings.showcase.nextProject.TAGS,
  tone: "berry",
  kicker: HomeStrings.showcase.nextProject.KICKER,
  ctaLabel: HomeStrings.showcase.nextProject.CTA,
  destination: { to: Routes.CONTACT },
};

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  ...PROJECTS.filter((project) => HERO_SHOWCASE_PROJECT_IDS.includes(project.id)).map(projectToShowcaseItem),
  NEXT_PROJECT_SHOWCASE_ITEM,
];

/** Sample standings shown in the Thunderdome terminal mockup. */
export const TERMINAL_LEADERBOARD: LeaderboardEntry[] = [
  { bot: "minimax-mia", record: "21–3" },
  { bot: "monte-carlo", record: "18–6" },
  { bot: "greedy-gus", record: "12–12" },
  { bot: "random-rex", record: "4–20" },
];

export const CAPABILITIES: Capability[] = [
  {
    title: "Product design",
    detail: "UX reviews and UX/UI design for clearly defined workflows: user flows, interaction patterns, and polished interfaces that are ready to build.",
  },
  {
    title: "React & React Native",
    detail: "Responsive web and mobile interfaces built from approved designs, with reusable components and careful attention to every state and interaction.",
  },
  {
    title: "Full-stack & cloud",
    detail: "APIs, backend integration, and deployment on AWS or Azure, backed by senior judgment on architecture and technical tradeoffs.",
  },
];

export const CAPABILITY_TAGS = [
  "UX/UI design",
  "Figma to code",
  "React",
  "React Native",
  "TypeScript",
  "APIs & integrations",
  "AWS",
  "Azure",
  "Technical architecture",
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "Define",
    text: "We get to know the problem, the user workflow, and the outcome you’re after. Together, we agree on:",
    points: [
      "Scope and deliverables",
      "Platform and integration requirements",
      "Acceptance criteria",
      "Dependencies and access we’ll need from you",
    ],
  },
  {
    step: "Scope",
    text: "The requirements become a clear project plan that spells out:",
    points: [
      "Deliverables, and what’s out of scope",
      "Timeline and review milestones",
      "A fixed price or other agreed pricing",
      "Your responsibilities and feedback windows",
      "How changes to scope are handled",
    ],
  },
  {
    step: "Build",
    text: "The work happens in focused development blocks, with:",
    points: [
      "Regular written progress updates",
      "Review checkpoints agreed up front",
      "Testing and quality checks throughout",
      "Clear reasoning behind technical decisions",
      "Asynchronous-first communication, with meetings when they help",
    ],
  },
  {
    step: "Handoff",
    text: "You get the finished work in a form your team can maintain. Depending on the project, that includes:",
    points: [
      "Source code and agreed repository changes",
      "Tests and relevant documentation",
      "Deployment support within the agreed scope",
      "A walkthrough or knowledge transfer",
      "Recommended follow-up work",
    ],
  },
];

export const INQUIRY_CHECKLIST = [
  "What you’re building, or the problem you’re trying to solve",
  "Where things stand today: an idea, a work in progress, or a live product",
  "The kind of help you need: building from designs, improving the user experience, an engineering assessment, or rescuing an AI-built app",
  "Your timeline, and any constraints we should know about",
];

export const CONTACT_NEXT_STEPS: ProcessStep[] = [
  {
    step: "We reply",
    text: "We read every note and get back to you personally. There’s no sales team in between.",
  },
  {
    step: "We talk it through",
    text: "A short conversation about your goals, your product, and where we can help the most.",
  },
  {
    step: "We scope the work",
    text: "You get a clear written proposal with deliverables, timeline, and pricing, agreed before any work begins.",
  },
];

/** How a request travels to the person writing the code, compared in the "Lean by design" section. */
export const AGENCY_RELAY: RelayNodeData[] = [
  { label: "You" },
  { label: "Account manager" },
  { label: "Project manager" },
  { label: "Tech lead" },
  { label: "Developer" },
];

export const CODEHEART_RELAY: RelayNodeData[] = [{ label: "You" }, { label: "CodeHeart Engineer", showMark: true }];
