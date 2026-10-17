import UnderlineLink from "@/components/UnderlineLink/UnderlineLink";
import { CaseStudyStrings } from "@/constants/strings";
import type { CaseStudyRepo } from "@/types/content";
import styles from "./CaseStudyRepoLinks.module.css";

type CaseStudyRepoLinksProps = {
  repos: CaseStudyRepo[];
};

const CaseStudyRepoLinks = ({ repos }: CaseStudyRepoLinksProps) => (
  <ul className={styles.links} aria-label={CaseStudyStrings.REPOS_LABEL}>
    {repos.map((repo) => (
      <li key={repo.url}>
        <UnderlineLink href={repo.url}>{repo.label}</UnderlineLink>
      </li>
    ))}
  </ul>
);

export default CaseStudyRepoLinks;
