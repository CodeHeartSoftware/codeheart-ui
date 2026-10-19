import { lazy, Suspense } from "react";
import BadgeLoader from "../BadgeLoader/BadgeLoader";

type FounderBadgeSlotProps = {
  className?: string;
};

/** Split out, so three.js and the physics engine only download for visitors who will see the badge. */
const FounderBadge = lazy(() => import("../FounderBadge/FounderBadge"));

/** The 3D badge, with a spinner in its place while its code downloads. */
const FounderBadgeSlot = ({ className }: FounderBadgeSlotProps) => (
  <Suspense fallback={<BadgeLoader className={className} />}>
    <FounderBadge className={className} />
  </Suspense>
);

export default FounderBadgeSlot;
