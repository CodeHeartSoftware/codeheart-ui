import { formatIndexNumber } from "@/utils/formatIndexNumber";
import styles from "./SectionNumber.module.css";

type SectionNumberProps = {
  index: number;
};

const SectionNumber = ({ index }: SectionNumberProps) => (
  <span className={styles.number}>{formatIndexNumber(index)}</span>
);

export default SectionNumber;
