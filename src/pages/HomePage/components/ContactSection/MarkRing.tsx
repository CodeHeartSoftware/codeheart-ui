import { buildRingStyleVars } from "@/utils/ringStyle";
import styles from "./MarkRing.module.css";

type MarkRingProps = {
  index: number;
  count: number;
};

/** One dashed ring around the contact mark. Purely decorative. */
const MarkRing = ({ index, count }: MarkRingProps) => (
  <span className={styles.ring} style={buildRingStyleVars(index, count)} aria-hidden="true" />
);

export default MarkRing;
