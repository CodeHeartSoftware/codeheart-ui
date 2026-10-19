export type PointerPress = { x: number; y: number; time: number };

/** How far, in px, a press can wander and still count as a click rather than a drag. */
const CLICK_SLOP = 6;

/** How long, in ms, a press can last and still count as a click. */
const CLICK_MAX_DURATION = 350;

/** Whether a press and its release were a click (short and nearly still) rather than a drag. */
export const isClick = (press: PointerPress, release: PointerPress): boolean =>
  Math.hypot(release.x - press.x, release.y - press.y) <= CLICK_SLOP &&
  release.time - press.time <= CLICK_MAX_DURATION;
