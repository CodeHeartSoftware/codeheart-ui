export const TestIds = {
  SITE_NAV_MENU_BUTTON: "site-nav-menu-button",
  SITE_NAV_LINKS: "site-nav-links",
  HERO_EXPLORE_BUTTON: "hero-explore-button",
  SHOWCASE_PREVIEW_CTA: "showcase-preview-cta",
  CONTACT_EMAIL_CTA: "contact-email-cta",
  SITE_NAV_CTA: "site-nav-cta",
  PROJECT_LIST: "project-list",
  CAPABILITY_LIST: "capability-list",
  PROCESS_LIST: "process-list",
  SERVICE_LIST: "service-list",
  HERO_PRIMARY_CTA: "hero-primary-cta",
} as const;

export const buildProjectCardTestId = (projectId: string) => `project-card-${projectId}`;

export const buildShowcaseTabTestId = (projectId: string) => `showcase-tab-${projectId}`;

export const buildShowcaseProgressTestId = (projectId: string) => `showcase-progress-${projectId}`;
