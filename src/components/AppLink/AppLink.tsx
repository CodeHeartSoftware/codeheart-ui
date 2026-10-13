import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { Link } from "react-router";
import { isExternalUrl } from "@/utils/externalUrl";
import { getNavigationDirection, setNavigationDirection } from "@/utils/navigationDirection";
import { isSectionHref, scrollToSection } from "@/utils/scroll";

type BaseProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

type AppLinkProps = BaseProps & ({ to: string; href?: never } | { href: string; to?: never });

/**
 * Renders a router `Link` for in-app routes (`to`) and a plain anchor for hashes/mailto (`href`).
 * Route changes run as a view transition (the page slide in index.css), tagged forward or back.
 * In-page `#section` hrefs smooth-scroll via `scrollToSection`; external http(s) hrefs open in a
 * new tab with `noopener noreferrer`.
 */
const AppLink = ({ to, href, children, onClick, ...anchorProps }: AppLinkProps) => {
  if (to !== undefined) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      setNavigationDirection(getNavigationDirection(to));
      onClick?.(event);
    };

    return (
      <Link to={to} viewTransition onClick={handleClick} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const externalProps = isExternalUrl(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (!event.defaultPrevented && isSectionHref(href)) {
      event.preventDefault();
      scrollToSection(href.slice(1));
    }
  };

  return (
    <a href={href} onClick={handleAnchorClick} {...externalProps} {...anchorProps}>
      {children}
    </a>
  );
};

export default AppLink;
