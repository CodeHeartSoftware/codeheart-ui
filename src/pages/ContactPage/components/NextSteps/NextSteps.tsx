import Reveal from "@/components/Reveal/Reveal";
import SectionKicker from "@/components/SectionKicker/SectionKicker";
import { CONTACT_NEXT_STEPS } from "@/constants/content";
import { ContactStrings } from "@/constants/strings";
import NextStepItem from "./NextStepItem";
import styles from "./NextSteps.module.css";

const NextSteps = () => (
  <Reveal as="section" from="right" delayed>
    <SectionKicker>{ContactStrings.nextSteps.KICKER}</SectionKicker>
    <h2 className={styles.title}>{ContactStrings.nextSteps.TITLE}</h2>
    <ol className={styles.list}>
      {CONTACT_NEXT_STEPS.map((step, index) => (
        <NextStepItem key={step.step} step={step} index={index} />
      ))}
    </ol>
  </Reveal>
);

export default NextSteps;
