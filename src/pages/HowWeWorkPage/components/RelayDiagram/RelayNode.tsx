import type { CSSProperties } from "react";
import LogoMark from "@/components/LogoMark/LogoMark";
import type { RelayNodeData } from "@/types/content";
import { cx } from "@/utils/classNames";
import type { RelayTone } from "./RelayChain";
import styles from "./RelayNode.module.css";

type RelayNodeProps = {
  node: RelayNodeData;
  /** Position in the chain; drives the connector above it and the fade on distant chains. */
  step: number;
  tone: RelayTone;
};

const toneClassNames: Record<RelayTone, string> = {
  distant: styles.distant,
  direct: styles.direct,
};

const NODE_MARK_SIZE = 18;

const RelayNode = ({ node, step, tone }: RelayNodeProps) => (
  <li className={cx(styles.node, toneClassNames[tone])} style={{ "--step": step } as CSSProperties}>
    {node.showMark && <LogoMark size={NODE_MARK_SIZE} />}
    {node.label}
  </li>
);

export default RelayNode;
