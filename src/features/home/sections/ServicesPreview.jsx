import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { services } from "@/features/services/services";
import styles from "./ServicesPreview.module.scss";

export default function ServicesPreview() {
  return (
    <section className={`section-space ${styles.section}`} id="home-services" aria-labelledby="home-services-title">
      <div className="page-width">
        <Reveal>
          <div className={styles.headingWrap}>
            <SectionHeading
              id="home-services-title"
              eyebrow="What we do"
              title="From first sketch to launch day."
              description="A focused set of design and engineering capabilities to help turn your next idea into a useful, dependable product."
            />
            <Link className={styles.allServices} href="/services">
              Explore services <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </Reveal>
        <div className={styles.grid}>
          {services.slice(0, 3).map((service, index) => (
            <Reveal key={service.name} delay={index * 0.07}>
              <article className={styles.card}>
                <span className={styles.number}>{service.number}</span>
                <span className={styles.mark} aria-hidden="true">{service.mark}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <Link href="/services" aria-label={`Learn more about ${service.name}`}>
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
