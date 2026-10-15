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
    repoUrl: ExternalLinks.QUANT_FUSION_SOURCE,
    caseStudyRoute: Routes.WORK_QUANT_FUSION,
  },
];

export const SERVICES: Service[] = [
  {
    id: "design-to-production",
    kicker: "Build",
    title: "Design-to-Production Sprint",
    summary: "Turn approved product designs into polished, production-ready web or mobile features.",
    details: [
      "Implement approved Figma designs in React or React Native",
      "Build responsive interfaces and reusable components",
      "Connect the interface to your existing APIs and backend services",
      "Refine interactions, states, and usability",
      "Deliver agreed tests, documentation, and an implementation handoff",
    ],
    idealFor: "SaaS teams and digital agencies with approved designs that need experienced implementation capacity.",
    ctaLabel: "Discuss a project",
    isFeatured: true,
  },
  {
    id: "ux-to-prototype",
    kicker: "Prototype",
    title: "UX-to-Prototype Sprint",
    summary: "Turn an early product idea into a polished, testable experience.",
    details: [
      "Refine user flows and interaction patterns",
      "Design polished interfaces for a clearly defined workflow",
      "Build a clickable prototype or working interface, depending on what you need",
      "Map out the next steps toward production",
    ],
    idealFor: "Founders and product teams validating a product concept or a new feature.",
    ctaLabel: "Discuss a prototype",
  },
  {
    id: "engineering-assessment",
    kicker: "Assess",
    title: "Product Engineering Assessment",
    summary: "Understand what’s holding your application back, and what to do next.",
    details: [
      "Review the relevant application architecture and code",
      "Assess UI implementation, integration points, and delivery risks",
      "Review cloud architecture and deployment concerns",
      "Deliver a prioritized list of improvements and next steps",
    ],
    idealFor: "SaaS teams that want an experienced engineering perspective before committing to a larger project.",
    ctaLabel: "Discuss an assessment",
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
    detail: "UX/UI design for clearly defined workflows: user flows, interaction patterns, and polished interfaces that are ready to build.",
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
  "The kind of help you need: building from designs, a prototype, or an assessment",
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
