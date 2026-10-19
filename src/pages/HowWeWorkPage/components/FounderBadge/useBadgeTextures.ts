import { useEffect, useState } from "react";
import { type BadgeTextures, disposeBadgeTextures, loadBadgeTextures } from "./badgeArt";

/** Draws the badge textures once on mount and frees them on unmount. Stays null if drawing fails. */
export function useBadgeTextures() {
  const [textures, setTextures] = useState<BadgeTextures | null>(null);

  useEffect(() => {
    let isMounted = true;
    let loaded: BadgeTextures | null = null;

    loadBadgeTextures()
      .then((result) => {
        loaded = result;
        if (isMounted) setTextures(result);
        else disposeBadgeTextures(result);
      })
      .catch(() => {
        // Leave textures null, so the static portrait stays in place.
      });

    return () => {
      isMounted = false;
      if (loaded) disposeBadgeTextures(loaded);
    };
  }, []);

  return { textures };
}
