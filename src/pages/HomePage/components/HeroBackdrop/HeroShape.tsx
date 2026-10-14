import type { HeroShapeConfig, HeroShapeKind } from "@/types/shapes";
import { cx } from "@/utils/classNames";
import { buildShapeStyleVars } from "@/utils/shapeStyle";
import styles from "./HeroShape.module.css";

type HeroShapeProps = {
  shape: HeroShapeConfig;
};

const kindClassNames: Record<HeroShapeKind, string> = {
  blobCoral: cx(styles.blob, styles.blobCoral),
  blobBlush: cx(styles.blob, styles.blobBlush),
  blobBerry: cx(styles.blob, styles.blobBerry),
  ring: styles.ring,
  pill: styles.pill,
  square: styles.square,
  triangle: styles.triangle,
  plus: styles.plus,
  dot: styles.dot,
};

const HeroShape = ({ shape }: HeroShapeProps) => (
  <span className={cx(styles.shape, kindClassNames[shape.kind])} style={buildShapeStyleVars(shape)} />
);

export default HeroShape;
