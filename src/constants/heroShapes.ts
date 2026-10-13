import type { HeroShapeConfig } from "@/types/shapes";

/**
 * Layout for the animated hero backdrop. Big soft blobs sit deep (low depth, slow drift);
 * small crisp shapes sit close (high depth) so the pointer parallax reads as 3D.
 */
export const HERO_SHAPES: HeroShapeConfig[] = [
  { id: "blob-coral", kind: "blobCoral", top: 6, left: 56, size: 560, rotate: 0, depth: 24, driftX: 40, driftY: 30, spin: 0, duration: 26, delay: 0 },
  { id: "blob-blush", kind: "blobBlush", top: 58, left: -6, size: 460, rotate: 0, depth: 16, driftX: 30, driftY: -40, spin: 0, duration: 32, delay: -8 },
  { id: "blob-berry", kind: "blobBerry", top: 66, left: 72, size: 320, rotate: 0, depth: 20, driftX: -30, driftY: -25, spin: 0, duration: 28, delay: -4 },
  { id: "ring-large", kind: "ring", top: 12, left: 42, size: 150, rotate: 0, depth: 36, driftX: 18, driftY: 24, spin: 30, duration: 22, delay: -6 },
  { id: "ring-small", kind: "ring", top: 80, left: 36, size: 70, rotate: 0, depth: 52, driftX: -22, driftY: -16, spin: 0, duration: 18, delay: -2 },
  { id: "pill", kind: "pill", top: 26, left: 91, size: 130, rotate: -32, depth: 44, driftX: -16, driftY: 28, spin: 14, duration: 20, delay: -10 },
  { id: "square", kind: "square", top: 84, left: 86, size: 64, rotate: 18, depth: 60, driftX: -20, driftY: -18, spin: 70, duration: 24, delay: -3 },
  { id: "triangle", kind: "triangle", top: 70, left: 50, size: 58, rotate: -12, depth: 64, driftX: 16, driftY: -22, spin: -50, duration: 19, delay: -7 },
  { id: "plus-a", kind: "plus", top: 16, left: 30, size: 24, rotate: 0, depth: 70, driftX: 12, driftY: 14, spin: 90, duration: 16, delay: -5 },
  { id: "plus-b", kind: "plus", top: 52, left: 48, size: 20, rotate: 20, depth: 76, driftX: -14, driftY: 10, spin: -90, duration: 17, delay: -9 },
  { id: "dot-a", kind: "dot", top: 40, left: 55, size: 14, rotate: 0, depth: 80, driftX: 10, driftY: -18, spin: 0, duration: 14, delay: -1 },
  { id: "dot-b", kind: "dot", top: 22, left: 78, size: 10, rotate: 0, depth: 90, driftX: -12, driftY: 12, spin: 0, duration: 12, delay: -6 },
];
