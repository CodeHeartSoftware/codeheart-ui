import PageHeader from "@/components/PageHeader/PageHeader";
import { CASE_STUDIES } from "@/constants/caseStudies";
import { usePageMeta } from "@/hooks/usePageMeta";
import type { CaseStudy } from "@/types/content";
import { getNextCaseStudy } from "@/utils/caseStudy";
import { getRevealDirection } from "@/utils/reveal";
import CaseStudyContact from "./components/CaseStudyContact/CaseStudyContact";
import CaseStudyHero from "./components/CaseStudyHero/CaseStudyHero";
import CaseStudySection from "./components/CaseStudySection/CaseStudySection";
import NextCaseStudy from "./components/NextCaseStudy/NextCaseStudy";
import styles from "./CaseStudyPage.module.css";

type CaseStudyPageProps = {
  caseStudy: CaseStudy;
};

const CaseStudyPage = ({ caseStudy }: CaseStudyPageProps) => {
  usePageMeta(caseStudy.meta);

  return (
    <main className={styles.page}>
      <PageHeader />
      <CaseStudyHero caseStudy={caseStudy} />
      {caseStudy.sections.map((section, index) => (
        <CaseStudySection key={section.id} section={section} index={index} />
      ))}
      {/* The closing blocks continue the sections' left/right alternation. */}
      <NextCaseStudy
        caseStudy={getNextCaseStudy(CASE_STUDIES, caseStudy.id)}
        revealFrom={getRevealDirection(caseStudy.sections.length)}
      />
      <CaseStudyContact revealFrom={getRevealDirection(caseStudy.sections.length + 1)} />
    </main>
  );
};

export default CaseStudyPage;
