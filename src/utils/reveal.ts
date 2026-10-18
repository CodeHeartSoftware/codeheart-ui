export type RevealDirection = "left" | "right";

/** Sections alternate sides down a page: the first slides in from the right, the next from the left. */
export const getRevealDirection = (index: number): RevealDirection => (index % 2 === 0 ? "right" : "left");

/** Fires once the element’s top has climbed 5% into the viewport, so content is in place by the time it’s read. */
const REVEAL_ROOT_MARGIN = "0px 0px -5% 0px";

/**
 * Calls `onVisible` the first time `element` scrolls into view, then stops watching. Without
 * IntersectionObserver support it calls back immediately so content is never left hidden.
 * Returns a cleanup that disconnects the observer.
 */
export const observeOnce = (element: Element, onVisible: () => void): (() => void) => {
  if (typeof IntersectionObserver === "undefined") {
    onVisible();
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        observer.disconnect();
        onVisible();
      }
    },
    { rootMargin: REVEAL_ROOT_MARGIN },
  );
  observer.observe(element);

  return () => observer.disconnect();
};
