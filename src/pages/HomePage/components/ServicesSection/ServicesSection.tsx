import Reveal from "@/components/Reveal/Reveal";
import SectionKicker from "@/components/SectionKicker/SectionKicker";
import { SERVICES } from "@/constants/content";
import { SectionIds } from "@/constants/routes";
import { HomeStrings } from "@/constants/strings";
import { TestIds } from "@/constants/testIds";
import { cx } from "@/utils/classNames";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useServicesSection } from "./useServicesSection";
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  const { activeId, hoverService, leaveStack, selectService } = useServicesSection({ services: SERVICES });

  return (
    <section className={styles.section} id={SectionIds.SERVICES}>
      <Reveal from="left" className={cx("shell", styles.heading)}>
        <div>
          <SectionKicker>{HomeStrings.services.KICKER}</SectionKicker>
          <h2>{HomeStrings.services.TITLE}</h2>
        </div>
        <div className={styles.summary}>
          <p>{HomeStrings.services.SUMMARY}</p>
          <p>{HomeStrings.services.OTHER_WAYS}</p>
          <p className={styles.hint}>{HomeStrings.services.HINT}</p>
        </div>
      </Reveal>
      <Reveal
        from="left"
        delayed
        className={cx("shell", styles.stack)}
        data-testid={TestIds.SERVICE_LIST}
        onPointerLeave={leaveStack}
      >
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            isActive={service.id === activeId}
            onHover={hoverService}
            onSelect={selectService}
          />
        ))}
      </Reveal>
    </section>
  );
};

export default ServicesSection;
