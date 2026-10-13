import { HowWeWorkStrings } from "@/constants/strings";
import type { RelayNodeData } from "@/types/content";
import { cx } from "@/utils/classNames";
import { countIntermediaries } from "@/utils/countIntermediaries";
import RelayNode from "./RelayNode";
import styles from "./RelayChain.module.css";

export type RelayTone = "distant" | "direct";

type RelayChainProps = {
  label: string;
  nodes: RelayNodeData[];
  tone: RelayTone;
};

const toneClassNames: Record<RelayTone, string> = {
  distant: styles.distant,
  direct: styles.direct,
};

const RelayChain = ({ label, nodes, tone }: RelayChainProps) => (
  <div className={cx(styles.chain, toneClassNames[tone])}>
    <span className={styles.label}>{label}</span>
    <ol className={styles.nodes}>
      {nodes.map((node, index) => (
        <RelayNode key={node.label} node={node} step={index} tone={tone} />
      ))}
    </ol>
    <span className={styles.summary}>{HowWeWorkStrings.why.peopleInBetween(countIntermediaries(nodes))}</span>
  </div>
);

export default RelayChain;
