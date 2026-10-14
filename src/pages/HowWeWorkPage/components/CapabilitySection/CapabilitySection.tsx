import SectionKicker from "@/components/SectionKicker/SectionKicker";
import TagList from "@/components/TagList/TagList";
import { CAPABILITIES, CAPABILITY_TAGS } from "@/constants/content";
import { HowWeWorkStrings } from "@/constants/strings";
import { TestIds } from "@/constants/testIds";
import { cx } from "@/utils/classNames";
import CapabilityCard from "../CapabilityCard/CapabilityCard";
import SectionNumber from "../SectionNumber/SectionNumber";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./CapabilitySection.module.css";

const CapabilitySection = () => (
  <section className={styles.section}>
    <div className={cx("shell", styles.heading)}>
      <SectionNumber index={1} />
      <div>
        <SectionKicker className={styles.kicker}>{HowWeWorkStrings.capabilities.KICKER}</SectionKicker>
        <SectionTitle className={styles.title}>{HowWeWorkStrings.capabilities.TITLE}</SectionTitle>
        <p className={styles.summary}>{HowWeWorkStrings.capabilities.SUMMARY}</p>
      </div>
    </div>
    <div className={cx("shell", styles.grid)} data-testid={TestIds.CAPABILITY_LIST}>
      {CAPABILITIES.map((capability, index) => (
        <CapabilityCard key={capability.title} capability={capability} index={index} />
      ))}
    </div>
    <TagList
      tags={CAPABILITY_TAGS}
      tone="paper"
      className={cx("shell", styles.tags)}
      ariaLabel={HowWeWorkStrings.capabilities.TAGS_LABEL}
    />
  </section>
);

export default CapabilitySection;
