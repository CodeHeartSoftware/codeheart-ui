/** Builds a `mailto:` href, optionally pre-filling the subject line. */
export const openMailClient = (href: string): void => {
  window.location.assign(href);
};

export const buildMailtoHref = (email: string, subject?: string): string =>
  subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;
