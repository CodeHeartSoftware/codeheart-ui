import { CaseStudyStrings } from "@/constants/strings";
import type { DiagramNode } from "@/types/content";
import DiagramStep from "./DiagramStep";
import styles from "./ArchitectureDiagram.module.css";

type ArchitectureDiagramProps = {
  nodes: DiagramNode[];
};

/** A numbered flow of the system's main stages, drawn with HTML so it stays readable and accessible. */
const ArchitectureDiagram = ({ nodes }: ArchitectureDiagramProps) => (
  <figure className={styles.diagram}>
    <figcaption className={styles.caption}>{CaseStudyStrings.DIAGRAM_LABEL}</figcaption>
    <ol className={styles.steps}>
      {nodes.map((node, index) => (
        <DiagramStep key={node.label} node={node} index={index} />
      ))}
    </ol>
  </figure>
);

export default ArchitectureDiagram;
