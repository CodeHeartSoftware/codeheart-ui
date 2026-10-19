import Reveal from "@/components/Reveal/Reveal";
import SectionKicker from "@/components/SectionKicker/SectionKicker";
import { HowWeWorkStrings } from "@/constants/strings";
import { cx } from "@/utils/classNames";
import RelayDiagram from "../RelayDiagram/RelayDiagram";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import styles from "./WhySection.module.css";

const WhySection = () => (
  <section className={styles.band}>
    <Reveal from="left" className={cx("shell", styles.section)}>
      <div className={styles.copy}>
        <SectionKicker>{HowWeWorkStrings.why.KICKER}</SectionKicker>
        <SectionTitle className={styles.title}>{HowWeWorkStrings.why.TITLE}</SectionTitle>
        <p>{HowWeWorkStrings.why.PARAGRAPH_ONE}</p>
        <p>{HowWeWorkStrings.why.PARAGRAPH_TWO}</p>
      </div>
      <RelayDiagram className={styles.relay} />
    </Reveal>
  </section>
);

export default WhySection;
