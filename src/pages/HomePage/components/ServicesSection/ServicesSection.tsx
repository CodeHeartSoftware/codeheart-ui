import SectionKicker from "@/components/SectionKicker/SectionKicker";
import { SERVICES } from "@/constants/content";
import { SectionIds } from "@/constants/routes";
import { HomeStrings } from "@/constants/strings";
import { TestIds } from "@/constants/testIds";
import { cx } from "@/utils/classNames";
import Reveal from "@/components/Reveal/Reveal";
import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./ServicesSection.module.css";

const ServicesSection = () => (
  <section className={styles.section} id={SectionIds.SERVICES}>
    <Reveal from="left" className={cx("shell", styles.heading)}>
      <div>
        <SectionKicker>{HomeStrings.services.KICKER}</SectionKicker>
        <h2>{HomeStrings.services.TITLE}</h2>
      </div>
      <p>{HomeStrings.services.SUMMARY}</p>
    </Reveal>
    <Reveal from="left" delayed className={cx("shell", "group", styles.grid)} data-testid={TestIds.SERVICE_LIST}>
      {SERVICES.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </Reveal>
  </section>
);

export default ServicesSection;
