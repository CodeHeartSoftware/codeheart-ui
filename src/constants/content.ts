import type {Capability, LeaderboardEntry, NavItem, ProcessStep, Project, RelayNodeData, ShowcaseItem} from "@/types/content";
import {projectToShowcaseItem} from "@/utils/showcaseItem";
import {HomeStrings} from "./strings";
import {ExternalLinks, Routes, SectionIds} from "./routes";

export const NAV_ITEMS: NavItem[] = [
  { label: "Work", sectionId: SectionIds.WORK },
  { label: "Approach", sectionId: SectionIds.APPROACH },
];

export const PROJECTS: Project[] = [
  {
    id: "thunderdome-engine",
    title: "The Thunderdome Engine",
    description: "A platform for building bots that compete against each other against a shared task.",
    tags: ["Typescript", "Python", "Strategic Modeling", "Game Theory"],
    tone: "blush",
    art: "terminal",
    repoUrl: ExternalLinks.THUNDERDOME_REPO,
  },
  {
    id: "quant-fusion",
    title: "Quant Fusion",
    description: "A fully-functioning platform for personal quantitative investment. Build a research model and a portfolio of stock symbols for a bot to trade with. Built upon the Thunderdome Engine.",
    tags: ["React", "Fintech", "Web App"],
    tone: "rose",
    art: "finance",
    repoUrl: ExternalLinks.QUANT_FUSION_SOURCE,
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
    title: "Product engineering",
    detail: "Web and mobile apps, the APIs and data behind them, and the cloud infrastructure that keeps them running — from a blank page to production.",
  },
  {
    title: "Team leadership",
    detail: "Building and managing engineering teams, and shaping efficient, highly collaborative workflows that help them ship with confidence.",
  },
  {
    title: "Team augmentation",
    detail: "A senior engineer embedded in your existing development team, picking up real work from day one.",
  },
];

export const CAPABILITY_TAGS = [
  "Web apps",
  "Mobile apps",
  "APIs",
  "Cloud & DevOps",
  "Team building",
  "Project management",
  "Collaborative workflows",
  "Staff augmentation",
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "Listen",
    text: "We learn your product, your team, and where an extra pair of experienced hands would make the biggest difference.",
  },
  {
    step: "Configure",
    text: "We agree on the right engagement: building, leading, augmenting, or a mix of all three. No retainers or management fees.",
  },
  {
    step: "Deliver",
    text: "We plug in and get to work, sharing working software, healthier workflows, and clear progress early and often.",
  },
  {
    step: "Adapt",
    text: "As your needs change, so does our role. Scale us up, scale us down, or hand things off cleanly when the job is done.",
  },
];

export const INQUIRY_CHECKLIST = [
  "What you’re building, or the problem you’re trying to solve",
  "Where things stand today: an idea, a work in progress, or a live product",
  "The help you’re looking for: building, leading, or augmenting your team",
  "Your timeline, and any constraints we should know about",
];

export const CONTACT_NEXT_STEPS: ProcessStep[] = [
  {
    step: "We reply",
    text: "We read every note and get back to you personally. There’s no sales team in between.",
  },
  {
    step: "We talk it through",
    text: "A short conversation about your goals, your team, and where we can help the most.",
  },
  {
    step: "We configure the engagement",
    text: "You get a clear proposal for the right mix of building, leading, or augmenting. No management fees.",
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
