import { AGENCY_RELAY, CODEHEART_RELAY } from "@/constants/content";
import { HowWeWorkStrings } from "@/constants/strings";
import { cx } from "@/utils/classNames";
import RelayChain from "./RelayChain";
import styles from "./RelayDiagram.module.css";

type RelayDiagramProps = {
  className?: string;
};

/** Side-by-side: how many people a request passes through at an agency versus at CodeHeart. */
const RelayDiagram = ({ className }: RelayDiagramProps) => (
  <figure className={cx(styles.diagram, className)} aria-label={HowWeWorkStrings.why.RELAY_LABEL}>
    <RelayChain label={HowWeWorkStrings.why.AGENCY_LABEL} nodes={AGENCY_RELAY} tone="distant" />
    <RelayChain label={HowWeWorkStrings.why.CODEHEART_LABEL} nodes={CODEHEART_RELAY} tone="direct" />
  </figure>
);

export default RelayDiagram;
