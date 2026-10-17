export type ProjectArtType = "finance" | "mobile" | "travel" | "terminal";

export type ProjectTone = "blush" | "rose" | "berry";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  tone: ProjectTone;
  art: ProjectArtType;
  /** Public source code, linked from the case study (or from the card when there's no case study). */
  repoUrl?: string;
  /** In-app route of the project's case study. When set, the project's links open it first. */
  caseStudyRoute?: string;
};

/** Where a CTA goes: an in-app route (`to`) or a hash/mailto href (`href`). Mirrors AppLink's props. */
export type LinkDestination = { to: string; href?: never } | { href: string; to?: never };

export type ShowcaseItem = {
  id: string;
  title: string;
  description: string;
  tags: readonly string[];
  tone: ProjectTone;
  kicker: string;
  ctaLabel: string;
  destination: LinkDestination;
};

/** One person a request passes through in the "Lean by design" relay diagram. */
export type RelayNodeData = {
  label: string;
  showMark?: boolean;
};

export type LeaderboardEntry = {
  bot: string;
  record: string;
};

export type Capability = {
  title: string;
  detail: string;
};

export type ProcessStep = {
  step: string;
  text: string;
  points?: string[];
};

/** A short, ordered engagement path shown on a service card (e.g. Vibe Code Rescue's diagnostic-first process). */
export type ServiceProcess = {
  label: string;
  note: string;
  steps: string[];
};

/** A defined way to engage CodeHeart, shown in the homepage Services section. */
export type Service = {
  id: string;
  kicker: string;
  title: string;
  headline: string;
  summary: string;
  details: string[];
  idealFor: string;
  ctaLabel: string;
  /** The card open on top of the stack by default. */
  isFeatured?: boolean;
  process?: ServiceProcess;
};

export type PageMeta = {
  title: string;
  description: string;
};

/** How far along a case-study claim is, so planned work is never presented as shipped. */
export type CaseStudyStatus = "implemented" | "inProgress" | "planned";

export type CaseStudyPoint = {
  title: string;
  text: string;
  status?: CaseStudyStatus;
};

/** One stage in a case study's architecture flow diagram. */
export type DiagramNode = {
  label: string;
  detail: string;
};

export type CaseStudySection = {
  id: string;
  kicker: string;
  title: string;
  paragraphs: string[];
  points?: CaseStudyPoint[];
  diagram?: DiagramNode[];
};

export type CaseStudyFact = {
  label: string;
  value: string;
};

/** A public repository linked from the case study hero. */
export type CaseStudyRepo = {
  label: string;
  url: string;
};

export type CaseStudy = {
  id: string;
  route: string;
  meta: PageMeta;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  facts: CaseStudyFact[];
  repos: CaseStudyRepo[];
  sections: CaseStudySection[];
};

export type NavItem = {
  label: string;
  sectionId: string;
};
