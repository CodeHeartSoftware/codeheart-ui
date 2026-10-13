/** True for absolute http(s) URLs that leave the site. */
export const isExternalUrl = (href: string): boolean => /^https?:\/\//i.test(href);
