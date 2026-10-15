import Reveal from "@/components/Reveal/Reveal";
import SectionKicker from "@/components/SectionKicker/SectionKicker";
import { HowWeWorkStrings } from "@/constants/strings";
import { cx } from "@/utils/classNames";
import SectionNumber from "@/components/SectionNumber/SectionNumber";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import styles from "./WhoWeAreSection.module.css";

const WhoWeAreSection = () => (
  <Reveal as="section" from="right" className={cx("shell", styles.section)}>
    <SectionNumber index={0} />
    <div>
      <SectionKicker className={styles.kicker}>{HowWeWorkStrings.whoWeAre.KICKER}</SectionKicker>
      <SectionTitle className={styles.title}>{HowWeWorkStrings.whoWeAre.TITLE}</SectionTitle>
      <div className={styles.columns}>
        <p className={styles.lead}>{HowWeWorkStrings.whoWeAre.LEAD}</p>
        <p>{HowWeWorkStrings.whoWeAre.BODY}</p>
      </div>
    </div>
  </Reveal>
);

export default WhoWeAreSection;
