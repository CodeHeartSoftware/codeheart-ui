import { useCallback, useState } from "react";
import { useBadgeTextures } from "./useBadgeTextures";

/**
 * The badge is ready once its textures are drawn and the physics engine (which loads its WebAssembly
 * asynchronously) has mounted the lanyard. Until then, the static portrait stays on screen.
 */
export function useFounderBadge() {
  const { textures } = useBadgeTextures();
  const [isReady, setIsReady] = useState(false);

  const handleReady = useCallback(() => setIsReady(true), []);

  return { textures, isReady, handleReady };
}
