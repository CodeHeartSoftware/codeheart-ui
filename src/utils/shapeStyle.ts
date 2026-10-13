import type { CSSProperties } from "react";
import type { HeroShapeConfig } from "@/types/shapes";

/** Converts a backdrop shape's config into the CSS custom properties its stylesheet reads. */
export const buildShapeStyleVars = (shape: HeroShapeConfig): CSSProperties =>
  ({
    "--top": `${shape.top}%`,
    "--left": `${shape.left}%`,
    "--size": shape.size,
    "--rotate": `${shape.rotate}deg`,
    "--depth": shape.depth,
    "--drift-x": `${shape.driftX}px`,
    "--drift-y": `${shape.driftY}px`,
    "--spin": `${shape.spin}deg`,
    "--duration": `${shape.duration}s`,
    "--delay": `${shape.delay}s`,
  }) as CSSProperties;
