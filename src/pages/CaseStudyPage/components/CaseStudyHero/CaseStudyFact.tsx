import type { CaseStudyFact as CaseStudyFactData } from "@/types/content";
import styles from "./CaseStudyFact.module.css";

type CaseStudyFactProps = {
  fact: CaseStudyFactData;
};

const CaseStudyFact = ({ fact }: CaseStudyFactProps) => (
  <div className={styles.fact}>
    <dt>{fact.label}</dt>
    <dd>{fact.value}</dd>
  </div>
);

export default CaseStudyFact;
