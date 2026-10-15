import Reveal from "@/components/Reveal/Reveal";
import SectionKicker from "@/components/SectionKicker/SectionKicker";
import SectionNumber from "@/components/SectionNumber/SectionNumber";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import type { CaseStudySection as CaseStudySectionData } from "@/types/content";
import { cx } from "@/utils/classNames";
import { getRevealDirection } from "@/utils/reveal";
import ArchitectureDiagram from "../ArchitectureDiagram/ArchitectureDiagram";
import CaseStudyPointCard from "../CaseStudyPointCard/CaseStudyPointCard";
import styles from "./CaseStudySection.module.css";

type CaseStudySectionProps = {
  section: CaseStudySectionData;
  index: number;
};

const CaseStudySection = ({ section, index }: CaseStudySectionProps) => (
  <Reveal as="section" from={getRevealDirection(index)} className={cx("shell", styles.section)} id={section.id}>
    <SectionNumber index={index} />
    <div>
      <SectionKicker className={styles.kicker}>{section.kicker}</SectionKicker>
      <SectionTitle className={styles.title}>{section.title}</SectionTitle>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph} className={styles.paragraph}>
          {paragraph}
        </p>
      ))}
      {section.diagram && <ArchitectureDiagram nodes={section.diagram} />}
      {section.points && (
        <div className={styles.points}>
          {section.points.map((point) => (
            <CaseStudyPointCard key={point.title} point={point} />
          ))}
        </div>
      )}
    </div>
  </Reveal>
);

export default CaseStudySection;
