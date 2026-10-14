export type HeroShapeKind = "blobCoral" | "blobBlush" | "blobBerry" | "ring" | "pill" | "square" | "triangle" | "plus" | "dot";

export type HeroShapeConfig = {
  id: string;
  kind: HeroShapeKind;
  /** Position as a percentage of the hero. */
  top: number;
  left: number;
  /** Width in px; the height follows from the kind. */
  size: number;
  /** Starting rotation in degrees. */
  rotate: number;
  /** Parallax strength: max px the shape shifts against the pointer. Bigger reads as closer. */
  depth: number;
  /** Drift loop: px travelled, degrees turned, and seconds per pass. */
  driftX: number;
  driftY: number;
  spin: number;
  duration: number;
  delay: number;
};
