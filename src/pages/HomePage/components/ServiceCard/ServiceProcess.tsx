import type { ServiceProcess as ServiceProcessData } from "@/types/content";
import ServiceStep from "./ServiceStep";
import styles from "./ServiceProcess.module.css";

type ServiceProcessProps = {
  process: ServiceProcessData;
};

const ServiceProcess = ({ process }: ServiceProcessProps) => (
  <div className={styles.process}>
    <span className={styles.label}>{process.label}</span>
    <p className={styles.note}>{process.note}</p>
    <ol className={styles.steps}>
      {process.steps.map((step, index) => (
        <ServiceStep key={step} step={step} index={index} />
      ))}
    </ol>
  </div>
);

export default ServiceProcess;
