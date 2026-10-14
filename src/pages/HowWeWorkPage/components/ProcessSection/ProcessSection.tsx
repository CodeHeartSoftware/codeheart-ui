import SectionKicker from "@/components/SectionKicker/SectionKicker";
import { PROCESS_STEPS } from "@/constants/content";
import { HowWeWorkStrings } from "@/constants/strings";
import { TestIds } from "@/constants/testIds";
import { cx } from "@/utils/classNames";
import ProcessStepCard from "../ProcessStepCard/ProcessStepCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./ProcessSection.module.css";

const ProcessSection = () => (
  <section className={styles.section}>
    <div className={cx("shell", styles.heading)}>
      <SectionKicker>{HowWeWorkStrings.process.KICKER}</SectionKicker>
      <SectionTitle className={styles.title}>{HowWeWorkStrings.process.TITLE}</SectionTitle>
    </div>
    <div className={cx("shell", styles.list)} data-testid={TestIds.PROCESS_LIST}>
      {PROCESS_STEPS.map((step, index) => (
        <ProcessStepCard key={step.step} step={step} index={index} />
      ))}
    </div>
  </section>
);

export default ProcessSection;
