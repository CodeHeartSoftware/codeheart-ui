export type ProjectArtType = "finance" | "mobile" | "travel" | "terminal";

export type ProjectTone = "blush" | "rose" | "berry";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  tone: ProjectTone;
  art: ProjectArtType;
  /** Public source code. When set, the project's links open it instead of the contact page. */
  repoUrl?: string;
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
};

export type NavItem = {
  label: string;
  sectionId: string;
};
