import { useState } from "react";
import { prefersReducedMotion } from "@/utils/motion";
import { supportsWebGL } from "@/utils/webgl";

/**
 * The 3D badge needs WebGL, and a swinging lanyard is exactly the motion reduced-motion users opt out of,
 * so either one keeps the static portrait. Decided once, on mount.
 */
export function useAboutHero() {
  const [showBadge] = useState(() => supportsWebGL() && !prefersReducedMotion());

  return { showBadge };
}
