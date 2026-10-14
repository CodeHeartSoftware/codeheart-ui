import SectionKicker from "@/components/SectionKicker/SectionKicker";
import { HowWeWorkStrings } from "@/constants/strings";
import { cx } from "@/utils/classNames";
import RelayDiagram from "../RelayDiagram/RelayDiagram";
import SectionNumber from "../SectionNumber/SectionNumber";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./WhySection.module.css";

const WhySection = () => (
  <section className={cx("shell", styles.section)}>
    <SectionNumber index={2} />
    <div className={styles.copy}>
      <SectionKicker className={styles.kicker}>{HowWeWorkStrings.why.KICKER}</SectionKicker>
      <SectionTitle className={styles.title}>{HowWeWorkStrings.why.TITLE}</SectionTitle>
      <p>{HowWeWorkStrings.why.PARAGRAPH_ONE}</p>
      <p>{HowWeWorkStrings.why.PARAGRAPH_TWO}</p>
    </div>
    <RelayDiagram className={styles.relay} />
  </section>
);

export default WhySection;
