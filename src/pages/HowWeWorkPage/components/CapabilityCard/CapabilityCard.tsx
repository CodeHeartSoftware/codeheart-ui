import type { Capability } from "@/types/content";
import { formatIndexNumber } from "@/utils/formatIndexNumber";
import styles from "./CapabilityCard.module.css";

type CapabilityCardProps = {
  capability: Capability;
  index: number;
};

const CapabilityCard = ({ capability, index }: CapabilityCardProps) => (
  <article className={styles.card}>
    <span className={styles.number}>{formatIndexNumber(index)}</span>
    <h3>{capability.title}</h3>
    <p>{capability.detail}</p>
  </article>
);

export default CapabilityCard;
