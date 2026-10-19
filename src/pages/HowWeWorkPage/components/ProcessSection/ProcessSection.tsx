import Reveal from "@/components/Reveal/Reveal";
import SectionKicker from "@/components/SectionKicker/SectionKicker";
import { PROCESS_STEPS } from "@/constants/content";
import { HowWeWorkStrings } from "@/constants/strings";
import { TestIds } from "@/constants/testIds";
import { cx } from "@/utils/classNames";
import ProcessStepCard from "../ProcessStepCard/ProcessStepCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import styles from "./ProcessSection.module.css";

const ProcessSection = () => (
  <section className={styles.section}>
    <Reveal from="left" className={cx("shell", styles.heading)}>
      <div>
        <SectionKicker>{HowWeWorkStrings.process.KICKER}</SectionKicker>
        <SectionTitle className={styles.title}>{HowWeWorkStrings.process.TITLE}</SectionTitle>
      </div>
      <p className={styles.summary}>{HowWeWorkStrings.process.SUMMARY}</p>
    </Reveal>
    <Reveal from="left" delayed>
      <div className={cx("shell", styles.list)} data-testid={TestIds.PROCESS_LIST}>
        {PROCESS_STEPS.map((step, index) => (
          <ProcessStepCard key={step.step} step={step} index={index} />
        ))}
      </div>
      <p className={cx("shell", styles.note)}>{HowWeWorkStrings.process.NOTE}</p>
    </Reveal>
  </section>
);

export default ProcessSection;
