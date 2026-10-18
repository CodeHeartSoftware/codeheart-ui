import type { CSSProperties } from "react";

/**
 * CSS custom properties for one ring around the contact mark: its place counting outward (which sets
 * its size and pulse delay) and how faded it is, from 1 at the center to near 0 at the outermost ring.
 */
export const buildRingStyleVars = (index: number, count: number): CSSProperties =>
  ({
    "--ring-index": index,
    "--ring-fade": 1 - index / count,
  }) as CSSProperties;
